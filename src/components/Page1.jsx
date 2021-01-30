import React, {Component} from 'react';
import styled from 'styled-components';
import back from '../images/back.png'
import forward from '../images/right.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

import af2 from '../images/test.png';
import { NavLink} from "react-router-dom";

const Container = styled.div`

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
  width: 50vw;
  z-index: 2;
    overflow: unset;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 100vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
 min-width: 50vw;
  }
 
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 50vw;
  }
  
`


const RightContainer = styled.div`
  min-width: 50vw;
  height: 100vh;
  float:right;
  position:relative;
  background: #0e0e0e;
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:100vw;
   
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 50vw;
  
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 50vw;
   
  }
`


const Img = styled.img`
width: 32vw;
height: 22vw;
border: none;
position: relative;
z-index: 2;

@media  (min-width: 1px) and (max-width: 425px) {
  width: 60vw;
  height: 60vw;
}
@media  (min-width: 480px) and (max-height: 320px) {
  width: 30vw!important;
  height: 30vw!important;
}

@media  (min-width: 426px) and (max-width: 768px) {
  width: 45vw;
  height: 45vw;
}

`   


const TextContainer =styled.div`
width: 70%;
font-size: 1.1vw;
overflow-y: auto;
margin-top: 170px;
margin-left: 50px;

@media  (min-width: 1px) and (max-width: 425px) {
  margin: 46vw 0px 0vw 50px;
  padding-bottom: 40px;
  font-size: 5vw;
}

@media  (min-width: 480px) and (max-height: 320px) {
  margin-top: 88px!important;
  margin-left: 30px!important;
}

@media  (min-width: 426px) and (max-width: 768px) {
  margin-top: 140px;
  margin-left: 50px;
  font-size: 2vw;
  padding-bottom: 40px;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  margin-top: 170px;
  margin-left: 50px;
  padding-bottom: 40px;
}
@media  (min-width: 1240px) and (max-width: 1440px) {
  margin-top: 210px;
  margin-left: 50px;
  padding-bottom: 40px;
}
`

const Text = styled.p`
  color:white;

  text-align:justify;
  line-height:2vw;
  @media  (min-width: 1px) and (max-width: 425px) {
  
    line-height:8vw;
    position: relative;
    width: unset;
    text-align:left;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
 
    line-height:4vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    line-height:3vw;
 
  }
`
const Floating = styled.div`
color:white;
bottom: 30px;
right: 0;
white-space:nowrap;
font-family:arial;
font-weight:bold;
z-index:10;
margin-right: 40px;
position:absolute;
@media (max-width: 425px){
  font-size:20vw;
  letter-spacing: 1vw;
  top: 21vw;
  left: 94vw;
}
@media  (min-width: 480px) and (max-height: 320px) {
  margin-right: 30px!important;
}
@media  (min-width: 426px) and (max-width: 768px) {
  top:10vw;
  left: 40vw;
}

`
const Floating2 = styled.div`

position:absolute;
@media  (min-width: 1px) and (max-width: 320px) {
  margin-top: 100px;
  margin-left: 50px;
}
@media  (min-width: 321px) and (max-width: 425px) {
  margin-top: 110px;
  margin-left: 50px;
}
@media  (min-width: 480px) and (max-height: 320px) {
  margin-top: 70px!important;
  margin-left: 30px!important;
}
@media  (min-width: 426px) and (max-width: 768px) {
  margin-top: 120px;
  margin-left: 50px;

}
@media  (min-width: 769px) and (max-width: 1240px) {
  margin-top: 120px;
  margin-left: 50px;
}
@media  (min-width: 1241px) and (max-width: 1440px) {
  margin-top: 120px;
  margin-left: 50px;
}
@media  (min-width: 1441px) and (max-width: 1920px) {
  margin-top: 120px;
  margin-left: 50px;


}
`

const Text1 = styled.h1`
color:#ffffff;
font-size:6vw;
letter-spacing:6px;
margin-left: 0vw;
white-space: nowrap;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 25vw;
  margin-bottom: 0;
  margin-left: 0vw;
}

@media  (min-width: 426px) and (max-width: 480px) {
  font-size:10vw;
  margin-bottom: 6vw;
}
@media  (min-width: 481px) and (max-width: 768px) {
  font-size:10vw;
  margin-bottom: 6vw;
}
@media  (min-width: 769px) and (max-width: 1024px) {
  font-size:10vw;
  margin-bottom: 3vw; 
}
@media  (min-width: 1025px) and (max-width: 1440px) {
  font-size:10vw;
  margin-bottom: 3vw;

}
`
const Text2 = styled.h1`
margin:0px;
position:absolute;
color:white;
font-size:7vw;
right: 0vw;
bottom: 0px;

margin-bottom: 0;
letter-spacing:6px;
white-space: nowrap;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 22vw;

  margin-bottom: 0;
  bottom: 0px;
  right: 0vw;
 
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size: 10vw;
  bottom: 0px;
  right: 0vw;
}
`


const ShoeHolder = styled.div`
position: absolute;
display:flex;
top:50%
    left: 50%;
    transform: translate(33%,-38%);
@media  (min-width: 1px) and (max-width: 425px) {
  transform: translate(66%,-19%);
}
@media  (min-width: 480px) and (max-height: 320px) {
  transform: translate(50%,-18%)!important;

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
margin-top: 40px;
margin-left: 50px;
@media  (min-width: 1px) and (max-width: 425px) {
  margin: 30px 0px 0vw 50px;
  padding-bottom:0vw;
  }
@media  (min-width: 480px) and (max-height: 320px) {
  margin-top: 20px!important;
  margin-left: 30px!important;
}
`
const Li =styled.li`

margin-right: 1vw;
font-family:arial

@media  (min-width: 1px) and (max-width: 425px) {

padding-bottom:0vw;
}
@media  (min-width: 426px) and (max-width: 768px) {

  padding-bottom:0vw;
}
@media  (min-width: 769px) and (max-width:1024px) {

  padding-bottom:0vw;
}
@media  (min-width: 1025px) and (max-width: 1440px) {
 
}
`

const Nav =styled.img`

@media  (min-width: 480px) and (max-height: 320px) {
  width: 27px!important;
  height: 27px!important;
}
@media  (min-width: 1px) and (max-width: 320px) {
  width: 30px;
  height: 30px;
}
@media  (min-width: 321px) and (max-width: 425px) {
  width: 30px;
  height: 30px;
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
        

        <LeftContainer data-aos='slide-down'>
          <Ul>
            <Li>
        <NavLink to="/" exact>
         <Nav src={back} alt=""/>
          </NavLink>
          </Li>
          <Li>
        <NavLink to="/Page2" exact>
        <Nav src={forward} alt=""/>
          </NavLink>
          </Li>
          </Ul>
          <Floating2 >
        <Text1  data-aos='slide-right'>REACT D/MS/X</Text1>
        </Floating2>
        
          <TextContainer>
         
          <Text >The AF1 React D/MS/X optimizes comfort with a full length Nike React midsole equipped with a heel Ramp Air unit. The upper features a large bold Swoosh and mesh construction on the side panels. The traditional AIR logo appears on the heel, along with a newly added Nike React branded stripe. Nike React’s pattern replaces the traditional stars at the heel and toe of the outsole.</Text>
          </TextContainer>

          <ShoeHolder  className=" shoe ">
          <Img src={af2} alt="" data-aos='slide-left'/>
          </ShoeHolder>
        </LeftContainer>

        <RightContainer   data-aos='slide-up'>
    
      
          <Floating>
         
          <Text2  >NIKE AF1</Text2>
        </Floating>
        </RightContainer>

      </Container>
      
  );
  }
}

export default Page1;
