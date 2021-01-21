import React, {Component} from 'react';
import styled from 'styled-components';
import {Switch, Route, NavLink} from "react-router-dom";

const NavBarContainer =styled.div`
position: absolute;
z-index: 50;
width: 100%;
`

const Ul =styled.ul`
display:flex;
justify-content:flex-end;
padding-right:8vw
`
const Li =styled.li`
padding:1.5vw 1vw;

`

class Nav extends Component {

render() { 
    return (
   <NavBarContainer>
     <Ul>
      <Li> <NavLink to="/" exact>
         Home
       </NavLink>
       </Li>
       <Li> <NavLink to="/about" exact>
         About
       </NavLink>
       </Li>
     </Ul>

   </NavBarContainer>

  );
  }
}

export default Nav;
