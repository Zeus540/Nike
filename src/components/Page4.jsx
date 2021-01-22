import React, {Component} from 'react';
import styled from 'styled-components';
import back from '../images/back.png'
import forward from '../images/right.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mag from '../images/mag.png';

import { NavLink} from "react-router-dom";

const Container = styled.div`
background: linear-gradient(45deg,#4ff1e4,#343231);
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
height:100vh;

overflow-x: hidden;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  width: 30vw;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 125vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 60vw;
  }
 
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 40vw;
  }
  
`

const RightContainer = styled.div`
  min-width: 60vw;
  height: 100vh;
  float:right;
  position:relative;
  
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:200vw;
    margin-right: 10vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 110vw;
    margin-right: 10vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 60vw;
    margin-right: 10vw;
  }
`

const Img = styled.img`
width: 30vw;
height: 25vw;
border: none;
position: relative;
z-index: 2;
left: 100px;
@media  (min-width: 1px) and (max-width: 425px) {
  width: 80vw;
  height: 75vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  width: 45vw;
  height: 45vw;
  left: 125px;
}
`   

const TextContainer =styled.div`
width: 100%;
font-size: 1.1vw;
overflow-y: auto;
margin:8vw 0vw 0vw 0vw;
@media  (min-width: 1px) and (max-width: 425px) {
  width: 128vw;
 
  top: 5vw;
  left: 0vw;
  font-size: 5vw;
  margin:45vw 0vw 0vw 0vw;
}

@media  (min-width: 426px) and (max-width: 768px) {
  width: 100%;
  position: relative;
  top: 0vw;
  font-size: 2vw;
  margin:15vw 0vw 0vw 0vw;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  top: 25vw;
  width: 100%;
  margin:15vw 0vw 0vw 0vw;
}
@media  (min-width: 1240px) and (max-width: 1440px) {
  top: 0vw;
  width: 100%;
  left: 200px;
  margin:15vw 0vw 0vw 0vw;
}
`

const Text = styled.p`
  color:white;
  padding: 0vw 1vw 0vw 3vw;
  text-align:justify;
  line-height:2vw;
  @media  (min-width: 1px) and (max-width: 425px) {
    padding: 0vw 1vw 5vw 11vw;
    line-height:8vw;
    position: relative;
    width: unset;
    text-align:left;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    padding: 0vw 4vw 4vw 5vw;
    line-height:4vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    line-height:3vw;
    padding: 0vw 1vw 5vw 5vw;
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
const Floating2 = styled.div`

position:absolute;
top:5vw
@media  (min-width: 1px) and (max-width: 425px) {
  top:70px;
}
@media  (min-width: 426px) and (max-width: 768px) {
  top: 64px;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  top: -75px;
  width: 100%;
  margin:15vw 0vw 0vw 0vw;
}
@media  (min-width: 1241px) and (max-width: 1440px) {
  top: -110px;
  width: 100%;
  margin:15vw 0vw 0vw 0vw;
}
@media  (min-width: 1441px) and (max-width: 1920px) {
  top: -9vw;
  width: 100%;
  margin:15vw 0vw 0vw 0vw;
}
`

const Text1 = styled.h1`
color:#ffffff;
font-size:6vw;
margin-top: 3vw;
letter-spacing:6px;
margin-left: 0vw;
white-space: nowrap;
position:relative;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 25vw;
  margin: 15vw;
  margin-bottom: 0;
  margin-top: 25vw;
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
  margin-top: 5vw;
  margin-bottom: 3vw; 
}
@media  (min-width: 1025px) and (max-width: 1440px) {
  font-size:10vw;
  bottom: -3vw
  margin-top: 2vw;
  margin-bottom: 3vw;

}
`

const Text2 = styled.h1`
margin:0px;
position:absolute;
color:#ffffff;
font-size:7vw;
right: -8vw;
bottom: -12px;
margin: 15vw;
margin-bottom: 0;
letter-spacing:6px;
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
position: absolute;
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
    
const Ul =styled.ul`
padding-right: 10vw;
position: relative;
z-index: 50;
display: flex;
margin: 0vw 2vw 2vw 2vw;
}
`
const Li =styled.li`
padding: 2vw 1vw;
padding-bottom:0vw;
font-family:arial

@media  (min-width: 1px) and (max-width: 425px) {
  padding: 7vw 1vw 5vw 9vw;
padding-bottom:0vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  padding: 3vw 3vw;
  padding-bottom:0vw;
}
@media  (min-width: 769px) and (max-width:1024px) {
  padding: 3vw 3vw;
  padding-bottom:0vw;
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
          <Floating2>
        <Text1  className="text-pop-up-tr" >"NIKE NIKE NIKE NIKE"</Text1>
        </Floating2>

        <LeftContainer className="Page2Left">
          <Ul>
            <Li>
        <NavLink to="/Page3" exact>
        <img src={back} alt=""/>
          </NavLink>
          </Li>
          <Li>
        <NavLink to="/Page4" exact>
        <img src={forward} alt=""/>
          </NavLink>
          </Li>
          </Ul>
        
          <TextContainer>
         
          <Text >Newly-released Nike ‘Jesus Shoes’ – filled with actual holy water in the soles – sold out in mere minutes after they hit the shelves on Tuesday morning.
The $3,000 sneakers are filled with holy water from the River Jordan in Israel and have a crucifix tied to the laces.


Each pair was reportedly blessed by a priest and has a red insole in reference to the red Papal shoes that were traditionally worn by Vatican leaders.

The limited edition shoes were made by Brooklyn-based company MSCHF which redesigned Nike’s Air Max 97 model, turning it into “Jesus Shoes,” and offering buyers to literally walk on water.</Text>
          </TextContainer>

        </LeftContainer>

        <RightContainer  data-aos='fade-in'>
    
        <ShoeHolder  className=" shoe">
          <Img src={Mag} alt="" className=" fade "/>
          </ShoeHolder>
          <Floating>
         
          <Text2 className="text-pop-up-tr" >"AIR MAG"</Text2>
        </Floating>
        </RightContainer>
  
      </Container>
      
  );
  }
}

export default Page1;
