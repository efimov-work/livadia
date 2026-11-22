'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/asset';
import { CONTACTS, NAV } from '@/lib/content';

export default function Header({ guide = false }: { guide?: boolean }) {
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    const menu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.classList.toggle('menu-locked', open);
        if (open) menu.current?.querySelector('a')?.focus();
        return () => document.body.classList.remove('menu-locked');
    }, [open]);

    useEffect(() => {
        const media = matchMedia('(min-width: 1101px)');
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
                <Link className="brand" href={guide ? '/' : '#top'} aria-label="Новая Ливадия, на главную">
                    <img src={asset('/assets/brand/livadia-logo.svg')} alt="" width="356" height="65" />
                </Link>
                <nav className="desktop-nav" aria-label="Основная навигация">
                    {guide && <Link href="/">Главная</Link>}
                    {NAV.map((item) => guide
                        ? <Link key={item.href} href={`/${item.href}`}>{item.label}</Link>
                        : <a key={item.href} href={item.href}>{item.label}</a>)}
                    <Link href="/guide" className="guide-nav-link" aria-current={guide ? 'location' : undefined}>Гид покупателя</Link>
                </nav>
                <a className="header-phone" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                {guide
                    ? <Link className="header-cta" href="/#contact">Подобрать квартиру</Link>
                    : <button className="header-cta" data-request="Подбор квартиры">Подобрать квартиру</button>}
                <button
                    ref={toggle}
                    className="menu-toggle"
                    aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    <span /><span />
                </button>
            </header>
            <div className="scroll-line" aria-hidden="true" />
            <div ref={menu} className="mobile-menu" id="mobile-menu" hidden={!open}>
                <nav aria-label="Мобильная навигация">
                    {guide && <Link href="/" onClick={() => setOpen(false)}>Главная</Link>}
                    {NAV.map((item, index) => guide
                        ? <Link key={item.href} href={`/${item.href}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>
                        : <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
                    <Link href="/guide" aria-current={guide ? 'location' : undefined} onClick={() => setOpen(false)}><span>0{NAV.length + 1}</span>Гид покупателя</Link>
                </nav>
                <div className="mobile-menu-bottom">
                    <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                    {guide
                        ? <Link className="button button-olive" href="/#contact" onClick={() => setOpen(false)}>Записаться на просмотр</Link>
                        : <button className="button button-olive" data-request="Запись на просмотр">Записаться на просмотр</button>}
                </div>
            </div>
        </div>
    );
}
