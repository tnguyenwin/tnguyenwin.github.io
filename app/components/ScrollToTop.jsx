'use client';

import { styleTemplates } from '../globals.jsx';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [mounted, setMounted] = useState(false);
    const handleScroll = () => {
        let classes = [];

        classes =
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
                ? ['scale-0', 'scale-100']
                : ['scale-100', 'scale-0'];

        document
            .getElementById('buttonScrollToTop')
            ?.classList.replace(classes[0], classes[1]);
    };
    const handleScrollToTop = () => {
        document.body.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        document.documentElement.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll2 = () => handleScroll();

        handleScroll2();

        window.addEventListener('scroll', handleScroll2);

        setMounted(true);

        return () => window.removeEventListener('scroll', handleScroll2);
    }, []);

    return !mounted ? null : (
        <button
            id='buttonScrollToTop'
            className={`${styleTemplates.button} fixed right-0 bottom-0 z-1 m-2 scale-0 cursor-pointer rounded-full p-4 duration-300 ease-in-out lg:m-8`}
            onClick={handleScrollToTop}
            type='button'>
            <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='2'
                viewBox='0 0 16 16'
                height='16px'
                width='16px'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    fillRule='evenodd'
                    d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'></path>
            </svg>
        </button>
    );
}
