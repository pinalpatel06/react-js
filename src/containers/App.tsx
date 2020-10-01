import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Header from '../components/Header/Header';
import Person from '../components/Persons/Person/Person';
import { PersonIntr } from '../Core/Intefaces/PersonInterface';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Pinal', age: 35 },
      { id: 2, name: 'Minal', age: 45 },
    ] as PersonIntr[],
    showPersons: false
  }

  nameChangeHandler = (event: any, id: number) => {

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      height: '40px',
      width: '100px',
      marginTop: '10px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    {/* Normal nested if */ }
    if (this.state.showPersons) {
      persons = (
        < div >
          {
            this.state.persons.map((person: PersonIntr, index: number) => {
              return <Person name={person.name} key={person.id} age={person.age} click={() => this.deletePersonHandle(index)} changed={(event: any) => this.nameChangeHandler(event, person.id)}></Person>
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'blue',
        color: 'black'
      }
    }

    // let classes: string = ['red', 'bold'].join(' ');
    let classes = [];

    if (this.state.persons.length <= 1) {
      classes.push('red');
    }
    if (this.state.persons.length <= 2) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <Header></Header>

          <p className={classes.join(' ')}>My App</p>
          {/* Ternary Operator */}
          {/* {
          this.state.showPersons ?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}></Person>
            </div>
            : null
        } */}

          <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
          {/* Normal nested if */}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

