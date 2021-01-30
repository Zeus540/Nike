import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer.jsx'
import test from '../images/1.jpg'

import { NavLink} from "react-router-dom";

const Container = styled.div`
background: #171717;
  overflow:hidden;
  position:relative;
  display: flex;
  @media  (min-width: 1px) and (max-width: 425px) {
 
    }
  @media  (min-width: 426px) and (max-width: 768px) {

  }
  @media  (min-width: 769px) and (max-width: 2560px) {
    min-width:100vw;
   
`

const LeftContainer = styled.div`
height:100vh;
position:absolute;

overflow-y: auto;
overflow-x: hidden;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  width: 30vw;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 106vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 55vw;
  }
 
  @media  (min-width: 769px) and (max-width: 1240px) {
    width: 50vw;
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

const HeadingHolder = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 

  @media  (min-width: 1px) and (max-width: 425px) {

  }
  @media  (min-width: 426px) and (max-width: 768px) {
    transform: translate(-70%, -30%);
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    transform: translate(-50%, -35%);
  }
`

const Heading = styled.h1`
font-size:10vw;
letter-spacing:6px;
  @media  (min-width: 1px) and (max-width: 425px) {
    font-size: 25vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    font-size: 13vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    font-size: 13vw;
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
     
        <HeadingHolder >
          <Heading >JUST <br/> DO <br/> IT</Heading>
          
        </HeadingHolder>
         
        
        </RightContainer>
        </NavLink>
        <Footer />
      </Container>
      
  );
  }
}

export default Page1;
