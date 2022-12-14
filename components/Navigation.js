import { HEADER } from '../constants/content';
import IconLinkButton from './buttons/IconLinkButton';
import IconLogoGoogleMaps from './icons/logo-google-maps';
import { useCallback } from 'react';
import classNames from 'classnames';
import Heading from './motions/Heading';

export default function Navigation ({ entries, googlemapslink, isMobile = false, onClickEntry }) {
    const handleClickEntry = useCallback(
        (e) => {
            if (isMobile && onClickEntry) onClickEntry();
            // const href = e.target?.getAttribute('href');
            // if (href && href.startsWith('#')) {
            //     e.preventDefault();
            //     const destination = document.querySelector(href);
            //     if (destination) {
            //         destination.scrollIntoView({
            //             behavior: 'smooth',
            //         });
            //         if (isMobile && onClickEntry) onClickEntry();
            //     }
            // }
        },
        [isMobile, onClickEntry],
    );

    const containerClassNames = classNames('font-heading', {
        'w-full': isMobile,
    });
    const listClassName = classNames('flex', {
        'flex-col items-end gap-y-2': isMobile,
        'items-center gap-x-2': !isMobile,
    });
    const linkClassName = classNames('inline-block text-blue-900 uppercase px-2 h-6', {
        'text-[5.6vw]': isMobile,
    });
    const itemClassName = classNames('', {
        'contents': !isMobile,
    });
    const textClassName = classNames({
        '!text-[1rem]': !isMobile,
    });
    const ctaClassName = classNames('flex justify-center items-center text-blue-900 rounded-full uppercase px-4 h-11 bg-blue-200 border-blue-900/40 border', {
        'text-[5.6vw] px-9 py-9': isMobile,
    });

    return (
        <nav className={ containerClassNames }>
            <ul className={ listClassName }>
                { entries.map(({ entry_name, entry_target, button_look }, i) => (
                    <li key={ i } className={ itemClassName }>
                        <a onClick={ handleClickEntry } className={ button_look ? ctaClassName : linkClassName }
                           href={ entry_target }>
                            <Heading tag="span" className={ textClassName } delay={ i * 0.1 } customFontSize>
                                { entry_name }
                            </Heading>
                        </a>
                    </li>
                )) }
                <li>
                    <IconLinkButton border field={ googlemapslink } color="blue">
                        <IconLogoGoogleMaps/>
                    </IconLinkButton>
                </li>
            </ul>
        </nav>
    );
};
