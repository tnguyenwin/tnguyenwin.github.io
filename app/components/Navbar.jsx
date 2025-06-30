'use client';

import { useTheme } from 'next-themes';
import { geistMono } from '../layout.jsx';
import { styleDefaults, styleTemplates } from '../globals.jsx';
import { useState, useEffect } from 'react';
import Brand from './Brand.jsx';
import Link from './Link.jsx';
import Dropdown from './Dropdown.jsx';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);
    const [mobileCollapsed, setMobileCollapsed] = useState(true);
    const handleThemeToggle = () =>
        setTheme(theme === 'dark' ? 'light' : 'dark');
    const handleIsMobile = () => {
        const testIsMobile = window.innerWidth <= 1024;

        setIsMobile(testIsMobile);
        setMobileCollapsed(testIsMobile);
    };

    const handleMobileMenu = () => setMobileCollapsed(!mobileCollapsed);

    useEffect(() => {
        const handleResize = () => handleIsMobile();

        handleResize();

        window.addEventListener('resize', handleResize);

        setMounted(true);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return !mounted ? null : (
        <header
            className={`sticky top-0 left-0 border-b shadow-sm dark:shadow-md ${styleDefaults.shadowColor} ${styleDefaults.borderColor} z-2 bg-inherit`}>
            <ul>
                <Link
                    href='/blog/-1'
                    body={
                        <>
                            <div className='font-sm rounded border-[1px] border-white/50 bg-blue-700 px-2 py-1 tracking-wider group-hover:bg-blue-600'>
                                BLOG NEWS
                            </div>
                            <div className='mx-3'>
                                View latest post by Trung Nguyen
                            </div>
                            <div className='mb-[4px] text-lg transition-transform group-hover:translate-x-1'>
                                →
                            </div>
                        </>
                    }
                    extraClasses={`${geistMono.className} group flex items-center justify-center text-white bg-blue-600 hover:bg-blue-500 text-center text-xs font-medium h-[36px]`}
                />
            </ul>
            <nav className='container mx-auto flex flex-col justify-between lg:flex-row lg:items-center'>
                {/* Nav - Left */}
                <div className='flex flex-col lg:h-[72px] lg:flex-row lg:items-center'>
                    {/* Nav - Left - Mobile */}
                    <ul className='flex items-center justify-between lg:h-[72px]'>
                        {/* Brand */}
                        <Brand />
                        {/* Mobile Menu Toggle */}
                        <li className={`${isMobile ? '' : 'hidden'} h-full`}>
                            <button
                                className='h-full cursor-pointer p-4'
                                onClick={handleMobileMenu}>
                                <svg
                                    className='size-full'
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 448 512'
                                    width='24'
                                    height='24'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0
                                    113.7 0
                                    96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7
                                    0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32
                                    32-32H416c17.7 0 32 14.3 32 32z'></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                    {/* Nav - Left - Desktop */}
                    <ul
                        className={`${isMobile && mobileCollapsed ? 'hidden' : ''} flex origin-top flex-col lg:h-[72px] lg:flex-row`}>
                        {/* Services */}
                        <Dropdown
                            title='Services'
                            href='/services'
                            items={[
                                // ALL
                                {
                                    icon: (
                                        <svg
                                            className={`${styleTemplates.button} rounded-lg p-4 group-hover/services:bg-transparent group-hover/services:text-black dark:group-hover/services:text-white`}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='64px'
                                            width='64px'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                        </svg>
                                    ),
                                    title: 'ALL',
                                    body: 'A list of all services I offer.',
                                    href: '/services'
                                },
                                {},
                                // TECHNOLOGY
                                {
                                    icon: (
                                        <svg
                                            className={`${styleTemplates.button} rounded-lg p-4 group-hover/services:bg-transparent group-hover/services:text-black dark:group-hover/services:text-white`}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='64px'
                                            width='64px'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                        </svg>
                                    ),
                                    title: 'TECHNOLOGY',
                                    body: 'A list of technology-related services I offer.',
                                    href: '/services#technology'
                                },
                                // BUSINESS
                                {
                                    icon: (
                                        <svg
                                            className={`${styleTemplates.button} rounded-lg p-4 group-hover/services:bg-transparent group-hover/services:text-black dark:group-hover/services:text-white`}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='64px'
                                            width='64px'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                        </svg>
                                    ),
                                    title: 'BUSINESS',
                                    body: 'A list of business-related services I offer.',
                                    href: '/services#business'
                                }
                            ]}
                        />
                        {/* Portfolio - Mobile */}
                        <Link
                            isNavLink={true}
                            href='/portfolio'
                            body='Portfolio'
                            extraClasses={`block lg:hidden h-full p-4 ${styleTemplates.navlinkHover}`}
                        />
                        {/* Portfolio - Desktop */}
                        <Dropdown
                            title='Portfolio'
                            href='/portfolio'
                            items={[
                                // ALL
                                {
                                    icon: (
                                        <svg
                                            className={`${styleTemplates.button} rounded-lg p-4 group-hover/portfolio:bg-transparent group-hover/portfolio:text-black dark:group-hover/portfolio:text-white`}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='64px'
                                            width='64px'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                        </svg>
                                    ),
                                    title: 'ALL',
                                    body: 'A showcase of my all of my work.',
                                    href: '/portfolio'
                                },
                                {},
                                // TECHNOLOGY
                                {
                                    icon: (
                                        <svg
                                            className={`${styleTemplates.button} rounded-lg p-4 group-hover/portfolio:bg-transparent group-hover/portfolio:text-black dark:group-hover/portfolio:text-white`}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='64px'
                                            width='64px'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                        </svg>
                                    ),
                                    title: 'TECHNOLOGY',
                                    body: 'A showcase of my technology-related work.',
                                    href: '/portfolio#technology'
                                },
                                // BUSINESS
                                {
                                    icon: (
                                        <svg
                                            className={`${styleTemplates.button} rounded-lg p-4 group-hover/portfolio:bg-transparent group-hover/portfolio:text-black dark:group-hover/portfolio:text-white`}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='64px'
                                            width='64px'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                        </svg>
                                    ),
                                    title: 'BUSINESS',
                                    body: 'A showcase of my business-related work.',
                                    href: '/portfolio#business'
                                }
                            ]}
                        />
                        {/* Blog */}
                        <Link
                            isNavLink={true}
                            href='/blog'
                            body={
                                <>
                                    Blog
                                    <span className='absolute top-1/4 left-[13%] rounded-lg border border-green-400 bg-green-300 px-1 py-px text-[10px] text-green-600 lg:top-1/3 lg:left-7/8 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                        NEW
                                    </span>
                                </>
                            }
                            extraClasses={`relative h-full p-4 ${styleTemplates.navlinkHover}`}
                        />
                    </ul>
                </div>
                {/* Nav - Right */}
                <ul
                    className={`${isMobile && mobileCollapsed ? 'hidden' : ''} flex h-full flex-col lg:me-4 lg:h-[72px] lg:flex-row lg:items-center`}>
                    {/* Searchbar */}
                    {/* <li
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
                                </li> */}
                    {/* Language Selector*/}
                    <li className='h-full'>
                        <ul
                            className={`flex h-full flex-col-reverse lg:flex-row`}>
                            {/* <Link
                                            isNavLink={false}
                                            body={
                                                <div className='flex p-2'>
                                                    <svg
                                                        width='24'
                                                        height='24'
                                                        viewBox='0 0 24 24'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M3.784 11.25H8.01c.065-2.256.423-4.31.985-5.869.166-.457.352-.882.561-1.263a8.26 8.26 0 0 0-5.773 7.132m8.216-9c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 1.5c-.146 0-.383.08-.695.444-.309.362-.62.93-.898 1.697-.494 1.368-.83 3.243-.896 5.359h4.978c-.066-2.116-.402-3.991-.896-5.36-.277-.766-.59-1.334-.898-1.696-.312-.364-.55-.444-.695-.444m3.99 7.5c-.066-2.256-.424-4.31-.986-5.869a9 9 0 0 0-.561-1.263 8.26 8.26 0 0 1 5.773 7.132zm-1.501 1.5H9.51c.065 2.116.402 3.991.896 5.36.277.766.59 1.334.898 1.696.312.364.55.444.695.444.146 0 .383-.08.695-.444.309-.362.62-.93.898-1.697.494-1.368.83-3.243.896-5.359m-.046 7.132a9 9 0 0 0 .56-1.263c.563-1.559.92-3.613.986-5.869h4.227a8.26 8.26 0 0 1-5.773 7.132m-4.886 0a9 9 0 0 1-.56-1.263c-.563-1.559-.92-3.613-.986-5.869H3.784a8.26 8.26 0 0 0 5.773 7.132'
                                                            clipRule='evenodd'></path>
                                                    </svg>
                                                </div>
                                            }
                                            extraClasses={`cursor-pointer h-full p-4 ${styleTemplates.navlinkHover}`}
                                        /> */}
                            {/* Theme Toggle */}
                            <li className='h-full'>
                                <button
                                    className={`flex cursor-pointer items-center ${styleTemplates.navlinkHover} h-full p-4`}
                                    onClick={handleThemeToggle}>
                                    {(() => {
                                        switch (theme) {
                                            // Moon
                                            case 'light':
                                                return (
                                                    <svg
                                                        className='size-full p-[0.625rem]'
                                                        strokeLinejoin='round'
                                                        stroke='currentColor'
                                                        fill='currentColor'
                                                        strokeWidth='0'
                                                        viewBox='0 0 16 16'
                                                        height='16px'
                                                        width='16px'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z'></path>
                                                        <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'></path>
                                                    </svg>
                                                );
                                            // Sun
                                            case 'dark':
                                                return (
                                                    <svg
                                                        className='size-full p-[0.625rem]'
                                                        strokeLinejoin='round'
                                                        stroke='currentColor'
                                                        fill='currentColor'
                                                        strokeWidth='0'
                                                        viewBox='0 0 16 16'
                                                        height='16px'
                                                        width='16px'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path d='M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'></path>
                                                    </svg>
                                                );
                                        }
                                    })()}
                                </button>
                            </li>
                            {/* Horizontal Line */}
                            <li
                                className={
                                    'me-7 hidden items-center justify-center lg:flex'
                                }>
                                <hr
                                    className={`border ${styleDefaults.borderColor} py-3`}
                                />
                            </li>
                            {/* Contact */}
                            <li className='flex items-center justify-center'>
                                <ul className='w-full'>
                                    <Link
                                        href='/contact'
                                        body={
                                            <div className='flex gap-2'>
                                                <svg
                                                    stroke='currentColor'
                                                    fill='currentColor'
                                                    strokeWidth='0'
                                                    viewBox='0 0 512 512'
                                                    height='1.5rem'
                                                    width='1.5rem'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z'></path>
                                                    <path d='M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z'></path>
                                                </svg>
                                                CONTACT ME
                                            </div>
                                        }
                                        extraClasses={`${styleTemplates.button} whitespace-nowrap ${geistMono.className} rounded-none lg:rounded-lg px-4 py-2 font-black`}
                                    />
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
