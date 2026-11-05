import { asset } from '@/lib/asset';
import { CONTACTS, NAV } from '@/lib/content';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <a className="brand footer-brand" href="#top" aria-label="Новая Ливадия, наверх">
                    <img src={asset('/assets/brand/livadia-logo.svg')} alt="" width="356" height="65" loading="lazy" />
                </a>
                <nav aria-label="Разделы сайта">
                    {NAV.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
                </nav>
                <div className="footer-contacts">
                    <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                    <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>ГК Таврида Девелопмент</p>
                <p>Информация на сайте не является публичной офертой. Визуализации показывают возможные видовые характеристики и решения проекта.</p>
                <a href="#top">Наверх ↑</a>
            </div>
        </footer>
    );
}
