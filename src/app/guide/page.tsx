import Link from 'next/link';
import { asset } from '@/lib/asset';
import { guideGroups, guidePath } from '@/lib/guide';
import { guideImages, guideOpening } from '@/lib/guide/images';
import { sources } from '@/lib/guide/model';
import { GUIDE_DESCRIPTION, GUIDE_TITLE, guideMetadata, guideUrl } from '@/lib/guide/seo';

export const metadata = guideMetadata('/guide', GUIDE_TITLE, GUIDE_DESCRIPTION, guideOpening);

export default function GuidePage() {
    const webpage = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${guideUrl('/guide')}#webpage`,
        url: guideUrl('/guide'),
        name: GUIDE_TITLE,
        description: GUIDE_DESCRIPTION,
        inLanguage: 'ru-RU'
    };

    return (
        <main id="guide-main">
            <section className="guide-overview">
                <div className="container guide-overview-grid">
                    <div>
                        <nav className="guide-crumbs" aria-label="Путь к странице">
                            <Link href="/">Главная</Link><span aria-current="page">Гид покупателя</span>
                        </nav>
                        <h1>{GUIDE_TITLE}</h1>
                        <p className="guide-lead">{GUIDE_DESCRIPTION}</p>
                    </div>
                    <figure className="guide-opening-photo">
                        <img src={asset(guideOpening.path)} alt={guideOpening.alt} width={guideOpening.width} height={guideOpening.height} fetchPriority="high" />
                        <figcaption><a href={sources[guideOpening.source].url}>Визуализация проекта</a></figcaption>
                    </figure>
                </div>
            </section>
            <nav className="guide-jumps container" aria-label="Разделы гида">
                {guideGroups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.title}</a>)}
            </nav>
            <div className="container guide-groups">
                {guideGroups.map((group) => (
                    <section key={group.id} id={group.id} className="guide-group" aria-labelledby={`guide-${group.id}`}>
                        <h2 id={`guide-${group.id}`}>{group.title}</h2>
                        <ul className="guide-grid">
                            {group.articles.map((article) => {
                                const image = guideImages[article.slug];
                                return (
                                    <li key={article.slug}>
                                        <Link className="guide-card" href={guidePath(article.slug)}>
                                            {image && <img src={asset(image.path)} width={image.width} height={image.height} alt="" loading="lazy" decoding="async" />}
                                            <div className="guide-card-copy">
                                                <h3>{article.title}</h3>
                                                <p>{article.description}</p>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage).replace(/</g, '\\u003c') }} />
        </main>
    );
}
