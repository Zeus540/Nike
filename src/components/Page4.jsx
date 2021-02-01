import React, {Component} from 'react';
import styled from 'styled-components';
import back from '../images/back.png'
import forward from '../images/right.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mag from '../images/mag.png';
import One from '../images/air1.jpg';
import Two from '../images/air2.jpg';
import Three from '../images/air3.jpg';

import { NavLink} from "react-router-dom";

const Container = styled.div`
background: black;
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
background: #487c8e;
overflow-x: hidden;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  min-width: 50vw;
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
  background: #797876;
  overflow-y: scroll;
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

const RightContainerPage = styled.div`
  min-width: 50vw;
  float:right;
  position:relative;
 
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:100vw;
   
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 50vw;
  
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 50vw;
   
  }
  &:nth-child(1){
    height:100vh;
  }
  &:nth-child(2){

  }
  &:nth-child(3){
   
  }

img{
    &:nth-child(1){
      width: 65%;
    float:right;
    margin-bottom:50px
    margin-top:20px
    }

&:nth-child(2){
  width: 65%;
  float:left;
  margin-bottom:50px
}

&:nth-child(3){
  width: 65%;
  float:right;
}
}
 
`



const Img = styled.img`
width: 100%;
height: 100%;
border: none;
position: relative;
z-index: 2;

@media  (min-width: 1px) and (max-width: 425px) {
  width: 70vw!important;
  height: 100%;
}
@media  (min-width: 480px) and (max-height: 320px) {
  width: 100%!important;
  height: 100%;
}

@media  (min-width: 426px) and (max-width: 768px) {
  width: 35vw!important;
  height: 100%;
}
@media  (min-width: 769px) and (max-width: 1024px) {
  width: 35vw!important;
}
@media  (min-width: 1025px) and (max-width: 1440px) {
  width: 30vw!important;

}
@media  (min-width: 1441px) and (max-width: 1920px) {
  width: 25vw!important;

}
`   

const TextContainer =styled.div`
font-size: 1.1vw;
overflow-y: auto;
margin-left: 30px;
position:relative;
width:70%;
z-index:20;
@media  (min-width: 1px) and (max-width: 425px) {
  margin: 30px 40px 0vw 40px;
  width:unset;
  font-size: 5vw;
}



@media  (min-width: 426px) and (max-width: 768px) {
  margin: 30px 40px 0vw 40px;
  font-size: 2vw;
  width:unset;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  margin: 30px 40px 0vw 40px;
 
}
@media  (min-width: 1240px) and (max-width: 1440px) {
 
  margin-left: 40px;

}
@media  (min-width: 1441px) and (max-width: 1920px) {
  margin-left: 50px;

`
const Text = styled.p`
  color:white;

  text-align:left;
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
margin-right: 35px;
position:absolute;
@media (max-width: 425px){
  font-size:20vw;
  letter-spacing: 1vw;
  margin-right: 35px;
}
@media  (min-width: 480px) and (max-height: 320px) {
  margin-right: 35px!important;
}
@media  (min-width: 426px) and (max-width: 768px) {
  top:10vw;
  left: 40vw;
}
@media  (min-width: 1441px) and (max-width: 1920px) {
  margin-right: 35px;
}
`
const Floating2 = styled.div`
margin-bottom: 2vw; 
margin-top: 0.5vw;
position:relative;
margin-bottom: 2vw;
@media  (min-width: 1px) and (max-width: 320px) {
  margin-top: 40px;
  margin-left: 40px;
}
@media  (min-width: 321px) and (max-width: 425px) {
  margin-top: 50px;
  margin-left: 40px;
}

@media  (min-width: 426px) and (max-width: 768px) {
  margin-top: 30px;
  margin-left: 40px;

}
@media  (min-width: 769px) and (max-width: 1240px) {
  margin-top: 35px;
  margin-left: 40px;
}
@media  (min-width: 1241px) and (max-width: 1440px) {
  margin-top: 50px;
  margin-left: 40px;
  margin-bottom: 34px;
}
@media  (min-width: 1441px) and (max-width: 1920px) {
  margin-top: 50px;
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

}
@media  (min-width: 481px) and (max-width: 768px) {
  font-size:10vw;

}
@media  (min-width: 769px) and (max-width: 1024px) {
  font-size:10vw;
 
}
@media  (min-width: 1025px) and (max-width: 1440px) {
  font-size:10vw;

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
    transform: translate(-40%,-45%);
@media  (min-width: 1px) and (max-width: 425px) {

  transform: translate(-45%,-47%);

}

@media  (min-width: 426px) and (max-width: 768px) {
  transform: translate(-45%,-47%);
}
@media  (min-width: 769px) and (max-width:1024px) {
  transform: translate(-45%,-47%);
}
@media  (min-width: 1025px) and (max-width: 1440px) {
  transform: translate(-45%,-47%);
}

`
    
const Ul =styled.ul`
padding-right: 10vw;
position: relative;
z-index: 50;
display: flex;
margin-top: 20px;
margin-left: 35px;
margin-bottom: 20px!important;
@media  (min-width: 1px) and (max-width: 425px) {

  margin-top: 40px;
  margin-left: 35px;
  margin-bottom: 50px!important;
  }
@media  (min-width: 1441px) and (max-width: 1920px) {

  margin-left: 50px;
}

`
const Li =styled.li`

margin-right: 10px;
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

const Shop =styled.button`
background: #487c8e;
padding: 15px 40px;
float: right;
margin-top: 40px;
margin-right: 30px;
font-weight: bold;
border: none;
color: white;
`

const Button =styled.div`
margin-bottom: 40px!important;
font-weight: bold;
border: none;
color: white;
float: right;
a{
  color: #1f1f1f;
  text-decoration: none;
  margin-bottom: 50px;
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
        

        <LeftContainer data-aos='slide-right'  data-aos-duration="750" >
        
          <Floating2  data-aos='slide-down'>
        <Text1 >AIR MAG</Text1>
        </Floating2>
        
          <TextContainer>
         
          <Text >The Nike MAG is a limited-edition shoe created by Nike Inc. It is a replica of a shoe featured in the film Back to the Future Part II. The Nike Mag was originally released for sale in 2011 and again in 2016. Both launches were in limited quantities. The 2011 release was limited to 1,510 pairs, while the 2016 release was limited to 89 pairs. Nike has stated Mag is not meant for heavy activity and should not be worn for recreational purposes. They were produced mostly for display.</Text>
          </TextContainer>

         
          
          <Ul>
            <Li>
        <NavLink to="/Page3" exact>
         <Nav src={back} alt=""/>
          </NavLink>
          </Li>
          <Li>
        <NavLink to="/Page4" exact>
        <Nav src={forward} alt=""/>
          </NavLink>
          </Li>
          </Ul>
        </LeftContainer>

        <RightContainer data-aos='slide-up'  data-aos-duration="750" >
    
        <RightContainerPage>
        <ShoeHolder  >
          <Img src={Mag} alt="" />
          </ShoeHolder>
        <Floating>
         
         <Text2  >NIKE</Text2>
       </Floating>
        </RightContainerPage>

        <RightContainerPage >
          
        <img src={Two} alt="" srcset=""  />
        <img src={Three} alt="" srcset=""  />
        <img src={One} alt="" srcset=""  />
    
    
        </RightContainerPage>
        <Button>
          <a href="https://stockx.com/nike-air-mag-back-to-the-future-bttf-2016" target="_blank" rel="noopener noreferrer"><Shop>SHOP NOW</Shop></a>
          </Button>

        </RightContainer>

      </Container>
      
  );
  }
}

export default Page1;
