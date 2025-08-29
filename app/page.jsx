'use client';

import { styleDefaults, styleTemplates } from './globals';
import Navbar from './components/Navbar';
import SectionGeneric, { Row } from './components/Section';
import Image from 'next/image';
import Link from './components/Link';
import R3F, { Credits } from './components/R3F';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                {/* Row 1 */}
                <SectionGeneric
                    id='landing'
                    extraClasses='flex-col-reverse'
                    hasViewportHeight={false}>
                    <Row extraClasses='flex w-full lg:w-auto flex-col gap-1 items-center justify-center mt-8 mb-4 lg:m-0'>
                        {/* Profile Image */}
                        <Image
                            className={`mb-3 size-[192px] rounded-full border shadow-lg ${styleDefaults.shadowColor} ${styleDefaults.borderColor} lg:size-[192px]`}
                            src='/global/profile_2.png'
                            alt='Picture of Myself'
                            width='800'
                            height='800'
                        />
                        {/* Text */}
                        <h2 className='text-lg font-black lg:text-2xl xl:text-3xl'>
                            DEVELOPER, ARTIST, DESIGNER
                        </h2>
                        <h1 className='text-4xl font-black lg:text-5xl xl:text-7xl'>
                            TRUNG NGUYEN
                        </h1>
                        <p className='w-[calc(100vw-12rem)] text-center text-sm font-medium lg:text-lg xl:text-2xl'>
                            Hi—I'm Trung, an aspiring web designer/developer and
                            marketer.
                        </p>
                        {/* Buttons */}
                        <div
                            className={`flex w-full flex-col gap-2 lg:mx-0 lg:w-max lg:flex-row lg:gap-4 ${styleDefaults.backgroundColor} py-4`}>
                            <a
                                className={styleTemplates.buttonPrimary}
                                href='/portfolio'>
                                <svg
                                    className='size-[10px] lg:size-[20px]'
                                    height='20px'
                                    width='20px'
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 512 512'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z'></path>
                                </svg>
                                My Portfolio
                            </a>
                            <a
                                className={styleTemplates.buttonSecondary}
                                href='/#services'>
                                <svg
                                    className='size-[8px] lg:size-[16px]'
                                    width='16px'
                                    height='16px'
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 512 512'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'></path>
                                </svg>
                                Provided Services
                            </a>
                        </div>
                        <p
                            className={`mx-auto border-s-3 ps-3 text-[10px] lg:mx-0 lg:text-sm`}>
                            My name is pronounced&nbsp;&nbsp;&nbsp;→
                            &nbsp;&nbsp;Troong Win
                        </p>
                        {/* Social  Links */}
                        <ul className='mt-2 mb-4 flex items-center gap-2'>
                            {/* Email */}
                            <Link
                                isNavLink={false}
                                href='mailto:wip.abc@gmail.com'
                                body={
                                    <svg
                                        width='28px'
                                        height='28px'
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fill='none'
                                            d='M0 0h24v24H0z'></path>
                                        <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'></path>
                                    </svg>
                                }
                                extraClasses={`hover:border-[#BFBFBF] dark:hover:border-[#404040] border-2 ${styleDefaults.borderColor} shadow-lg ${styleDefaults.shadowColor} rounded-full h-full p-2 ${styleTemplates.navlinkHover}`}
                            />
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
                                        width='24px'
                                        height='24px'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
                                    </svg>
                                }
                                extraClasses={`hover:border-[#BFBFBF] dark:hover:border-[#404040] border-2 ${styleDefaults.borderColor} shadow-lg ${styleDefaults.shadowColor} rounded-full h-full p-2 ${styleTemplates.navlinkHover}`}
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
                                        width='24px'
                                        height='24px'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                                    </svg>
                                }
                                extraClasses={`hover:border-[#BFBFBF] dark:hover:border-[#404040] border-2 ${styleDefaults.borderColor} shadow-lg ${styleDefaults.shadowColor} rounded-full h-full p-2 ${styleTemplates.navlinkHover}`}
                            />
                        </ul>
                    </Row>
                </SectionGeneric>
                {/* Row 2 */}
                <SectionGeneric
                    id='about'
                    extraClasses='flex-col'
                    hasViewportHeight={false}>
                    <Row extraClasses={styleTemplates.threeCanvas}>
                        <div className='size-full lg:size-[calc(384px)]'>
                            <Image
                                className='size-full rounded-[16vw] p-8 saturate-[87.5%] lg:rounded-[3vw] dark:saturate-[75%]'
                                src='/global/profile_1.jpg'
                                alt='Picture of Myself'
                                width='384'
                                height='384'
                            />
                        </div>
                        <Credits
                            credits={[
                                'transition bottom-[-14px] lg:bottom-[-16px] lg:scale-x-0 group-hover:scale-x-100',
                                <>
                                    <p
                                        className={`${styleDefaults.textColorSecondary} mx-auto ps-2 pt-2 text-[10px] lg:mx-0 lg:text-sm`}>
                                        <span className='font-bold'>
                                            CREDITS:
                                        </span>
                                        &nbsp; Picture Taken of Myself
                                    </p>
                                </>
                            ]}
                        />
                    </Row>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-4 text-sm font-medium lg:text-2xl w-full lg:w-auto px-4 py-8`}>
                        <ul className='flex flex-col'>
                            <li className='text-4xl font-black whitespace-nowrap lg:text-7xl'>
                                ABOUT ME
                            </li>
                            <li className='my-2 text-2xl font-black lg:text-3xl'>
                                PASSIONS
                            </li>
                            <li>
                                <ul className='ms-4 flex list-inside list-disc flex-col'>
                                    <li>UI / UX</li>
                                    <li>Web, Software & Game Development</li>
                                    <li>Art & Design</li>
                                    <li>Programming</li>
                                    <li>Marketing</li>
                                </ul>
                            </li>
                            <li className='mt-4 text-2xl font-black lg:text-3xl'>
                                EDUCATION
                            </li>
                            <li className='mb-2 text-xl font-black lg:text-2xl'>
                                DEGREES
                            </li>
                            <li>
                                <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                    <li>
                                        <span className='me-1 rounded-lg border border-green-400 bg-green-100 px-1 py-px text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                            AAS
                                        </span>{' '}
                                        Software Development
                                    </li>
                                    <li>
                                        <span className='me-1 rounded-lg border border-yellow-400 bg-yellow-100 px-1 py-px text-yellow-600 dark:border-yellow-600 dark:bg-yellow-900 dark:text-yellow-300'>
                                            BAS
                                        </span>{' '}
                                        Applied Business Management
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-4 mb-2 text-xl font-black lg:text-2xl'>
                                CERTIFICATES
                            </li>
                            <li>
                                <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                    <li>
                                        <span className='me-1 rounded-lg border border-green-400 bg-green-100 px-1 py-px text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                            CPC
                                        </span>{' '}
                                        Front-End Web Development
                                    </li>
                                    <li>
                                        <span className='me-1 rounded-lg border border-green-400 bg-green-100 px-1 py-px text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                            CPC
                                        </span>{' '}
                                        Database Specialist
                                    </li>
                                    <li>
                                        <span className='me-1 rounded-lg border border-green-400 bg-green-100 px-1 py-px text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                            CoC
                                        </span>{' '}
                                        Mobile Application Development
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Row>
                </SectionGeneric>
                {/* Row 3 */}
                <SectionGeneric
                    id='services'
                    extraClasses='flex-col-reverse lg:flex-col'
                    hasViewportHeight={false}>
                    <Row
                        extraClasses={`flex flex-col justify-center gap-4 w-full lg:w-auto py-8`}>
                        <div className='flex flex-col px-4 lg:p-0'>
                            <h1 className='mb-2 text-4xl font-black lg:text-7xl'>
                                SERVICES
                            </h1>
                            <ul className='flex w-full list-inside list-disc flex-col items-start text-sm font-medium lg:text-2xl'>
                                {/* APP DEVELOPMENT */}
                                <li className='mb-2 list-none text-xl font-black whitespace-nowrap lg:text-3xl'>
                                    APP DEVELOPMENT
                                </li>
                                <li className='ms-4 list-none'>
                                    <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                        <li>
                                            Web, Mobile, Desktop{' '}
                                            <sup className='ms-2 list-none rounded-lg border border-green-400 bg-green-100 px-1 py-px text-[8px] text-green-600 lg:text-sm dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                                Including Websites
                                            </sup>
                                        </li>
                                        <li>
                                            Frontend-only, Backend-only or
                                            Hybrid
                                        </li>
                                        <li>
                                            Website Builder-only, Code-only, or
                                            Hybrid
                                        </li>
                                    </ul>
                                </li>
                                {/* PRODUCT MARKETING */}
                                <li className='mt-4 mb-2 list-none text-xl font-black whitespace-nowrap lg:text-3xl'>
                                    PRODUCT MARKETING
                                </li>
                                <li className='ms-4 list-none'>
                                    <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                        <li>2D or 3D</li>
                                        <li>Bitmap, Vector or Video</li>
                                    </ul>
                                </li>
                                {/* LOGO CREATION */}
                                <li className='mt-4 mb-2 list-none text-xl font-black whitespace-nowrap lg:text-3xl'>
                                    BRAND DESIGN
                                </li>
                                <li className='ms-4 list-none'>
                                    <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                        <li>2D or 3D</li>
                                        <li>Bitmap, Vector or Video</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <ul className='mt-2 flex w-full flex-col gap-2 whitespace-nowrap lg:mx-0 lg:flex-row lg:gap-4'>
                            <li>
                                <a
                                    className={styleTemplates.buttonPrimary}
                                    href='/skills'>
                                    <svg
                                        className='size-[10px] lg:size-[16px]'
                                        width='16px'
                                        height='16px'
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'></path>
                                    </svg>
                                    My Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styleTemplates.buttonSecondary}
                                    href='/#contact'>
                                    <svg
                                        className='size-[10px] lg:size-[24px]'
                                        width='24px'
                                        height='24px'
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 256 256'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l40-40,15.08-15.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41Zm-41.87,41.86L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm-25.72,34.8a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z'></path>
                                    </svg>
                                    Hire Me
                                </a>
                            </li>
                        </ul>
                    </Row>
                    <Row extraClasses={`${styleTemplates.threeCanvas}`}>
                        <R3F
                            extraClasses='saturate-75 brightness-125 dark:brightness-100 dark:saturate-100'
                            path='./models/model_room_prod.glb'
                            credits={[
                                'transition bottom-[-12px]  lg:bottom-[-16px] lg:scale-x-0 group-hover:scale-x-100',
                                <>
                                    <p
                                        className={`${styleDefaults.textColorSecondary} mx-auto border-t-2 ${styleDefaults.borderColor} ps-2 pt-2 text-[10px] lg:mx-0 lg:text-sm`}>
                                        <span className='font-bold'>
                                            CREDITS:
                                        </span>
                                        &nbsp; Basic Room Made w/ Blender by Me
                                    </p>
                                </>
                            ]}
                        />
                    </Row>
                </SectionGeneric>
                {/* Row 4 */}
                <SectionGeneric
                    id='contact'
                    extraClasses='flex-col'
                    hasViewportHeight={false}>
                    <Row
                        extraClasses={`scale-x-[-1] ${styleTemplates.threeCanvas}`}>
                        <R3F
                            extraClasses='saturate-75 dark:saturate-100'
                            path='./models/model_suzanne_prod.glb'
                            credits={[
                                'bottom-[-12px]  lg:bottom-[-16px]  transition transition -scale-x-100 lg:-scale-x-0 group-hover:-scale-x-100',
                                <>
                                    <p
                                        className={`${styleDefaults.textColorSecondary} mx-auto border-t-2 ${styleDefaults.borderColor} ps-2 pt-2 text-[10px] lg:mx-0 lg:text-sm`}>
                                        <span className='font-bold'>
                                            CREDITS:
                                        </span>
                                        &nbsp; Masked Suzanne Made w/ Blender by
                                        Me
                                    </p>
                                </>
                            ]}
                        />
                    </Row>
                    <Row
                        extraClasses={`flex flex-col justify-center gap-4 w-full lg:w-auto py-8`}>
                        <div className='flex flex-col gap-2 px-4'>
                            <h1 className='text-4xl font-black lg:text-7xl'>
                                CONTACT
                            </h1>

                            <p className='text-sm font-medium lg:text-2xl'>
                                Interested in hiring me or have questions?
                            </p>
                            <p className='text-sm font-medium lg:text-2xl'>
                                Reach out to me:
                            </p>
                        </div>
                        <ul className='flex w-full flex-col gap-2 whitespace-nowrap lg:mx-0 lg:flex-row lg:gap-4'>
                            <li>
                                <a
                                    className={styleTemplates.buttonPrimary}
                                    href='mailto:wip.abc@gmail.com'>
                                    <svg
                                        className='size-[12px] lg:size-[24px]'
                                        width='24px'
                                        height='24px'
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fill='none'
                                            d='M0 0h24v24H0z'></path>
                                        <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'></path>
                                    </svg>
                                    Email Address
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styleTemplates.buttonSecondary}
                                    href='https://linkedin.com/in/trung-nguyen-business'
                                    target='_blank'>
                                    <svg
                                        className='size-[10px] lg:size-[20px]'
                                        width='20px'
                                        height='20px'
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 448 512'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                        <p
                            className={`mx-auto border-s-3 ps-3 text-[10px] lg:mx-0 lg:mt-2 lg:text-sm`}>
                            Phone Number&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;Available
                            upon request
                        </p>
                    </Row>
                </SectionGeneric>
            </main>
            {/* Footer */}
            <Footer />
            {/* Scroll To Top */}
            <ScrollToTop />
        </>
    );
}
