'use client';

import { styleTemplates } from '../globals';

export default function PortfolioTab({
    id,
    isCategory,
    title,
    selectedTabCategory,
    setSelectedTabCategory,
    selectedTabItem,
    setSelectedTabItem
}) {
    const handleTab = () => {
        isCategory
            ? (() => {
                  setSelectedTabCategory(title);
                  setSelectedTabItem(0);
              })()
            : setSelectedTabItem(id);

        const tabData = JSON.stringify({
            category: isCategory ? title : selectedTabCategory,
            item: isCategory ? 0 : id
        });

        sessionStorage.setItem('portfolio_tabs', tabData);
    };

    return (
        <li key={id}>
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
                {isCategory && title === 'Technology' ? (
                    <svg
                        className='size-[10px] lg:size-[20px]'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        width='20px'
                        height='20px'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M82.64 48.26a51.94 51.94 0 0 0-51.68 51.94 51.94 51.94 0 0 0 42.2 50.9v209.7a51.94 51.94 0 0 0-42.2 51 51.94 51.94 0 0 0 51.94 51.9 51.94 51.94 0 0 0 51.9-51.9 51.94 51.94 0 0 0-42.15-51v-95.1H246.2v95.1a51.94 51.94 0 0 0-42.2 51 51.94 51.94 0 0 0 52 51.9 51.94 51.94 0 0 0 51.9-51.9 51.94 51.94 0 0 0-42.2-51v-95.1H438.8V151.1a51.94 51.94 0 0 0 42.2-50.9 51.94 51.94 0 0 0-51.9-51.94 51.94 51.94 0 0 0-.2 0 51.94 51.94 0 0 0-51.7 51.94 51.94 51.94 0 0 0 42.2 50.9v95.1H265.7v-95.1a51.94 51.94 0 0 0 42.2-50.9A51.94 51.94 0 0 0 256 48.26a51.94 51.94 0 0 0-.2 0A51.94 51.94 0 0 0 204 100.2a51.94 51.94 0 0 0 42.2 50.9v95.1H92.65v-95.1a51.94 51.94 0 0 0 42.15-50.9 51.94 51.94 0 0 0-51.9-51.94 51.94 51.94 0 0 0-.26 0z'></path>
                    </svg>
                ) : isCategory && title === 'Business' ? (
                    <svg
                        className='size-[10px] lg:size-[20px]'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        width='20px'
                        height='20px'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill='none'
                            d='M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z'></path>
                        <path d='M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z'></path>
                    </svg>
                ) : (
                    <svg
                        className='size-[10px] lg:size-[20px]'
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        width='20px'
                        height='20px'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8 2v4'></path>
                        <path d='M12 2v4'></path>
                        <path d='M16 2v4'></path>
                        <rect
                            width='16'
                            height='18'
                            x='4'
                            y='4'
                            rx='2'></rect>
                        <path d='M8 10h6'></path>
                        <path d='M8 14h8'></path>
                        <path d='M8 18h5'></path>
                    </svg>
                )}
                {title}
            </button>
        </li>
    );
}
