import React from 'react';
import Radium from 'radium';
import './Person.scss';

const Person = (props: any) => {

    const style: any = {
        '@media (max-width: 500px)': {
            width: '100%'
        }
    };

    return (
        <div onClick={props.click} className="Person" style={style}>
            <p>I'am {props.name}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>

    )
}

export default Radium(Person);
