import React from 'react';

import './Button.css';

const button = (props: any) => {
    const classes = 'Button ' + props.btnType;
    return (
        <button
            disabled={props.disabled}
            className={classes}
            onClick={props.clicked}>{props.children}</button>

    )
}

export default button;