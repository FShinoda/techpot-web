import React from 'react';

import './style.css';
import Container from './components/container1/container';

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
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
