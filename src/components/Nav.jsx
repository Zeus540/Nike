import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";

const Navbar = styled.div`
border: none;
border-radius: 0px;
background: #1f1f1fd6;
margin: 0px!important;
z-index: 2;
color:white;
position: fixed;
left:0px;
top:0px;
display:inline-block;
`

const List = styled.ul`
display: flex;
flex-direction:row;
justify-content:center;
margin: 0px;
padding:0px;
`

const ListItem = styled.li`
list-style:none;
margin:0px 0px
padding:15px 15px;
transition: ease-in 200ms;
  &:hover {
    background-color: #5953ff;
    box-shadow: #000000 0px 5px 20px 7px;
    transform: scale(1.2);
    padding:20px 5px;
    margin:0px 15px;
}
    
`

class Nav extends Component {

render() { 
    return (
      <Navbar>
      <List>
      <ListItem>
        <Link
          activeClass="active"
          to="Nav"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {500}
          >Home
        </Link>
      </ListItem>
      <ListItem>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-55}
          duration= {500}
          >Projects
        </Link>
      </ListItem>
      <ListItem>
        <Link
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={-55}
          duration= {500}
          >Contact Me
        </Link>
      </ListItem>
      <ListItem>
        <Link
          activeClass="active"
          to="Hobbies"
          spy={true}
          smooth={true}
          offset={-430}
          duration= {500}
          >Hobbies
        </Link>  
      </ListItem>         
      </List>
      </Navbar>

  );
  }
}

export default Nav;
