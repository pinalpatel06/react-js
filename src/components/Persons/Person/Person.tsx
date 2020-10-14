import React, { Component } from 'react';
import Radium from 'radium';
import { PersonIntr } from '../../../Core/Intefaces/PersonInterface';

interface State {
    person: PersonIntr;
}

interface Props {
    id: number;
    name: string;
    key: number;
    age: number;
    clicked: (index: number) => void;
    changed: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

class Person extends Component<Props, State> {

    inputElemt: any;

    constructor(props: Props) {
        super(props);
        this.inputElemt = React.createRef();
    }

    componentDidMount() {
        this.inputElemt.current.focus();
    }

    render() {
        const style: any = {
            '@media (max-width: 500px)': {
                width: '100%'
            }
        };

        return (
            <div
                className="Person" style={style}>
                <p onClick={() => this.props.clicked(this.props.id)} >I'am {this.props.name}</p>
                <input type="text"
                    // ref={(inputEl) => {this.inputElemt = inputEl}}
                    ref={this.inputElemt}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.changed(event, this.props.id)} value={this.props.name}
                />
            </div>
        );
    }
}

export default Radium(Person);
