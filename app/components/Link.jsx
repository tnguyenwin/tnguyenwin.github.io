'use client';

import { styleTemplates } from '../globals';

export default function Link({
    isNavLink,
    href,
    target = '_self',
    body,
    // line = 'bg-blue-500 bottom-[18.75%]',
    line = 'bg-black dark:bg-white bottom-[18.75%]',
    extraClasses = ''
}) {
    return (
        <li className='group relative h-full'>
            <a
                className={`flex items-center ${isNavLink && !extraClasses ? styleTemplates.navlinkHover : ''} ${extraClasses}`}
                href={href}
                target={target}>
                {body}
                {isNavLink ? (
                    <div
                        className={`absolute left-[50%] h-[2px] w-full origin-left -translate-x-1/2 scale-0 transition duration-200 ease-in-out group-hover:scale-100 ${line}`}></div>
                ) : (
                    ''
                )}
            </a>
        </li>
    );
}
