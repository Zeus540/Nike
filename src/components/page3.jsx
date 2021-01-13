import React, {Component} from 'react';
import styled from 'styled-components';
import Port from '../images/me3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'

const Container = styled.div`
height:100%;
display:flex;
background:#020202;
@media (min-width: 1px) and (max-width: 426px) {
  flex-direction:column
 }
`

const Holder = styled.div`
width: 33vw;
overflow:hidden;
margin:0px;
@media (min-width: 1px) and (max-width: 426px) {
  width: 84%;
   }
`
const TitleHolder = styled.div`


@media (min-width: 1px) and (max-width: 426px) {
  width: 80vw; 
   }
`

const HeadingAnimated =styled.div`
color:white;
font-family:arial;
margin:0px;
font-size:2vw;
font-weight:bolder;
margin:10% 0% 5% 0%;

@media (min-width: 1px) and (max-width: 426px) {
font-size:4vw; 
 }
`

const Heading =styled.h1`
color:white;
font-family:arial;
margin:0px;
font-size:2vw;
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:5vw; 
   }
`

const Heading2 =styled.h1`
font-size:7vw;
color:white;
font-family:arial;
margin:4% 0%;
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:10vw; 
   }
`

const Heading3 =styled.h1`
font-size:2vw;
color:white;
font-family:arial;
margin:10% 0% 0% 0%;
font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:7vw; 
   }
`

const Para =styled.p`
font-size:1vw;
color:white;
letter-spacing:2px;
line-height:1.7vw;
font-family:arial;
margin:2vw 0% 0% 0%;

@media (min-width: 1px) and (max-width: 426px) {
  font-size: 3vw;
  line-height: 5vw;

   }
`
const Focus =styled.span`
font-size:9vw;
color:white;
margin:0px;
font-family:arial;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:13vw; 
   }
`

const LeftContainer = styled.div`
height:100%;
background:#020202;
padding-left:5vw;
`

const RightContainer = styled.div`
overflow:hidden
display:flex;
background:#020202;
position:absolute;
right:0px
@media (min-width: 1px) and (max-width: 426px) {
  margin: 0vw;
  position: relative;
  top: 0;
  right: -48vw;
 }
`

const RightContainerImg = styled.img`
height: 40vw;
    width: 25vw;
    padding-top: 35vw;
@media (min-width: 1px) and (max-width: 426px) {
  width: 49vw;
  padding-top: 7vw;
  height: 82vw;
  display:none;
 }
 @media (min-width: 768px) and (max-width: 1024px)   {
  width: 30vw;
  padding-top: 25vw;
  height: 44vw;

 }
`
const RightContainerImgMobile = styled.img`
height: 100%;
width: 100%;
padding-top: 2vw;
margin-bottom: 2vw;
@media (min-width: 426px)  {
  display:none;
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

     <HeadingAnimated >
        <Typical
              steps={['Hello!', 1000,'Hola!',1000,'Bonjour!',1000,'Konnichiwa!',1000,'God dag!',1000,'Shalom!',1000]}
              loop={Infinity}
              wrapper={"h1"}
            />
             <Heading data-aos='slide-up'> my name is Zaheer.</Heading>
        </HeadingAnimated>

        
        
        

        <TitleHolder>
     <Heading3 data-aos='slide-up'> I am a</Heading3>
        <Heading2  data-aos='slide-up' className="text-flicker-in-glow">FRONT-END<br/><Focus>DEVELOPER</Focus></Heading2>
        </TitleHolder>

        <RightContainerImgMobile src={Port} alt="" data-aos='slide-right'/>

        <Holder>
          <Para data-aos='slide-up'>I have always had a passion for learning and trying new things. I consider myself a hardworking and reliable person. I like applying new methods and ideas to traditional problem solving. I Also enjoy working on new and exciting projects that allow me to express my creativity and opinions </Para>

        </Holder>
        <Holder>

          <Para data-aos='slide-up'>I am a professional who worked for a Cape Town based Media Agency called Digitas Liquorice where I worked on names such as purity Unilever and Ola to name a few.
I am very skilled in my craft</Para>
        </Holder>
     </LeftContainer>

     
     
      <RightContainer >
      
      <RightContainerImg src={Port} alt="" data-aos='slide-right'/>
      
      </RightContainer>
      </Container>
  );
  }
}

export default Page3;
