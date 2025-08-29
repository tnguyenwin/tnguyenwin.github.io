'use client';

import { styleDefaults } from '../globals';
import React from 'react';
import Navbar from '../components/Navbar';
import SectionGeneric, { Row } from '../components/Section';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Skills() {
    const skillsCategories = [
        {
            category: 'LANGUAGES',
            items: 'HTML & CSS--JavaScript & Node.js--C#--Python--SQL--Batch, PowerShell & Bash--WebAssembly--GLSL--PHP--Java'
        },
        {
            category: '3D RENDERING',
            items: 'Blender--Three.js--Babylon.js--PlayCanvas--Godot Engine'
        },
        {
            category: 'ASSET CREATION',
            items: 'Blender--Figma--GIMP--Inkscape--Canva--Adobe Illustrator--Adobe Photoshop--Visual Paradigm Online--Microsoft Paint--UMLetino'
        },
        {
            category: 'HOSTING PROVIDERS',
            items: 'GitHub Pages--SmarterASP.net--Microsoft Azure--Vercel--Apache HTTP Server / XAMPP--Self-Hosting'
        },
        {
            category: 'WEBSITE BUILDERS',
            items: 'Wix--Framer--WordPress--Google Sites--Grapes.js',
            subItems: {
                0: 'Classic (editor)--Editor X (editor)--Studio (editor)--Codux (application)',
                2: 'WordPress.org (self-host)--WordPress.com (cloud)--Elementor (plugin)--Gutenberg (plugin)',
                4: 'Classic (editor)--Studio (editor)'
            }
        },
        {
            category: 'IDE',
            items: 'Visual Studio Code--Visual Studio--GitHub Dev--Replit'
        },
        {
            category: 'CSS FRAMEWORKS',
            items: 'Tailwind CSS--Bootstrap--UIKit--Bulma',
            subItems: { 0: 'Node--CDN', 1: 'Node--CDN', 2: 'CDN', 3: 'CDN' }
        },
        {
            category: 'JS FRAMEWORKS',
            items: 'React.js--Next.js--Create React App--React Native--Expo Go'
        },
        {
            category: 'C# FRAMEWORKS',
            items: '.NET',
            subItems: { 0: 'ASP.NET--EF Core--ADO.NET' }
        },
        {
            category: 'API',
            items: 'GitHub REST API--OpenWeatherMap API--Google Maps API--Postman--Swagger UI--Fiddler'
        },
        {
            category: 'CYBERSECURITY',
            items: 'Tampermonkey--ZAP--Apache JMeter--(etc.)'
        },
        {
            category: 'DATABASE',
            items: 'MySQL--MySQL Workbench--MSSQL--SSMS'
        },
        {
            category: 'VERSION CONTROL',
            items: 'GitHub--Git--GitHub Desktop--Visual Studio Code--Visual Studio--GitHub Dev--GitLab'
        },
        {
            category: 'DEVOPS & CI/CD',
            items: 'GitHub Workflows--GitHub Actions'
        },
        {
            category: 'PACKAGE MANAGERS',
            items: 'NPM--Yarn--NuGet--PIP'
        },
        {
            category: 'PROJECT MANAGEMENT',
            items: 'GitHub--Jira'
        },
        {
            category: 'UNIT TESTING',
            items: 'NUnit--xUnit.net'
        },
        {
            category: 'FILE SHARING',
            items: 'FileZilla--FTP & FTPS--SSH'
        },
        {
            category: 'WORD PROCESSORS',
            items: 'Microsoft Word--Google Docs--LibreOffice Writer'
        },
        {
            category: 'SPREADSHEETS',
            items: 'Microsoft Excel--Google Sheets'
        },
        {
            category: 'PRESENTATIONS',
            items: 'Microsoft PowerPoint--Google Slides'
        },
        {
            category: 'TEXT & MEDIA CONVERTORS',
            items: 'FFmpeg--pandoc--ImageMagick--Ezgif'
        },
        {
            category: 'COLLABORATION',
            items: 'Zoom--Google Meet--Slack--Discord'
        },
        {
            category: 'SCREEN CAPTURE',
            items: 'Snipping Tool--OBS Studio--PowerPoint--Xbox Gamebar'
        },
        {
            category: 'SOFT SKILLS',
            items: 'Problem Solving--Adaptability--Improvisation--Communication (oral, physical, text, etc.)--Creativity'
        },
        {
            category: 'GENERAL SKILLS',
            items: 'Mathematics--Art--Design',
            subItems: {
                0: 'Calculus 1--Trigonometry',
                1: '2D--3D'
            }
        },
        {
            category: 'OTHER SKILLS',
            items: 'AJAX--Scaffolding--Markdown--Pandoc--SEO'
        }
    ];
    const SkillsCategory = ({ category, items, subItems }) => {
        return category ? (
            <div
                id={category.toLowerCase().replace(' ', '-')}
                className={`invisible m-auto flex size-max flex-col gap-2 [&:nth-child(odd)]:visible ${styleDefaults.borderColor} border ${styleDefaults.backgroundColor} shadow-md dark:shadow-lg ${styleDefaults.shadowColor} rounded-[1rem] p-4`}>
                <h1 className='font-black lg:text-xl xl:text-2xl'>
                    {category}
                </h1>
                <ul className={`flex list-inside list-disc flex-col gap-2`}>
                    {items?.split('--').map((item, i1) => {
                        const subList =
                            subItems?.[i1.toString()]?.split('--') || [];

                        return (
                            <li key={i1}>
                                {item}
                                {subList && (
                                    <ul
                                        className={`${styleDefaults.textColorSecondary} ms-4 flex list-inside list-disc flex-col gap-2 [&>*:first-child]:mt-2`}>
                                        {subList.map((subItem, i2) => (
                                            <li key={i2}>{subItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        ) : (
            <div></div>
        );
    };

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                <SectionGeneric
                    extraClasses='p-4 lg:p-16'
                    hasViewportHeight={false}>
                    <Row extraClasses='flex flex-col gap-4 lg:gap-12 items-center size-full'>
                        <div className='m-4 flex items-center gap-4 text-sm lg:mt-4 lg:mb-8 lg:text-2xl'>
                            Total Listed Skills:
                            <span className='rounded-lg border border-green-400 bg-green-100 px-1 py-px text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                {skillsCategories.reduce(
                                    (sum, obj) =>
                                        sum +
                                        (obj.items
                                            ? obj.items.split('--').length
                                            : 0),
                                    0
                                )}
                            </span>
                        </div>
                        <div className='grid size-full gap-4 lg:grid-cols-3'>
                            {skillsCategories.map((item, i) => (
                                <React.Fragment key={i}>
                                    <SkillsCategory
                                        category={item.category}
                                        items={item.items}
                                        subItems={item.subItems}
                                    />
                                    <SkillsCategory />
                                </React.Fragment>
                            ))}
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
