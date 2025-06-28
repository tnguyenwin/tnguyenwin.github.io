'use client';

import Link from './Link.jsx';
import Image from 'next/image';

export default function Brand() {
    return (
        <Link
            isNavLink={false}
            href='/'
            body={
                <>
                    <Image
                        className='size-10'
                        src='/avatar.png'
                        alt=''
                        width='64'
                        height='64'
                        unoptimized
                    />
                    TRUNG NGUYEN
                </>
            }
            extraClasses={`font-['Orbitron'] h-full whitespace-nowrap p-4 gap-2 text-2xl font-black text-white`}
        />
    );
}
