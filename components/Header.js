import { HEADER } from '../constants/content';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navigation from './Navigation';
import IconArrowLeft from './icons/arrow-left';
import LanguageSwitcher from './LanguageSwitcher';
import IconBurgerMenu from './icons/burger-menu';

export default function Header ({ navigation, locales, showNav, onClickButtonClose, googlemapslink }) {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * 3]);

    return (
        <header className="sticky top-0 z-40">
            <div className="w-full px-8">
                <div className="py-8 flex justify-between items-center">
                    <motion.a style={ { rotate } } href="#hero">
                        <HEADER.logo.Icon className="text-blue-900"/>
                    </motion.a>
                    <div className="flex flex-row-reverse md:flex-row">
                        { showNav
                            ? <Navigation entries={ navigation.data.entries } googlemapslink={ googlemapslink }/>
                            : <button
                                className="inline-flex justify-center items-center h-11 w-11 text-blue-900 uppercase rounded-full"
                                onClick={ onClickButtonClose }>
                                <IconBurgerMenu/>
                            </button>
                        }
                        <LanguageSwitcher { ...locales }/>
                    </div>
                </div>
            </div>
        </header>
    );
};
