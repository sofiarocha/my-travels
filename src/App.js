import React, { Component } from 'react';
import Travel from './Travel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel name="Tokyo" country="Japan" photoUrl="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=771&q=80" distance="11 136"/>
        <Travel name="Nairobi" country="Kenya" photoUrl="https://images.unsplash.com/photo-1502088513349-3ff6482aa816?ixlib=rb-1.2.1&auto=format&fit=crop&w=792&q=80" distance="9 224,5"/>
      </div>
    );
  }
}

export default App;
