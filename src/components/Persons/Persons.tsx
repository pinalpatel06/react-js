import React, { Component } from 'react';
import Person from '../Persons/Person/Person';
import { PersonIntr } from '../../Core/Intefaces/PersonInterface';


interface State {
    person: PersonIntr[];
}

interface Props {
    persons: PersonIntr[];
    clicked: (index: number) => void;
    changed: (event: React.ChangeEvent<HTMLInputElement>, index: number) => any;
}

class Persons extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    // Avoid unnecessacery updates cycle
    shoudComponentUpdate(nextProps: Props, nextState: State) {
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }
    componentWillUnmount() {
        console.log("detach");
    }

    render() {
        return this.props.persons.map((person: PersonIntr, index: number) => {
            console.log(this.props);
            return (
                <Person
                    name={person.name}
                    key={person.id}
                    age={person.age}
                    clicked={(index: number) => this.props.clicked(index)}
                    changed={(event: React.ChangeEvent<HTMLInputElement>) => this.props.changed(event, person.id)}
                ></Person>
            )
        });

    }
}

export default Persons;