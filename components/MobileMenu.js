import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import { useEffect } from 'react';

export default function MobileMenu ({ navigation, isVisible, googlemapslink, onClickEntry }) {

    return (
        <AnimatePresence>
            { isVisible && (
                <motion.div
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit={ { opacity: 0, transition: { duration: 2 } } }
                    className="fixed top-0 left-0 w-full h-full bg-white z-30">
                    <div className="h-full p-8 flex flex-col justify-end items-center">
                        <Navigation entries={ navigation.data.entries } googlemapslink={ googlemapslink }
                                    isMobile={ true } onClickEntry={ onClickEntry }/>
                    </div>
                </motion.div>
            ) }
        </AnimatePresence>
    );
};
