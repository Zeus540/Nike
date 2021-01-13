import React, { Component } from 'react'
import styled from 'styled-components'
import Kkwe from '../images/Kkwe.png'
import 'react-alice-carousel/lib/alice-carousel.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
justify-content:center;
align-items:center;
margin:0 auto;
height:100%;
margin-bottom: 9vw;
@media (min-width: 1px) and (max-width: 426px) {
  height: 100%;
  width: 80%;
  }
`
const Block =styled.div`
display:flex;
flex-direction:column;
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
 display: flex;
 flex-direction: column;
 }
`

const  HolderInner = styled.div`
display:flex;
margin: 8vw 0vw 5vw 0vw;
padding-bottom: 0px;
flex-direction:column;
width:100%;
@media (min-width: 1px) and (max-width: 426px) {
  margin: 8vw 0vw 0.5vw 0vw;
 }
`

const ProjectImg =styled.img`
width:100%;
height:100%;
`
const ProjectImgHolder =styled.div`
width:35vw;
height:15vw;
margin: 5vw 0vw 5vw 0vw;
@media (min-width: 1px) and (max-width: 426px) {
  height: 100%;
  width: 100%;
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
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:3vw;
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
    <Block>
  <Holder data-aos='slide-up'> 
      <HolderInner data-aos='slide-up'>
      <ProjectHeading  >Kkwe</ProjectHeading>
  <Heading  >Website - Events Planner</Heading>
  <Heading  >REACT.JS - AOS </Heading>
  
  </HolderInner>
  <ProjectImgHolder data-aos='slide-up'>
  <ProjectImg src={Kkwe} alt=""/>
  </ProjectImgHolder>
          </Holder>
          </Block>

          <Block>
          <Holder data-aos='slide-up'> 
      <HolderInner data-aos='slide-up'>
      <ProjectHeading  >Crud App</ProjectHeading>
  <Heading  >WEBSITE - CRUD APP</Heading>
  <Heading  >REACT.JS - SASS </Heading>
  
  </HolderInner>
  <ProjectImgHolder data-aos='slide-up'>
  <ProjectImg src={Kkwe} alt=""/>
  </ProjectImgHolder>
          </Holder>
          </Block>

          <Block>
          <Holder data-aos='slide-up'> 
      <HolderInner data-aos='slide-up'>
      <ProjectHeading data-aos='slide-up' >Kkwe</ProjectHeading>
  <Heading  >Website - Events Planner</Heading>
  <Heading  >REACT.JS - AOS </Heading>
  
  </HolderInner>
  <ProjectImgHolder>
  <ProjectImg src={Kkwe} alt=""/>
  </ProjectImgHolder>
          </Holder>
          </Block>
      </Container>
    );
  }
}
export default Gallery1;