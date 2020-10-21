import React, { Component } from 'react';
import './App.scss';

import Landing from './Components/Landing/index';
import CV from './Components/CV/index';
import Skill from './Components/Skill';
import Projects from './Components/Projects/index';
import Hire from './Components/Hire';
import Social from './Components/Social/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <CV />
        <Skill />
        <Projects />
        <Hire />
        <Social />
      </div>
    );
  }
}

export default App;
