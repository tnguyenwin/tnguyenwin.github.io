'use client';

import { styleTemplates } from '../globals';
import { useState, useEffect } from 'react';

export default function BlogModal() {
    const [disclaimer, setDisclaimer] = useState(true);
    const [mounted, setMounted] = useState(false);
    const handleDisclaimer = () => {
        sessionStorage.setItem('disclaimer_blog', 'false');

        setDisclaimer(false);
    };

    useEffect(() => {
        setDisclaimer(sessionStorage.getItem('disclaimer_blog') !== 'false');
        setMounted(true);
    }, []);

    return !disclaimer || !mounted ? null : (
        <div className={disclaimer ? 'block' : 'hidden'}>
            <div className='absolute top-0 left-0 z-1 size-full bg-[rgba(255,255,255,0.75)] backdrop-blur-lg transition-opacity duration-200 ease-in-out dark:bg-[rgba(0,0,0,0.5)]'></div>
            <dialog className='absolute fixed top-1/2 left-1/2 z-1 flex -translate-x-[calc(50%-1rem)] flex-col gap-2 rounded-lg border border-[#2e2e2e] bg-[#0f0f13] p-4 text-center text-white lg:gap-4 dark:border-[#E8E8E8] dark:bg-white dark:text-black'>
                <h1 className='text-4xl font-black lg:text-7xl'>DISCLAIMER</h1>
                <p className='text-sm font-medium lg:text-2xl'>
                    This page is still under construction.
                </p>
                <button
                    className={`cursor-pointer ${styleTemplates.buttonPrimary} !border-white !bg-white !text-black hover:!border-[rgb(87.5%,87.5%,87.5%)] hover:!bg-[rgb(87.5%,87.5%,87.5%)] dark:!border-black dark:!bg-black dark:!text-white dark:hover:!border-[rgb(12.5%,12.5%,12.5%)] dark:hover:!bg-[rgb(12.5%,12.5%,12.5%)]`}
                    onClick={handleDisclaimer}>
                    <svg
                        className='size-[6px] lg:size-[16px]'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        height='16px'
                        width='16px'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z'></path>
                    </svg>
                    Dismiss
                </button>
            </dialog>
        </div>
    );
}
