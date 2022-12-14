import classNames from 'classnames';
import { PrismicLink } from '@prismicio/react';
import { motion } from 'framer-motion';
import { easeOutExpo } from '../../constants/easing';

export default function IconLinkButton ({ field, border, className, color, children: icon, delay = 0 }) {
    const buttonClassName = classNames('inline-flex justify-center items-center h-11 w-11 text-blue-900 uppercase rounded-full', className, {
        'bg-blue-200': color === 'blue',
        'bg-yellow-50': color === 'yellow',
        'bg-green-100': color === 'green',
        'bg-red-100': color === 'red',
        'border-blue-900/40 border': border,
    });

    const variants = {
        initial: {
            scale: 0,
        },
        hover: {
            scale: 1.05,
            transition: {
                type: 'spring', stiffness: 400, damping: 10, restSpeed: 0, restDelta: 0.1,
            },
        },
        inView: {
            scale: 1,
            transition: {
                type: 'spring', stiffness: 140, damping: 15, restSpeed: 0, restDelta: 0.1,
                delay: delay,
            },
        },
    };

    return (
        <motion.div variants={variants} initial="initial" whileInView="inView" whileHover="hover">
            <PrismicLink field={ field } className={ buttonClassName }>
                { icon }
            </PrismicLink>
        </motion.div>
    );
}
