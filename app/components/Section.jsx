'use client';

import Image from 'next/image';

export const Row = ({ children, extraClasses }) => (
    <div className={`${extraClasses || ''}`}>{children}</div>
);
export default function SectionGeneric({
    id,
    children,
    extraClasses,
    baseZoom
}) {
    return (
        <section
            id={`section-${id} p-16`}
            className='relative'>
            <Image
                className='absolute top-0 left-0 z-[-2] size-full object-cover opacity-[37.5%]'
                src='/pattern.png'
                alt=''
                width='1024'
                height='1024'
                unoptimized
            />
            {/* <div className='fixed top-0 left-0 z-[-3] size-full bg-[linear-gradient(-135deg,_black_0%,_#101721_50%,_black_100%)]'></div> */}
            <div
                className={`relative container mx-auto flex items-center justify-center lg:min-h-[calc((100vh-109px)*var(--base-zoom))] lg:gap-16 ${extraClasses || ''} lg:flex-row`}
                style={{ '--base-zoom': baseZoom }}>
                {children}
            </div>
        </section>
    );
}
