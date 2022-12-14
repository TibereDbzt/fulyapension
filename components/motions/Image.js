import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { easeOutExpo } from '../../constants/easing';

export default function Image ({ children: image, className, once = true, delay = 0 }) {

    const containerClassName = classNames('w-full h-full rounded-lg', className);
    const variants = {
        initial: {
            opacity: 0, translateY: -70, scale: 1.1,
        },
        inView: {
            scale: 1,
            opacity: 1,
            translateY: 0,
            transition: {
                duration: 1.5,
                delay: delay,
                ease: easeOutExpo,
            },
        },
    };

    return (
        <motion.div viewport={ { once } } whileInView="inView" animate="initial" variants={ variants } className={ containerClassName }>
            { image }
        </motion.div>
    );
}
