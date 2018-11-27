'use strict';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import './design/design.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
    </React.Fragment>
    );
  }
}

export default App;
