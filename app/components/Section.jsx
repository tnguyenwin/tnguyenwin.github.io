'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Row = ({ children, extraClasses }) => (
    <div className={`${extraClasses || ''}`}>{children}</div>
);

export default function SectionGeneric({ id, children, extraClasses }) {
    const [mounted, setMounted] = useState(false);
    const [baseZoom, setBaseZoom] = useState(null);

    useEffect(() => {
        const handleZoom2 = () => setBaseZoom(window.devicePixelRatio);

        handleZoom2();

        window.addEventListener('resize', handleZoom2);

        setMounted(true);

        return () => window.removeEventListener('resize', handleZoom2);
    }, []);

    return !mounted ? null : (
        <section
            id={`section-${id} p-16`}
            className='relative'>
            <Image
                // className='absolute top-0 left-0 z-[-2] hidden size-full object-cover opacity-[37.5%] dark:block'
                className='absolute top-0 left-0 z-[-2] size-full object-cover opacity-[9.375%] dark:opacity-[37.5%]'
                src='/pattern.png'
                alt=''
                width='1024'
                height='1024'
            />
            {/* <div className='fixed top-0 left-0 z-[-3] size-full bg-[linear-gradient(-135deg,_black_0%,_#101721_50%,_black_100%)]'></div> */}
            <div
                className={`relative container mx-auto flex items-center justify-center lg:min-h-[calc((100vh-109px)*var(--base-zoom))] lg:gap-32 ${extraClasses || ''} lg:flex-row`}
                style={{ '--base-zoom': baseZoom }}>
                {children}
            </div>
        </section>
    );
}
