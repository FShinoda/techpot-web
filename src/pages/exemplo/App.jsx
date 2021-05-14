import React from 'react';

import './style.css';
import Container from './components/container1/container';

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">

        <Container/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link">lalalallal</a>
        <h1>Java</h1>
        <code>
          x = 3;
          y = 4;

          x == 4 -- False
          x === 4 -- False
        </code>
      </header>
    </div>
  );
}

export default App;
