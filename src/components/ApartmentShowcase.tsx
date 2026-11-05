'use client';

import { useRef, useState } from 'react';
import { asset } from '@/lib/asset';
import { APARTMENTS } from '@/lib/content';

export default function ApartmentShowcase() {
    const [active, setActive] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const item = APARTMENTS[active];

    function select(index: number) {
        setActive(index);
    }

    function onKeyDown(event: React.KeyboardEvent) {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home'
            ? 0
            : event.key === 'End'
                ? APARTMENTS.length - 1
                : (active + (event.key === 'ArrowRight' ? 1 : -1) + APARTMENTS.length) % APARTMENTS.length;
        select(next);
        tabs.current[next]?.focus();
    }

    return (
        <section className="apartments section" id="apartments" aria-labelledby="apartments-title">
            <div className="container apartments-head">
                <div data-reveal="mask">
                    <p className="eyebrow">Планировочные решения</p>
                    <h2 id="apartments-title">Пространство<br />для вашей жизни</h2>
                </div>
                <p data-reveal>От компактных студий для отдыха до семейных резиденций с просторными террасами.</p>
            </div>
            <div className="container apartment-tabs" role="tablist" aria-label="Типы квартир" onKeyDown={onKeyDown} data-reveal>
                {APARTMENTS.map((entry, index) => (
                    <button
                        key={entry.title}
                        ref={(node) => { tabs.current[index] = node; }}
                        id={`apartment-tab-${index}`}
                        role="tab"
                        aria-selected={active === index}
                        aria-controls="apartment-panel"
                        tabIndex={active === index ? 0 : -1}
                        onClick={() => select(index)}
                    >
                        <span>0{index + 1}</span><span className="apartment-tab-label">{entry.title}<small>{entry.size}</small></span>
                    </button>
                ))}
            </div>
            <div className="apartment-stage" id="apartment-panel" role="tabpanel" aria-labelledby={`apartment-tab-${active}`} key={active}>
                <div className="apartment-plan">
                    <div className="plan-image"><img src={asset(item.plan)} alt={`Планировка: ${item.title.toLowerCase()}, ${item.size}`} /></div>
                    <div className="plan-info">
                        <p className="eyebrow">{item.title}</p>
                        <p className="apartment-size">{item.size}</p>
                        <p>{item.text}</p>
                        <button className="text-link" data-request={`Подбор: ${item.title}`}>Узнать о доступных <span aria-hidden="true">↗</span></button>
                    </div>
                    <div className="apartment-nav">
                        <button aria-label="Предыдущая планировка" onClick={() => select((active - 1 + APARTMENTS.length) % APARTMENTS.length)}>←</button>
                        <span>{String(active + 1).padStart(2, '0')} / {String(APARTMENTS.length).padStart(2, '0')}</span>
                        <button aria-label="Следующая планировка" onClick={() => select((active + 1) % APARTMENTS.length)}>→</button>
                    </div>
                </div>
                <div className="apartment-interior">
                    <img src={asset(item.image)} alt={item.alt} loading="lazy" />
                    <span>Визуализация интерьера</span>
                </div>
            </div>
            <div className="container apartment-bottom" data-reveal>
                <p>В продаже также представлены квартиры площадью до 443 м², семейные резиденции и уникальные форматы с террасами.</p>
                <button className="button button-blue" data-request="Каталог планировок">Получить каталог планировок <span aria-hidden="true">↗</span></button>
            </div>
        </section>
    );
}
