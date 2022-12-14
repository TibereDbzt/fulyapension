import React from 'react';
import TextLinkButton from '../../components/buttons/TextLinkButton';
import Parallax from '../../components/motions/Parallax';
import { PrismicNextImage } from '@prismicio/next';
import IconArrowTopRight from '../../components/icons/arrow-top-right';
import Heading from '../../components/motions/Heading';
import Paragraph from '../../components/motions/Paragraph';
import Image from '../../components/motions/Image';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { maxMobileWidth } from '../../constants/breakpoints';

const UnstructuredTextImages = ({ slice }) => {

    const windowDimensions = useWindowDimensions();

    return (
        <section id={ slice.primary.section_id }>
            <div className="py-16 md:py-32">
                <header className="px-6 max-w-screen-xl mx-auto mb-24">
                    <Heading className="mb-8">{ slice.primary.title }</Heading>
                    <Paragraph className="max-w-[600px] text-justify mb-12">{ slice.primary.description }</Paragraph>
                    <TextLinkButton field={ slice.primary.link } isPrimary
                                    Icon={ IconArrowTopRight }>{ slice.primary.text_link }</TextLinkButton>
                </header>
                <div className="grid md:grid-cols-12 md:grid-rows-[repeat(6,_minmax(33.3333vh,_1fr))] md:gap-[2px] grid-cols-1 grid-rows-[repeat(8,_minmax(0,_240px))] gap-y-1">
                    <div className="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-3 col-start-1 col-end-2">
                        <Parallax distance={windowDimensions.width > maxMobileWidth ? 50 : 20 } fitHeight>
                            <Image>
                                <PrismicNextImage className="w-full h-full object-cover"
                                                  field={ slice.primary.topleftimage }
                                                  width={ 900 } height={ 900 }
                                                  imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                            </Image>
                        </Parallax>
                    </div>
                    <div className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2 md:sticky md:-top-[1px] overflow-hidden col-start-1 col-end-2">
                        <Parallax distance={ windowDimensions.width > maxMobileWidth ? 0 : 20 } fitHeight>
                            <Image>
                                <PrismicNextImage className="w-full h-full object-cover"
                                                  field={ slice.primary.toprightimage }
                                                  width={ 900 } height={ 900 }
                                                  imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                            </Image>
                        </Parallax>
                    </div>
                    <div className="md:col-start-9 md:col-end-13 md:row-start-2 md:row-end-4 md:sticky md:top-[33.4vh] overflow-hidden col-start-1 col-end-2 row-start-[6] row-end-[7]">
                        <Parallax distance={ windowDimensions.width > maxMobileWidth ? -50 : 20 } fitHeight>
                            <Image>
                                <PrismicNextImage className="w-full h-full object-cover"
                                                  field={ slice.primary.bottomrightimage }
                                                  width={ 900 } height={ 900 }
                                                  imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                            </Image>
                        </Parallax>
                    </div>
                    <div className="md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-5 overflow-hidden col-start-1 col-start-1 col-end-2 row-start-[7] row-end-[8]">
                        <Parallax distance={ windowDimensions.width > maxMobileWidth ? -50 : 20 } fitHeight>
                            <Image>
                                <PrismicNextImage className="w-full h-full object-cover"
                                                  field={ slice.primary.bottomleftimage }
                                                  width={ 900 } height={ 900 }
                                                  imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                            </Image>
                        </Parallax>
                    </div>
                    <div className="md:col-start-4 md:col-end-9 md:row-start-3 md:row-end-5 overflow-hidden col-start-1 col-end-2 row-start-[8] row-end-[9]">
                        <Parallax distance={ 50 } fitHeight>
                            <Image>
                                <PrismicNextImage className="w-full h-full object-cover"
                                                  field={ slice.primary.bottom_image }
                                                  width={ 900 } height={ 900 }
                                                  imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                            </Image>
                        </Parallax>
                    </div>
                    <div className="col-start-1 col-end-9 row-start-3 row-end-5 md:row-start-5 md:row-end-7 px-6 py-4 md:px-20 md:py-16 row-end-9">
                        <Heading className="mb-8">{ slice.primary.bottom_title }</Heading>
                        <Paragraph className="max-w-[600px] text-justify">{ slice.primary.bottom_description }</Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnstructuredTextImages;
