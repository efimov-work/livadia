export const sources = {
    project: { name: 'Официальный сайт «Новой Ливадии»', url: 'https://newlivadia.ru/' },
    developer: { name: 'Проект в портфолио «Таврида Девелопмент»', url: 'https://tavrida-development.ru/new_livadia/' },
    catalog: { name: 'Каталог квартир проекта', url: 'https://newlivadia.ru/realty' },
    purchase: { name: 'Способы покупки в «Новой Ливадии»', url: 'https://newlivadia.ru/purchase' },
    documents: { name: 'Документы застройщика', url: 'https://newlivadia.ru/documents' },
    progress: { name: 'Официальные фото строительства', url: 'https://newlivadia.ru/progress' },
    firstStage: { name: 'Карточка объекта 50468 на наш.дом.рф', url: 'https://наш.дом.рф/сервисы/каталог-новостроек/объект/50468' },
    secondStage: { name: 'Карточка объекта 60791 на наш.дом.рф', url: 'https://наш.дом.рф/сервисы/каталог-новостроек/объект/60791' },
    firstCheck: { name: 'История изменений для объекта 50468', url: 'https://наш.дом.рф/проверка-новостроек/жилой-комплекс-новая-ливадия-50468/' },
    secondCheck: { name: 'История изменений для объекта 60791', url: 'https://наш.дом.рф/проверка-новостроек/жилой-комплекс-новая-ливадия-60791/' },
    presentation: { name: 'Презентация «Новой Ливадии»', url: 'https://newlivadia.ru/static/docs/presentation_Novaya_Livadia.pdf' },
    parking: { name: 'Каталог машиномест и кладовых', url: 'https://newlivadia.ru/parking' },
    services: { name: 'Сервисы для резидентов', url: 'https://newlivadia.ru/services' },
    palace: { name: 'Ливадийский дворец-музей', url: 'https://ливадийский-дворец.рф/contacts' },
    travel: { name: 'Туристический портал Крыма о маршрутах к дворцам', url: 'https://travelcrimea.com/kultura/20260804/4170912.html' }
} as const;

export type SourceId = keyof typeof sources;

export type GuideArticle = {
    slug: string;
    title: string;
    description: string;
    lead: string;
    sections: readonly { title: string; text: string }[];
    checklist: readonly string[];
    sources: readonly SourceId[];
    related: readonly string[];
    homeSection?: '#apartments' | '#architecture' | '#infrastructure' | '#location';
};

export type GuideImage = {
    path: string;
    alt: string;
    source: SourceId;
    kind: 'render' | 'photo' | 'plan';
    width: number;
    height: number;
};
