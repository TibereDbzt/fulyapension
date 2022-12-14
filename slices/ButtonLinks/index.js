import React from 'react';
import IconLinkButton from '../../components/buttons/IconLinkButton';
import { PrismicNextImage } from '@prismicio/next';
import Heading from '../../components/motions/Heading';

const ButtonLinks = ({ slice }) => (
    <section id={ slice.primary.section_id }>
        <div className="px-6 py-52">
            <header>
                <Heading className="mb-8 text-2xl text-center">{ slice.primary.title }</Heading>
            </header>
            <ul className="flex flex-wrap justify-center gap-16 mt-12">
                { slice.items.map((button, index) => (
                    <li key={ index }>
                        <IconLinkButton delay={ index * 0.08 } className="w-48 h-48 flex items-center justify-center"
                                        field={ button.link } color={ button.color.toLowerCase() }>
                            <PrismicNextImage field={ button.icon }
                                              width={ 100 } height={ 100 }
                                              imgixParams={ { fit: 'crop', w: 100, h: 100 } } alt=""/>
                        </IconLinkButton>
                    </li>
                )) }
            </ul>
        </div>
    </section>
);

export default ButtonLinks;
