import React from 'react';

import Page2 from './components/page2.jsx'
import Page3 from './components/page3.jsx'
import Nav from './components/Nav.jsx'
import Social from './components/Social.jsx'
import Gallery1 from './components/Gallery.jsx'
import Form from './components/Form.jsx'

function App() {

  return (
    <div  >
        <Nav/>
        <Page3/>
        <Page2/>
        <Gallery1/>
        <Social/>
        <Form/>
    </div>
  );
}

export default App;
