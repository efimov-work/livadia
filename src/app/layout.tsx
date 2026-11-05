import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import {
    absolute,
    buildJsonLd,
    DESCRIPTION,
    GOOGLE_VERIFICATION,
    KEYWORDS,
    NOINDEX,
    SITE_NAME,
    siteOrigin,
    siteUrl,
    TITLE,
    YANDEX_VERIFICATION
} from '@/lib/seo';
import './globals.css';
import './responsive.css';

const circe = localFont({
    src: [
        { path: '../fonts/circe_light.woff2', weight: '300', style: 'normal' },
        { path: '../fonts/circe.woff2', weight: '400', style: 'normal' },
        { path: '../fonts/circe_bold.woff2', weight: '700', style: 'normal' }
    ],
    variable: '--font-circe',
    display: 'swap'
});

export const metadata: Metadata = {
    metadataBase: new URL(siteOrigin()),
    title: { default: TITLE, template: `%s | ${SITE_NAME}` },
    description: DESCRIPTION,
    applicationName: SITE_NAME,
    category: 'real estate',
    keywords: KEYWORDS,
    alternates: { canonical: `${siteUrl()}/` },
    formatDetection: { telephone: false, address: false, email: false },
    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        url: `${siteUrl()}/`,
        siteName: SITE_NAME,
        title: TITLE,
        description: DESCRIPTION,
        images: [{ url: absolute('/assets/images/hero.webp'), width: 1923, height: 1083, alt: 'Новая Ливадия у моря на закате' }]
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [absolute('/assets/images/hero.webp')] },
    robots: NOINDEX
        ? { index: false, follow: false }
        : {
              index: true,
              follow: true,
              googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
          },
    verification: { google: GOOGLE_VERIFICATION, yandex: YANDEX_VERIFICATION }
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#283049' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={circe.variable} suppressHydrationWarning>
            <body>
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c') }}
                />
            </body>
        </html>
    );
}
