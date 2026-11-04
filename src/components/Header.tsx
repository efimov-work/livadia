'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACTS, NAV } from '@/lib/content';

export default function Header() {
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    const menu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.classList.toggle('menu-locked', open);
        if (open) menu.current?.querySelector('a')?.focus();
        return () => document.body.classList.remove('menu-locked');
    }, [open]);

    useEffect(() => {
        const media = matchMedia('(min-width: 1001px)');
        const close = () => media.matches && setOpen(false);
        media.addEventListener('change', close);
        return () => media.removeEventListener('change', close);
    }, []);

    function onKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Escape' && open) {
            setOpen(false);
            toggle.current?.focus();
        }
    }

    return (
        <div className="header-shell" onKeyDown={onKeyDown}>
            <header className="header" id="header">
                <a className="brand" href="#top" aria-label="Новая Ливадия, на главную">
                    <svg viewBox="0 0 36 36" aria-hidden="true">
                        <path d="M5 29V7h4l18 15V7h4v22h-3L9 14v15z" />
                    </svg>
                    <span>Новая Ливадия</span>
                </a>
                <nav className="desktop-nav" aria-label="Основная навигация">
                    {NAV.map((item) => (
                        <a key={item.href} href={item.href}>{item.label}</a>
                    ))}
                </nav>
                <a className="header-phone" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                <button
                    ref={toggle}
                    className="menu-toggle"
                    aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    <span />
                    <span />
                </button>
            </header>
            <div className="scroll-line" aria-hidden="true" />
            <div ref={menu} className="mobile-menu" id="mobile-menu" hidden={!open}>
                <nav aria-label="Мобильная навигация">
                    {NAV.map((item, index) => (
                        <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                            <span>0{index + 1}</span>{item.label}
                        </a>
                    ))}
                </nav>
                <div className="mobile-menu-bottom">
                    <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                    <button data-request="Запись на просмотр">Записаться на просмотр</button>
                </div>
            </div>
        </div>
    );
}
