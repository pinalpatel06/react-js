import React from 'react';
import Aux from '../../HOC/Aux';
import './Layouts.css'

const layout = (props: any) => {
    return (
        <Aux>
            <div className="margin">Toolbar</div>
            <main>
                {props.children}
            </main>
        </Aux>
    );

};

export default layout;