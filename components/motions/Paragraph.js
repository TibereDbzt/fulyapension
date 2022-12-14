import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { SplitText } from '@cyriacbr/react-split-text';

export default function Heading ({ tag = 'div', className, children: text, once = true, delay = 0 }) {

    const HeadingTag = motion(tag);
    const headingClassName = classNames('leading-7', className);
    const variants = {
        initial: {
            opacity: 0,
        },
        inView: countIndex => ({
            opacity: 1,
            transition: {
                delay: delay + 0.01 * countIndex,
            },
        }),
    };

    return (
        <HeadingTag viewport={ { once, amount: 'all' } } whileInView="inView" animate="initial" className={ headingClassName }>
            <SplitText className="overflow-hidden origin-bottom-left"
                       LetterWrapper={ ({ countIndex, children }) => (
                           <motion.span
                               custom={ countIndex }
                               variants={ variants }
                               className="inline-block">
                               { children }
                           </motion.span>
                       ) }>{ text }</SplitText>
        </HeadingTag>
    );
}
