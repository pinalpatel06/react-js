import React from 'react';

import './CounterControl.css';

interface Props {
    label: string;
    clicked: () => void
}

const counterControl = (props: Props) => (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;