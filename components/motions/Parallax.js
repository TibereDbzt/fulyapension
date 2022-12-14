import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import classNames from 'classnames';

export default function Parallax ({ distance = 50, fitHeight = false, offset = ['start end', 'end start'], flatDistance, className, children }) {
    const containerClassNames = classNames('relative w-full h-full', {
        'overflow-hidden': fitHeight,
    });
    const parallaxClassNames = classNames(className, {
        'absolute left-0': fitHeight,
    });
    const height = fitHeight ? `calc(100% + ${ 2 * Math.abs(distance) }px)` : '100%';
    const top = fitHeight ? `${ -Math.abs(distance) }px` : '0';

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset });
    const y = useTransform(scrollYProgress, [0, 1], (flatDistance ? [2 * distance, 0] : [distance, -distance]));

    return (
        <div className={ containerClassNames }>
            <motion.div ref={ ref } style={ { y, height, top } } className={ parallaxClassNames }>
                { children }
            </motion.div>
        </div>
    );
}
