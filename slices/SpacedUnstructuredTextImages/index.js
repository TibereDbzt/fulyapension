import React from 'react';
import Parallax from '../../components/motions/Parallax';
import { PrismicNextImage } from '@prismicio/next';
import Heading from '../../components/motions/Heading';
import Paragraph from '../../components/motions/Paragraph';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { maxMobileWidth } from '../../constants/breakpoints';

const SpacedUnstructuredTextImages = ({ slice }) => {
    const windowDimensions = useWindowDimensions();

    return (
        <section id={ slice.primary.section_id }>
            <div className="py-16 md:py-24">
                <header className="px-6 max-w-screen-xl mx-auto mb-8 md:mb-24">
                    <Heading className="mb-8">{ slice.primary.title }</Heading>
                    <Paragraph
                        className="max-w-[454px] leading-7 text-justify">{ slice.primary.description }</Paragraph>
                </header>
                <div className="grid md:grid-cols-12 md:grid-rows-[repeat(9,_minmax(100px,_1fr))] gap-x-0 gap-y-1 md:gap-y-24 grid-cols-1 grid-rows-[repeat(4,_minmax(0,_240px))]">
                    <div className="md:col-start-4 md:col-end-13 md:row-start-1 md:row-end-4">
                        <Parallax distance={ windowDimensions.width > maxMobileWidth ? 30 : 20 } fitHeight={windowDimensions.width < maxMobileWidth} className="drop-shadow-lg">
                            <PrismicNextImage className="w-full h-full object-cover md:rounded-xl"
                                              field={ slice.primary.toprightimage }
                                              width={ 900 } height={ 900 }
                                              imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                        </Parallax>
                    </div>
                    <div className="md:col-start-1 md:col-end-5 md:row-start-4 md:row-end-7 flex flex-col">
                        <Parallax distance={ windowDimensions.width > maxMobileWidth ? -200 : 0 } >
                            <Parallax distance={ windowDimensions.width > maxMobileWidth ? 30 : 20 } fitHeight className="drop-shadow-lg grow">
                                <div className="w-full h-full">
                                    <PrismicNextImage className="w-full h-full object-cover md:rounded-xl"
                                                      field={ slice.primary.leftimage }
                                                      width={ 900 } height={ 900 }
                                                      imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                                </div>
                            </Parallax>
                            <Paragraph className="pt-6">{ slice.primary.textleftimage }</Paragraph>
                        </Parallax>
                    </div>
                    <div className="md:col-start-6 md:col-end-12 md:row-start-4 md:row-end-7">
                        <Parallax distance={ windowDimensions.width > maxMobileWidth ? 50 : 0 } className="w-full h-full">
                            <Parallax distance={ windowDimensions.width > maxMobileWidth ? 30 : 20 } fitHeight className="drop-shadow-lg">
                                <PrismicNextImage className="w-full h-full object-cover md:rounded-xl"
                                                  field={ slice.primary.rightimage }
                                                  width={ 900 } height={ 900 }
                                                  imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                            </Parallax>
                        </Parallax>
                    </div>
                    <div className="md:col-start-2 md:col-end-12 md:row-start-7 md:row-end-[10] flex flex-col">
                        <Parallax distance={ windowDimensions.width > maxMobileWidth ? 90 : 0 } fitHeight={windowDimensions.width < maxMobileWidth} className="drop-shadow-lg w-full grow">
                            <div className="w-full h-full">
                                <PrismicNextImage className="w-full h-full object-cover md:rounded-xl"
                                                  field={ slice.primary.bottomimage }
                                                  width={ 900 } height={ 900 }
                                                  imgixParams={ { fit: 'crop', w: 900, h: 900 } } alt=""/>
                            </div>
                            <Paragraph className="pt-6 px-4">{ slice.primary.textbottomimage }</Paragraph>
                        </Parallax>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpacedUnstructuredTextImages;
