import React, {useEffect} from 'react';
import Header from '../Header/Header';
import Radium, { StyleRoot } from 'radium';

const Cockpit = (props: any) => {

  // Life cycle hooks for functional components
  useEffect(() => {
    console.log('useEffect');

    // http call
    setTimeout(() => {
      alert('response');
    })
  }, []);

  // No second arg means this function will run on every updates
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("clean up");
    };
  });

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

  // let classes: string = ['red', 'bold'].join(' ');
  let classes = [];

  if (props.persons.length <= 1) {
    classes.push('red');
  }
  if (props.persons.length <= 2) {
    classes.push('bold');
  }

  if (props.showPersons) {
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'blue',
      color: 'black'
    }
  }

  return (
    <StyleRoot>
      <div>
        <Header></Header>
        <p className={classes.join(' ')}>My App</p>
        <button style={style} onClick={props.clicked}>Toggle Person</button>
      </div>
    </StyleRoot>
  );
}

export default Radium((Cockpit));