import React from 'react';

const Link = (props) => {
    return (
        <>
            <a
                className={props.className}
                href={props.href}
                onClick={() => props.toggleTab(props.number)}
                >
                {props.name}
            </a>
        </>
    );
};

export default Link;