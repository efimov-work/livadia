import { CLEAN_PARAMS, NOINDEX, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const RULES = NOINDEX ? ['Disallow: /'] : ['Allow: /'];

export function GET() {
    const body = [
        'User-agent: *',
        ...RULES,
        '',
        'User-agent: Yandex',
        ...RULES,
        `Clean-param: ${CLEAN_PARAMS.join('&')}`,
        '',
        `Sitemap: ${siteUrl()}/sitemap.xml`,
        ''
    ].join('\n');
    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
