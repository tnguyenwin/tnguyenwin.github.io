import { Geist } from 'next/font/google';
import './globals.css';
import { styleDefaults } from './globals.jsx';

export const metadata = {
    title: 'Trung Nguyen',
    description: "Trung Nguyen's Website",
    icons: {
        icon: '/avatar.png'
    }
};
const geist = Geist({
    subsets: ['latin']
});

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${geist.className} ${styleDefaults.backgroundColor} ${styleDefaults.textColor} tracking-tight antialiased`}>
                {children}
            </body>
        </html>
    );
}
