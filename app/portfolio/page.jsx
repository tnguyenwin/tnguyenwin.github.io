'use client';

import { styleDefaults, styleTemplates } from '../globals';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SectionGeneric, { Row } from '../components/Section';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Portfolio() {
    const Button = ({ isPrimary, href }) => {
        return (
            <a
                className={`${isPrimary ? styleTemplates.buttonPrimary : styleTemplates.buttonSecondary}`}
                href={href}>
                {isPrimary ? (
                    <svg
                        className='size-[10px] lg:size-[20px]'
                        height='20px'
                        width='20px'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z'></path>
                    </svg>
                ) : (
                    <svg
                        className='size-[10px] lg:size-[20px]'
                        width='20px'
                        height='20px'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 640 512'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z'></path>
                    </svg>
                )}
                {isPrimary ? 'Online Demo' : 'Source Code'}
            </a>
        );
    };
    const tabsData = [
        {
            category: 'Technology',
            projectsParent: [
                // Waka Daiko
                {
                    projectName: 'Waka Daiko',
                    projectsChildren: [
                        {
                            title: 'CAPSTONE',
                            image: '/pages/portfolio/capstone.jpg',
                            body: 'Team website demo using ASP.NET, Tailwind CSS & SmarterASP.net.',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site6.itempurl.com'
                                        }
                                    />
                                    <Button
                                        isPrimary={false}
                                        href={
                                            'https://github.com/wakadaiko/WakaDaikoApp'
                                        }
                                    />
                                </>
                            )
                        }
                    ]
                },
                // OCDLA
                {
                    projectName: 'OCDLA',
                    projectsChildren: [
                        {
                            title: 'OREGON CRIMINAL DEFENSE LAWYERS ASSOCIATION',
                            image: '/pages/portfolio/ocdla.png',
                            imageIsBright: true,
                            body: 'Reader for the Oregon Revised Statutes website.',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://ocdla-hosting.github.io/toc'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/ocdla-hosting/ocdla-hosting.github.io'
                                        }
                                    />
                                </>
                            )
                        }
                    ]
                },
                // GH Replicate
                {
                    projectName: 'GH Replicate',
                    projectsChildren: [
                        {
                            title: 'INTERMEDIATE MOBILE (JS)',
                            image: '/pages/portfolio/ghr_2.jpg',
                            body: 'Term website demo using React Native, Nativewind & GitHub REST API.',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://tnguyen-win.github.io/cs235m-term-project'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/tnguyen-win/cs235m-term-project'
                                        }
                                    />
                                </>
                            )
                        },
                        {
                            title: 'INTERMEDIATE WEB (JS)',
                            image: '/pages/portfolio/ghr_1.jpg',
                            body: 'Term website demo using Plain JavaScript, Bootstrap & GitHub REST API.',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://citstudent.lanecc.edu/~nguyent409/CS233JS/final/term-project'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/tnguyen-win/cs233js-term-project'
                                        }
                                    />
                                </>
                            )
                        }
                    ]
                },
                // Blog Posts
                {
                    projectName: 'Blog Posts',
                    projectsChildren: [
                        {
                            title: 'BLOG POSTS',
                            image: '/pages/portfolio/blog_posts.jpg',
                            body: 'Term / labs website demo using React, JSON Server, Bootstrap, GitHub Pages & Vercel.',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://tnguyen-win.github.io/cs295r-07-blog-v3'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/tnguyen-win/cs295r-07-blog-v3'
                                        }
                                    />
                                </>
                            )
                        }
                    ]
                },
                // Video Game Trading
                {
                    projectName: 'Video Game Trading',
                    projectsChildren: [
                        {
                            title: 'ASP.NET (V2)',
                            image: '/pages/portfolio/term_2.jpg',
                            body: 'Term website demo using ASP.NET, Tailwind CSS & SmarterASP.net.',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site4.itempurl.com'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/tnguyen-win/TrungNguyen_CS296N_TermProject'
                                        }
                                    />
                                </>
                            )
                        },
                        {
                            title: 'ASP.NET (V1)',
                            image: '/pages/portfolio/term_1.jpg',
                            body: 'Term website demo ASP.NET, Bootstrap & SmarterASP.net (previously Azure).',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site2.itempurl.com'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/tnguyen-win/TrungNguyen_CS295N_TermProject'
                                        }
                                    />
                                </>
                            )
                        }
                    ]
                },
                // Popular Game Engines
                {
                    projectName: 'Popular Game Engines',
                    projectsChildren: [
                        {
                            title: 'ASP.NET (V2)',
                            image: '/pages/portfolio/labs_2.jpg',
                            body: 'Term website demo ASP.NET, Bootstrap & SmarterASP.net (previously Azure).',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site3.itempurl.com'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/tnguyen-win/TrungNguyen_CS296N_Labs'
                                        }
                                    />
                                </>
                            )
                        },
                        {
                            title: 'ASP.NET (V1)',
                            image: '/pages/portfolio/labs_1.jpg',
                            body: 'Labs website demo using ASP.NET, Bootstrap & SmarterASP.net (previously Azure).',
                            buttons: (
                                <>
                                    <Button
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site1.itempurl.com'
                                        }
                                    />
                                    <Button
                                        href={
                                            'https://github.com/tnguyen-win/TrungNguyen_CS295N_Labs'
                                        }
                                    />
                                </>
                            )
                        }
                    ]
                }
            ]
        },
        {
            category: 'Business',
            // Top 10 F500 Companies
            projectsParent: [
                {
                    projectName: 'Top 10 F500 Companies',
                    projectsChildren: [
                        {
                            title: 'TOP 10 F500 COMPANIES',
                            image: '/pages/portfolio/excel_f500.jpg',
                            body: 'Presentation slide of top ten Fortune 500 companies.'
                        }
                    ]
                },
                // Mars Weather Forecast
                {
                    projectName: 'Mars Weather Forecast',
                    projectsChildren: [
                        {
                            title: 'MARS WEATHER FORECAST',
                            image: '/pages/portfolio/excel_mars_forecast.jpg',
                            body: 'Presentation slide of a weather report for Mars.'
                        }
                    ]
                }
            ]
        }
    ];
    const [selectedTabCategory, setSelectedTabCategory] =
        useState('Technology');
    const [selectedTabItem, setSelectedTabItems] = useState(0);
    const Tab = ({ id, isCategory, title }) => {
        const handleTab = () => {
            isCategory
                ? (() => {
                      setSelectedTabCategory(title);
                      setSelectedTabItems(0);
                  })()
                : setSelectedTabItems(id);

            const tabData = JSON.stringify({
                category: isCategory ? title : selectedTabCategory,
                item: isCategory ? 0 : id
            });

            sessionStorage.setItem('portfolio_tabs', tabData);
        };

        useEffect(() => {
            const tabSession = sessionStorage.getItem('portfolio_tabs');

            tabSession
                ? (() => {
                      const { category, item } = JSON.parse(tabSession);

                      setSelectedTabCategory(category);
                      setSelectedTabItems(Number(item));
                  })()
                : null;
        }, []);

        return (
            <li
                key={id}
                className={`${isCategory ? 'lg:p-4 lg:pe-0' : 'lg:p-4 lg:pb-0'}`}>
                <button
                    className={`flex !w-full gap-2 whitespace-nowrap ${
                        isCategory
                            ? title === selectedTabCategory
                                ? styleTemplates.buttonPrimary
                                : styleTemplates.buttonSecondary
                            : id === selectedTabItem
                              ? styleTemplates.buttonPrimary
                              : styleTemplates.buttonSecondary
                    } cursor-pointer`}
                    onClick={handleTab}>
                    {title}
                </button>
            </li>
        );
    };
    const projectsChildren = tabsData.find(
        tab => tab.category === selectedTabCategory
    )?.projectsParent[selectedTabItem].projectsChildren;

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Parent */}
            <main>
                <SectionGeneric
                    extraClasses='flex-col !gap-8 !justify-start !items-center lg:!items-start lg:!justify-start'
                    hasViewportHeight={false}>
                    <Row
                        extraClasses={`!${styleDefaults.backgroundColor} lg:gap-4 flex-col lg:flex-row size-full flex`}>
                        {/* Tabs - Top/Left */}
                        <ul
                            className={`${styleDefaults.backgroundColor} gap-2 shadow-md lg:gap-0 dark:shadow-lg ${styleDefaults.shadowColor} flex w-full flex-col flex-wrap rounded-[0.5vw] lg:w-max lg:border [&>*:nth-last-child(2)]:pb-4 ${styleDefaults.borderColor} `}>
                            {tabsData
                                .find(
                                    tab => tab.category === selectedTabCategory
                                )
                                .projectsParent.map((t, i) => (
                                    <Tab
                                        key={i}
                                        id={i}
                                        title={t.projectName}
                                    />
                                ))}
                            <li
                                className={`lg:border-t ${styleDefaults.borderColor}`}></li>
                        </ul>
                        <div className='flex w-full flex-col gap-4'>
                            {/* Tabs - Top/Right */}
                            <ul
                                className={`${styleDefaults.backgroundColor} gap-2 shadow-md lg:gap-0 dark:shadow-lg ${styleDefaults.shadowColor} ${styleDefaults.borderColor} flex w-full flex-col flex-wrap lg:flex-row lg:rounded-[0.5vw] lg:border [&>*:nth-last-child(1)]:pe-4`}>
                                {tabsData.map((t, i) => (
                                    <Tab
                                        key={i}
                                        id={i}
                                        isCategory
                                        title={t.category}
                                    />
                                ))}
                                <li
                                    className={`lg:border-e ${styleDefaults.borderColor}`}></li>
                            </ul>
                            {/* Body - Bottom/Right */}
                            <div
                                className={`grid size-full gap-4 lg:grid-cols-${
                                    projectsChildren.length
                                }`}>
                                {projectsChildren.map((p, i) => (
                                    <div
                                        key={i}
                                        className={`${styleDefaults.backgroundColor} shadow-md dark:shadow-lg ${styleDefaults.shadowColor} flex size-full flex-col gap-4 rounded-[2vw] border p-4 lg:gap-8 lg:rounded-[0.5vw] lg:p-8 ${styleDefaults.borderColor}`}>
                                        {/* Project - Title */}
                                        <h1
                                            className={`text-center text-2xl font-black ${projectsChildren.length === 1 ? 'lg:text-6xl' : 'lg:text-4xl'}`}>
                                            {p.title.toUpperCase()}
                                        </h1>
                                        {/* Project - Body */}
                                        <div
                                            className={`text-sm ${styleDefaults.textColorSecondary} flex size-full items-center justify-center text-center ${projectsChildren.length === 1 ? 'lg:text-xl' : 'lg:text-lg'}`}>
                                            <span className='lg:w-2/3'>
                                                {p.body}
                                            </span>
                                        </div>
                                        {/* Project - Buttons */}
                                        {p.buttons ? (
                                            <div
                                                className={`mt-2 flex w-full flex-col justify-center gap-2 lg:mx-0 lg:flex-row lg:gap-4 ${styleDefaults.backgroundColor}`}>
                                                {p.buttons}
                                            </div>
                                        ) : null}
                                        {/* Project - Image */}
                                        <a
                                            className={`group !aspect-auto !border-0 lg:!border-8 ${styleTemplates.threeCanvas} !rounded-[2vw] lg:!rounded-[0.5vw]`}
                                            href={p.image}
                                            target='_blank'>
                                            <div
                                                className={`relative overflow-hidden lg:p-8`}>
                                                <Image
                                                    className='aspect-video w-full rounded-[1vw] object-cover transition duration-200 ease-in-out group-hover:blur-lg group-hover:saturate-25 lg:rounded-[0.25vw]'
                                                    src={p.image}
                                                    alt='Portfolio Image'
                                                    width='1024'
                                                    height='1024'
                                                    priority
                                                />
                                                <svg
                                                    className={`absolute top-1/2 left-1/2 -translate-1/2 opacity-0 transition duration-400 ease-in-out group-hover:opacity-100 ${p.imageIsBright ? 'text-black' : 'text-white'}`}
                                                    stroke='currentColor'
                                                    fill='currentColor'
                                                    strokeWidth='16'
                                                    viewBox='0 0 512 512'
                                                    width={
                                                        projectsChildren.length ===
                                                        1
                                                            ? '128px'
                                                            : '96px'
                                                    }
                                                    height={
                                                        projectsChildren.length ===
                                                        1
                                                            ? '128px'
                                                            : '96px'
                                                    }
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z'></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
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
