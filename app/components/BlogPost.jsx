'use client';

import { styleDefaults, styleTemplates } from '../globals';
import Image from 'next/image';

export default function BlogPostMain({ id, image, date, title, tags, body }) {
    return (
        <div
            // className={`transition duration-200 ease-in-out hover:-translate-y-2 ${styleDefaults.borderColor} border ${styleDefaults.backgroundColor} shadow-lg ${styleDefaults.shadowColor} lg:rounded-[1vw]`}>
            className={`${styleDefaults.borderColor} border ${styleDefaults.backgroundColor} shadow-md dark:shadow-lg ${styleDefaults.shadowColor} rounded-[1rem]`}>
            <a
                className='group'
                href={`/blog/post/${id}`}>
                <div className='relative overflow-hidden rounded-t-[1rem]'>
                    <Image
                        className='aspect-video w-full object-cover saturate-[75%] transition duration-200 ease-in-out group-hover:scale-50 group-hover:scale-[106.25%] group-hover:saturate-25 dark:saturate-[67.5%]'
                        src={image}
                        alt='Placeholder'
                        width='480'
                        height='270'
                        priority
                    />
                    {/* <div className='absolute top-0 left-0 size-full bg-[radial-gradient(rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.25)_75%,rgba(255,255,255,0)_100%)]'></div> */}
                    {/* <div className='absolute top-0 left-0 size-full bg-[radial-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0.0.25)_75%,rgba(0,0,0,1)_100%)]'></div> */}
                    {/* <div className='absolute top-0 left-0 size-full bg-[linear-gradient(0deg,_rgba(0,0,0,0.5)_0%,_rgba(21,93,252,0.125)_25%)] dark:bg-[linear-gradient(0deg,_rgba(255,255,255,0.25)_0%,_rgba(21,93,252,0.125)_25%)]'></div> */}
                    <div className='absolute top-0 left-0 size-full bg-[linear-gradient(0deg,_rgba(0,0,0,0.1875)_0%,_rgba(0,0,0,0)_25%)] dark:bg-[linear-gradient(0deg,_rgba(0,0,0,0.375)_0%,_rgba(0,0,0,0)_25%)]'></div>
                    {/* <div className='absolute top-0 left-0 size-full bg-[linear-gradient(135deg,_rgba(0,0,0,0.1)_0%,_rgba(255,255,255,0.25)_50%,_rgba(0,0,0,1)_100%)] dark:bg-[linear-gradient(135deg,_rgba(255,255,255,0.5)_-25%,_rgba(0,0,0,0)_50%,_rgba(255,255,255,0.5)_125%)]'></div> */}
                    {/* <div className='absolute top-0 left-0 size-full bg-[linear-gradient(45eg,_rgba(21,93,252,0.25),_rgba(0,0,0,0),_rgba(21,93,252,0.225))]'></div> */}
                    {/* <div className="absolute top-0 left-0 size-full bg-[url('/Gradient_builder_2.jpg')] bg-center opacity-25"></div> */}
                </div>
            </a>
            <div
                className={`flex flex-col border-t ${styleDefaults.borderColor} p-4`}>
                <p
                    className={`text-[8px] lg:text-[10px] xl:text-xs ${styleDefaults.textColorSecondary}`}>
                    {date}
                </p>
                <ul className='mt-2 flex gap-2'>
                    {tags.split(', ').map((tag, i) => (
                        <li
                            key={i}
                            className='rounded-[0.5vw] border border-green-400 bg-green-100 px-1 py-px text-[8px] whitespace-nowrap text-green-600 lg:rounded-[0.25vw] lg:text-[10px] xl:text-sm dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                            <a
                                href={`/blog/category/${tag.replaceAll(' ', '-').toLowerCase()}`}>
                                {tag}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='relative mt-1 flex items-center gap-2 lg:mt-2'>
                    <a
                        className='w-full text-lg font-black hover:text-blue-500 lg:text-xl xl:text-2xl'
                        href={`/blog/post/${id}`}>
                        {title}
                    </a>
                </div>
                <p
                    className={`text-xs lg:text-sm xl:text-base ${styleDefaults.textColorSecondary} w-[320px] truncate lg:w-auto`}>
                    {body}
                </p>
                <a
                    className={`${styleTemplates.buttonPrimary} !mt-2 !w-max !gap-1`}
                    href={`/blog/post/${id}`}>
                    Read More
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
                        <path d='M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z'></path>
                        <path d='m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z'></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export const BlogPostIndividual = ({ id, image, date, title, tags, body }) => (
    <div
        className={`flex w-full ${styleDefaults.borderColor} border ${styleDefaults.backgroundColor} shadow-md dark:shadow-lg ${styleDefaults.shadowColor} lg:rounded-[1rem]`}>
        <div className='flex flex-col gap-2 p-4'>
            <p className={`text-xs ${styleDefaults.textColorSecondary}`}>
                {date}
            </p>
            <ul className='flex gap-2'>
                {tags.split(', ').map((tag, i) => (
                    <li
                        key={i}
                        className='rounded-lg border border-green-400 bg-green-100 px-1 py-px text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-300'>
                        {tag}
                    </li>
                ))}
            </ul>
            <a
                className='group mt-2 flex w-max items-center gap-2 text-2xl font-black underline-offset-4 duration-200 ease-in-out hover:underline lg:text-4xl'
                href={`/blog/post/${id}`}>
                {title}
            </a>
            <p
                className={`${styleDefaults.textColorSecondary} w-[256px] truncate lg:w-auto`}>
                {body}
            </p>
        </div>
    </div>
);
