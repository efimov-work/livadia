import { cp, mkdir, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const temporary = await mkdtemp(path.join(tmpdir(), 'livadia-export-'));
const target = path.join(temporary, 'app');
try {
    await mkdir(target);
    for (const file of ['package.json', 'package-lock.json', 'tsconfig.json', 'next.config.mjs', 'public', 'src']) {
        await cp(path.join(root, file), path.join(target, file), { recursive: true });
    }
    await symlink(path.join(root, 'node_modules'), path.join(target, 'node_modules'), 'dir');
    const result = spawnSync(process.execPath, [path.join(root, 'node_modules/next/dist/bin/next'), 'build', '--webpack'], {
        cwd: target,
        stdio: 'inherit',
        env: {
            ...process.env,
            STATIC_EXPORT: '1',
            NEXT_TELEMETRY_DISABLED: '1'
        }
    });
    if (result.status !== 0) throw new Error('Static build failed');
    await rm(path.join(root, 'out'), { recursive: true, force: true });
    await cp(path.join(target, 'out'), path.join(root, 'out'), { recursive: true });
    await writeFile(path.join(root, 'out/.nojekyll'), '');
    console.log('Static site ready: out/');
} finally {
    await rm(temporary, { recursive: true, force: true });
}
