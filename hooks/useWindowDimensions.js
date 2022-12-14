import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
};

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        setWindowDimensions(getWindowDimensions());
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};
