'use client';

import { styleDefaults, styleTemplates } from '../globals.jsx';
import { geistMono } from '../layout.jsx';
import Link from './Link.jsx';

export default function Dropdown({ title, href, items }) {
    return (
        <>
            {/* Navlink - Mobile */}
            <Link
                isNavLink={true}
                href={href}
                body={title}
                extraClasses={`block xl:hidden h-full p-4 ${styleTemplates.navlinkHover}`}
            />
            {/* Navlink - Desktop */}
            <li className='group relative hidden h-full lg:block'>
                <button
                    className={`flex cursor-pointer items-center ${styleTemplates.navlinkHover} h-full p-4`}>
                    <>
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
                            {/* Dropdown Items */}
                            <ul
                                className={`lg:agrid hidden duration-300 ease-in-out lg:w-max lg:grid-cols-2 ${styleDefaults.backgroundColor} ${styleDefaults.borderColor} absolute top-[200%] left-0 flex gap-4 border p-4 text-white shadow-md shadow-black`}>
                                {items.map((item, id) => (
                                    <li
                                        key={id}
                                        className={
                                            item.title ? '' : 'cursor-auto'
                                        }>
                                        {item.title ? (
                                            <a
                                                className='group/services'
                                                href={item.href}>
                                                {item.icon}
                                                <div className='flex flex-col justify-center'>
                                                    <div
                                                        className={`flex items-center gap-2 ${geistMono.className}`}>
                                                        <div className='font-bold'>
                                                            {item.title}
                                                        </div>
                                                        {/* <svg
                                                    className='transition-transform group-hover/services:translate-x-2'
                                                    stroke='currentColor'
                                                    fill='currentColor'
                                                    strokeWidth='0'
                                                    viewBox='0 0 256 256'
                                                    height='16px'
                                                    width='16px'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z'></path>
                                                    </svg> */}
                                                        <div className='text-2xl transition-transform group-hover/services:translate-x-1'>
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
                        </div>
                    </>
                </button>
            </li>
        </>
    );
}
