'use client';

import { styleDefaults } from '../globals';

export default function Category({ category, items, subItems }) {
    return category ? (
        <div
            id={category.toLowerCase().replace(' ', '-')}
            className={`invisible m-auto flex flex-col gap-2 lg:w-max [&:nth-child(odd)]:visible ${styleDefaults.borderColor} border ${styleDefaults.backgroundColor} shadow-md dark:shadow-lg ${styleDefaults.shadowColor} rounded-[1rem] p-4`}>
            <h1 className='font-black lg:text-xl xl:text-2xl'>{category}</h1>
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
}
