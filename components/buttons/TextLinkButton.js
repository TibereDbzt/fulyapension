import classNames from 'classnames';
import { PrismicLink } from '@prismicio/react';
import { motion } from 'framer-motion';

export default function TextLinkButton ({
                                            field,
                                            children: text = 'CHECK IT OUT',
                                            isPrimary = false,
                                            Icon,
                                            className,
                                        }) {
    let buttonClassName = classNames('inline-flex items-center text-blue-900 uppercase rounded-full', className, {
        'px-4 h-11 bg-blue-200 border-blue-900/40 border': isPrimary,
        'px-2 h-6': !isPrimary,
    });

    return (
        <motion.div className="inline-block w-auto h-auto" whileHover={{ scale: 1.05, }} transition={{ type: "spring", stiffness: 400, damping: 10, restSpeed: 0, restDelta: 0.1 }}>
            <PrismicLink field={ field } className={ buttonClassName }>
                <span>{ text }</span>
                { Icon && <Icon/> }
            </PrismicLink>
        </motion.div>
    );
}
