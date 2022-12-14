import React from 'react';
import { PrismicNextImage } from '@prismicio/next';
import Heading from '../../components/motions/Heading';
import Paragraph from '../../components/motions/Paragraph';

const IconsTextsList = ({ slice }) => (
    <section id={ slice.primary.section_id }>
        <div className="px-6 py-8 md:py-24">
            <header className="flex flex-col md:items-center mb-24">
                <Heading className="mb-8 max-w-[920px] text-center">{ slice.primary.title }</Heading>
                <Paragraph className="max-w-[832px] md:text-center">{ slice.primary.description }</Paragraph>
            </header>
            <ul className="flex flex-wrap justify-center gap-8 mx:px-32 md:gap-20">
                { slice.items.map((item, i) => (
                    <li key={ i } className="flex flex-col items-center space-y-2 md:space-y-6">
                        <div className="w-12 h-12 md:w-36 md:h-36 flex justify-center items-center rounded-full bg-yellow-50">
                            <PrismicNextImage className="w-3/5 object-cover rounded-lg" field={ item.icon }
                                              width={ 58 } height={ 58 }
                                              imgixParams={ { fit: 'crop', w: 58, h: 58 } } alt=""/>
                        </div>
                        <h4 className="font-heading text-blue-900 md:text-4xl">{ item.text }</h4>
                    </li>
                )) }
            </ul>
        </div>
    </section>
);

export default IconsTextsList;
