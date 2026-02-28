export const styleDefaults = {
    // backgroundColor: 'bg-[#f0f0ec] dark:bg-[#0f0f13]',
    backgroundColor: 'bg-white dark:bg-[#0f0f13]',
    // backgroundColor: 'bg-white dark:bg-black',
    // backgroundColorSecondary: 'bg-[#1c1c1f]',
    textColor: 'text-black dark:text-white',
    textColorSecondary:
        'text-[rgb(38.75%,38.75%,38.75%)] dark:text-[rgb(61.25%,61.25%,61.25%)]',
    borderColor: 'border-[#E8E8E8] dark:border-[#2e2e2e]', // border-[rgb(220,220,220)]
    outlineColor: 'outline-[#E8E8E8] dark:outline-[#2e2e2e]',
    outlineColorHover:
        'focus-within:outline-[#959595]  dark:focus-within:outline-[#6a6a6a]',
    shadowColor: 'shadow-[#E8E8E8] dark:shadow-black',
    button: 'transition-colors duration-200 ease-in-out lg:text-lg flex w-full items-center justify-center gap-1 lg:gap-2 rounded-[0.25rem] px-2 py-1 text-[10px] lg:m-0 lg:px-4 lg:py-2 font-medium lg:w-auto border-2'
};

export const styleTemplates = {
    navlinkHover: `duration-200 ease-in-out ${styleDefaults.textColorSecondary} dark:hover:text-white hover:text-black`,
    buttonPrimary: `${styleDefaults.button} bg-black text-white dark:bg-white dark:text-black border-black dark:border-white hover:bg-[rgb(25%,25%,25%)] dark:hover:bg-[rgb(87.5%,87.5%,87.5%)] hover:border-hover:bg-[rgb(25%,25%,25%)] dark:hover:border-[rgb(87.5%,87.5%,87.5%)]`,
    buttonSecondary: `${styleDefaults.button} ${styleDefaults.borderColor} ${styleDefaults.backgroundColor} hover:bg-[rgb(93.75%,93.75%,93.75%)] dark:hover:bg-[rgb(12.5%,12.5%,12.5%)]`,
    effectTypewriter:
        'before:bg-linear-[0deg,black_0%,rgba(0,0,0,0.625)_87.5%] dark:before:bg-linear-[180deg,rgb(255,255,255)_0%,rgba(255,255,255,0.125)_200%] before:bg-clip-text before:bg-[length:200%_100%] relative z-0 text-transparent before:absolute before:top-0 before:left-0 before:z-[1] before:[animation:typewriter_6s_steps(32)_infinite] before:overflow-hidden before:border-r-4 pe-2 before:border-[rgba(0,0,0,0.125)] dark:before:border-[rgba(255,255,255,0.5)] before:whitespace-nowrap before:content-[attr(data-text)]',
    effectMetal:
        // 'bg-linear-[45deg,black_0%,#808080_30%,black_50%,#808080_70%,black_100%] dark:bg-linear-[45deg,white_0%,#808080_30%,#808080_50%,#808080_70%,white_100%] bg-clip-text text-transparent bg-[length:200%_100%] [animation:shimmer_3s_linear_infinite]',
        // 'bg-linear-[45deg,white_0%,rgba(186,186,255,0.75)_50%,white_100%] bg-clip-text text-transparent bg-[length:200%_100%] [animation:shimmer_3s_linear_infinite]',
        'bg-linear-[0deg,black_0%,rgba(0,0,0,0.625)_87.5%] dark:bg-linear-[180deg,white_0%,rgba(255,255,255,0.125)_200%] bg-clip-text text-transparent bg-[length:200%_100%]',
    threeCanvas: `size-[384px] cursor-pointer group rounded-[3rem] border-16 border-transparent bg-[radial-gradient(at_50%_50%,_rgb(243,243,240)_50%,_rgb(255,255,255)_75%,_rgb(243,243,240)_100%)] dark:bg-[radial-gradient(at_50%_50%,_rgb(28,28,31)_50%,_rgb(15,15,19)_75%,_rgb(28,28,31)_100%)] shadow-lg ${styleDefaults.shadowColor} outline-2 dark:outline outline-[#E8E8E8] dark:outline-[#3c3c4c] flex items-center justify-center relative aspect-square`
};

/*
    [Z-INDEX LAYERS]

    2 --> Header | Navigation & Scroll To Top
    1 --> Header | Mask
    -1 --> Three Gradient
    -2 --> Grid

    [BREAKPOINTS]

    lg: 1024px (set default)
    xl: 1280px
*/
