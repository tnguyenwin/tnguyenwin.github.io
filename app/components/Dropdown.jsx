'use client';

import { styleDefaults, styleTemplates } from '../globals.jsx';
import { geistMono } from '../layout.jsx';
import Link from './Link.jsx';

export default function Dropdown({
    title,
    href,
    line = 'bg-blue-500 bottom-[18.75%]',
    items
}) {
    return (
        <>
            {/* Navlink - Mobile */}
            <Link
                isNavLink={true}
                href={href}
                body={title}
                extraClasses={`block lg:hidden h-full p-4 ${styleTemplates.navlinkHover}`}
            />
            {/* Navlink - Desktop */}
            <li className='group relative hidden h-full lg:block'>
                <button
                    className={`flex cursor-pointer items-center ${styleTemplates.navlinkHover} h-full p-4`}>
                    <div className='relative flex items-center gap-2'>
                        {title}
                        <svg
                            className='mt-[3px] hidden duration-300 ease-in-out group-hover:rotate-[-180deg] lg:block'
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 448 512'
                            height='12px'
                            width='12px'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'></path>
                        </svg>
                        <div
                            className={`absolute top-[calc(175%-3px)] left-[calc(50%-1rem+6px)] z-[3] hidden rotate-[180deg] group-hover:block`}>
                            <svg
                                className='fill-black stroke-black dark:fill-white dark:stroke-white'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='24'
                                viewBox='0 0 320 512'
                                width='24px'
                                height='24px'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z' />
                            </svg>
                        </div>
                        {/* Dropdown Items */}
                        <ul
                            className={`hidden duration-300 ease-in-out lg:w-max lg:grid-cols-1 lg:group-hover:grid xl:grid-cols-2 ${styleDefaults.backgroundColor} ${styleDefaults.borderColor} absolute top-[200%] left-[-1rem] flex gap-4 border p-4 text-white shadow-md shadow-black`}>
                            {items.map((item, id) => (
                                <li
                                    key={id}
                                    className={item.title ? '' : 'cursor-auto'}>
                                    {item.title ? (
                                        <a
                                            className={`group${href} ${styleDefaults.textColor} flex gap-4`}
                                            href={item.href}>
                                            {item.icon}
                                            <div className='flex flex-col justify-center'>
                                                <div
                                                    className={`flex items-center gap-2 ${geistMono.className}`}>
                                                    <div className='font-bold'>
                                                        {item.title}
                                                    </div>
                                                    <div
                                                        className={`text-2xl transition-transform group-hover${href}:translate-x-1`}>
                                                        →
                                                    </div>
                                                </div>
                                                <div className='text-[rgb(61.25%,61.25%,61.25%)]'>
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
                        <div
                            className={`absolute top-[calc(150%-3px)] left-[50%] h-[2px] w-full origin-left -translate-x-1/2 scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 ${line}`}></div>
                    </div>
                </button>
            </li>
        </>
    );
}
