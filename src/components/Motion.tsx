'use client';

import { useEffect } from 'react';
import { asset } from '@/lib/asset';
import { APARTMENTS, INFRASTRUCTURE } from '@/lib/content';

export default function Motion() {
    useEffect(() => {
        const reduced = matchMedia('(prefers-reduced-motion: reduce)');
        const revealObserver = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            }),
            { rootMargin: '0px 0px 18% 0px', threshold: 0.01 }
        );
        document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
            if (reduced.matches || element.getBoundingClientRect().top < innerHeight * 0.95) element.classList.add('is-visible');
            else revealObserver.observe(element);
        });

        const counterObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            const target = Number(element.dataset.counter);
            counterObserver.unobserve(element);
            if (reduced.matches) return;
            const start = performance.now();
            const duration = 1250;
            const tick = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                element.textContent = String(Math.round(target * eased));
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }), { threshold: 0.6 });
        document.querySelectorAll<HTMLElement>('[data-counter]').forEach((element) => {
            if (element.getBoundingClientRect().top < innerHeight) counterObserver.observe(element);
            else counterObserver.observe(element);
        });

        const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
        const navigationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                document.querySelectorAll('.desktop-nav a').forEach((link) => {
                    link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            });
        }, { rootMargin: '-30% 0px -60% 0px' });
        sections.forEach((section) => navigationObserver.observe(section));

        const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
        let ticking = false;
        const update = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                const max = document.documentElement.scrollHeight - innerHeight;
                document.documentElement.style.setProperty('--scroll-progress', max > 0 ? String(scrollY / max) : '0');
                document.querySelector('.header')?.classList.toggle('is-scrolled', scrollY > 40);
                if (!reduced.matches && innerWidth > 760) {
                    parallax.forEach((element) => {
                        const rect = element.parentElement?.getBoundingClientRect();
                        if (!rect || rect.bottom < 0 || rect.top > innerHeight) return;
                        const speed = Number(element.dataset.parallax || 0.05);
                        const offset = (rect.top + rect.height / 2 - innerHeight / 2) * -speed;
                        element.style.setProperty('--parallax', `${offset}px`);
                    });
                }
            });
        };
        addEventListener('scroll', update, { passive: true });
        addEventListener('resize', update, { passive: true });
        update();

        const sources = [
            ...INFRASTRUCTURE.map((item) => item.image),
            ...APARTMENTS.flatMap((item) => [item.image, item.plan])
        ];
        const preloaded = new Set<string>();
        const preloadImages = () => {
            sources.forEach((source) => {
                const url = asset(source);
                if (preloaded.has(url)) return;
                preloaded.add(url);
                const image = new Image();
                image.decoding = 'async';
                image.src = url;
            });
        };
        let idleCallback: number | undefined;
        let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
        const schedulePreload = () => {
            if ('requestIdleCallback' in window) idleCallback = window.requestIdleCallback(preloadImages, { timeout: 2000 });
            else fallbackTimer = setTimeout(preloadImages, 1200);
        };
        if (document.readyState === 'complete') schedulePreload();
        else addEventListener('load', schedulePreload, { once: true });

        return () => {
            revealObserver.disconnect();
            counterObserver.disconnect();
            navigationObserver.disconnect();
            removeEventListener('scroll', update);
            removeEventListener('resize', update);
            removeEventListener('load', schedulePreload);
            if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
            if (fallbackTimer !== undefined) clearTimeout(fallbackTimer);
        };
    }, []);
    return null;
}
