import '../styles/globals.css';
import localFont from '@next/font/local';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { maxMobileWidth } from '../constants/breakpoints';

const boskaLight = localFont({
    src: [
        {
            path: '../public/fonts/boska/boska-light.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/boska/boska-light.woff',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/boska/boska-light.ttf',
            weight: '200',
            style: 'normal',
        },
    ],
    variable: '--font-boska-light',
});
const switzerLight = localFont({
    src: [
        {
            path: '../public/fonts/switzer/switzer-light.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/switzer/switzer-light.woff',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/switzer/switzer-light.ttf',
            weight: '200',
            style: 'normal',
        },
    ],
    variable: '--font-switzer-light',
});
const { screens } = require('tailwindcss/defaultTheme');

function MyApp ({ Component, pageProps }) {
    const windowDimensions = useWindowDimensions();
    const [mobileMenuEnabled, setMobileMenuEnabled] = useState(false);

    useEffect(() => {
        setMobileMenuEnabled(windowDimensions.width <= maxMobileWidth);
    }, [windowDimensions]);

    return (
        <div className={ `${ boskaLight.variable } ${ switzerLight.variable }` }>
            <PrismicProvider internalLinkComponent={ ({ href, children, locale, ...props }) => (
                <Link href={ href } locale={ locale } { ...props }>
                    { children }
                </Link>
            ) }>
                <PrismicPreview repositoryName={ repositoryName }>
                    <Component windowDimension mobileMenuEnabled={ mobileMenuEnabled } { ...pageProps } />
                </PrismicPreview>
            </PrismicProvider>
        </div>
    );
}

export default MyApp;
