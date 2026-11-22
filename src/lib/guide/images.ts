import type { GuideImage } from './model';

function cover(name: string, alt: string, kind: GuideImage['kind'], source: GuideImage['source'], width: number, height: number): GuideImage {
    return { path: `/assets/guide/${name}.webp`, alt, kind, source, width, height };
}

export const guideOpening = cover('guide-opening', 'Вечерняя визуализация жилых корпусов «Новой Ливадии»', 'render', 'project', 985, 513);

export const guideImages: Partial<Record<string, GuideImage>> = {
    adres: cover('adres', 'Визуализация размещения корпусов на склоне в Виноградном', 'render', 'project', 960, 720),
    arhitektura: cover('arhitektura', 'Визуализация фасадов и вечерней подсветки корпусов', 'render', 'project', 985, 513),
    'landshaftnyy-park': cover('landshaftnyy-park', 'Визуализация озеленения и пешеходной зоны у корпусов', 'render', 'project', 1380, 738),
    terrasa: cover('terrasa', 'Визуализация озеленённой террасы с выходами из помещений', 'render', 'project', 960, 543),
    servis: cover('servis', 'Визуализация мягкой зоны лобби', 'render', 'project', 1000, 700),
    parking: cover('parking', 'Визуализация проезда подземного паркинга', 'render', 'project', 1000, 700),
    'livadiyskiy-dvorec': cover('livadiyskiy-dvorec', 'Ливадийский дворец и сад перед ним', 'photo', 'project', 960, 642),
    vinogradnoe: cover('vinogradnoe', 'Панорама гор и побережья в окрестностях Большой Ялты', 'photo', 'project', 800, 800),
    'do-morya': cover('do-morya', 'Бухта и береговая застройка Большой Ялты', 'photo', 'project', 350, 350),
    'basseyn-spa': cover('basseyn-spa', 'Визуализация открытого инфинити-бассейна с зоной отдыха', 'render', 'presentation', 1380, 777),
    's-detmi': cover('s-detmi', 'Визуализация детской зоны на территории комплекса', 'render', 'presentation', 1380, 778),
    plyazhi: cover('plyazhi', 'Пляжная зона с шезлонгами и зонтиками в презентации проекта', 'photo', 'presentation', 1144, 1000)
};

export const guidePlans: Partial<Record<string, GuideImage>> = {
    studiya: { path: '/assets/images/plan-studio.webp', alt: 'Исходная схема студии', source: 'presentation', kind: 'plan', width: 2433, height: 1247 },
    odnokomnatnaya: { path: '/assets/images/plan-one-bedroom.webp', alt: 'Исходная схема однокомнатной квартиры', source: 'presentation', kind: 'plan', width: 1371, height: 861 },
    dvuhkomnatnaya: { path: '/assets/images/plan-two-bedroom.webp', alt: 'Исходная схема двухкомнатной квартиры', source: 'presentation', kind: 'plan', width: 1290, height: 861 },
    trehkomnatnaya: { path: '/assets/images/plan-three-bedroom.webp', alt: 'Исходная схема трёхкомнатной квартиры', source: 'presentation', kind: 'plan', width: 1629, height: 861 }
};

export const imageLabel = { render: 'Визуализация', photo: 'Фото', plan: 'Исходная схема' } as const;
