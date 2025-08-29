'use client';

import Link from './Link';
import Image from 'next/image';

export default function Brand({
    textSizeImage = 'size-10',
    textSizeBody = 'text-2xl',
    extraClasses
}) {
    return (
        <Link
            isNavLink={false}
            href='/'
            body={
                <>
                    <Image
                        className={`${textSizeImage} brightness-125 saturate-75 dark:brightness-100 dark:saturate-100`}
                        src='/global/avatar.png'
                        alt='TN Logo'
                        width={128}
                        height={128}
                    />
                    TRUNG NGUYEN
                </>
            }
            extraClasses={`justify-center font-['Orbitron'] h-full whitespace-nowrap p-4 gap-2 ${textSizeBody} font-black ${extraClasses}`}
        />
    );
}
