import IconLogoGoogleMaps from '../components/icons/logo-google-maps';
import IconLogoFulya from '../components/icons/logo-fulya';

export const HEADER = {
    logo: {
        Icon: IconLogoFulya,
    },
    entries: [
        {
            href: '#our-story',
            text: 'our story',
        },
        {
            href: '#facilities',
            text: 'facilities',
        },
        {
            href: '#breakfast',
            text: 'breakfast',
        },
        {
            href: '#activities',
            text: 'activities',
        },
        {
            href: '#reviews',
            text: 'reviews',
        },
    ],
    textCtas: [
        {
            href: '#book-now',
            text: 'book now',
        },
    ],
};

export const FOOTER = {
    title: 'Contact',
    copyright: `Fulya Pension © ${ new Date().getFullYear() } All Right Reserved`,
};
