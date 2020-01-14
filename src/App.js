import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Parallax from './components/parallax.jsx'
import Parallax2 from './components/parallax2.jsx'




function App() {
  
  return (
    <div className="App" class="app">
      <Nav id="Nav"/> 
      <Parallax/>
      <Parallax2/>
      <Parallax/>
      <Parallax2/>
    </div>
  );
}

export default App;
