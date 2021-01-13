import React from 'react';
import './App.css';
import Page2 from './components/page2.jsx'
import Page3 from './components/page3.jsx'
import Nav from './components/Nav.jsx'
import Social from './components/Social.jsx'
function App() {

  return (
    <div className="App" >
        <Nav/>
        <Page3/>
        <Page2/>
        <Social/>
    </div>
  );
}

export default App;
