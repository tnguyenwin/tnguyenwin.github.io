'use client';

import { styleDefaults, styleTemplates } from '../globals';
import Link from './Link';

export default function Dropdown({
    id,
    onMouseEnter,
    onMouseLeave,
    title,
    href = null,
    // line = 'bg-blue-500 bottom-[18.75%]',
    line = 'bg-black dark:bg-white bottom-[18.75%]',
    itemsMobile,
    itemsDesktop
}) {
    return (
        <>
            {/* Navlink - Mobile */}
            {itemsMobile.map((item, id) => (
                <Link
                    key={id}
                    isNavLink
                    href={item.href}
                    body={item.body}
                    extraClasses={`block lg:hidden h-full p-4 ${styleTemplates.navlinkHover}`}
                />
            ))}
            {/* Navlink - Desktop */}
            <li
                className={`peer${href} group group-hover/dropdown relative hidden h-full lg:block`}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={() => onMouseLeave(id)}>
                <button
                    className={`peer z-2 flex cursor-pointer items-center ${styleTemplates.navlinkHover} h-full p-4`}
                    href={href}>
                    <div className='relative flex items-center gap-2'>
                        {title}
                        <svg
                            className='mt-[3px] hidden transition-transform duration-200 ease-in-out group-hover:rotate-[-180deg] lg:block'
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 448 512'
                            height='12px'
                            width='12px'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'></path>
                        </svg>
                        {/* Dropdown Items */}
                        <ul
                            className={`invisible z-2 bg-[rgba(255,255,255,0.75)] opacity-0 backdrop-blur-lg transition-opacity duration-200 ease-in-out lg:w-max lg:grid-cols-1 lg:group-hover:visible lg:group-hover:opacity-100 xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] dark:bg-[rgba(15,15,19,0.75)] ${styleDefaults.borderColor} absolute top-[calc(200%-4px)] left-[-1rem] flex gap-4 rounded-b-[0.5rem] border p-4 text-white shadow-xs dark:shadow-md ${styleDefaults.shadowColor}`}>
                            {itemsDesktop.map((item, id) => (
                                <li
                                    key={id}
                                    className={item.title ? '' : 'cursor-auto'}>
                                    {item.title ? (
                                        <a
                                            className={`group${href} ${styleDefaults.textColor} flex gap-4`}
                                            href={item.href}>
                                            {item.icon}
                                            <div className='flex flex-col justify-center'>
                                                <div className="flex items-center gap-2 font-['Geist_Mono']">
                                                    <div className='font-bold'>
                                                        {item.title}
                                                    </div>
                                                    <div
                                                        className={`text-2xl transition-transform duration-200 ease-in-out group-hover${href}:translate-x-2`}>
                                                        →
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styleDefaults.textColorSecondary} transition-colors duration-200 ease-in-out group-hover${href}:text-black dark:group-hover${href}:text-white`}>
                                                    {item.body}
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </button>
                <div
                    className={`absolute left-[50%] h-[2px] w-full origin-left -translate-x-1/2 scale-0 transition-transform duration-200 ease-in-out peer-hover:scale-100 ${line}`}></div>
            </li>
        </>
    );
}
