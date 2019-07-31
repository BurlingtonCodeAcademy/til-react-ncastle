import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Today I Learned</h1>
      <li><a href='/facts'>List all entries (JSON)</a></li>
      <h2>Add a fact</h2>
      <form method="POST" action="/facts">
        <input type="text" name="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;