'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import SectionGeneric, { Row } from '../components/Section';
import SkillsCategory from '../components/SkillsCategory';
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
            items: 'Wix--Webflow--Framer--WordPress--Squarespace--Shopify--Google Sites--Canva Sites--Weebly--Grapes.js',
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

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                <SectionGeneric
                    extraClasses='lg:py-16'
                    hasViewportHeight={false}>
                    <Row extraClasses='flex flex-col gap-4 lg:gap-12 items-center size-full'>
                        <div className='m-4 flex items-center gap-4 lg:mt-4 lg:mb-8 lg:text-2xl'>
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
