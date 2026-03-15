'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import SectionGeneric, { Row } from '../components/Section';
import Category from '../components/Category';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Courses() {
    const coursesCategories = [
        {
            category: 'LANE COMMUNITY COLLEGE',
            items: 'Bachelor of Applied Science, Applied Business Management--Associate of Applied Science, Software Development--Electives',
            subItems: {
                0: 'WIP MGMT 488 — Project Management 2--WIP MGMT 480 — Co-op Ed: Business--WIP MGMT 453 — Strategic Management--MGMT 446 — Cross-Cultural Management--WIP MGMT 432 — Social Enterprise--WIP MGMT 411 — Marketing Management--MGMT 407 — Business Analytics--MGMT 405 — Management Communications--MGMT 400 — Operations Management--MGMT 388 — Project Management 1--MGMT 360 — Financial Management--WIP MGMT 347 — International Business--WIP MGMT 330 — Digital Marketing--MGMT 321 — Accounting Concepts-Managers--MGMT 311 — Human Resource Management--BA 260 — Small Business Management--BA 226 — Business Law--BT 223 — MS Excel for Business — Expert--BT 165 — Introduction to the Accounting Cycle--BT 123 — MS Excel for Business',
                1: 'CS 297 — Programming Capstone--CS 296N — Web Development 2: ASP.NET--CS 295N — Web Development 1: ASP.NET--CS 280PR — Co-op Ed: Computer Programming--CS 276 — Database Systems and Modeling--CS 275 — Introduction to Database Systems and Modeling--CS 246 — System Design--CS 234N — Advanced Programming: C#--CS 233JS — Intermediate Programming: JavaScript--CS 206 — Co-op Ed: Computer Information Technology Seminar--CS 162N — Computer Science 2 (C#, Intermediate)--CS 161N — Computer Science 1 (C#, Beginner)--CS 133JS — Beg. Programming: JavaScript--CIS 195 — Web Authoring 1--CIS 125A — Software Tools: App Development--CIS 100 — Computing Careers Exploration--WR 227 — Technical Writing--WR 122 — Argument, Resch and Multi Comp',
                2: 'CS 295R — Web Development 1: React--CS 260 — Data Structures 1--CS 235M — Advanced Mobile Application Development--CS 135M — Beginning Mobile Application Development--ART 288 — Intro to Web Design and Social Media--ART 216 — Digital Design Tools--ART 131 — Introduction to Drawing--COMM 218 — Interpersonal Communication--COMM 111Z — Public Speaking--GEOG 142 — Introduction to Human Geography'
            }
        },
        {
            category: 'CHEMEKETA COMMUNITY COLLEGE',
            items: 'Core--For LCC--Electives',
            subItems: {
                0: 'MTH 095 — Intermediate Algebra--MTH 070 — Elementary Algebra--WR 121 — Academic Composition--WR 115 — Introduction to Composition--WR 090 — Fundamentals of Writing',
                1: 'CS 160 — Introduction to Computer Science',
                2: 'MTH 251 — Differential Calculus--MTH 112 — Trigonometry--MTH 111 — College Algebra--ART115 — Basic Design: Two Dimensional--BI 103D — Gen Bio: Sea Birds & Mammals--Miscellaneous (x4)'
            }
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
                            Total Listed Courses:
                            <span className='rounded-lg border border-green-400 bg-green-100 px-1 py-px text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                                {coursesCategories.reduce(
                                    (sum, obj) =>
                                        sum +
                                        (obj.subItems
                                            ? Object.values(
                                                  obj.subItems
                                              ).reduce(
                                                  (subSum, str) =>
                                                      subSum +
                                                      (str
                                                          ? str.split('--')
                                                                .length
                                                          : 0),
                                                  0
                                              )
                                            : 0),
                                    0
                                ) + 3}
                            </span>
                        </div>
                        <div className='grid gap-4 lg:grid-cols-3'>
                            {coursesCategories.map((item, i) => (
                                <React.Fragment key={i}>
                                    <Category
                                        category={item.category}
                                        items={item.items}
                                        subItems={item.subItems}
                                    />
                                    <Category />
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
