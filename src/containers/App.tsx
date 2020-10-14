import React, { Component } from 'react';

import './App.css';
import Layout from '../components/Layouts/Layouts';
import BurgerBuilder from '../containers/BurgurBuilder/BurgerBuilder';

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
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

