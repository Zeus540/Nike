import React, {Component} from 'react';
import styled from 'styled-components';
import Left from '../images/left.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

import af2 from '../images/test.png';

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
  min-width: 60vw;
  height: 100vh;
  float:right;
  position:relative;
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:200vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 110vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 70vw;
  }
`

const Img = styled.img`
width: 30vw;
height: 30vw;
border: none;
position: relative;
z-index: 2;
left: 100px;
@media  (min-width: 1px) and (max-width: 425px) {
  width: 100vw;
  height: 100vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  width: 50vw;
  height: 50vw;
}
`   

const Img2 = styled.img`
width: 30vw;
height: 30vw;
border: none;
position: absolute;
left: 280px;
@media  (min-width: 1px) and (max-width: 425px) {
  width: 100vw;
  height: 100vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  width: 50vw;
  height: 50vw;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  left: 200px;
}
`  



const ShoeHolder = styled.div`
position: relative;
display:flex;
top:50%
    left: 50%;
    transform: translate(-50%, -50%);
@media  (min-width: 1px) and (max-width: 425px) {
  
}
@media  (min-width: 426px) and (max-width: 768px) {
 
}
@media  (min-width: 769px) and (max-width:1024px) {
 
}
@media  (min-width: 1025px) and (max-width: 1440px) {
 
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

        <RightContainer  data-aos='fade-in'>
        <NavLink to="/Page1" exact>
        <ShoeHolder >
          <Img src={af2} alt="" />
          <Img2 src={af2} alt="" />
          </ShoeHolder>
          </NavLink>
        
        </RightContainer>
      
      </Container>
      
  );
  }
}

export default Page1;
