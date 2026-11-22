import type { MetadataRoute } from 'next';
import { guideArticles, guidePath } from '@/lib/guide';
import { guideImages, guideOpening, guidePlans } from '@/lib/guide/images';
import { guideUrl } from '@/lib/guide/seo';
import { absolute, pageImages, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';
const BUILT_AT = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${siteUrl()}/`,
            lastModified: BUILT_AT,
            changeFrequency: 'monthly',
            priority: 1,
            images: pageImages().map((image) => image.url)
        },
        { url: guideUrl('/guide'), images: [absolute(guideOpening.path)] },
        ...guideArticles.map((article) => {
            const image = guideImages[article.slug] ?? guidePlans[article.slug];
            return { url: guideUrl(guidePath(article.slug)), ...(image && { images: [absolute(image.path)] }) };
        })
    ];
}
