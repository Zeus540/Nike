import React, {Component} from 'react';
import styled from 'styled-components';
import Kkwe from '../images/Kkwe.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
height:100%;
margin: 10vw 0% 0% 0%;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 margin: 0px;
 height: unset;
}
 @media (min-width: 427px) and (max-width: 768px) {

  }
 @media (min-width: 769px) and (max-width: 1024px) {

  }
`

const  Holder = styled.div`
border-bottom:2px solid white;
display:flex;
margin: 0px auto;
padding-bottom: 0px;
flex-direction:row;
width:80vw;
@media (min-width: 1px) and (max-width: 426px) {
 width:100%;
 }
`

const  HolderInner = styled.div`
display:flex;
margin: 10vw 0vw 5vw 0vw;
padding-bottom: 0px;
flex-direction:column;
width:100%;
@media (min-width: 1px) and (max-width: 426px) {
 width:100%;
 }
`

const Heading2 =styled.h1`
font-size:6vw;
color:white;
font-family:arial;
margin: 20vw 0vw 0vw 0vw;
font-weight:bolder;
`

const ProjectHeading =styled.h1`
font-size:6vw;
color:white;
font-family:arial;
font-weight:bolder;
`

const Heading =styled.h1`
font-size:1vw;
color:white;
font-family:arial;
margin: 0.5vw 0vw 0.5vw 0.5vw;
font-weight:bolder;
`

const TextHolder =styled.div`
display:flex;
right: 10vw;
margin: 20vw;
`

const Focus =styled.h1`
font-size:10vw;
color:white;
margin:0px;
font-family:arial;
`

const ProjectImg =styled.img`
width:100%;
height:100%;
`
const ProjectImgHolder =styled.div`
width:35vw;
height:15vw;
margin: 5vw 0vw 5vw 0vw;
`
class Page2 extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container  id="gallery">
        <TextHolder>
          <Focus data-aos='slide-up' data-aos-duration="1200"> 0</Focus>
          <Focus data-aos='slide-up' data-aos-duration="1400"> 2</Focus>
  <Heading2  data-aos='slide-up' data-aos-duration="400">P</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="600">R</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="800">O</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1000">J</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1200">E</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1400">C</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1600">T</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1800">S</Heading2>
  </TextHolder>
  
  <Holder data-aos='slide-up' data-aos-duration="1200"> 
      <HolderInner>
      <ProjectHeading  data-aos='slide-up' data-aos-duration="400">Kkwe</ProjectHeading>
  <Heading  data-aos='slide-up' data-aos-duration="400">Website - Events Planner</Heading>
  <Heading  data-aos='slide-up' data-aos-duration="400">REACT.JS - AOS </Heading>
  
  </HolderInner>
  <ProjectImgHolder>
  <ProjectImg src={Kkwe} alt=""/>
  </ProjectImgHolder>
          </Holder>
          
          <Holder data-aos='slide-up' data-aos-duration="1200"> 
      <HolderInner>
      <ProjectHeading  data-aos='slide-up' data-aos-duration="400">Kkwe</ProjectHeading>
  <Heading  data-aos='slide-up' data-aos-duration="400">Website - Events Planner</Heading>
  <Heading  data-aos='slide-up' data-aos-duration="400">REACT.JS - AOS </Heading>
  
  </HolderInner>
  <ProjectImgHolder>
  <ProjectImg src={Kkwe} alt=""/>
  </ProjectImgHolder>
          </Holder>
    
      </Container>
  );
  }
}

export default Page2;
