import React, {Component} from 'react';
import styled from 'styled-components';
import Left from '../images/left.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer.jsx'
import af2 from '../images/test.png';
import Nav from './Nav.jsx'

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

const TextContainer =styled.div`
width: 70%;


@media  (min-width: 1px) and (max-width: 425px) {
  width: 77vw;
  position: relative;
  top: 0vw;
  left: 0vw;
 
  
}
`

const Text = styled.p`
  color:white;
  margin:0vw 2vw 2vw 2vw;
  text-align:justify;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    padding: 0vw 1vw 5vw 8vw;
    font-size: 4.5vw;
    position: relative;
    width: unset;
    text-align:left;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    padding:0vw 4vw 4vw 4vw;
 
  }
`

const Floating = styled.div`
color:white;
top: 4.5vw;
left: 20vw;
white-space:nowrap;
font-family:arial;
font-weight:bold;
z-index:10;
@media (max-width: 425px){
  font-size:20vw;
  letter-spacing: 1vw;
  top: 21vw;
  left: 94vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  top:10vw;
  left: 40vw;
}

`

const Text1 = styled.h1`
color:#23ffb6;
font-size:6vw;
margin-top: 6vw;

margin-left: 0vw;
white-space: nowrap;
position:relative;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 25vw;
  margin: 15vw;
  margin-bottom: 0;
  margin-top: 30vw;
  margin-left: 0vw;
}

@media  (min-width: 426px) and (max-width: 480px) {
  font-size:10vw;
  bottom: -10vw;
  margin-bottom: 6vw;
}
@media  (min-width: 481px) and (max-width: 768px) {
  font-size:10vw;
  bottom: -7vw;
  margin-bottom: 6vw;
}
@media  (min-width: 769px) and (max-width: 1024px) {
  font-size:10vw;
  bottom: -3vw
  margin-top: 7vw;
  margin-bottom: 4vw;
}
`

const Text2 = styled.h1`
margin:0px;
position:absolute;
color:#23ffb6;
font-size:7vw;
right: -8vw;
bottom: -12px;
margin: 15vw;
margin-bottom: 0;

white-space: nowrap;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 22vw;
  margin: 15vw;
  margin-bottom: 0;
  bottom: -30px;
  right: 15vw;
 
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size: 10vw;
  bottom: -30px;
  right: -3vw;
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
      <Container data-aos='fade-in'>
        

        <LeftContainer className="fade">
        <Text1  className="text-pop-up-tr" >"AF1"</Text1>

          <TextContainer>
         
          <Text data-aos='fade-in'>The AF1 React D/MS/X optimizes comfort with a full length Nike React midsole equipped with a heel Ramp Air unit. The upper features a large bold Swoosh and mesh construction on the side panels. The traditional AIR logo appears on the heel, along with a newly added Nike React branded stripe. Nike React’s pattern replaces the traditional stars at the heel and toe of the outsole.</Text>
          </TextContainer>

        </LeftContainer>

        <RightContainer  data-aos='fade-in'>
        <ShoeHolder  className=" shoe">
          <Img src={af2} alt="" className=" zoom"/>
          <Img2 src={af2} alt="" className=" zoom"/>
          </ShoeHolder>
          <Floating>
         
          <Text2 className="text-pop-up-tr">"REACT"</Text2>
        </Floating>
        </RightContainer>
        <Footer />
      </Container>
      
  );
  }
}

export default Page1;
