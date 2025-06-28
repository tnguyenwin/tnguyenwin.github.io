'use client';

import { styleDefaults } from '../globals.jsx';

export default function Searchbar() {
    return (
        <li
            className={`group items-center outline ${styleDefaults.outlineColor} rounded-full ${styleDefaults.outlineColorHover} m-4 mb-8 p-2 lg:m-0 lg:p-0`}>
            <div className='flex'>
                <label className='fill-neutral-500 p-2'>
                    <svg
                        className='group-focus-within:fill-neutral-300'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fillRule='evenodd'
                            d='M11.5 2.25a8.25 8.25 0 1 0 5.28 14.59l4.69 4.69a.75.75 0 1 0 1.06-1.06l-4.69-4.69A8.25 8.25 0 0 0 11.5 2.25M4.75 10.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0'
                            clipRule='evenodd'></path>
                    </svg>
                </label>
                <input
                    className='py-2 placeholder-neutral-500 focus:outline-none'
                    placeholder='Search'
                />
            </div>
        </li>
    );
}
