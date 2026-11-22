import { area } from './area';
import { buying } from './buying';
import { formats } from './formats';
import { infrastructure } from './infrastructure';

export const guideGroups = [
    { id: 'pokupka', title: 'Покупка и документы', articles: buying },
    { id: 'kvartiry', title: 'Планировки и отделка', articles: formats },
    { id: 'infrastruktura', title: 'Территория и сервис', articles: infrastructure },
    { id: 'rayon', title: 'Район и маршруты', articles: area }
] as const;

export const guideArticles = guideGroups.flatMap((group) => group.articles);
export const guideBySlug = new Map(guideGroups.flatMap((group) =>
    group.articles.map((article) => [article.slug, { ...article, group: { id: group.id, title: group.title } }] as const)
));
export const guidePath = (slug: string) => `/guide/${slug}`;
