'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACTS } from '@/lib/content';

export default function RequestDialog() {
    const dialog = useRef<HTMLDialogElement>(null);
    const [interest, setInterest] = useState('Подбор квартиры');
    const [note, setNote] = useState('');

    useEffect(() => {
        let returnFocus: HTMLElement | null = null;
        const click = (event: MouseEvent) => {
            if (!(event.target instanceof Element)) return;
            const trigger = event.target.closest<HTMLElement>('[data-request]');
            if (!trigger || !dialog.current) return;
            returnFocus = trigger;
            setInterest(trigger.dataset.request || 'Подбор квартиры');
            setNote('');
            dialog.current.showModal();
            document.body.classList.add('dialog-locked');
        };
        const close = () => {
            document.body.classList.remove('dialog-locked');
            returnFocus?.focus();
        };
        document.addEventListener('click', click);
        dialog.current?.addEventListener('close', close);
        return () => {
            document.removeEventListener('click', click);
            dialog.current?.removeEventListener('close', close);
            document.body.classList.remove('dialog-locked');
        };
    }, []);

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const phone = String(data.get('phone') || '');
        const phoneInput = form.elements.namedItem('phone') as HTMLInputElement;
        phoneInput.setCustomValidity(phone.replace(/\D/g, '').length >= 10 ? '' : 'Укажите номер телефона полностью');
        if (!form.reportValidity()) return;
        const name = String(data.get('name') || '').trim();
        const body = [`Имя: ${name}`, `Телефон: ${phone}`, `Запрос: ${interest}`].join('\n');
        setNote('Открываем почтовое приложение. Проверьте письмо перед отправкой.');
        window.location.href = `mailto:${CONTACTS.email}?subject=${encodeURIComponent(interest)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <dialog
            ref={dialog}
            className="request-dialog"
            aria-labelledby="request-title"
            onClick={(event) => {
                if (event.target !== event.currentTarget) return;
                const box = event.currentTarget.getBoundingClientRect();
                if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)
                    event.currentTarget.close();
            }}
        >
            <button className="dialog-close" aria-label="Закрыть окно" onClick={() => dialog.current?.close()}>×</button>
            <p className="eyebrow">Персональный подбор</p>
            <h2 id="request-title">Найдём вашу<br /><em>квартиру в Ялте.</em></h2>
            <p className="dialog-interest">{interest}</p>
            <form onSubmit={submit}>
                <label>
                    Ваше имя
                    <input name="name" autoComplete="given-name" placeholder="Как к вам обращаться" required maxLength={80} />
                </label>
                <label>
                    Номер телефона
                    <input
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                        maxLength={25}
                        onInput={(event) => event.currentTarget.setCustomValidity('')}
                    />
                </label>
                <label className="dialog-consent">
                    <input type="checkbox" required />
                    <span>Согласен с <a href={CONTACTS.policy} target="_blank" rel="noreferrer">политикой конфиденциальности</a></span>
                </label>
                <button className="button button-blue" type="submit">Перейти к отправке <span>↗</span></button>
                <p className="form-note">Письмо откроется в вашем почтовом приложении. Данные не сохраняются на сайте.</p>
                <p className="form-status" role="status" aria-live="polite">{note}</p>
            </form>
            <a className="dialog-phone" href={CONTACTS.phoneHref}>Или позвоните: {CONTACTS.phone}</a>
        </dialog>
    );
}
