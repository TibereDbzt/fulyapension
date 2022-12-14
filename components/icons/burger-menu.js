import * as React from 'react';

export default function IconBurgerMenu (props) {
    return (
        <svg
            width={26}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4.469 19.906H21.53m-17.062-6.5H21.53M4.47 6.906H21.53"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
