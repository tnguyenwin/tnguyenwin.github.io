'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { styleDefaults, styleTemplates } from './globals.jsx';
import Link from './components/Link.jsx';
import Searchbar from './components/Searchbar.jsx';
import SectionGeneric, { Row } from './components/Section.jsx';
import R3F from './components/R3F.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function Home() {
    const testBackgrounds = false;
    const [isMobile, setIsMobile] = useState(false);
    const [mobileCollapsed, setMobileCollapsed] = useState(true);
    const handleIsMobile = () => {
        const testIsMobile = window.innerWidth <= 1280;

        setIsMobile(testIsMobile);
        setMobileCollapsed(testIsMobile);
    };
    const handleMobileView = () => setMobileCollapsed(!mobileCollapsed);

    useEffect(() => {
        handleIsMobile();

        window.addEventListener('resize', handleIsMobile);

        return () => window.removeEventListener('resize', handleIsMobile);
    }, []);

    return (
        <>
            {/* Navbar */}
            <header
                className={`sticky top-0 left-0 border-b ${styleDefaults.borderColor} z-1 bg-inherit`}>
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
                        extraClasses='group flex items-center justify-center text-white bg-blue-600 hover:bg-blue-500 text-center text-xs font-medium h-[36px]'
                    />
                </ul>
                <nav className='container mx-auto flex flex-col justify-between xl:flex-row xl:items-center'>
                    {/* Nav - Left */}
                    <div className='flex h-[72px] h-full flex-col xl:flex-row xl:items-center'>
                        {/* Nav - Left - Mobile */}
                        <ul className='flex items-center justify-between'>
                            <Link
                                isNavLink={true}
                                href='/'
                                body={
                                    <>
                                        <Image
                                            className='size-10'
                                            src='/avatar.png'
                                            alt=''
                                            width='1024'
                                            height='1024'
                                            unoptimized
                                        />
                                        TRUNG NGUYEN
                                    </>
                                }
                                extraClasses={`hover:bg-[#1E1E1E] h-full whitespace-nowrap p-4 gap-2 text-2xl font-black text-white  ${styleTemplates.navlinkHover}`}
                            />
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
                            className={`${isMobile && mobileCollapsed ? 'hidden' : ''} flex h-full flex-col xl:flex-row`}>
                            <Link
                                isNavLink={true}
                                href='/services'
                                body='Services'
                                extraClasses={`h-full p-4 ${styleTemplates.navlinkHover}`}
                            />
                            <Link
                                isNavLink={true}
                                href='/portfolio'
                                body='Portfolio'
                                extraClasses={`h-full p-4 ${styleTemplates.navlinkHover}`}
                            />
                            <Link
                                isNavLink={true}
                                href='/blog'
                                body='Blog'
                                extraClasses={`h-full p-4 ${styleTemplates.navlinkHover}`}
                            />
                        </ul>
                    </div>
                    {/* Nav - Right */}
                    <ul
                        className={`${isMobile && mobileCollapsed ? 'hidden' : ''} flex h-[72px] h-full flex-col xl:me-4 xl:flex-row xl:items-center`}>
                        <Searchbar />
                        <li
                            className={
                                'ms-6 hidden items-center justify-center xl:flex'
                            }>
                            <hr
                                className={`border ${styleDefaults.borderColor} py-3`}
                            />
                        </li>
                        <li>
                            <ul
                                className={`flex h-full flex-col-reverse xl:flex-row`}>
                                <Link
                                    isNavLink={true}
                                    href='/contact'
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
                                    extraClasses={`h-full p-4 ${styleTemplates.navlinkHover}`}
                                />
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
                                                    CONTACT
                                                </div>
                                            }
                                            extraClasses={`${styleTemplates.button} rounded-none xl:rounded-lg px-4 py-2 font-black`}
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
                    extraClasses='flex-col-reverse'>
                    <Row extraClasses='flex flex-col gap-1 items-center justify-center xl:items-start p-4 whitespace-nowrap'>
                        <h2 className='text-xl font-black xl:text-3xl'>
                            DEVELOPER, ARTIST, DESIGNER
                        </h2>
                        <h1 className='text-4xl font-black xl:text-7xl'>
                            TRUNG NGUYEN
                        </h1>
                        <p className='text-sm font-medium xl:text-2xl'>
                            Hi—I'm Trung, a web developer; and business student.
                        </p>
                        <div className='mt-4 flex w-full flex-col gap-4 xl:mx-0 xl:flex-row'>
                            <a
                                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-black text-black ${styleTemplates.button} xl:text-lg`}
                                href='/hire'>
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 512 512'
                                    height='2rem'
                                    width='2rem'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z'></path>
                                    <path d='M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z'></path>
                                </svg>
                                HIRE ME
                            </a>
                            <ul>
                                <Link
                                    isNavLink={true}
                                    href='/portfolio'
                                    body={
                                        <>
                                            VIEW MY WORK
                                            <span className='ms-2 text-2xl transition-transform group-hover:translate-x-1'>
                                                →
                                            </span>
                                        </>
                                    }
                                    extraClasses='flex items-center justify-center h-full text-white group rounded-lg px-3 py-1.5 font-black xl:text-lg'
                                />
                            </ul>
                        </div>
                    </Row>
                    <Row extraClasses={`${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_room.glb'
                            lampIntensity={16}
                            cameraFOV={60}
                        />
                        <div className={styleTemplates.threeGradient}></div>
                    </Row>
                </SectionGeneric>
                {/* Row 2 */}
                <SectionGeneric
                    id={2}
                    extraClasses='flex-col'>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-blue-700' : ''} scale-x-[-1] ${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_suzanne.glb'
                            lampIntensity={1}
                            cameraFOV={90}
                        />
                        <div className={styleTemplates.threeGradient}></div>
                    </Row>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-4 text-sm font-medium xl:items-center xl:items-start xl:text-2xl ${testBackgrounds ? 'bg-yellow-700' : ''} p-4`}>
                        <h1 className='text-4xl font-black whitespace-nowrap xl:text-7xl'>
                            ABOUT ME
                        </h1>
                        <span className='-mb-2 text-xl font-black xl:text-3xl'>
                            PASSIONS
                        </span>
                        <ul className='ms-4 flex list-inside list-disc flex-col'>
                            <li>UI / UX</li>
                            <li>Web & Software Development</li>
                            <li>Art & Design</li>
                            <li>Computer Programming</li>
                        </ul>
                        <span className='mt-4 -mb-2 text-xl font-black xl:text-3xl'>
                            EDUCATION
                        </span>
                        <ul className='flex list-inside list-disc flex-col gap-4'>
                            <li className='-mb-2 list-none font-bold'>
                                BACHELOR OF APPLIED SCIENCE (BAS)
                            </li>
                            <li className='ms-2 flex items-center gap-2'>
                                <svg
                                    className='fill-yellow-400'
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 512 512'
                                    height='24px'
                                    width='24px'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                </svg>
                                Applied Business Management
                            </li>
                            <li className='-mb-2 list-none font-bold'>
                                ASSOCIATE OF APPLIED SCIENCE (AAS)
                            </li>
                            <li className='ms-2 flex items-center gap-2'>
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
                            </li>
                        </ul>
                        {/* <span className='mt-4 -mb-2 text-xl font-black xl:text-3xl'>
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
                    extraClasses='flex-col-reverse xl:flex-col'>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-2 xl:items-center xl:items-start ${testBackgrounds ? 'bg-pink-700' : ''} p-4`}>
                        <h1 className='text-4xl font-black xl:text-7xl'>
                            SERVICES
                        </h1>
                        <div className='flex flex-col gap-8 text-sm font-medium xl:text-2xl'>
                            I provide these services:
                            <ul className='flex flex-col gap-4'>
                                {/* Web Dev / Web Design */}
                                <li>
                                    <span className='text-xl font-black whitespace-nowrap xl:text-3xl'>
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
                                    <span className='text-xl font-black whitespace-nowrap xl:text-3xl'>
                                        SOFTWARE & MOBILE DEV
                                    </span>
                                    <ul className='ms-4 flex list-inside list-disc flex-col'>
                                        <li>React Native</li>
                                        <li>Electron.js</li>
                                    </ul>
                                </li>
                                {/* UI / UX & ART */}
                                <li>
                                    <span className='text-xl font-black xl:text-3xl'>
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
                            <div className='-mt-2 flex w-full flex-col gap-4 whitespace-nowrap xl:mx-0 xl:flex-row'>
                                <a
                                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-black text-black ${styleTemplates.button} xl:text-lg`}
                                    href='/hire'>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        height='2rem'
                                        width='2rem'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z'></path>
                                        <path d='M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z'></path>
                                    </svg>
                                    HIRE ME
                                </a>
                                <ul>
                                    <Link
                                        isNavLink={true}
                                        href='/portfolio'
                                        body={
                                            <>
                                                MORE SKILLS
                                                <span className='ms-2 text-2xl transition-transform group-hover:translate-x-1'>
                                                    →
                                                </span>
                                            </>
                                        }
                                        extraClasses='flex items-center justify-center h-full text-white group rounded-lg px-3 py-1.5 font-black xl:text-lg'
                                    />
                                </ul>
                            </div>
                        </div>
                    </Row>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-green-700' : ''} ${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_suzanne.glb'
                            lampIntensity={1}
                            cameraFOV={90}
                        />
                        <div className={styleTemplates.threeGradient}></div>
                    </Row>
                </SectionGeneric>
                {/* Row 4 */}
                <SectionGeneric
                    id={4}
                    extraClasses='flex-col pb-[calc((100vh-108px)/4)]'>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-purple-700' : ''} scale-x-[-1] ${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_suzanne.glb'
                            lampIntensity={1}
                            cameraFOV={90}
                        />
                        <div className={styleTemplates.threeGradient}></div>
                    </Row>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-4 xl:items-center xl:items-start ${testBackgrounds ? 'bg-cyan-700' : ''} p-4`}>
                        <h1 className='text-4xl font-black xl:text-7xl'>
                            CONTACT
                        </h1>
                        <p className='xl: text-sm font-medium whitespace-nowrap xl:text-2xl'>
                            Want to hire me or have questions?
                        </p>
                        <p className='xl: text-sm font-medium whitespace-nowrap xl:text-2xl'>
                            Feel free to contact me by:
                        </p>
                        <ul className='ms-4 flex list-inside list-disc flex-col'>
                            <li className='xl: text-sm font-medium xl:text-2xl'>
                                Email
                            </li>
                            <li className='xl: text-sm font-medium xl:text-2xl'>
                                Phone
                            </li>
                            <li className='xl: text-sm font-medium xl:text-2xl'>
                                LinkedIn
                            </li>
                        </ul>
                        <a
                            className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-black text-black ${styleTemplates.button} xl:text-lg`}
                            href='/hire'>
                            <svg
                                stroke='currentColor'
                                fill='currentColor'
                                strokeWidth='0'
                                viewBox='0 0 512 512'
                                height='2rem'
                                width='2rem'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z'></path>
                                <path d='M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z'></path>
                            </svg>
                            CONTACT ME
                        </a>
                    </Row>
                </SectionGeneric>
            </main>
            {/* Footer */}
            <footer
                className={`border-t ${styleDefaults.backgroundColorSecondary} ${styleDefaults.borderColor}`}>
                <ul className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 pt-16 pb-[25vh]'>
                    <li className='size-full'>
                        <ul className='flex items-center justify-between'>
                            <li>Lorem ipsum.</li>
                            <ul className='flex items-center gap-4'>
                                <li>Lorem ipsum.</li>
                                <li>
                                    <hr
                                        className={`border py-4 ${styleDefaults.borderColor}`}
                                    />
                                </li>
                                <ScrollToTop />
                            </ul>
                        </ul>
                    </li>
                    <li className='size-full'>
                        <hr className={`border ${styleDefaults.borderColor}`} />
                    </li>
                    <li className='size-full'>
                        <ul className='flex flex-col justify-between gap-4 xl:flex-row xl:items-center xl:gap-0'>
                            <li>
                                <ul className='flex flex-col gap-2'>
                                    <li>Copyright &copy; 2025</li>
                                    <Link
                                        isNavLink={true}
                                        href='/privacy'
                                        body='Privacy Policy'
                                    />
                                </ul>
                            </li>
                            <li>Lorem ipsum.</li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </>
    );
}
