'use client';

import { WIP } from '../components/Section';

export default function Resume() {
    return (
        <WIP
            title='WIP'
            subtitle='A WIP RESUME PAGE'
            body='Heyo—This is a WIP page.'
            buttonHref='/'
            buttonBody={
                <>
                    <svg
                        className='size-[8px] lg:size-[16px]'
                        width='16px'
                        height='16px'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z'></path>
                    </svg>
                    Return Home
                </>
            }
        />
    );
}
