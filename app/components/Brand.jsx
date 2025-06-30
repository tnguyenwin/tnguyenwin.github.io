'use client';

import Link from './Link.jsx';
import Image from 'next/image';
import { orbitronSans } from '../layout.jsx';

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
                    />
                    TRUNG NGUYEN
                </>
            }
            extraClasses={`${orbitronSans.className} h-full whitespace-nowrap p-4 gap-2 text-2xl font-black`}
        />
    );
}
