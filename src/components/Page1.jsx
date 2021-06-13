import React, {Component} from 'react';
import styled from 'styled-components';
import back from '../images/back.png'
import forward from '../images/right.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import One from '../images/1.jpg';
import Two from '../images/2.jpg';
import Three from '../images/3.png';
import af2 from '../images/test.png';

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
background: #159f99;
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
  background: #1f1f1f;
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
    display: flex;
    justify-content: center;
    align-items: center;
    
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
    transition:width 0.5s;
    :hover{
      width:80%
    }
    }

&:nth-child(2){
  width: 65%;
  float:left;
  margin-bottom:50px
  transition:width 0.5s;
  :hover{
    width:80%
  }
}

&:nth-child(3){
  width: 65%;
  float:right;
  transition:width 0.5s;
  :hover{
    width:80%
  }
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
  margin: 15px 40px 0vw 40px;
  font-size: 2vw;
  width:unset;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  margin: 0px 40px 0vw 40px;
 
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
background: #55b19c;
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
        

        <LeftContainer  >
        
          <Floating2  >
        <Text1 data-aos='fade-in'>REACT D/MS/X</Text1>
        </Floating2>
        
          <TextContainer>
         
          <Text data-aos='fade-in'>The AF1 React D/MS/X optimizes comfort with a full length Nike React midsole equipped with a heel Ramp Air unit. The upper features a large bold Swoosh and mesh construction on the side panels. The traditional AIR logo appears on the heel, along with a newly added Nike React branded stripe. Nike React’s pattern replaces the traditional stars at the heel and toe of the outsole.</Text>
          </TextContainer>

         
          
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
        </LeftContainer>

        <RightContainer  >
    
        <RightContainerPage>
        <ShoeHolder  data-aos='fade-in'>
          <Img src={af2} alt=""  className="Bounce"/>
          </ShoeHolder>
        <Floating>
         
         <Text2  data-aos='fade-in'>NIKE AF1</Text2>
       </Floating>
        </RightContainerPage>

        <RightContainerPage >
          
        <img src={Two} alt=""  />
        <img src={One} alt=""  />
        <img src={Three} alt=""   />
  
        </RightContainerPage>

        <RightContainerPage >
        <Button>
          <a href="https://www.sheshalifestyle.com/index.php/footwear/nike/nike-air-force-1-react-27207.html" target="_blank" rel="noopener noreferrer"><Shop>BUY NOW</Shop></a>
          </Button>
        </RightContainerPage>

        </RightContainer>

      </Container>
      
  );
  }
}

export default Page1;
