import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'out');
const htmlPath = resolve(out, 'index.html');
const html = existsSync(htmlPath) ? readFileSync(htmlPath, 'utf8') : '';

test('static export contains the complete page and SEO', () => {
    assert.ok(html.length > 10000, 'Run npm run export before tests');
    assert.match(html, /<h1[^>]*>[\s\S]*Новая Ливадия[\s\S]*<\/h1>/);
    assert.match(html, /id="architecture"/);
    assert.match(html, /id="infrastructure"/);
    assert.match(html, /id="apartments"/);
    assert.match(html, /id="location"/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /canonical/);
    assert.ok(existsSync(resolve(out, 'sitemap.xml')));
    assert.ok(existsSync(resolve(out, 'robots.txt')));
    assert.ok(existsSync(resolve(out, 'manifest.webmanifest')));
});

test('all local images referenced by the page exist', () => {
    const sources = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
    const images = sources.filter((source) => /\.(?:webp|jpg|png|svg)$/.test(source));
    assert.ok(images.length >= 12);
    for (const source of images) {
        const local = source.replace(/^\/livadia/, '').replace(/^\//, '');
        assert.ok(existsSync(resolve(out, local)), `Missing ${source}`);
    }
});

test('content avoids em dashes and includes current presentation data', () => {
    assert.doesNotMatch(html, /—/);
    assert.match(html, /8 800 533 87 52/);
    assert.match(html, /24,79 до 25,06/);
    assert.match(html, /90,29 до 147,29/);
    assert.match(html, /2028/);
    assert.match(html, /info@newlivadia.ru/);
});
