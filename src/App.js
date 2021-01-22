import React  from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Page1Intro from './components/Page1Intro';
import Page1 from './components/Page1.jsx';
import Page2 from './components/Page2.jsx';
import Page3 from './components/Page3.jsx';
import Page4 from './components/Page4.jsx';

function App() {

  
  return (
    <div className="App" >
    
      <Switch>

        <Route path="/" exact component={Page1Intro}/>
        <Route path="/Page1" exact component={Page1}/>
        <Route path="/Page2" exact component={Page2}/>
        <Route path="/Page3" exact component={Page3}/>
        <Route path="/Page4" exact component={Page4}/>
     </Switch>
    
 
    </div>
  );
}

export default App;
