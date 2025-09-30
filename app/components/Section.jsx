'use client';

import { useRef, useState, useEffect } from 'react';
import { styleTemplates } from '../globals';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function SectionGeneric({
    id,
    children,
    extraClasses,
    hasViewportHeight
}) {
    const [mounted, setMounted] = useState(false);
    const refSection = useRef(null);
    const handleZoom2 = () =>
        refSection.current.style.setProperty(
            '--base-zoom',
            Math.min(window.devicePixelRatio, 1)
        );
    const [pageInit, setPageInit] = useState(false);

    useEffect(() => {
        handleZoom2();

        window.addEventListener('resize', handleZoom2);

        const timeout = setTimeout(() => setPageInit(true), 1);

        setMounted(true);

        return () => {
            window.removeEventListener('resize', handleZoom2);

            clearTimeout(timeout);
        };
    }, []);

    return !mounted && refSection.current ? null : (
        <section
            id={id}
            className={`relative p-4 transition-opacity duration-1000 ease-in-out ${pageInit ? 'opacity-100' : 'opacity-0'}`}>
            <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(232,232,232,0.75)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,232,232,0.75)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(46,46,46,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,46,46,0.5)_1px,transparent_1px)]'></div>
            <div
                ref={refSection}
                className={`relative container mx-auto flex items-center justify-center ${!hasViewportHeight ? 'lg:min-h-[calc((100vh-101px)*var(--base-zoom))]' : ''} lg:gap-32 ${extraClasses || ''} lg:flex-row`}>
                {children}
            </div>
        </section>
    );
}

export const Row = ({ children, extraClasses }) => (
    <div className={`${extraClasses || ''}`}>{children}</div>
);

export const WIP = ({ title, subtitle, body, buttonHref, buttonBody }) => (
    <>
        {/* Navbar */}
        <Navbar />
        {/* Main */}
        <main>
            <SectionGeneric>
                <Row extraClasses='flex flex-col lg:gap-4 items-center p-4'>
                    <h1 className='text-4xl font-black lg:text-7xl'>{title}</h1>
                    <h2 className='text-lg font-black lg:text-3xl'>
                        {subtitle}
                    </h2>
                    <p className='text-sm font-medium lg:text-2xl'>{body}</p>
                    <a
                        className={`mt-2 lg:m-0 ${styleTemplates.buttonPrimary}`}
                        href={buttonHref}>
                        {buttonBody}
                    </a>
                </Row>
            </SectionGeneric>
        </main>
        {/* Footer */}
        <Footer />
        {/* Scroll To Top */}
        <ScrollToTop />
    </>
);
