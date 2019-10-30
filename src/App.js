import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './navbar-link';


const Temp = ({children}) => 
<div>
<Nav/>
{children}
</div>

function App({match}) {
  return (
    <Temp>
    <div className="App">
      <h1>{match.params.id}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> yeh about h.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Temp>
  );
}

export default App;
