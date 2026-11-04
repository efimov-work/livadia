'use client';

import { useEffect } from 'react';

export default function Motion() {
    useEffect(() => {
        const reduced = matchMedia('(prefers-reduced-motion: reduce)');
        const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
        const show = (element: HTMLElement) => element.classList.add('is-visible');
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    show(entry.target as HTMLElement);
                    observer.unobserve(entry.target);
                }
            }),
            { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
        );
        elements.forEach((element) => {
            if (reduced.matches || element.getBoundingClientRect().top < innerHeight * 0.95) show(element);
            else observer.observe(element);
        });

        let ticking = false;
        const update = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                const max = document.documentElement.scrollHeight - innerHeight;
                document.documentElement.style.setProperty('--scroll-progress', max > 0 ? String(scrollY / max) : '0');
                document.querySelector('.header')?.classList.toggle('is-scrolled', scrollY > 40);
            });
        };
        addEventListener('scroll', update, { passive: true });
        update();
        return () => {
            observer.disconnect();
            removeEventListener('scroll', update);
        };
    }, []);
    return null;
}
