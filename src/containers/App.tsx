import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import withClass from '../HOC/WithClass';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import { PersonIntr } from '../Core/Intefaces/PersonInterface';
import { Fragment } from 'react';

class App extends Component {

  constructor(props: any) {
    super(props);
  }

  state = {
    persons: [
      { id: 1, name: 'Pinal', age: 35 },
      { id: 2, name: 'Minal', age: 45 },
    ] as PersonIntr[],
    showPersons: false
  }

  static getDerivedStateFromProps(props: any, state: any) {
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  nameChangeHandler = (event: any, id: number) => {
    console.log('xxx', event, id);
    let person = this.state.persons.find(person => person.id === id);

    if (person) {
      person.name = event.target.value;
    }

    this.setState({
      persons: this.state.persons
    })
  }

  togglePersonHandler = () => {
    const justShow = this.state.showPersons;
    this.setState({
      showPersons: !justShow
    })
  }

  deletePersonHandle = (index: number) => {
    // let persons = [...this.state.persons];
    let persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    let persons = null;

    {/* Normal nested if */ }
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandle}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <Fragment>
        <StyleRoot>
          <div className="App">
            <Cockpit
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonHandler}
            />
            {persons}
          </div>
        </StyleRoot>
      </Fragment>
    );
  }
}

export default App;

