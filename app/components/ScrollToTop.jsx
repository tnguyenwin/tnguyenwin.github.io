'use client';

import { styleTemplates } from '../globals.jsx';

export default function ScrollToTop() {
    const handleScrollToTop = () =>
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    return (
        <li>
            <button
                id='buttonScrollToTop'
                className={`${styleTemplates.button} cursor-pointer rounded-full bg-white p-4`}
                onClick={handleScrollToTop}
                type='button'>
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 16 16'
                    height='16'
                    width='16'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fillRule='evenodd'
                        d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'></path>
                </svg>
            </button>
        </li>
    );
}
