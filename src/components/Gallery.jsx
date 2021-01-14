import React, { Component } from 'react'
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
import Kkwe from '../images/Kkwe.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
height: 100%;
margin:0 auto;
@media (min-width: 1px) and (max-width: 426px) {
  margin-bottom:20vw;
  width: 80%;
  }
`

const  Holder = styled.div`
display:flex;
margin: 0px auto;
padding-bottom: 0px;
flex-direction:row;
width:80vw;
height: inherit;
@media (min-width: 1px) and (max-width: 426px) {
 width:100%;
 display: flex;
 flex-direction: column;
 }
`

const  HolderInner = styled.div`
display:flex;
margin: 8vw 0vw 5vw 0vw;
padding-bottom: 0px;
flex-direction:row;
width:100%;
justify-content: space-between;
@media (min-width: 1px) and (max-width: 426px) {
  margin: 8vw 0vw 0.5vw 0vw;
  flex-direction:column;
 }
`


const ProjectHeading =styled.h1`
font-size:6vw;
color:white;
font-family:arial;
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:9vw;
  margin-bottom:2vw;
 }
`

const Heading =styled.h1`
font-size:1vw;
color:white;
font-family:arial;
margin: 0.5vw 0vw 0.5vw 0.5vw;

@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3.5vw;
 }
`
const Img =styled.img`
width:30%;
height:100%
 
@media (min-width: 1px) and (max-width: 426px) {
  margin-top:5vw; 
  width:100%;
  height:100%
 }
`

class Gallery1 extends Component {
 componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
  render() {

   

    return (
      
      <Container>
    
  <Holder data-aos='slide-up'> 
 
      <HolderInner>
      <a href="https://kkwe.co.za/" target="_blank" rel="noopener noreferrer">
      <ProjectHeading  >Kkwe</ProjectHeading>
  <Heading  >Website - Events Planner</Heading>
  <Heading  >REACT.JS - AOS </Heading>
  </a>
  <div>
  <Img src={Kkwe} alt=""/>
  </div>
  </HolderInner>
  
          </Holder>
         

          <Holder data-aos='slide-up'> 
      <HolderInner>
        <a href="https://zeus540.github.io/react-firebase-crud-app/" target="_blank" rel="noopener noreferrer" >
      <ProjectHeading  >To do list</ProjectHeading>
  <Heading  >WEBSITE - CRUD APP</Heading>
  <Heading  >REACT.JS - SASS </Heading>
  </a>
  <div>
  <Img src={Kkwe} alt=""/>
  </div>
  </HolderInner>
 
          </Holder>
        
          <Holder data-aos='slide-up'> 
      <HolderInner>
      <a href="https://zaheer.netlify.com" target="_blank" rel="noopener noreferrer" >
      <ProjectHeading >Portfolio</ProjectHeading>
  <Heading  >Website </Heading>
  <Heading  >REACT.JS </Heading>
  </a>
  <div>
  <Img src={Kkwe} alt=""/>
  </div>
  </HolderInner>
 
          </Holder>
         
      </Container>
    );
  }
}
export default Gallery1;