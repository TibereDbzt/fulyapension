import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import { useEffect, useState } from 'react';

const Page = ({ locales, mobileMenuEnabled, page, contact, navigation, settings }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', mobileMenuOpen);
    }, [mobileMenuOpen]);

    return (
        <main>
            <Head>
                <title>{ page.data.meta_title }</title>
                <meta name="description" content={ page.data.meta_description }/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            { mobileMenuEnabled &&
                <MobileMenu navigation={ navigation } onClickEntry={ () => setMobileMenuOpen(false) }
                            isVisible={ mobileMenuOpen }
                            googlemapslink={ contact.data.googlemapslink }/> }
            <Header navigation={ navigation } onClickButtonClose={ () => setMobileMenuOpen(!mobileMenuOpen) }
                    showNav={ !mobileMenuEnabled }
                    googlemapslink={ contact.data.googlemapslink }
                    locales={ locales }
            />

            <SliceZone slices={ page.data.slices } components={ components }/>

            <Footer contact={ contact }/>
        </main>
    );
};

export async function getStaticProps ({ previewData, locales, defaultLocale, locale: currentLocale }) {
    const client = createClient({ previewData });

    const navigation = await client.getSingle('navigation', { lang: currentLocale });
    const page = await client.getSingle('home_page', { lang: currentLocale });
    const contact = await client.getSingle('contact');

    return {
        props: {
            navigation,
            page,
            contact,
            locales: {
                altLangs: locales,
                defaultLocale,
                currentLocale,
            },
        },
    };
}

export default Page;
