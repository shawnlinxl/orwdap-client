import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar>
            <h1>Hello world</h1>
          </Navbar>
        </header>
      </>
    );
  }
}

export default App;
