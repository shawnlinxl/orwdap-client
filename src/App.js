import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageContainer from './components/PageContainer/PageContainer'
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Programmes from './containers/Programmes/Programmes';
import Volunteer from './containers/Volunteer/Volunteer';

import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <PageContainer>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/programmes' component={Programmes} />
          <Route exact path='/volunteer' component={Volunteer} />
        </PageContainer>
      </Router>
    );
  }
}

export default App;
