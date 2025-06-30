'use client';

export const styleDefaults = {
    // backgroundColor: 'bg-[#f0f0ec] dark:bg-[#0f0f13]',
    backgroundColor: 'bg-white dark:bg-[#0f0f13]',
    // backgroundColorSecondary: 'bg-[#1c1c1f]',
    textColor: 'text-black dark:text-white',
    textColorSecondary:
        // 'text-[rgb(38.75%,38.75%,38.75%)] dark:text-[rgb(61.25%,61.25%,61.25%)]',
        'text-[rgb(61.25%,61.25%,61.25%)]',
    borderColor: 'border-[#d1d1d1] dark:border-[#2e2e2e]',
    outlineColor: `outline-[#d1d1d1] dark:outline-[#2e2e2e]`,
    outlineColorHover: `focus-within:outline-[#959595]  dark:focus-within:outline-[#6a6a6a]`,
    // shadowColor: 'shadow-[#f0f0ec] dark:shadow-black'
    shadowColor: 'shadow-[#d1d1d1] dark:shadow-black'
};

export const styleTemplates = {
    // navlinkHover: `duration-300 ease-in-out ${styleDefaults.textColorSecondary} fill-[rgb(38.75%,38.75%,38.75%)] dark:fill-[rgb(61.25%,61.25%,61.25%)] dark:hover:text-white dark:hover:fill-white hover:text-black hover:fill-black`,
    navlinkHover: `duration-300 ease-in-out ${styleDefaults.textColorSecondary} fill-[rgb(61.25%,61.25%,61.25%)] dark:hover:text-white dark:hover:fill-white hover:text-black hover:fill-black`,
    button: 'duration-300 ease-in-out bg-black dark:bg-white border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white text-white dark:text-black',
    threeCanvas: `group lg:rounded-[2vw] border-16 border-transparent bg-[radial-gradient(at_50%_50%,_rgb(227,227,224)_50%,_rgb(240,240,236)_75%,_rgb(227,227,224)_100%)] dark:bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] shadow-lg ${styleDefaults.shadowColor} outline outline-[#c3c3b3] dark:outline-[#3c3c4c] w-full lg:w-auto flex items-center justify-center relative aspect-square`,
    threeGradient: `lg:rounded-[2vw] absolute top-1/2 left-1/2 z-[-1] -translate-1/2 size-full`
};

/*
    [Z-INDEX LAYERS]

    3 --> Dropdown Indicator
    2 --> Header
    1 --> Scroll To Top
    -1 --> Three Gradient
    -2 --> Grid
*/
