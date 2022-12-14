import React, { useEffect, useRef, useState } from 'react';
import {
    motion,
    useMotionValue,
} from 'framer-motion';
import { PrismicNextImage } from '@prismicio/next';
import Heading from '../../components/motions/Heading';
import Paragraph from '../../components/motions/Paragraph';

const TextImagesSlider = ({ slice: slider }) => {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    const [dragConstraints, setDragConstraints] = useState({
        left: 0,
        right: 0,
    });

    useEffect(() => {
        const containerBounds = containerRef.current.getBoundingClientRect();
        const sliderBounds = sliderRef.current.getBoundingClientRect();
        const left = sliderBounds.left - containerBounds.left;
        const right = sliderBounds.right - containerBounds.right;

        setDragConstraints({ left, right });
    }, []);

    const x = useMotionValue(0);

    return (
        <section id={ slider.primary.section_id } className="overflow-hidden">
            <div className="py-24">
                <header className="px-6 py-16 flex flex-col items-center">
                    <Heading className="mb-8">{ slider.primary.title }</Heading>
                    <Paragraph
                        className="max-w-[820px] leading-7 text-center">{ slider.primary.description }</Paragraph>
                </header>
                <motion.div className="flex justify-center" ref={containerRef}>
                    <motion.ul ref={sliderRef} drag="x" style={ { x } }
                               dragConstraints={ dragConstraints } dragTransition={{ power: 0.1, timeConstant: 200 }} dragSnapToOrigin={false}
                               className="inline-flex items-center justify-center gap-x-4 lg:gap-x-16 px-8">
                        { slider.items.map((slide, i) => (
                            <motion.li key={ i }
                                       className="rounded-lg overflow-hidden shrink-0 w-[85vw] lg:w-[38vw] aspect-w-12 aspect-h-2">
                                <motion.div>
                                    <PrismicNextImage className="w-full h-full object-cover brightness-90"
                                                      field={ slide.image }
                                                      width={ 700 } height={ 700 }
                                                      imgixParams={ { fit: 'crop', w: 700, h: 700 } }/>
                                </motion.div>
                                <div
                                    className="absolute flex flex-col justify-center items-center text-white px-5 lg:px-16">
                                    <h3 className="font-heading text-5xl text-center">{ slide.title }</h3>
                                    <p className="leading-7 text-center mt-8 text-[0.8rem] lg:text-[1rem]">{ slide.description }</p>
                                </div>
                            </motion.li>
                        )) }
                    </motion.ul>
                </motion.div>
                {/*<div className="flex justify-center gap-x-4 mt-8">*/}
                {/*    <button onClick={ onClickLeft }*/}
                {/*            className="w-20 h-20 flex items-center justify-center bg-yellow-50 rounded-full">*/}
                {/*        <IconArrowLeft/>*/}
                {/*    </button>*/}
                {/*    <button onClick={ onClickRight }*/}
                {/*            className="w-20 h-20 flex items-center justify-center bg-yellow-50 rounded-full">*/}
                {/*        <IconArrowRight/>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default TextImagesSlider;
