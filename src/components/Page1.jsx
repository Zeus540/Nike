import React, {Component} from 'react';
import styled from 'styled-components';
import back from '../images/back.png'
import forward from '../images/right.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

import af2 from '../images/test.png';
import { NavLink} from "react-router-dom";

const Container = styled.div`
background: #c2b8bc;
  position:relative;
  display: flex;
  min-width:100vw;
  overflow:hidden;
  @media  (min-width: 1px) and (max-width: 425px) {
    overflow:unset;
    min-width:unset;
    }
  @media  (min-width: 426px) and (max-width: 768px) {
    overflow:unset;
  min-width:unset;
  }
  @media  (min-width: 769px) and (max-width: 1024px) {
    min-width: unset;
    overflow:hidden;
  }
  @media  (min-width: 1025px) and (max-width: 1440px) {
    min-width:100vw;
    overflow:hidden;
  }
`

const LeftContainer = styled.div`
height:100vh;
background: #900718;
overflow-x: hidden;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  width: 25vw;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 100vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
 min-width: 40vw;
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
    min-width:140vw;
   
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 60vw;
  
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 60vw;
   
  }
`


const Img = styled.img`
width: 25vw;
height: 20vw;
border: none;
position: relative;
z-index: 2;

@media  (min-width: 1px) and (max-width: 425px) {
  width: 80vw;
  height: 75vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  width: 45vw;
  height: 45vw;
}

`   


const TextContainer =styled.div`
width: 100%;
font-size: 1.1vw;
overflow-y: auto;
margin:8vw 0vw 0vw 0vw;
@media  (min-width: 1px) and (max-width: 425px) {
  top: 5vw;
  left: 0vw;
  font-size: 5vw;
  margin:45vw 0vw 0vw 0vw;
}

@media  (min-width: 426px) and (max-width: 768px) {
  position: relative;
  top: 0vw;
  font-size: 2vw;
  margin:18vw 0vw 0vw 0vw;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  top: 25vw;
  margin:15vw 0vw 0vw 0vw;
}
@media  (min-width: 1240px) and (max-width: 1440px) {
  top: 0vw;
  left: 200px;
  margin:15vw 0vw 0vw 0vw;
}
`
const Text = styled.p`
  color:white;
  padding: 0vw 3vw 0vw 3vw;
  text-align:justify;
  line-height:2vw;
  @media  (min-width: 1px) and (max-width: 425px) {
    padding: 0vw 11vw 5vw 11vw;
    line-height:8vw;
    position: relative;
    width: unset;
    text-align:left;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    padding: 0vw 5vw 4vw 5vw;
    line-height:4vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    line-height:3vw;
    padding: 0vw 5vw 5vw 5vw;
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
z-index:200;
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
color:white;
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
        

        <LeftContainer>
          <Ul>
            <Li>
        <NavLink to="/" exact>
         <img src={back} alt=""/>
          </NavLink>
          </Li>
          <Li>
        <NavLink to="/Page2" exact>
        <img src={forward} alt=""/>
          </NavLink>
          </Li>
          </Ul>
          <Floating2>
        <Text1 className="text-pop-up-tr" >"REACT D/MS/X"</Text1>
        </Floating2>
        
          <TextContainer>
         
          <Text >The AF1 React D/MS/X optimizes comfort with a full length Nike React midsole equipped with a heel Ramp Air unit. The upper features a large bold Swoosh and mesh construction on the side panels. The traditional AIR logo appears on the heel, along with a newly added Nike React branded stripe. Nike React’s pattern replaces the traditional stars at the heel and toe of the outsole.</Text>
          </TextContainer>

        </LeftContainer>

        <RightContainer   data-aos='fade-in'>
    
        <ShoeHolder  className=" shoe">
          <Img src={af2} alt="" className=" fade "/>
          </ShoeHolder>
          <Floating>
         
          <Text2 className="text-pop-up-tr">"NIKE AF1"</Text2>
        </Floating>
        </RightContainer>

      </Container>
      
  );
  }
}

export default Page1;
