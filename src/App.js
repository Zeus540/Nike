import React from 'react';
import './App.css';
import Page2 from './components/page2.jsx'

import Nav from './components/Nav.jsx'
import Social from './components/Social.jsx'
import Gallery1 from './components/Gallery.jsx'
import Form from './components/Form.jsx'

function App() {

  return (
    <div className="App" >
        <Nav/>
       
        <Page2/>
        <Gallery1/>
        <Social/>
        <Form/>
    </div>
  );
}

export default App;
