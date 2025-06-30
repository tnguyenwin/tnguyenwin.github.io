'use client';

import { geistMono } from './layout.jsx';
import { styleDefaults, styleTemplates } from './globals.jsx';
import Navbar from './components/Navbar.jsx';
import Image from 'next/image';
import Link from './components/Link.jsx';
import SectionGeneric, { Row } from './components/Section.jsx';
import R3F from './components/R3F.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function Home() {
    const testBackgrounds = false;

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                {/* Row 1 */}
                <SectionGeneric
                    id={1}
                    extraClasses='flex-col-reverse'>
                    <Row extraClasses='flex flex-col gap-1 items-center justify-center lg:items-start w-full lg:w-auto p-4'>
                        <h2 className='text-lg font-black xl:text-3xl'>
                            DEVELOPER, ARTIST, DESIGNER
                        </h2>
                        {/* bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] */}
                        {/* <h1 className='text-4xl font-black lg:text-7xl'> */}
                        {/* <h1 className='bg-gradient-to-t from-[rgb(28,28,31)] to-[rgb(15,15,19)] bg-clip-text text-4xl font-black font-extrabold text-transparent lg:text-7xl'> */}
                        {/* <h1 className='bg-[radial-gradient(at_50%_50%,_rgb(56,56,62)_50%,_rgb(30,30,38)_75%,_rgb(56,56,62)_100%)] bg-clip-text text-4xl font-black text-transparent [-webkit-text-stroke:2px_rgb(60,60,76)] [text-stroke:2px_rgb(60,60,76)] lg:text-7xl'> */}
                        {/* <h1 className='bg-linear-to-b from-white from-50% to-[rgb(50%,50%,50%)] to-100% bg-clip-text text-4xl font-black text-transparent lg:text-7xl'> */}
                        <h1 className='text-4xl font-black lg:text-5xl xl:text-7xl'>
                            TRUNG NGUYEN
                        </h1>
                        <p className='text-sm font-medium lg:text-lg xl:text-2xl'>
                            Hi—I'm Trung, a web developer; and business student.
                        </p>
                        <div className='mt-4 flex w-full flex-col gap-4 lg:mx-0 lg:flex-row'>
                            <a
                                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 ${geistMono.className} font-black text-black ${styleTemplates.button} lg:text-lg`}
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
                                    extraClasses='gap-2 justify-center h-full group rounded-lg px-3 py-1.5 font-black lg:text-lg'
                                />
                            </ul>
                        </div>
                    </Row>
                    <Row extraClasses={styleTemplates.threeCanvas}>
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
                    extraClasses='flex-col'>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-blue-700' : ''} ${styleTemplates.threeCanvas}`}>
                        <div className='lg:size-[calc(384px)]'>
                            <Image
                                // className='rounded-[2vw] border-transparent shadow-lg ${styleDefaults.shadowColor} outline outline-[rgb(60,60,76)] saturate-[67.5%] lg:border-32'
                                className='p-8 lg:rounded-[4vw]'
                                src='/profile.jpg'
                                alt=''
                                width='384'
                                height='384'
                            />
                        </div>
                        {/* <div className={styleTemplates.threeGradient}></div> */}
                    </Row>
                    <Row
                        extraClasses={`flex flex-col items-start justify-center gap-4 text-sm font-medium lg:text-2xl ${testBackgrounds ? 'bg-yellow-700' : ''} w-full lg:w-auto p-4`}>
                        <ul className='mx-auto flex flex-col gap-2'>
                            <li className='text-4xl font-black whitespace-nowrap lg:text-7xl'>
                                ABOUT ME
                            </li>
                            <li className='mt-2 text-xl font-black lg:text-3xl'>
                                PASSIONS
                            </li>
                            <li>
                                <ul className='ms-4 flex list-inside list-disc flex-col'>
                                    <li>UI / UX</li>
                                    <li>Web & Software Development</li>
                                    <li>Art & Design</li>
                                    <li>Computer Programming</li>
                                </ul>
                            </li>
                            <li className='mt-4 text-xl font-black lg:text-3xl'>
                                EDUCATION
                            </li>
                            <li className='list-none font-bold'>
                                ASSOCIATE OF APPLIED SCIENCE (AAS)
                            </li>
                            <li className='flex gap-2'>
                                {/* <div className='absolute top-0 left-[1rem] flex h-full items-center gap-2 lg:top-[0.25rem] lg:left-[1.5rem]'> */}
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
                                {/* </div> */}
                            </li>
                            <li className='mt-4 list-none font-bold'>
                                BACHELOR OF APPLIED SCIENCE (BAS)
                            </li>
                            <li className='flex gap-2'>
                                {/* <div className='absolute top-0 left-[1rem] flex items-center gap-2 lg:top-[0.25rem] lg:left-[1.5rem]'> */}
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
                                {/* </div> */}
                            </li>
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
                        </ul>
                    </Row>
                </SectionGeneric>
                {/* Row 3 */}
                <SectionGeneric
                    id={3}
                    extraClasses='flex-col-reverse lg:flex-col'>
                    <Row
                        extraClasses={`flex flex-col justify-center gap-8 ${testBackgrounds ? 'bg-pink-700' : ''} w-full lg:w-auto p-4`}>
                        <div className='mx-auto flex flex-col gap-2'>
                            <h1 className='text-4xl font-black lg:text-7xl'>
                                SERVICES
                            </h1>
                            <div className='flex w-full flex-col items-start gap-8 text-sm font-medium lg:text-2xl'>
                                <span className='mt-1'>
                                    I can provide these services:
                                </span>
                                <ul className='flex flex-col gap-2'>
                                    {/* Web Dev / Web Design */}
                                    <li className='text-xl font-black whitespace-nowrap lg:text-3xl'>
                                        WEB DEV / WEB DESIGN
                                    </li>
                                    <li className='font-bold'>
                                        FRONTEND & BACKEND
                                    </li>
                                    <li className='list-none'>
                                        <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                            <li>JSX, React.js & Next.js</li>
                                            <li>ASP.NET</li>
                                            <li>Plain JS</li>
                                        </ul>
                                    </li>
                                    <li className='mt-4 font-bold'>
                                        SITE BUILDERS
                                    </li>
                                    <li className='list-none'>
                                        <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                            <li>Wix</li>
                                            <li>WordPress</li>
                                            <li>Framer</li>
                                            <li>Google Sites</li>
                                        </ul>
                                    </li>
                                    {/* Software & Mobile Dev */}
                                    <li className='mt-4 text-xl font-black whitespace-nowrap lg:text-3xl'>
                                        SOFTWARE & MOBILE DEV
                                    </li>
                                    <li className='flex flex-col gap-2'>
                                        <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                            <li>React Native</li>
                                            <li>Electron.js</li>
                                        </ul>
                                    </li>
                                    {/* UI / UX & ART */}
                                    <li className='mt-4 text-xl font-black lg:text-3xl'>
                                        UI / UX & ART
                                    </li>
                                    <li className='flex flex-col gap-2'>
                                        <ul className='ms-4 flex list-inside list-disc flex-col gap-2'>
                                            <li>UI mockups & wireframes</li>
                                            <li>3D models & scenes</li>
                                            <li className='whitespace-nowrap'>
                                                Logos, icons, avatars & banners
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='-mt-2 flex w-full flex-col gap-4 whitespace-nowrap lg:mx-0 lg:flex-row'>
                            <a
                                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 ${geistMono.className} font-black text-black ${styleTemplates.button} lg:text-lg`}
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
                                    extraClasses='gap-2 justify-center h-full group rounded-lg px-3 py-1.5 font-black lg:text-lg'
                                />
                            </ul>
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
                        {/* <div className={styleTemplates.threeGradient}></div> */}
                    </Row>
                </SectionGeneric>
                {/* Row 4 */}
                <SectionGeneric
                    id={4}
                    extraClasses='flex-col'>
                    <Row
                        extraClasses={`${testBackgrounds ? 'bg-purple-700' : ''} scale-x-[-1] ${styleTemplates.threeCanvas}`}>
                        <R3F
                            testBackgrounds={testBackgrounds}
                            path='./model_suzanne.glb'
                            lampIntensity={1}
                            cameraFOV={90}
                        />
                        {/* <div className={styleTemplates.threeGradient}></div> */}
                    </Row>
                    <Row
                        extraClasses={`flex flex-col justify-center gap-4 ${testBackgrounds ? 'bg-cyan-700' : ''} w-full lg:w-auto p-4`}>
                        <div className='mx-auto flex flex-col gap-4'>
                            <h1 className='text-4xl font-black lg:text-7xl'>
                                CONTACT
                            </h1>
                            <p className='text-sm font-medium lg:text-2xl'>
                                Want to hire me or have questions?
                            </p>
                            <p className='text-sm font-medium lg:text-2xl'>
                                Message me on LinkedIn.
                            </p>
                        </div>
                        <a
                            className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 ${geistMono.className} font-black text-black lg:w-auto ${styleTemplates.button} lg:text-lg`}
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
                        <p
                            className={`${styleDefaults.textColorSecondary} mx-auto text-[12px] lg:text-base`}>
                            <span className='font-bold'>NOTE</span>: Email and
                            Phone Number available upon request.
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
