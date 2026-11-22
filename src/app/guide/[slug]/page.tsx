import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { asset } from '@/lib/asset';
import { guideArticles, guideBySlug, guidePath } from '@/lib/guide';
import { guideImages, guidePlans, imageLabel } from '@/lib/guide/images';
import { sources, type GuideImage } from '@/lib/guide/model';
import { articleJsonLd, guideMetadata } from '@/lib/guide/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return guideArticles.map(({ slug }) => ({ slug }));
}

async function getArticle(params: Props['params']) {
    const { slug } = await params;
    const article = guideBySlug.get(slug);
    if (!article) notFound();
    return article;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = await getArticle(params);
    return guideMetadata(
        guidePath(article.slug),
        article.title,
        article.description,
        guideImages[article.slug] ?? guidePlans[article.slug],
        'article'
    );
}

function ArticleImage({ image }: { image: GuideImage }) {
    const src = asset(image.path);
    const plan = image.kind === 'plan';
    const media = <img src={src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />;

    return (
        <figure className={plan ? 'guide-figure guide-plan' : 'guide-figure'}>
            {plan ? <a href={src} aria-label="Открыть исходную схему в полном размере">{media}</a> : media}
            <figcaption>
                <span>{imageLabel[image.kind]}</span>
                <a href={sources[image.source].url}>{sources[image.source].name}</a>
            </figcaption>
        </figure>
    );
}

export default async function ArticlePage({ params }: Props) {
    const article = await getArticle(params);
    const image = guideImages[article.slug];
    const plan = guidePlans[article.slug];
    const details = article.homeSection
        ? ({ '#apartments': 'Квартиры проекта', '#architecture': 'Архитектура проекта', '#infrastructure': 'Инфраструктура проекта', '#location': 'Расположение комплекса' } as const)[article.homeSection]
        : null;
    const json = articleJsonLd(article, image ?? plan);

    return (
        <main id="guide-main">
            <article className="container guide-article">
                <nav className="guide-crumbs" aria-label="Путь к странице">
                    <Link href="/">Главная</Link>
                    <Link href="/guide">Гид покупателя</Link>
                    <span aria-current="page">{article.title}</span>
                </nav>
                <header className="guide-article-header">
                    <Link className="guide-category" href={`/guide#${article.group.id}`}>{article.group.title}</Link>
                    <h1>{article.title}</h1>
                    <p className="guide-lead">{article.lead}</p>
                </header>
                {image && <ArticleImage image={image} />}
                <div className="guide-column">
                    {article.sections.map((section, index) => (
                        <section className="guide-paragraph" key={section.title}>
                            <h2>{section.title}</h2>
                            <p>{section.text}</p>
                            {index === 0 && plan && <ArticleImage image={plan} />}
                        </section>
                    ))}
                    <section className="guide-checklist">
                        <h2>Что проверить</h2>
                        <ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
                    </section>
                    <div className="guide-actions">
                        <Link className="button button-blue" href="/#contact">Связаться с отделом продаж</Link>
                        {article.homeSection && details && <Link className="text-link" href={`/${article.homeSection}`}>{details}</Link>}
                    </div>
                    <section className="guide-sources">
                        <h2>Источники</h2>
                        <ul>{article.sources.map((id) => <li key={id}><a href={sources[id].url}>{sources[id].name}</a></li>)}</ul>
                    </section>
                </div>
                <section className="guide-related">
                    <h2>Читайте также</h2>
                    <ul className="guide-grid">
                        {article.related.map((slug) => {
                            const related = guideBySlug.get(slug);
                            if (!related) return null;
                            return <li key={slug}><Link className="guide-card" href={guidePath(slug)}><div className="guide-card-copy"><h3>{related.title}</h3></div></Link></li>;
                        })}
                    </ul>
                </section>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, '\\u003c') }} />
            </article>
        </main>
    );
}
