export const styleDefaults = {
    backgroundColor: 'bg-[#0f0f13]',
    backgroundColorSecondary: 'bg-[#1c1c1f]',
    textColor: 'text-white',
    borderColor: 'border-[#2e2e2e]',
    // borderColorHover: 'border-[#6a6a6a]'
    outlineColor: `outline-[#2e2e2e]`,
    outlineColorHover: `focus-within:outline-[#6A6A6A]`
};

export const styleTemplates = {
    navlinkHover:
        // 'text-[rgb(61.25%,61.25%,61.25%)] fill-[rgb(61.25%,61.25%,61.25%)] hover:bg-[#1E1E1E] hover:text-white hover:fill-white',
        'text-[rgb(61.25%,61.25%,61.25%)] fill-[rgb(61.25%,61.25%,61.25%)] hover:text-white hover:fill-white',
    button: 'bg-white hover:bg-[#EBEBEB] text-black',
    threeCanvas: 'relative p-4 my-auto xl:w-[640px] aspect-video',
    threeGradient: `absolute top-1/2 left-1/2 z-[-1] -translate-1/2 rounded-full border ${styleDefaults.borderColor} bg-[radial-gradient(at_50%_50%,_rgba(28,28,31,0.5)_50%,_rgba(15,15,19,0.5)_75%,_rgba(28,28,31,0.5)_100%)] size-[240px] xl:size-[480px]`
};
