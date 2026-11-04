import { asset, BASE_PATH } from './asset';
import { CONTACTS } from './content';

export const SITE_NAME = 'Новая Ливадия';
export const TITLE = 'Новая Ливадия: сити-курорт в Ялте с видами на море и горы';
export const DESCRIPTION =
    'Премиальный сити-курорт Новая Ливадия в Ялте. Квартиры с видами на море и горы, ландшафтный парк, собственные пляжи, спа и курортный сервис.';
export const KEYWORDS = [
    'Новая Ливадия',
    'жилой комплекс Ялта',
    'квартиры в Ялте',
    'недвижимость у моря в Крыму',
    'сити-курорт Новая Ливадия',
    'Таврида Девелопмент'
];
export const YANDEX_VERIFICATION = process.env.YANDEX_VERIFICATION || undefined;
export const GOOGLE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || undefined;
export const CLEAN_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'yclid', 'gclid', 'fbclid'];

function configuredOrigin(): string | null {
    try {
        const url = new URL((process.env.NEXT_PUBLIC_SITE_URL || '').trim());
        return ['http:', 'https:'].includes(url.protocol) ? url.origin : null;
    } catch {
        return null;
    }
}

export const NOINDEX = process.env.SITE_NOINDEX === '1' || !configuredOrigin();
export function siteOrigin(): string {
    return configuredOrigin() || 'http://localhost:3000';
}
export function siteUrl(): string {
    return `${siteOrigin()}${BASE_PATH}`;
}
export function absolute(path: string): string {
    return `${siteOrigin()}${asset(path)}`;
}
export function pageImages() {
    return [
        ['/assets/images/hero.webp', 'Сити-курорт Новая Ливадия на фоне моря и заката'],
        ['/assets/images/complex-day.webp', 'Жилые корпуса среди зелени'],
        ['/assets/images/park.webp', 'Ландшафтный парк комплекса'],
        ['/assets/images/pool.webp', 'Инфинити-бассейн с видом на море']
    ].map(([url, caption]) => ({ url: absolute(url), caption }));
}

export function buildJsonLd(): Record<string, unknown> {
    const url = `${siteUrl()}/`;
    const complex = `${url}#complex`;
    return {
        '@context': 'https://schema.org',
        '@graph': [
            { '@type': 'WebSite', '@id': `${url}#website`, url, name: SITE_NAME, inLanguage: 'ru-RU' },
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: TITLE,
                description: DESCRIPTION,
                inLanguage: 'ru-RU',
                isPartOf: { '@id': `${url}#website` },
                about: { '@id': complex },
                primaryImageOfPage: { '@type': 'ImageObject', url: absolute('/assets/images/hero.webp') }
            },
            {
                '@type': 'ApartmentComplex',
                '@id': complex,
                name: SITE_NAME,
                description: DESCRIPTION,
                url,
                telephone: '+7 800 533-87-52',
                email: CONTACTS.email,
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'RU',
                    addressRegion: 'Республика Крым',
                    addressLocality: 'Ялта, пгт. Виноградное',
                    streetAddress: 'ул. Объездная дорога, 6'
                },
                image: pageImages().map((item) => item.url)
            },
            {
                '@type': 'Organization',
                '@id': `${url}#developer`,
                name: 'ГК Таврида Девелопмент',
                url: 'https://tavrida-development.ru/'
            }
        ]
    };
}
