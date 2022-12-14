import { useEffect, useRef } from 'react';

export const useAnimationFrame = (callback, dep) => {
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);

    const animate = time => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, dep);
};
