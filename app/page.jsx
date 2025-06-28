'use client';

import { useState, useEffect } from 'react';
import { styleDefaults, styleTemplates } from './globals.jsx';
import Brand from './components/Brand.jsx';
import Dropdown from './components/Dropdown.jsx';
import Image from 'next/image';
import Link from './components/Link.jsx';
// import Searchbar from './components/Searchbar.jsx';
import SectionGeneric, { Row } from './components/Section.jsx';
import R3F from './components/R3F.jsx';

export default function Home() {
    const testBackgrounds = false;
    const [isMobile, setIsMobile] = useState(false);
    const [mobileCollapsed, setMobileCollapsed] = useState(true);
    const [baseZoom, setBaseZoom] = useState(null);
    const handleIsMobile = () => {
        const testIsMobile = window.innerWidth <= 1024;

        setIsMobile(testIsMobile);
        setMobileCollapsed(testIsMobile);
    };
    const handleMobileView = () => setMobileCollapsed(!mobileCollapsed);
    const handleZoom = () => setBaseZoom(window.devicePixelRatio);
    const handleScroll = () => {
        const eBtn = document.getElementById('buttonScrollToTop');
        let classes = [];

        classes =
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
                ? ['scale-0', 'scale-100']
                : ['scale-100', 'scale-0'];

        eBtn.classList.replace(classes[0], classes[1]);
    };
    const handleScrollToTop = () => {
        document.body.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        document.documentElement.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleResize = () => handleIsMobile();
        const handleZoom2 = () => handleZoom();
        const handleScroll2 = () => handleScroll();

        handleResize();
        handleZoom2();
        handleScroll2();

        window.addEventListener('resize', () => {
            handleResize();
            handleZoom2();
        });
        window.addEventListener('scroll', handleScroll2);
        window.addEventListener('touchmove', handleScroll2);

        return () => {
            window.removeEventListener('resize', () => {
                handleResize();
                handleZoom2();
            });
            window.removeEventListener('scroll', handleScroll2);
            window.removeEventListener('touchmove', handleScroll2);
        };
    }, []);

    return (
        <>
            {/* Navbar */}
            <header
                className={`sticky top-0 left-0 border-b shadow-md shadow-black ${styleDefaults.borderColor} z-1 bg-inherit`}>
                <ul>
                    <Link
                        href='/blog/-1'
                        body={
                            <>
                                <div className='font-sm rounded border-[1px] border-white/50 bg-blue-700 px-2 py-1 tracking-wider group-hover:bg-blue-600'>
                                    BLOG NEWS
                                </div>
                                <div className='mx-3 tracking-wider'>
                                    View latest post by Trung Nguyen
                                </div>
                                <div className='mb-[4px] text-lg transition-transform group-hover:translate-x-1'>
                                    →
                                </div>
                            </>
                        }
                        extraClasses="font-['Geist_Mono'] group flex items-center justify-center text-white bg-blue-600 hover:bg-blue-500 text-center text-xs font-medium h-[36px]"
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
                            <li
                                className={`${isMobile ? '' : 'hidden'} h-full`}>
                                <button
                                    className='h-full cursor-pointer p-4'
                                    onClick={handleMobileView}>
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
                            className={`${isMobile && mobileCollapsed ? 'hidden' : ''} flex flex-col lg:h-[72px] lg:flex-row`}>
                            {/* Services */}
                            <Dropdown
                                title='Services'
                                href='/services'
                                items={[
                                    // ALL
                                    {
                                        icon: (
                                            <svg
                                                className='rounded-lg border-2 border-white bg-white p-4 text-black group-hover/services:bg-transparent group-hover/services:text-white'
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
                                                className='rounded-lg border-2 border-white bg-white p-4 text-black group-hover/services:bg-transparent group-hover/services:text-white'
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
                                                className='rounded-lg border-2 border-white bg-white p-4 text-black group-hover/services:bg-transparent group-hover/services:text-white'
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
                                extraClasses={`block xl:hidden h-full p-4 ${styleTemplates.navlinkHover}`}
                            />
                            {/* Portfolio - Desktop */}
                            {/* <Link
                                isNavLink={true}
                                href='/portfolio'
                                body={
                                    <div className='flex items-center gap-2'>
                                        Portfolio
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
                                    </div>
                                }
                                extraClasses={`h-full p-4 ${styleTemplates.navlinkHover}`}
                            /> */}
                            {/* Blog */}
                            <Link
                                isNavLink={true}
                                href='/blog'
                                body={
                                    <>
                                        Blog
                                        <span className='absolute top-1/4 left-[13%] rounded-lg border border-green-600 bg-green-900 px-1 py-px text-[10px] text-green-300 lg:top-1/3 lg:left-7/8'>
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
                        {/* <Searchbar /> */}
                        {/* Language Selector*/}
                        <li>
                            <ul
                                className={`flex h-full flex-col-reverse lg:flex-row`}>
                                <Link
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
                                />
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
                                            extraClasses={`${styleTemplates.button} whitespace-nowrap font-['Geist_Mono'] rounded-none lg:rounded-lg px-4 py-2 font-black`}
                                        />
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Body */}
            <main>
                {/* Row 1 */}
                <SectionGeneric
                    id={1}
                    extraClasses='flex-col-reverse'
                    baseZoom={baseZoom}>
                    <Row extraClasses='flex flex-col gap-1 items-center justify-center lg:items-start p-16 lg:p-4'>
                        <h2 className='text-2xl text-xl font-black xl:text-3xl'>
                            DEVELOPER, ARTIST, DESIGNER
                        </h2>
                        {/* bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] */}
                        {/* <h1 className='text-4xl font-black lg:text-7xl'> */}
                        {/* <h1 className='bg-gradient-to-t from-[rgb(28,28,31)] to-[rgb(15,15,19)] bg-clip-text text-4xl font-black font-extrabold text-transparent lg:text-7xl'> */}
                        {/* <h1 className='bg-[radial-gradient(at_50%_50%,_rgb(56,56,62)_50%,_rgb(30,30,38)_75%,_rgb(56,56,62)_100%)] bg-clip-text text-4xl font-black text-transparent [-webkit-text-stroke:2px_rgb(60,60,76)] [text-stroke:2px_rgb(60,60,76)] lg:text-7xl'> */}
                        {/* <h1 className='bg-linear-to-b from-white from-50% to-[rgb(50%,50%,50%)] to-100% bg-clip-text text-4xl font-black text-transparent lg:text-7xl'> */}
                        <h1 className='text-4xl font-black lg:text-6xl xl:text-7xl'>
                            TRUNG NGUYEN
                        </h1>
                        <p className='text-sm font-medium lg:text-xl xl:text-2xl'>
                            Hi—I'm Trung, a web developer; and business student.
                        </p>
                        <div className='mt-4 flex w-full flex-col gap-4 lg:mx-0 lg:flex-row'>
                            <a
                                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-['Geist_Mono'] font-black text-black ${styleTemplates.button} lg:text-lg`}
                                href='/services'>
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 512 512'
                                    height='1.5rem'
                                    width='1.5rem'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                </svg>
                                AVAILABLE SERVICES
                            </a>
                            <ul>
                                <Link
                                    isNavLink={false}
                                    href='/portfolio'
                                    body={
                                        <>
                                            VIEW WORK
                                            <svg
                                                className='transition-transform group-hover:translate-x-2'
                                                stroke='currentColor'
                                                fill='currentColor'
                                                strokeWidth='0'
                                                viewBox='0 0 256 256'
                                                height='24px'
                                                width='24px'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z'></path>
                                            </svg>
                                        </>
                                    }
                                    extraClasses='gap-2 justify-center h-full text-white group rounded-lg px-3 py-1.5 font-black lg:text-lg'
                                />
                            </ul>
                        </div>
                    </Row>
                    <Row
                        extraClasses={`lg:rounded-[2vw] border-16 border-transparent bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] shadow-lg shadow-black outline outline-[rgb(60,60,76)] ${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_room.glb'
                            lampIntensity={16}
                            cameraFOV={60}
                        />
                        {/* <div className={styleTemplates.threeGradient}></div> */}
                    </Row>
                </SectionGeneric>
                {/* Row 2 */}
                <SectionGeneric
                    id={2}
                    extraClasses='flex-col'
                    baseZoom={baseZoom}>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-blue-700' : ''} lg:rounded-[2vw] border-16 border-transparent bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] shadow-lg shadow-black outline outline-[rgb(60,60,76)]  ${styleTemplates.threeCanvas}`}>
                        <div className='lg:size-[calc(384px)]'>
                            <Image
                                // className='rounded-[2vw] border-transparent shadow-lg shadow-black outline outline-[rgb(60,60,76)] saturate-[67.5%] lg:border-32'
                                className='p-8 lg:rounded-[4vw]'
                                src='/profile.jpg'
                                alt=''
                                width='384'
                                height='384'
                                unoptimized
                            />
                        </div>
                        {/* <div className={styleTemplates.threeGradient}></div> */}
                    </Row>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-4 text-sm font-medium lg:items-center lg:items-start lg:text-2xl ${testBackgrounds ? 'bg-yellow-700' : ''} p-16 lg:p-4`}>
                        <h1 className='text-4xl font-black whitespace-nowrap lg:text-7xl'>
                            ABOUT ME
                        </h1>
                        <span className='-mb-2 text-xl font-black lg:text-3xl'>
                            PASSIONS
                        </span>
                        <ul className='ms-4 flex list-inside list-disc flex-col'>
                            <li>UI / UX</li>
                            <li>Web & Software Development</li>
                            <li>Art & Design</li>
                            <li>Computer Programming</li>
                        </ul>
                        <span className='mt-4 -mb-2 text-xl font-black lg:text-3xl'>
                            EDUCATION
                        </span>
                        <ul className='flex list-inside list-disc flex-col gap-4'>
                            <li className='-mb-2 list-none font-bold'>
                                ASSOCIATE OF APPLIED SCIENCE (AAS)
                            </li>
                            <li className='relative'>
                                <div className='absolute top-0 left-[1rem] flex h-full items-center gap-2 lg:top-[0.25rem] lg:left-[1.5rem]'>
                                    <svg
                                        className='fill-green-400'
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        height='32px'
                                        width='32px'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z'></path>
                                    </svg>
                                    Software Development
                                </div>
                            </li>
                            <li className='-mb-2 list-none font-bold'>
                                BACHELOR OF APPLIED SCIENCE (BAS)
                            </li>
                            <li className='relative'>
                                <div className='absolute top-0 left-[1rem] flex items-center gap-2 lg:top-[0.25rem] lg:left-[1.5rem]'>
                                    <svg
                                        className='fill-yellow-400'
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        height='28px'
                                        width='28px'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z'></path>
                                    </svg>
                                    Applied Business Management
                                </div>
                            </li>
                        </ul>
                        {/* <span className='mt-4 -mb-2 text-xl font-black lg:text-3xl'>
                                MINDSET
                            </span>
                            <p>
                                Strives to truly understand content: and not
                                just to pass a class.
                            </p>
                            <p>
                                Isn&apos;t afraid of hard work, learning new
                                things or tackling a good challenge.
                            </p>
                            <p>
                                Believes that any situation in life can be a
                                learning experience.
                            </p>
                            <p>Enjoys getting to know new people.</p> */}
                    </Row>
                </SectionGeneric>
                {/* Row 3 */}
                <SectionGeneric
                    id={3}
                    extraClasses='flex-col-reverse lg:flex-col'
                    baseZoom={baseZoom}>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-2 lg:items-center lg:items-start ${testBackgrounds ? 'bg-pink-700' : ''} p-16 lg:p-4`}>
                        <h1 className='text-4xl font-black lg:text-7xl'>
                            SERVICES
                        </h1>
                        <div className='flex flex-col gap-8 text-sm font-medium lg:text-2xl'>
                            I can provide these services:
                            <ul className='flex flex-col gap-4'>
                                {/* Web Dev / Web Design */}
                                <li>
                                    <span className='text-xl font-black whitespace-nowrap lg:text-3xl'>
                                        WEB DEV / WEB DESIGN
                                    </span>
                                    <ul className='flex list-inside flex-col gap-4'>
                                        <li className='-mb-4 font-bold'>
                                            FRONTEND & BACKEND
                                        </li>
                                        <li className='list-none'>
                                            <ul className='ms-4 flex list-inside list-disc flex-col'>
                                                <li>JSX, React.js & Next.js</li>
                                                <li>ASP.NET</li>
                                                <li>Plain JS</li>
                                            </ul>
                                        </li>
                                        <li className='-mb-4 font-bold'>
                                            SITE BUILDERS
                                        </li>
                                        <li className='list-none'>
                                            <ul className='ms-4 flex list-inside list-disc flex-col'>
                                                <li>Wix</li>
                                                <li>WordPress</li>
                                                <li>Framer</li>
                                                <li>Google Sites</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                {/* Software & Mobile Dev */}
                                <li>
                                    <span className='text-xl font-black whitespace-nowrap lg:text-3xl'>
                                        SOFTWARE & MOBILE DEV
                                    </span>
                                    <ul className='ms-4 flex list-inside list-disc flex-col'>
                                        <li>React Native</li>
                                        <li>Electron.js</li>
                                    </ul>
                                </li>
                                {/* UI / UX & ART */}
                                <li>
                                    <span className='text-xl font-black lg:text-3xl'>
                                        UI / UX & ART
                                    </span>
                                    <ul className='ms-4 flex list-inside list-disc flex-col'>
                                        <li>UI mockups & wireframes</li>
                                        <li>3D models & scenes</li>
                                        <li className='whitespace-nowrap'>
                                            Logos, icons, avatars & banners
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className='-mt-2 flex w-full flex-col gap-4 whitespace-nowrap lg:mx-0 lg:flex-row'>
                                <a
                                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-['Geist_Mono'] font-black text-black ${styleTemplates.button} lg:text-lg`}
                                    href='/hire'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 640 512'
                                        height='2rem'
                                        width='2rem'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352l41.8 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-76 0-4 0-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z'></path>
                                    </svg>
                                    HIRE ME
                                </a>
                                <ul>
                                    <Link
                                        isNavLink={false}
                                        href='/portfolio'
                                        body={
                                            <>
                                                MORE SKILLS
                                                <svg
                                                    className='transition-transform group-hover:translate-x-2'
                                                    stroke='currentColor'
                                                    fill='currentColor'
                                                    strokeWidth='0'
                                                    viewBox='0 0 256 256'
                                                    height='24px'
                                                    width='24px'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z'></path>
                                                </svg>
                                            </>
                                        }
                                        extraClasses='gap-2 justify-center h-full text-white group rounded-lg px-3 py-1.5 font-black lg:text-lg'
                                    />
                                </ul>
                            </div>
                        </div>
                    </Row>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-green-700' : ''} lg:rounded-[2vw] border-16 border-transparent bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] shadow-lg shadow-black outline outline-[rgb(60,60,76)]  ${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_suzanne.glb'
                            lampIntensity={1}
                            cameraFOV={90}
                        />
                        {/* <div className={styleTemplates.threeGradient}></div> */}
                    </Row>
                </SectionGeneric>
                {/* Row 4 */}
                <SectionGeneric
                    id={4}
                    extraClasses='flex-col'
                    baseZoom={baseZoom}>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-purple-700' : ''} lg:rounded-[2vw] border-16 border-transparent bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] shadow-lg shadow-black outline outline-[rgb(60,60,76)] scale-x-[-1] ${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_suzanne.glb'
                            lampIntensity={1}
                            cameraFOV={90}
                        />
                        {/* <div className={styleTemplates.threeGradient}></div> */}
                    </Row>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-4 lg:items-center lg:items-start ${testBackgrounds ? 'bg-cyan-700' : ''} p-16 lg:p-4`}>
                        <h1 className='text-4xl font-black lg:text-7xl'>
                            CONTACT
                        </h1>
                        <p className='text-sm font-medium lg:text-2xl'>
                            Want to hire me or have questions?
                        </p>
                        <p className='text-sm font-medium lg:text-2xl'>
                            Message me on LinkedIn.
                        </p>
                        <a
                            className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-['Geist_Mono'] font-black text-black lg:w-auto ${styleTemplates.button} lg:text-lg`}
                            href='https://linkedin.com/in/trung-nguyen-business'>
                            <svg
                                stroke='currentColor'
                                fill='currentColor'
                                strokeWidth='0'
                                viewBox='0 0 448 512'
                                height='24px'
                                width='24px'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
                            </svg>
                            CONNECT ON LINKEDIN
                        </a>
                        <p className='text-[12px] text-[rgb(61.25%,61.25%,61.25%)] lg:text-base'>
                            <span className='font-bold'>NOTE</span>: Email and
                            Phone Number available upon request.
                        </p>
                    </Row>
                </SectionGeneric>
            </main>
            {/* Footer */}
            <footer
                className={`border-t shadow-[0_-4px_6px] shadow-black ${styleDefaults.borderColor}`}>
                <ul className='container mx-auto flex flex-col items-center justify-between gap-16 px-4 pt-16 pb-[25vh] lg:flex-row'>
                    {/* Brand & Policy */}
                    <li>
                        <ul className='flex flex-col'>
                            <div className='-ms-2 lg:-ms-4'>
                                <Brand />
                            </div>
                            <li>
                                <ul className='flex items-center justify-between gap-2'>
                                    <li>Copyright &copy; 2025</li>
                                    <li>
                                        <ul>
                                            <li
                                                className={
                                                    'hidden items-center justify-center lg:flex'
                                                }></li>
                                            <li>
                                                <ul className='flex'>
                                                    {/* Email */}
                                                    {/* <Link
                                        isNavLink={true}
                                        href='/'
                                        body={
                                            <svg
                                                stroke='currentColor'
                                                fill='currentColor'
                                                strokeWidth='0'
                                                viewBox='0 0 24 24'
                                                height='24px'
                                                width='24px'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    fill='none'
                                                    d='M0 0h24v24H0z'></path>
                                                <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'></path>
                                            </svg>
                                        }
                                        extraClasses={`h-full p-2 ${styleTemplates.navlinkHover}`}
                                    /> */}
                                                    {/* Phone */}
                                                    {/* <Link
                                        isNavLink={true}
                                        href='/'
                                        body={
                                            <svg
                                                stroke='currentColor'
                                                fill='currentColor'
                                                strokeWidth='0'
                                                viewBox='0 0 16 16'
                                                height='24px'
                                                width='24px'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5'></path>
                                            </svg>
                                        }
                                        extraClasses={`h-full p-2 ${styleTemplates.navlinkHover}`}
                                    /> */}
                                                    {/* LinkedIn */}
                                                    <Link
                                                        isNavLink={false}
                                                        href='https://linkedin.com/in/trung-nguyen-business'
                                                        body={
                                                            <svg
                                                                stroke='currentColor'
                                                                fill='currentColor'
                                                                strokeWidth='0'
                                                                viewBox='0 0 448 512'
                                                                height='24px'
                                                                width='24px'
                                                                xmlns='http://www.w3.org/2000/svg'>
                                                                <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
                                                            </svg>
                                                        }
                                                        extraClasses={`h-full p-2 ${styleTemplates.navlinkHover}`}
                                                    />
                                                    {/* GitHub */}
                                                    <Link
                                                        isNavLink={false}
                                                        href='https://github.com/tnguyen-win'
                                                        body={
                                                            <svg
                                                                stroke='currentColor'
                                                                fill='currentColor'
                                                                strokeWidth='0'
                                                                viewBox='0 0 496 512'
                                                                height='24px'
                                                                width='24px'
                                                                xmlns='http://www.w3.org/2000/svg'>
                                                                <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                                                            </svg>
                                                        }
                                                        extraClasses={`h-full p-2 ${styleTemplates.navlinkHover}`}
                                                    />
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className='-ms-2 flex justify-center gap-2 lg:justify-start'>
                                    {/* Legal */}
                                    <Link
                                        isNavLink={true}
                                        href='/legal'
                                        body='Legal'
                                        extraClasses={`h-full px-2 py-4 ${styleTemplates.navlinkHover}`}
                                    />
                                    <li
                                        className={
                                            'hidden items-center justify-center lg:flex'
                                        }>
                                        <hr
                                            className={`border ${styleDefaults.borderColor} py-3`}
                                        />
                                    </li>
                                    {/* Privacy */}
                                    <Link
                                        isNavLink={true}
                                        href='/privacy'
                                        body='Privacy Policy'
                                        extraClasses={`h-full px-2 py-4 ${styleTemplates.navlinkHover}`}
                                    />
                                    <li
                                        className={
                                            'hidden items-center justify-center lg:flex'
                                        }>
                                        <hr
                                            className={`border ${styleDefaults.borderColor} py-3`}
                                        />
                                    </li>
                                    {/* Cookies */}
                                    <Link
                                        isNavLink={true}
                                        href='/cookies'
                                        body='Cookies'
                                        extraClasses={`h-full px-2 py-4 ${styleTemplates.navlinkHover}`}
                                    />
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* Webpages */}
                    <li>
                        <ul className='flex flex-col items-center lg:items-end'>
                            <Link
                                isNavLink={true}
                                href='/services'
                                body='Services'
                                extraClasses={`h-full px-2 py-4 ${styleTemplates.navlinkHover}`}
                            />
                            <Link
                                isNavLink={true}
                                href='/portfolio'
                                body='Portfolio'
                                extraClasses={`h-full px-2 py-4 -mt-2 ${styleTemplates.navlinkHover}`}
                            />
                            <Link
                                isNavLink={true}
                                href='/blog'
                                body='Blog'
                                extraClasses={`h-full px-2 py-4 -mt-2 ${styleTemplates.navlinkHover}`}
                            />
                        </ul>
                    </li>
                </ul>
            </footer>
            {/* Scroll To Top */}
            <button
                id='buttonScrollToTop'
                className={`${styleTemplates.button} fixed right-0 bottom-0 z-10 m-2 scale-0 cursor-pointer rounded-full bg-white p-4 shadow-xl shadow-black duration-300 ease-in-out lg:m-8`}
                onClick={handleScrollToTop}
                type='button'>
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 16 16'
                    height='16px'
                    width='16px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fillRule='evenodd'
                        d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'></path>
                </svg>
            </button>
        </>
    );
}
