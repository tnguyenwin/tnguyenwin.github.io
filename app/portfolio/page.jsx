'use client';

import { styleDefaults, styleTemplates } from '../globals';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SectionGeneric, { Row } from '../components/Section';
import PortfolioTab from '../components/PortfolioTab';
import PortfolioLink from '../components/PortfolioLink';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Portfolio() {
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
                            body: 'Two-term, team website demo using ASP.NET, Tailwind CSS, & SmarterASP.net.',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site6.itempurl.com'
                                        }
                                    />
                                    <PortfolioLink
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
                            title: 'CO-OP',
                            image: '/pages/portfolio/ocdla.png',
                            imageIsBright: true,
                            body: 'Reader for Oregon Revised Statutes website using JSX, Tailwind CSS, & GitHub Pages.',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://ocdla-hosting.github.io/toc'
                                        }
                                    />
                                    <PortfolioLink
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
                            body: 'Term website demo using React Native, Nativewind, GitHub REST API, & GitHub Pages.',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://tnguyenwin.github.io/cs235m-term-project'
                                        }
                                    />
                                    <PortfolioLink
                                        href={
                                            'https://github.com/tnguyenwin/cs235m-term-project'
                                        }
                                    />
                                </>
                            )
                        },
                        {
                            title: 'INTERMEDIATE WEB (JS)',
                            image: '/pages/portfolio/ghr_1.jpg',
                            body: 'Term website demo using Plain JavaScript, Bootstrap, & GitHub REST API.',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://citstudent.lanecc.edu/~nguyent409/CS233JS/final/term-project'
                                        }
                                    />
                                    <PortfolioLink
                                        href={
                                            'https://github.com/tnguyenwin/cs233js-term-project'
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
                            title: 'REACT.JS',
                            image: '/pages/portfolio/blog_posts.jpg',
                            body: 'Term / labs website demo using React, JSON Server, Bootstrap, GitHub Pages, & Vercel.',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://tnguyenwin.github.io/cs295r-07-blog-v3'
                                        }
                                    />
                                    <PortfolioLink
                                        href={
                                            'https://github.com/tnguyenwin/cs295r-07-blog-v3'
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
                            body: 'Term website demo using ASP.NET, Tailwind CSS, & SmarterASP.net.',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site4.itempurl.com'
                                        }
                                    />
                                    <PortfolioLink
                                        href={
                                            'https://github.com/tnguyenwin/TrungNguyen_CS296N_TermProject'
                                        }
                                    />
                                </>
                            )
                        },
                        {
                            title: 'ASP.NET (V1)',
                            image: '/pages/portfolio/term_1.jpg',
                            body: 'Term website demo ASP.NET, Bootstrap, & SmarterASP.net (previously Microsoft Azure).',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site2.itempurl.com'
                                        }
                                    />
                                    <PortfolioLink
                                        href={
                                            'https://github.com/tnguyenwin/TrungNguyen_CS295N_TermProject'
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
                            body: 'Labs website demo using ASP.NET, Tailwind CSS, & SmarterASP.net.',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site3.itempurl.com'
                                        }
                                    />
                                    <PortfolioLink
                                        href={
                                            'https://github.com/tnguyenwin/TrungNguyen_CS296N_Labs'
                                        }
                                    />
                                </>
                            )
                        },
                        {
                            title: 'ASP.NET (V1)',
                            image: '/pages/portfolio/labs_1.jpg',
                            body: 'Labs website demo using ASP.NET, Bootstrap, & SmarterASP.net (previously Microsoft Azure).',
                            buttons: (
                                <>
                                    <PortfolioLink
                                        isPrimary={true}
                                        href={
                                            'https://projectdesign-001-site1.itempurl.com'
                                        }
                                    />
                                    <PortfolioLink
                                        href={
                                            'https://github.com/tnguyenwin/TrungNguyen_CS295N_Labs'
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
                            body: 'Presentation slide of top ten Fortune 500 companies from 2017 using Google Sheets & Slides.'
                        }
                    ]
                }
            ]
        }
    ];
    const [selectedTabCategory, setSelectedTabCategory] =
        useState('Technology');
    const [selectedTabItem, setSelectedTabItem] = useState(0);
    const projectsChildren = tabsData.find(
        tab => tab.category === selectedTabCategory
    )?.projectsParent[selectedTabItem].projectsChildren;

    useEffect(() => {
        const tabSession = sessionStorage.getItem('portfolio_tabs');

        tabSession
            ? (() => {
                  const { category, item } = JSON.parse(tabSession);

                  setSelectedTabCategory(category);
                  setSelectedTabItem(Number(item));
              })()
            : null;
    }, []);

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
                        extraClasses={`${styleDefaults.backgroundColor} gap-4 flex-col lg:flex-row size-full flex`}>
                        {/* Tabs - Categories */}
                        <ul
                            className={`${styleDefaults.backgroundColor} p-4 shadow-md not-last:gap-2 lg:not-last:gap-4 dark:shadow-lg ${styleDefaults.shadowColor} flex flex-col flex-wrap rounded-[0.5rem] border lg:w-max ${styleDefaults.borderColor}`}>
                            {tabsData.map((t, i) => (
                                <PortfolioTab
                                    key={i}
                                    id={i}
                                    isCategory
                                    title={t.category}
                                    selectedTabCategory={selectedTabCategory}
                                    setSelectedTabCategory={
                                        setSelectedTabCategory
                                    }
                                    selectedTabItem={selectedTabItem}
                                    setSelectedTabItem={setSelectedTabItem}
                                />
                            ))}
                            <li
                                className={`hidden lg:-mx-4 lg:block lg:border-t ${styleDefaults.borderColor}`}></li>
                        </ul>
                        <div className='flex flex-col gap-4'>
                            {/* Tabs - Projects */}
                            <ul
                                className={`${styleDefaults.backgroundColor} shadow-md not-last:gap-2 lg:not-last:gap-4 dark:shadow-lg ${styleDefaults.shadowColor} ${styleDefaults.borderColor} grid size-full rounded-[0.5rem] border p-4 lg:grid-cols-3`}>
                                {tabsData
                                    .find(
                                        tab =>
                                            tab.category === selectedTabCategory
                                    )
                                    .projectsParent.map((t, i) => (
                                        <PortfolioTab
                                            key={i}
                                            id={i}
                                            title={t.projectName}
                                            selectedTabCategory={
                                                selectedTabCategory
                                            }
                                            setSelectedTabCategory={
                                                setSelectedTabCategory
                                            }
                                            selectedTabItem={selectedTabItem}
                                            setSelectedTabItem={
                                                setSelectedTabItem
                                            }
                                        />
                                    ))}
                            </ul>
                            {/* Project - Content */}
                            <div
                                className={`grid size-full gap-4 lg:grid-cols-${
                                    projectsChildren.length
                                }`}>
                                {projectsChildren.map((p, i) => (
                                    <div
                                        key={i}
                                        className={`${styleDefaults.backgroundColor} shadow-md dark:shadow-lg ${styleDefaults.shadowColor} flex size-full flex-col gap-4 rounded-[0.5rem] border p-4 lg:gap-8 lg:p-8 ${styleDefaults.borderColor}`}>
                                        {/* Project - Title */}
                                        <h1
                                            className={`text-center text-2xl font-black ${projectsChildren.length === 1 ? 'lg:text-6xl' : 'lg:text-4xl'}`}>
                                            {p.title.toUpperCase()}
                                        </h1>
                                        {/* Project - Body */}
                                        <div
                                            className={`text-sm ${styleDefaults.textColorSecondary} flex items-center justify-center text-center ${projectsChildren.length === 1 ? 'lg:text-xl' : 'lg:text-lg'}`}>
                                            <span className='lg:w-2/3'>
                                                {p.body}
                                            </span>
                                        </div>
                                        {/* Project - Buttons */}
                                        {p.buttons ? (
                                            <div
                                                className={`mt-2 flex w-full flex-col flex-wrap justify-center gap-2 lg:mx-0 lg:flex-row lg:gap-4 ${styleDefaults.backgroundColor}`}>
                                                {p.buttons}
                                            </div>
                                        ) : null}
                                        {/* Project - Image */}
                                        <a
                                            className={`group !aspect-auto !border-0 lg:!border-8 ${styleTemplates.threeCanvas} !size-full lg:!rounded-[0.5rem]`}
                                            href={p.image}
                                            target='_blank'>
                                            <div
                                                className={`relative overflow-hidden lg:p-8`}>
                                                <Image
                                                    className='aspect-video w-full object-cover transition duration-400 ease-in-out group-hover:blur-lg group-hover:saturate-25 lg:rounded-[0.5rem]'
                                                    src={p.image}
                                                    alt='Portfolio Image'
                                                    width='1024'
                                                    height='1024'
                                                    priority
                                                />
                                                <svg
                                                    className={`absolute top-1/2 left-1/2 -translate-1/2 opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100 ${p.imageIsBright ? 'text-black' : 'text-white'}`}
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
