import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { SplitText } from '@cyriacbr/react-split-text';
import { easeOutExpo } from '../../constants/easing';

export default function Heading ({ tag = 'h2', className, children : text, once = true, delay = 0, customFontSize }) {

    const HeadingTag = motion(tag);
    const headingClassName = classNames('text-blue-900 font-heading', className, {
        'md:text-xl text-[4.4rem]': !customFontSize,
    });
    const variants = {
        initial: {
            opacity: 0, rotate: -50, translateX: -60, translateY: '-100%', scaleY: 2,
        },
        exit: ({ countIndex, maxIndex }) => ({
            opacity: 0, rotate: 50, translateX: 60, translateY: '100%', scaleY: 2,
            transition: {
                duration: 0.7 + (maxIndex - countIndex) * 0.014,
                delay: delay + 0.014 * countIndex,
            },
        }),
        inView: ({ countIndex, maxIndex }) => ({
            opacity: 1,
            rotate: 0,
            translateX: 0,
            translateY: 0,
            scaleY: 1,
            transition: {
                duration: 1.5 + (maxIndex - countIndex) * 0.014,
                delay: delay + 0.014 * countIndex,
                ease: easeOutExpo,
            },
        }),
    };

    return (
        <HeadingTag viewport={ { once, amount: 'all' } } whileInView="inView" initial="initial" animate="initial" exit="exit" className={ headingClassName }>
            <SplitText className="overflow-hidden origin-bottom-left" LineWrapper={({ children }) => (
                <span>{children}</span>
            )} LetterWrapper={ ({ countIndex, children }) => (
                <motion.span
                    custom={ { countIndex, maxIndex: text.length } }
                    variants={ variants }
                    className="inline-block">
                    { children }
                </motion.span>
            ) }>{ text }</SplitText>
        </HeadingTag>
    );
}
