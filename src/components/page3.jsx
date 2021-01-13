import React, {Component} from 'react';
import styled from 'styled-components';
import Port from '../images/me2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'

const Container = styled.div`
padding-top:6vw;
height:100%;
display:flex;
background:#020202;
position:relative;

@media (min-width: 1px) and (max-width: 426px) {
  flex-direction:column


 }
`

const Holder = styled.div`
color:antiquewhite;
position:relative;
`

const HeadingAnimated =styled.h1`
color:white;
font-family:arial;
margin:0px;
font-size:2vw;
font-weight:bolder;
margin:10% 0% 5% 0%;
`
const Heading =styled.h1`
color:white;
font-family:arial;
margin:0px;
font-size:2vw;
font-weight:bolder;
`
const HeadingBottom =styled.h1`
color:white;
font-family:arial;
margin:0px;
font-size:2vw;
font-weight:bolder;
position: absolute;
bottom: -19vw;
right: -11vw;
@media (min-width: 1px) and (max-width: 426px) {
  position:relative;
  bottom: 0;
right: 0;
padding-left:5vw;
font-size:3vw; 
 }
`
const Heading2 =styled.h1`
font-size:6vw;
color:white;
font-family:arial;
margin:4% 0%;
font-weight:bolder;

`

const Heading3 =styled.h1`
font-size:2vw;
color:white;
font-family:arial;
margin:10% 0% 0% 0%;
font-weight:bolder;
`
const Focus =styled.h1`
font-size:7vw;
color:white;
margin:0px;
font-family:arial;
`

const LeftContainer = styled.div`
height:100%;
background:#020202;
padding-left:5vw;
`

const RightContainer = styled.div`

display:flex;
background:#020202;
position:absolute;
right:0px
@media (min-width: 1px) and (max-width: 426px) {
  margin:0vw;
  position:relative;
 }
`

const RightContainerImg = styled.img`
height:40vw
width:40vw
margin-top:10vw;
@media (min-width: 1px) and (max-width: 426px) {
  width:100%
  margin-top: 7vw;
  height:100vw
 }
`

class Page3 extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Home">
        
     <LeftContainer>
     <HeadingAnimated data-aos='slide-up'>
        <Typical
              steps={['Hello!', 1000,'Hola!',1000,'Bonjour!',1000,'Konnichiwa!',1000,'God dag!',1000,'Shalom!',1000]}
              loop={Infinity}
              wrapper={"h1"}
            />
             <Heading data-aos='slide-up'> my name is Zaheer.</Heading>
        </HeadingAnimated>
    
    
     <Heading3 data-aos='slide-up'> I am a</Heading3>
        <Heading2 className="text-flicker-in-glow" >FRONT-END<br/><Focus>DEVELOPER</Focus></Heading2>
     </LeftContainer>

     
     <Holder>
          <HeadingBottom>BASED @ <br/><br/>-33,92528° N, 18,42389° E</HeadingBottom>
        </Holder>
      <RightContainer data-aos='slide-left'>
      
      <RightContainerImg src={Port} alt=""/>
      
      </RightContainer>
      </Container>
  );
  }
}

export default Page3;
