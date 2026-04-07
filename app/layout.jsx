'use client';

import './fonts/font_face_geist.css';
import './fonts/font_face_geist_mono.css';
import './fonts/font_face_orbitron.css';
import './globals.css';
import { styleDefaults } from './globals';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
    return (
        <html
            lang='en'
            suppressHydrationWarning>
            {/* HTML */}
            <title>Trung Nguyen</title>
            <meta
                name='description'
                content="Trung Nguyen's Portfolio Website"></meta>
            <link
                rel='icon'
                href='/global/avatar.png'
                sizes='any'
            />
            {/* Facebook */}
            <meta
                property='og:url'
                content='https://tnguyenwin.pages.dev'
            />
            <meta
                property='og:type'
                content='website'
            />
            <meta
                property='og:title'
                content='Trung Nguyen'
            />
            <meta
                property='og:description'
                content="Trung Nguyen's Website"
            />
            <meta
                property='og:image'
                content='https://tnguyenwin.pages.dev/global/website.png'
            />
            {/* Twitter */}
            <meta
                name='twitter:card'
                content='summary_large_image'
            />
            <meta
                property='twitter:domain'
                content='https://tnguyenwin.pages.dev'
            />
            <meta
                property='twitter:url'
                content='https://tnguyenwin.pages.dev'
            />
            <meta
                name='twitter:title'
                content='Trung Nguyen'
            />
            <meta
                name='twitter:description'
                content="Trung Nguyen's Website"
            />
            <meta
                name='twitter:image'
                content='https://tnguyenwin.pages.dev/global/website.png'
            />
            <Script
                defer
                src='https://static.cloudflareinsights.com/beacon.min.js'
                strategy='afterInteractive'
                data-cf-beacon='{"token": "c5372e68163c453a818fc10fd3615691"}'
            />
            <body
                className={`font-['Geist'] font-medium ${styleDefaults.backgroundColor} ${styleDefaults.textColor} tracking-tight antialiased`}>
                <noscript>Page Requires JavaScript Enabled</noscript>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                    disableTransitionOnChange
                    storageKey='theme-tnguyen'>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
