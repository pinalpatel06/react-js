import React, { Component } from 'react';

import './App.css';
import Blog from '../containers/Blog/Blog';

class App extends Component {

  constructor(props: any) {
    super(props);
  }

  // static getDerivedStateFromProps(props: any, state: any) {
  //   return state;
  // }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;

