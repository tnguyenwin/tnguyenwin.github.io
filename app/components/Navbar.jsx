'use client';

import { useTheme } from 'next-themes';
import { styleDefaults, styleTemplates } from '../globals';
import { useState, useEffect } from 'react';
import Brand from './Brand';
import Link from './Link';
import Dropdown from './Dropdown';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);
    const [mobileCollapsed, setMobileCollapsed] = useState(true);
    const [allDropdownsCollapsed, setAllDropdownsCollapsed] = useState([
        true,
        true
    ]);
    const handleToggleTheme = () =>
        setTheme(theme === 'dark' ? 'light' : 'dark');
    const handleIsMobile = () => {
        setIsMobile(window.innerWidth <= 1024);
        setMobileCollapsed(true);
    };
    const handleToggleMobileMenu = () => setMobileCollapsed(!mobileCollapsed);
    const handleDropdownEnter = id => {
        setAllDropdownsCollapsed(prevState => {
            const newState = [...prevState];

            newState[id] = false;

            return newState;
        });
    };
    const handleDropdownLeave = id => {
        setAllDropdownsCollapsed(prevState => {
            const newState = [...prevState];

            newState[id] = true;

            return newState;
        });
    };

    useEffect(() => {
        const handleIsMobile2 = () => handleIsMobile();

        handleIsMobile2();

        window.addEventListener('resize', handleIsMobile2);

        setMounted(true);

        return () => window.removeEventListener('resize', handleIsMobile2);
    }, []);

    useEffect(() => {}, [allDropdownsCollapsed]);

    return !mounted ? null : (
        <>
            {/* Nav */}
            <header
                className={`sticky top-0 left-0 border-b bg-[rgba(255,255,255,0.5)] shadow-sm backdrop-blur-lg dark:bg-[rgba(15,15,19,0.5)] dark:shadow-md ${styleDefaults.shadowColor} ${styleDefaults.borderColor} z-2`}>
                {/* Banner */}
                <div className='relative'>
                    <ul>
                        <Link
                            href='/blog'
                            body={
                                <>
                                    <div className='font-sm rounded border-[1px] border-white/50 bg-blue-700 px-2 py-1 tracking-wider group-hover:bg-blue-600'>
                                        BLOG NEWS
                                    </div>
                                    <div className='mx-3'>
                                        View latest post from Trung Nguyen
                                    </div>
                                    <div className='mb-[4px] hidden text-lg transition-transform duration-200 ease-in-out group-hover:translate-x-1 lg:block'>
                                        →
                                    </div>
                                </>
                            }
                            extraClasses="font-['Geist_Mono'] group flex items-center justify-center text-white bg-blue-600 hover:bg-blue-500 text-center text-xs font-medium h-[36px]"
                        />
                    </ul>
                    {/* <button
                        className={`absolute top-[-4px] right-[4px] flex cursor-pointer items-center justify-center bg-red-600 p-2`}>
                        <svg
                            className='size-[12px] lg:size-[16px]'
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            width='16px'
                            height='16px'
                            xmlns='http://w3.org/2000/svg'>
                            <path
                                d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9
                                            25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8
                                            9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256
                            376.6 84.5z'></path>
                        </svg>
                    </button> */}
                </div>
                {/* Navbar */}
                <nav className='container mx-auto flex flex-col justify-between lg:flex-row lg:items-center'>
                    {/* Nav - Left */}
                    <div className='flex w-full flex-col lg:h-[64px] lg:w-max lg:flex-row lg:items-center'>
                        {/* Nav - Left - Mobile */}
                        <ul className='flex w-full items-center justify-between lg:h-[64px] lg:w-max'>
                            {/* Brand */}
                            <Brand />
                            {/* Mobile Menu Toggle */}
                            <li
                                className={`${isMobile ? '' : 'hidden'} h-full`}>
                                <button
                                    className='relative h-full cursor-pointer p-8'
                                    onClick={handleToggleMobileMenu}>
                                    {/* Open */}
                                    <svg
                                        className={`${mobileCollapsed ? 'scale-100' : 'scale-0'} absolute top-[50%] left-[50%] size-[24px] -translate-1/2 transition-transform duration-200 ease-in-out`}
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 448 512'
                                        width='24px'
                                        height='24px'
                                        xmlns='http://w3.org/2000/svg'>
                                        <path
                                            d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0
                                            113.7 0
                                            96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7
                                            0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32
                                            32-32H416c17.7 0 32 14.3 32 32z'></path>
                                    </svg>
                                    {/* Close */}
                                    <svg
                                        className={`${mobileCollapsed ? 'scale-0' : 'scale-100'} absolute top-[50%] left-[50%] size-[20px] -translate-1/2 transition-transform duration-200 ease-in-out`}
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        width='20px'
                                        height='20px'
                                        xmlns='http://w3.org/2000/svg'>
                                        <path
                                            d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9
                                            25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8
                                            9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256
                            376.6 84.5z'></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        {/* Nav - Left - Desktop */}
                        <ul
                            className={`${isMobile && mobileCollapsed ? 'hidden' : ''} flex origin-top flex-col lg:h-[64px] lg:flex-row`}>
                            {/* Portfolio - Desktop */}
                            <Dropdown
                                id={1}
                                onMouseEnter={handleDropdownEnter}
                                onMouseLeave={handleDropdownLeave}
                                title='Showcase'
                                href='/portfolio'
                                itemsMobile={[
                                    { href: '/portfolio', body: 'Portfolio' },
                                    { href: '/skills', body: 'Skills' },
                                    { href: '/courses', body: 'Courses' }
                                    // { href: '/resume', body: 'Resume' }
                                ]}
                                itemsDesktop={[
                                    // PORTFOLIO
                                    {
                                        icon: (
                                            <svg
                                                className={`rounded-lg border-2 bg-transparent p-4 transition-colors duration-200 ease-in-out ${styleDefaults.borderColor} group-hover/portfolio:border-black dark:group-hover/portfolio:border-white`}
                                                width='64px'
                                                height='64px'
                                                viewBox='0 0 512 512'
                                                fill='currentColor'
                                                stroke='currentColor'
                                                strokeWidth='0'
                                                xmlns='http://w3.org/2000/svg'>
                                                <path d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z'></path>
                                                {/* <path
                                                    fill='none'
                                                    strokeWidth='2'
                                                    d='M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16'></path> */}
                                            </svg>
                                        ),
                                        title: 'PORTFOLIO',
                                        body: 'Projects or demos I have made.',
                                        href: '/portfolio'
                                    },
                                    // COURSES
                                    {
                                        icon: (
                                            <svg
                                                className={`rounded-lg border-2 bg-transparent p-4 transition-colors duration-200 ease-in-out ${styleDefaults.borderColor} group-hover/portfolio:border-black dark:group-hover/portfolio:border-white`}
                                                width='64px'
                                                height='64px'
                                                viewBox='0 0 512 512'
                                                fill='currentColor'
                                                stroke='currentColor'
                                                strokeWidth='0'
                                                xmlns='http://w3.org/2000/svg'>
                                                <path d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'></path>
                                            </svg>
                                        ),
                                        title: 'COURSES',
                                        body: 'Academic college classes I have taken.',
                                        href: '/courses'
                                    },
                                    // SKILLS
                                    {
                                        icon: (
                                            <svg
                                                className={`rounded-lg border-2 bg-transparent p-4 transition-colors duration-200 ease-in-out ${styleDefaults.borderColor} group-hover/portfolio:border-black dark:group-hover/portfolio:border-white`}
                                                width='64px'
                                                height='64px'
                                                viewBox='0 0 512 512'
                                                fill='currentColor'
                                                stroke='currentColor'
                                                strokeWidth='0'
                                                xmlns='http://w3.org/2000/svg'>
                                                <path d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'></path>
                                            </svg>
                                        ),
                                        title: 'SKILLS',
                                        body: 'Tools or things I have experience with.',
                                        href: '/skills'
                                    }
                                    // RESUME
                                    // {
                                    //     icon: (
                                    //         <svg
                                    // className={`rounded-lg border-2 bg-transparent p-4 transition-colors duration-200 ease-in-out ${styleDefaults.borderColor} group-hover/portfolio:border-black dark:group-hover/portfolio:border-white`}
                                    //             width='64px'
                                    //             height='64px'
                                    //             viewBox='0 0 24 24'
                                    //             fill='currentColor'
                                    //             stroke='currentColor'
                                    //             strokeWidth='0'
                                    //             xmlns='http://w3.org/2000/svg'>
                                    //             <path
                                    //                 fill='none'
                                    //                 d='M0 0h24v24H0z'></path>
                                    //             <path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'></path>
                                    //             <path d='M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'></path>
                                    //         </svg>
                                    //     ),
                                    //     title: 'RESUME',
                                    //     body: 'Copy of my business or technology resume.',
                                    //     href: '/resume'
                                    // }
                                ]}
                            />
                            {/* About */}
                            <Link
                                isNavLink
                                href='/#about'
                                body='About'
                                extraClasses={`relative h-full p-4 ${styleTemplates.navlinkHover}`}
                            />
                            {/* Services */}
                            <Link
                                isNavLink
                                href='/#services'
                                body='Services'
                                extraClasses={`relative h-full p-4 ${styleTemplates.navlinkHover}`}
                            />
                            {/* Blog */}
                            <Link
                                isNavLink
                                href='/blog'
                                body={
                                    <>
                                        Blog
                                        <span className='absolute top-1/4 left-[3.5rem] animate-[pulseCustom_2s_ease-in-out_infinite] rounded-lg border border-green-400 bg-green-100 px-1 py-px text-[10px] text-green-600 lg:top-1/3 lg:left-7/8 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
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
                        className={`${isMobile && mobileCollapsed ? 'hidden' : ''} flex h-full flex-col gap-4 lg:h-[64px] lg:flex-row lg:items-center`}>
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
                                        xmlns='http://w3.org/2000/svg'>
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
                        {/* <Link
                            isNavLink={false}
                            body={
                                <div className='flex p-2'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        xmlns='http://w3.org/2000/svg'>
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
                        <li
                            className='flex h-full cursor-pointer items-center p-4 pe-2 lg:-me-2'
                            onClick={handleToggleTheme}>
                            <div
                                className={`relative h-6 w-11 rounded-[1rem] shadow-xs dark:shadow-sm ${styleDefaults.shadowColor} border-2 border-[rgb(220,220,220)] bg-[rgb(243,243,240)] dark:border-[#2e2e2e] dark:bg-[rgb(28,28,31)]`}>
                                <div
                                    className={`${styleDefaults.textColor} absolute top-[0px] left-[0px] flex h-5 w-5 items-center justify-center rounded-[1rem] bg-white text-xs dark:bg-[#0f0f13] ${
                                        theme === 'dark' && 'translate-x-full'
                                    }`}>
                                    {theme === 'dark' ? (
                                        <svg
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='8px'
                                            width='8px'
                                            xmlns='http://w3.org/2000/svg'>
                                            <path d='M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z'></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth='0'
                                            viewBox='0 0 512 512'
                                            height='12px'
                                            width='12px'
                                            xmlns='http://w3.org/2000/svg'>
                                            <path
                                                fill='none'
                                                strokeLinecap='round'
                                                strokeMiterlimit='10'
                                                strokeWidth='32'
                                                d='M256 48v48m0 320v48m147.08-355.08-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08-33.94-33.94M142.86 142.86l-33.94-33.94'></path>
                                            <circle
                                                cx='256'
                                                cy='256'
                                                r='80'
                                                fill='none'
                                                strokeLinecap='round'
                                                strokeMiterlimit='10'
                                                strokeWidth='32'></circle>
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </li>
                        {/* Horizontal Line */}
                        <li
                            className={
                                'hidden items-center justify-center lg:me-1 lg:flex'
                            }>
                            <hr
                                className={`border ${styleDefaults.borderColor} py-3`}
                            />
                        </li>
                        {/* Contact */}
                        <li className='flex items-center justify-center'>
                            <ul className='w-full'>
                                <Link
                                    href='/#contact'
                                    body={
                                        <div className='flex items-center gap-1 lg:gap-2'>
                                            <svg
                                                className='size-[16px] lg:size-[20px]'
                                                width='20px'
                                                height='20px'
                                                stroke='currentColor'
                                                fill='currentColor'
                                                strokeWidth='0'
                                                viewBox='0 0 512 512'
                                                xmlns='http://w3.org/2000/svg'>
                                                <path d='M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z'></path>
                                                <g>
                                                    <path d='M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z'></path>
                                                </g>
                                            </svg>
                                            Contact
                                        </div>
                                    }
                                    extraClasses={`${styleTemplates.buttonPrimary} !text-base lg:!text-lg !px-4 !py-2 lg:!px-2 lg:!py-1 !rounded-none lg:!rounded-[0.25rem]`}
                                />
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Nav Mask */}
            <div
                className={`${(isMobile && !mobileCollapsed) || !allDropdownsCollapsed.every(v => v === true) ? 'opacity-100 lg:pointer-events-auto' : 'pointer-events-none opacity-0'} fixed top-0 left-0 z-1 size-full bg-[rgba(255,255,255,0.75)] backdrop-blur-lg transition-opacity duration-200 ease-in-out dark:bg-[rgba(0,0,0,0.5)]`}
                onClick={handleToggleMobileMenu}></div>
        </>
    );
}
