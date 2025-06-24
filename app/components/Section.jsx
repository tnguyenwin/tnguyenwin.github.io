import Image from 'next/image';

export const Row = ({ children, extraClasses }) => {
    return <div className={`${extraClasses || ''}`}>{children}</div>;
};
// bg-[url(/images/pattern.jpg)]
export default function SectionGeneric({ id, children, extraClasses }) {
    return (
        <section
            id={`section-${id}`}
            className='relative'>
            <Image
                className='absolute top-0 left-0 z-[-2] size-full object-cover opacity-[50%]'
                src='/pattern.png'
                alt=''
                width='1024'
                height='1024'
                unoptimized
            />
            {/* <div className='fixed top-0 left-0 z-[-3] size-full bg-[linear-gradient(-135deg,_black_0%,_#101721_50%,_black_100%)]'></div> */}
            <div
                className={`relative container mx-auto flex items-center justify-center gap-16 xl:gap-0 ${extraClasses || ''} pt-[calc((100vh-108px)/4)] xl:flex-row`}>
                {children}
            </div>
        </section>
    );
}
