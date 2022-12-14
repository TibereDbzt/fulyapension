import React, { useRef } from 'react';
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { PrismicNextImage } from '@prismicio/next';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const InfiniteImagesSlider = ({ slice: slider }) => {
    const baseVelocity = slider.primary.auto ? 60 : 0;
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        stiffness: 140,
        damping: 105,
        restSpeed: 10,
        restDelta: 0.01,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 20], {
        clamp: false,
    });

    const slides = {
        length: slider.items.length,
        width: 168,
        height: 212,
        spacing: 2,
    };


    const x = useTransform(baseX, v => `${ wrap(-slides.length * (slides.width + slides.spacing), 0, v) }px`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <section id={ slider.primary.section_id } className="overflow-hidden">
            <motion.div className={ `flex justify-start items-center space-x-2 overflow-visible` }
                        style={ { x } }>
                { [...slider.items, ...slider.items].map((item, i) => (
                    <div className="flex-none rounded-md w-[168px] h-[212px] overflow-hidden" key={ i }>
                        <PrismicNextImage className="object-cover w-full h-full" field={ item.image }
                                          width={ slides.width }
                                          height={ slides.height }
                                          imgixParams={ { fit: 'crop', w: slides.width, h: slides.height } } alt=""/>
                    </div>
                )) }
            </motion.div>
        </section>
    );
};

export default InfiniteImagesSlider;
