import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import af2 from '../images/test.png';
import { NavLink} from "react-router-dom";

const Container = styled.div`
  background:#2c2d2d;
  height:100vh
  min-width:100vw;

  @media  (min-width: 1px) and (max-width: 425px) {
  
    }
  @media  (min-width: 426px) and (max-width: 768px) {

  }
  @media  (min-width: 769px) and (max-width: 2560px) {

`

const Img = styled.img`
width: 20vw;
height: 20vw;
border: none;
position: relative;
z-index: 2;
transform: rotate3d(0, 2, 3, 46deg);

@media  (min-width: 1px) and (max-width: 425px) {
  width: 100%;
  height: 100%;

}
}
@media  (min-width: 426px) and (max-width: 768px) {
  width: 40vw;
  height: 40vw;
}
@media  (min-width: 769px) and (max-width: 1240px) {

  width: 40vw;
  height: 40vw;
}
`   

const Img2 = styled.img`
width: 20vw;
height: 20vw;
border: none;
position: absolute;
left: 9vw;
@media  (min-width: 1px) and (max-width: 425px) {
  width: 100%;
  height: 100%;
  left: 80px;
}
}
@media  (min-width: 426px) and (max-width: 768px) {
  width: 40vw;
  height: 40vw;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  left: 200px;
  width: 40vw;
  height: 40vw;
}
`  
const ShoeHolder = styled.div`
box-shadow: 10px 10px 5px 0px #9c1a22;
    -webkit-box-shadow: 10px 10px 5px 0px #9c1a22;
    -moz-box-shadow: 10px 10px 5px 0px rgba(46,161,202,0.75);
position: absolute;
  display:grid;
  place-content: center;
top:50%
width: 15vw;
background: #59c3a0;
height: 15vw;
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

const Ul =styled.ul`
display:flex;
justify-content:flex-end;
padding-right:8vw
`
const Li =styled.li`
padding:1.5vw 1vw;

`

class Page1Intro extends Component {
  
  
render() {


    return (
      
      <Container >
     
     <NavLink to="/Page1" exact>
    
        <ShoeHolder >

          <Img src={af2} alt="" />
        
          </ShoeHolder>
          </NavLink>
      
      </Container>
      
  );
  }
}

export default Page1Intro;
