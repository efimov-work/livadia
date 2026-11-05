'use client';

import { useRef, useState } from 'react';
import { asset } from '@/lib/asset';
import { INFRASTRUCTURE } from '@/lib/content';

export default function Infrastructure() {
    const [active, setActive] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const item = INFRASTRUCTURE[active];

    function onKeyDown(event: React.KeyboardEvent) {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home'
            ? 0
            : event.key === 'End'
                ? INFRASTRUCTURE.length - 1
                : (active + (event.key === 'ArrowRight' ? 1 : -1) + INFRASTRUCTURE.length) % INFRASTRUCTURE.length;
        setActive(next);
        tabs.current[next]?.focus();
    }

    return (
        <section className="infrastructure section" id="infrastructure" aria-labelledby="infrastructure-title">
            <div className="container infrastructure-head">
                <div data-reveal="mask">
                    <p className="eyebrow">Благоустройство и сервис</p>
                    <h2 id="infrastructure-title">Курортный ритм<br />круглый год</h2>
                </div>
                <p data-reveal>Инфраструктура для восстановления, семейных дней и встреч с друзьями. Не покидая территорию.</p>
            </div>
            <div className="infra-panel" id="infra-panel" role="tabpanel" aria-labelledby={`infra-tab-${active}`} key={active}>
                <img src={asset(item.image)} alt={item.alt} loading="eager" decoding="async" />
                <div className="infra-shade" />
                <div className="container infra-inner">
                    <div className="infra-copy">
                        <p className="eyebrow eyebrow-light">{item.eyebrow}</p>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                    <div className="infra-nav">
                        <button aria-label="Предыдущий раздел" onClick={() => setActive((active - 1 + INFRASTRUCTURE.length) % INFRASTRUCTURE.length)}>←</button>
                        <span>{String(active + 1).padStart(2, '0')} / {String(INFRASTRUCTURE.length).padStart(2, '0')}</span>
                        <button aria-label="Следующий раздел" onClick={() => setActive((active + 1) % INFRASTRUCTURE.length)}>→</button>
                    </div>
                </div>
            </div>
            <div className="container infra-tabs" role="tablist" aria-label="Инфраструктура комплекса" onKeyDown={onKeyDown} data-reveal>
                {INFRASTRUCTURE.map((entry, index) => (
                    <button
                        key={entry.title}
                        ref={(node) => { tabs.current[index] = node; }}
                        id={`infra-tab-${index}`}
                        role="tab"
                        aria-selected={active === index}
                        aria-controls="infra-panel"
                        tabIndex={active === index ? 0 : -1}
                        onClick={() => setActive(index)}
                    >
                        <span>0{index + 1}</span>{entry.title}
                    </button>
                ))}
            </div>
        </section>
    );
}
