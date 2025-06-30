'use client';

import './globals.css';
import { styleDefaults } from './globals.jsx';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono, Orbitron } from 'next/font/google';

export const geistSans = Geist({
    variable: '--font-geist',
    subsets: ['latin']
});
export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});
export const orbitronSans = Orbitron({
    variable: '--font-orbitron',
    subsets: ['latin']
});

export default function RootLayout({ children }) {
    return (
        <html
            lang='en'
            suppressHydrationWarning>
            <title>Trung Nguyen</title>
            <meta
                name='description'
                content="Trung Nguyen's Website"></meta>
            <link
                rel='icon'
                href='/avatar.png'
                sizes='any'
            />
            <body
                className={`${geistSans.className} ${styleDefaults.backgroundColor} ${styleDefaults.textColor} tracking-tight antialiased`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem={false}
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <noscript>Page Requires JavaScript Enabled</noscript>
            </body>
        </html>
    );
}
