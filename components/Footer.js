import IconLinkButton from './buttons/IconLinkButton';
import IconLogoInstagram from './icons/logo-instagram';
import IconLogoFacebook from './icons/logo-facebook';
import IconLogoWhatsApp from './icons/logo-whatsapp';
import IconLogoYoutube from './icons/logo-youtube';
import IconLogoGoogleMaps from './icons/logo-google-maps';
import React from 'react';
import { FOOTER } from '../constants/content';
import Heading from './motions/Heading';
import Paragraph from './motions/Paragraph';
import Parallax from './motions/Parallax';

export default function Footer ({ contact }) {
    return (
        <footer>
            <Parallax distance={130} offset={['start end', 'end end']} flatDistance
                className="w-full md:px-24 md:pt-20 md:pb-8 bg-yellow-50 rounded-t-[5rem] shadow-[0_-26px_45px_0px_rgba(0,0,0,0.1)] px-8 py-16 pb-6">
                <div className="flex flex-wrap">
                    <div>
                        <Heading tag="h4" className="mb-4">{ FOOTER.title }</Heading>
                        <ul className="flex gap-x-5 mb-12">
                            <li>
                                <IconLinkButton field={ contact.data.instagram_link } color="red"
                                                className="w-12 h-12 border-0 text-black">
                                    <IconLogoInstagram/>
                                </IconLinkButton>
                            </li>
                            <li>
                                <IconLinkButton delay={1 * 0.08} field={ contact.data.facebook_link } color="blue"
                                                className="w-12 h-12 border-0 text-black">
                                    <IconLogoFacebook/>
                                </IconLinkButton>
                            </li>
                            <li>
                                <IconLinkButton delay={2 * 0.08} field={ contact.data.whatsapp_link } color="green"
                                                className="w-12 h-12 border-0 text-black">
                                    <IconLogoWhatsApp/>
                                </IconLinkButton>
                            </li>
                            <li>
                                <IconLinkButton delay={3 * 0.08} field={ contact.data.youtube_link } color="red"
                                                className="w-12 h-12 border-0 text-black">
                                    <IconLogoYoutube/>
                                </IconLinkButton>
                            </li>
                            <li>
                                <IconLinkButton delay={4 * 0.08} field={ contact.data.googlemaps_link } color="green"
                                                className="w-12 h-12 border-0 text-black">
                                    <IconLogoGoogleMaps/>
                                </IconLinkButton>
                            </li>
                        </ul>
                        <Paragraph delay={ 0.5 } className="text-justify">{ contact.data.postal_address }</Paragraph>
                    </div>
                    <div className="flex flex-col md:items-end md:ml-auto mt-7">
                        <a href={ `tel:${ contact.data.phone_number }` }>
                            <Heading delay={ 0.1 } tag="span"
                                     className="md:text-[3.3rem] md:text-right text-[1.6rem] md:[2.3rem]" customFontSize>{ contact.data.phone_number }</Heading>
                        </a>
                        <a href={ `mailto:${ contact.data.email }` }>
                            <Heading delay={ 0.2 } tag="span"
                                     className="md:text-[3.3rem] md:text-right text-[1.6rem] md:[2.3rem]" customFontSize>{ contact.data.email }</Heading>
                        </a>
                    </div>
                </div>
                <div className="mt-24">
                    <Paragraph delay={ 0.9 }
                               className="text-center text-sm leading-5 opacity-50">{ FOOTER.copyright }</Paragraph>
                </div>
            </Parallax>
        </footer>
    );
}
