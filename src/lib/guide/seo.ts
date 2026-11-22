import type { Metadata } from 'next';
import { absolute, SITE_NAME, siteUrl } from '../seo';
import type { GuideArticle, GuideImage } from './model';
import { guidePath } from './index';

export const GUIDE_TITLE = 'Гид покупателя «Новой Ливадии»';
export const GUIDE_DESCRIPTION = 'Как выбрать квартиру в «Новой Ливадии». Планировки, документы, сроки по корпусам, инфраструктура и маршруты в Большой Ялте.';

export function guideUrl(path: string): string {
    return absolute(process.env.STATIC_EXPORT === '1' ? `${path}/` : path);
}

export function guideMetadata(path: string, title: string, description: string, image?: GuideImage, type: 'website' | 'article' = 'website'): Metadata {
    const url = guideUrl(path);
    const images = image ? [{ url: absolute(image.path), alt: image.alt }] : [];
    return {
        title: { absolute: title },
        description,
        keywords: null,
        alternates: { canonical: url },
        openGraph: { type, locale: 'ru_RU', url, siteName: SITE_NAME, title, description, images },
        twitter: { card: image ? 'summary_large_image' : 'summary', title, description, images }
    };
}

export function articleJsonLd(article: GuideArticle, image?: GuideImage): Record<string, unknown> {
    const url = guideUrl(guidePath(article.slug));
    const home = `${siteUrl()}/`;
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                '@id': `${url}#article`,
                headline: article.title,
                description: article.description,
                inLanguage: 'ru-RU',
                mainEntityOfPage: url,
                isPartOf: { '@id': `${guideUrl('/guide')}#webpage` },
                about: { '@id': `${home}#complex` },
                ...(image && { image: absolute(image.path) })
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: SITE_NAME, item: home },
                    { '@type': 'ListItem', position: 2, name: 'Гид покупателя', item: guideUrl('/guide') },
                    { '@type': 'ListItem', position: 3, name: article.title, item: url }
                ]
            }
        ]
    };
}
