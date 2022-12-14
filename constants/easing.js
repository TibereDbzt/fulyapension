export const easeOutExpo = (x) => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

export const easeInExpo = x => {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
};
