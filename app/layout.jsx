import { Geist, Geist_Mono, Orbitron } from 'next/font/google';
import './globals.css';
import { styleDefaults } from './globals.jsx';

export const metadata = {
    title: 'Trung Nguyen',
    description: "Trung Nguyen's Website",
    icons: { icon: '/avatar.png' }
};
const geistSans = Geist({
    variable: '--font-geist',
    subsets: ['latin']
});
const _ = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});
const __ = Orbitron({
    variable: '--font-orbitron',
    subsets: ['latin']
});

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${styleDefaults.backgroundColor} ${styleDefaults.textColor} tracking-tight antialiased`}>
                {children}
            </body>
        </html>
    );
}
