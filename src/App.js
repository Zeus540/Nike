import React ,{useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import {Switch, Route} from "react-router-dom";
import Parallax2 from './components/parallax2';
import Parallax3 from './components/parallax3';


function App() {

  
  return (
    <div className="App" >
        
        <Nav/>
      
        <Switch>
     <Route path="/about" component={Parallax3}/>
     <Route path="/" component={Parallax2}/>
     </Switch>
    
     
   

    </div>
  );
}

export default App;
