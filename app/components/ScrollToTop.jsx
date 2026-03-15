'use client';

import { styleTemplates } from '../globals';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [mounted, setMounted] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);
    const handleScroll = () =>
        setShouldShow(
            document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
        );
    const handleScrollToHash = hash => {
        const ele = document.querySelector(hash);

        ele ? ele.scrollIntoView({ behavior: 'smooth' }) : null;
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

    useEffect(() => {
        mounted && window.location.hash
            ? handleScrollToHash(window.location.hash)
            : null;
    }, [mounted]);

    return !mounted ? null : (
        <button
            className={`${shouldShow ? 'scale-100' : 'scale-0'} ${styleTemplates.buttonPrimary} fixed right-0 bottom-0 z-2 m-2 !w-auto scale-0 cursor-pointer rounded-full !p-3 transition-transform duration-200 ease-in-out lg:!m-4 lg:!p-4`}
            type='button'
            onClick={handleScrollToTop}>
            <svg
                className='size-[12px] lg:size-[16px]'
                width='16px'
                height='16px'
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='2'
                viewBox='0 0 16 16'
                xmlns='http://w3.org/2000/svg'>
                <path
                    fillRule='evenodd'
                    d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'></path>
            </svg>
        </button>
    );
}
