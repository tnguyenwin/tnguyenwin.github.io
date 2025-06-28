'use client';

import { styleTemplates } from '../globals.jsx';

export default function Link({
    isNavLink,
    href,
    body,
    line = 'bg-blue-500 bottom-[18.75%]',
    extraClasses = ''
}) {
    return (
        <li className='group relative h-full'>
            <a
                className={`flex items-center ${isNavLink && !extraClasses ? styleTemplates.navlinkHover : ''} ${extraClasses}`}
                href={href}>
                {body}
                {isNavLink ? (
                    <div
                        className={`absolute left-[50%] h-[2px] w-full origin-left -translate-x-1/2 scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 ${line}`}></div>
                ) : (
                    ''
                )}
            </a>
        </li>
    );
}
