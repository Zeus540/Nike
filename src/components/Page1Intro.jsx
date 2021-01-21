import React, {Component} from 'react';
import styled from 'styled-components';
import Left from '../images/left.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



import { NavLink} from "react-router-dom";

const Container = styled.div`
  background:#2c2d2d;
  overflow:hidden;
  position:relative;
  display: flex;
  @media  (min-width: 1px) and (max-width: 425px) {
    overflow:unset;
    }
  @media  (min-width: 426px) and (max-width: 768px) {
  overflow:unset;
  }
  @media  (min-width: 769px) and (max-width: 2560px) {
    min-width:100vw;
    overflox:unset;
`

const LeftContainer = styled.div`
background: url(${Left});  
background-size:100% 100%;
height:100vh;
position:absolute;
transform: translateX(-24vw); 
overflow-y: auto;
overflow-x: hidden;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  width: 35vw;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 106vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 55vw;
  }
 
  @media  (min-width: 769px) and (max-width: 1240px) {
    width: 60vw;
  }
  
`


const RightContainer = styled.div`
  min-width: 100vw;
  height: 100vh;

  position:relative;
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:100vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 100vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 100vw;
  }
`


class Page1 extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1500
    })
  }
render() {


    return (
      <Container >
        

        <LeftContainer className="fade">

         

        </LeftContainer>
        <NavLink to="/Page1" exact>
        <RightContainer  data-aos='fade-in'>
     
    
         
        
        </RightContainer>
        </NavLink>
      </Container>
      
  );
  }
}

export default Page1;
