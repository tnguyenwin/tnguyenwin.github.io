'use client';

import { geistMono } from './layout.jsx';
import { styleTemplates } from './globals.jsx';
import Navbar from './components/Navbar.jsx';
import SectionGeneric, { Row } from './components/Section.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function NotFound() {
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                <SectionGeneric>
                    <Row extraClasses='flex flex-col gap-4 items-center p-4'>
                        <h1 className='text-4xl font-black lg:text-5xl xl:text-7xl'>
                            404
                        </h1>
                        <h2 className='text-lg font-black xl:text-3xl'>
                            PAGE NOT FOUND
                        </h2>
                        <p className='text-sm font-medium lg:text-lg xl:text-2xl'>
                            Whoops—There's nothing here.
                        </p>
                        <a
                            className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 ${geistMono.className} font-black text-black lg:w-auto ${styleTemplates.button} lg:text-lg`}
                            href='/'>
                            <svg
                                stroke='currentColor'
                                fill='currentColor'
                                strokeWidth='0'
                                viewBox='0 0 512 512'
                                height='24px'
                                width='24px'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z'></path>
                            </svg>
                            RETURN HOME
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
}
