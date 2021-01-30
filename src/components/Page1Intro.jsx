import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer.jsx'

import { NavLink} from "react-router-dom";

const Container = styled.div`
background: #171717;
  overflow:hidden;
  position:relative;
  display: flex;
  height:100vh
  @media  (min-width: 1px) and (max-width: 425px) {
 
    }
  @media  (min-width: 426px) and (max-width: 768px) {

  }
  @media  (min-width: 769px) and (max-width: 2560px) {
    min-width:100vw;
   
`
const HeadingHolder = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: white;
padding: 40px 28px 32px 56px;
  @media  (min-width: 1px) and (max-width: 425px) {

  }
  @media  (min-width: 426px) and (max-width: 768px) {
    
  }
  @media  (min-width: 769px) and (max-width: 1240px) {

  }
`


const Heading = styled.h1`
font-size:12vw;
letter-spacing: 20px;
line-height: 205px;
color: #171717;
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
const Span = styled.span`
display: inline-block;
    padding: 0px 26px;
  @media  (min-width: 1px) and (max-width: 425px) {

  }
  @media  (min-width: 426px) and (max-width: 768px) {

  }
  @media  (min-width: 769px) and (max-width: 1240px) {

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
        
        <NavLink to="/Page1" exact>
  
     
        <HeadingHolder >
        <Heading >N<Span>I</Span> <br/>KE</Heading>
      
          
        </HeadingHolder>
        
        </NavLink>
        <Footer />
      </Container>
      
  );
  }
}

export default Page1;
