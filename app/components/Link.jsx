import { styleTemplates } from '../globals.jsx';

export default function Link({ isNavLink, href, body, extraClasses = '' }) {
    return (
        <li className='group h-full'>
            <a
                className={`flex items-center ${isNavLink && !extraClasses ? styleTemplates.navlinkHover : ''} ${extraClasses}`}
                href={href}>
                {body}
            </a>
        </li>
    );
}
