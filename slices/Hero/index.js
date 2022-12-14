import React from 'react';
import { HERO } from '../../constants/content';
import { PrismicNextImage } from '@prismicio/next';
import Heading from '../../components/motions/Heading';
import Image from '../../components/motions/Image';

const Hero = ({ slice: hero }) => (
    <section id={ hero.primary.section_id ?? "hero" }>
        <div className="px-6 pt-[15vh] pb-32">
            <header className="max-w-screen-xl mx-auto flex justify-center items-baseline md:space-x-[4.2vw] flex-col-reverse md:flex-row">
                <Heading tag="h1" className="md:text-2xl">{ hero.primary.title }</Heading>
                <h2 className="text-blue-900 bg-blue-200 px-[1.6vw] rounded-full border-blue-900/40 border text-lg -translate-y-[1vw]">{ hero.primary.subtitle ?? HERO.subtitle }</h2>
            </header>
            <div className="w-full overflow-hidden rounded-lg">
                <Image>
                    <PrismicNextImage priority className="w-full" field={ hero.primary.image }
                                      width={ 1400 } height={ 1400 }
                                      imgixParams={ { fit: 'crop', w: 1400, h: 1400 } } alt=""/>
                </Image>
            </div>
        </div>
    </section>
);

export default Hero;
