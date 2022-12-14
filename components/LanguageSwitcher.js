import { PrismicLink } from '@prismicio/react';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import IconArrowDown from './icons/arrow-down';

const LangIcon = (langCode) => {
    let code = langCode.lang.substring(0, 2).toLowerCase();
    if (code === 'en') {
        code = 'gb';
    }

    return <span className={ `fi fi-${ code }` }/>;
};

export const LanguageSwitcher = ({ altLangs = [], currentLocale }) => {

    const [isOpen, setIsOpen] = useState(false);

    const itemClassName = classNames({
        'absolute top-0': !isOpen,
    })

    return (
        <button onClick={ () => setIsOpen(true) }
             onMouseLeave={ () => setIsOpen(false) }
                className="relative inline-flex items-start h-[1.6rem] my-2 mx-3">
            <motion.ul
                initial="hidden"
                className="relative"
            >
                <li className="relative z-20">
                    <LangIcon lang={ currentLocale }/>
                </li>
                { altLangs.filter(lang => lang !== currentLocale).map((altLang, index) => {
                    return (
                        <motion.li key={ altLang } layout
                                   className={ itemClassName }
                        >
                            <PrismicLink
                                href="/"
                                locale={ altLang }
                            >
                                <LangIcon lang={ altLang }/>
                            </PrismicLink>
                        </motion.li>
                    );
                }) }
            </motion.ul>
            <div className="mt-[0.5rem] ml-[0.5rem]">
                <IconArrowDown/>
            </div>
        </button>
    );
};

export default LanguageSwitcher;
