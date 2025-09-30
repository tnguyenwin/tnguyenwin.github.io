'use client';

import { styleDefaults, styleTemplates } from '../globals';
import { useRef, useState, useEffect } from 'react';
import Brand from './Brand';
import Link from './Link';

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const refFooter = useRef(null);
    const handleZoom2 = () =>
        refFooter.current.style.setProperty(
            '--base-zoom',
            Math.min(window.devicePixelRatio, 1)
        );

    useEffect(() => {
        handleZoom2();

        window.addEventListener('resize', handleZoom2);

        setMounted(true);

        return () => window.removeEventListener('resize', handleZoom2);
    }, []);

    return !mounted && refFooter.current ? null : (
        <footer
            ref={refFooter}
            className={`border-t text-xs shadow-[0_-1px_2px_0_var(--tw-shadow-color,_#0000000d),0_-2px_4px_-2px_var(--tw-shadow-color,#0000001a)] dark:shadow-[0_-4px_6px_-1px_var(--tw-shadow-color,_#0000000d)] ${styleDefaults.shadowColor} ${styleDefaults.borderColor}`}>
            {/* <ul className='container mx-auto flex max-w-4xl flex-col items-center justify-center p-4 pb-0 lg:flex-row lg:items-start'> */}
            <ul className='container mx-auto flex max-w-4xl flex-col justify-between p-4 lg:flex-row'>
                {/* Brand & Policy */}
                <li>
                    <ul className='flex flex-col'>
                        <Brand
                            textSizeImage='size-6'
                            textSizeBody='text-lg'
                            extraClasses='!p-2'
                        />
                        <li>
                            <ul className='flex items-center justify-center gap-2 px-2 lg:justify-start'>
                                <li>Copyright &copy; 2025</li>
                                <li>
                                    <ul className='flex items-center gap-[0.25rem]'>
                                        {/* Email */}
                                        <Link
                                            isNavLink={false}
                                            href='mailto:tnguyen.workspace@gmail.com'
                                            body={
                                                <svg
                                                    width='16px'
                                                    height='16px'
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
                                            extraClasses={`hover:border-[#BFBFBF] dark:hover:border-[#404040] border-2 ${styleDefaults.borderColor} shadow-sm ${styleDefaults.shadowColor} rounded-full h-full p-1 ${styleTemplates.navlinkHover}`}
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
                                                    width='16px'
                                                    height='16px'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
                                                </svg>
                                            }
                                            extraClasses={`hover:border-[#BFBFBF] dark:hover:border-[#404040] border-2 ${styleDefaults.borderColor} shadow-sm ${styleDefaults.shadowColor} rounded-full h-full p-1 ${styleTemplates.navlinkHover}`}
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
                                                    width='16px'
                                                    height='16px'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                                                </svg>
                                            }
                                            extraClasses={`hover:border-[#BFBFBF] dark:hover:border-[#404040] border-2 ${styleDefaults.borderColor} shadow-sm ${styleDefaults.shadowColor} rounded-full h-full p-1 ${styleTemplates.navlinkHover}`}
                                        />
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Branding / Legal / Contact */}
                        <li>
                            <ul className='flex justify-center gap-1 px-1 lg:justify-start'>
                                {/* Legal */}
                                <Link
                                    isNavLink
                                    href='/legal'
                                    body='Legal'
                                    extraClasses={`h-full px-1 py-2 ${styleTemplates.navlinkHover}`}
                                />
                                {/* Horizontal Line */}
                                <li
                                    className={
                                        'hidden items-center justify-center lg:flex'
                                    }>
                                    <hr
                                        className={`border ${styleDefaults.borderColor} py-2`}
                                    />
                                </li>
                                {/* Privacy */}
                                <Link
                                    isNavLink
                                    href='/privacy'
                                    body='Privacy'
                                    extraClasses={`h-full px-1 py-2 ${styleTemplates.navlinkHover}`}
                                />
                                {/* Horizontal Line */}
                                <li
                                    className={
                                        'hidden items-center justify-center lg:flex'
                                    }>
                                    <hr
                                        className={`border ${styleDefaults.borderColor} py-2`}
                                    />
                                </li>
                                {/* Cookies */}
                                <Link
                                    isNavLink
                                    href='/cookies'
                                    body='Cookies'
                                    extraClasses={`h-full px-1 py-2 ${styleTemplates.navlinkHover}`}
                                />
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* Webpages */}
                <li>
                    <ul className='flex flex-col items-center p-4 pb-0 lg:items-start lg:pb-4'>
                        <li className='-mt-2 h-full px-1 py-2 font-bold'>
                            Sitemap
                        </li>
                        <Link
                            isNavLink
                            href='/'
                            body='Home'
                            extraClasses={`h-full px-1 py-2 -mt-2 ${styleTemplates.navlinkHover}`}
                        />
                        <Link
                            isNavLink
                            href='/portfolio'
                            body='Portfolio'
                            extraClasses={`h-full px-1 py-2 -mt-2 ${styleTemplates.navlinkHover}`}
                        />
                        <Link
                            isNavLink
                            href='/skills'
                            body='Skills'
                            extraClasses={`h-full px-1 py-2 -mt-2 ${styleTemplates.navlinkHover}`}
                        />
                        {/* <Link
                            isNavLink
                            href='/resume'
                            body='Resume'
                            extraClasses={`h-full px-1 py-2 -mt-2 ${styleTemplates.navlinkHover}`}
                        /> */}
                        <Link
                            isNavLink
                            href='/#about'
                            body='About'
                            extraClasses={`h-full px-1 py-2 -mt-2 ${styleTemplates.navlinkHover}`}
                        />
                        <Link
                            isNavLink
                            href='/#services'
                            body='Services'
                            extraClasses={`h-full px-1 py-2 -mt-2 ${styleTemplates.navlinkHover}`}
                        />
                        <Link
                            isNavLink
                            href='/blog'
                            body='Blog'
                            extraClasses={`h-full px-1 py-2 -mt-2 ${styleTemplates.navlinkHover}`}
                        />
                    </ul>
                </li>
            </ul>
            <hr
                className={`mx-auto w-1/2 lg:w-1/4 ${styleDefaults.borderColor}`}
            />
            {/* Made With */}
            <ul className='flex flex-col items-center p-8'>
                <li className='font-bold'>Website Made With Next.js</li>
                <Link
                    isNavLink
                    href='https://github.com/tnguyen-win/tnguyen-win.github.io'
                    target='_blank'
                    body={
                        <>
                            View Source Code
                            <svg
                                width='10px'
                                height='10px'
                                viewBox='0 0 512 512'
                                stroke='currentColor'
                                fill='currentColor'
                                strokeWidth='0'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z'></path>
                            </svg>
                        </>
                    }
                    extraClasses={`gap-2 h-full p-1 pb-2 ${styleTemplates.navlinkHover}`}
                />
            </ul>
        </footer>
    );
}
