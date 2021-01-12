import React, {Component} from 'react';
import styled from 'styled-components';
import Port from '../images/Port.png'
import Gallery from './Gallery.jsx'
import Back from '../images/back.jpg'

const Container = styled.div`
min-width: 100vw;
height:100vh;
display:flex;

overflow:hidden
background-color:antiquewhite;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 height: unset;
 padding-left:0vw;
}
@media (min-width: 427px) and (max-width: 768px) {

 }
@media (min-width: 769px) and (max-width: 1024px) {

 }
`

const LeftContainer = styled.div`
width: 30%;
background: rgb(250,235,215);
background: linear-gradient(180deg, rgba(250,235,215,1) 0%, rgba(250,235,215,1) 50%, rgba(31,31,31,1) 100%);
display:flex;
flex-direction:column;
position:relative;
padding: 20px;
overflow-y:auto;

@media (min-width: 1px) and (max-width: 426px) {
  margin: 0px;
  width: 100%;
  
}
@media (min-width: 426px) and (max-width: 768px) {
  width: 50%;
 }
`

const TopBox = styled.div`
width:100%;

@media (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
`

const BottomBox = styled.div`
width:100%;
background-size:100% 100%;

@media  (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
`


const RightContainer = styled.div`
  width: 70%;
  float:right;
  position:relative;
  padding: 20px;
  background:#1f1f1f;
  overflow-y:auto;
@media  (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
  padding: 0px;
  
}
@media (min-width: 426px) and (max-width: 768px) {
  width: 100%;
 }

`

const Figure = styled.figure`
  width: auto;
  height: 100%;
  position: relative;
  margin:0px;
`

const MiddleContainer = styled.div`
width: 33%;
display:flex;
padding: 20px;
overflow-y:auto;
flex-direction:column
position: relative;
background: rgb(250,235,215);
background: linear-gradient(180deg, rgba(250,235,215,1) 0%, rgba(250,235,215,1) 50%, rgba(31,31,31,1) 100%);
@media (min-width: 1px) and (max-width: 426px) {
  margin: 0px;
  width: 100%;
}
@media (min-width: 426px) and (max-width: 768px) {
  width: 50%;
 }
`
const MiddleContainerTopBox = styled.div`
width:100%;
height: 50vh;
@media (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
`



const FigureImg = styled.img`
width: 100%;

`


const Para = styled.p`
color: white;
font: smaller arial;
    margin-top:0px;
    padding:0px;
    line-height:22px;
`

const MiddlePara = styled.p`
color: #1f1f1f;
font: smaller arial;
    margin-top:0px;
    padding:0px;
    padding-top:10px;
    line-height:22px;
`
const Heading = styled.h1`

font: italic
font-family:arial;

    padding:0px;
`
const Heading2 = styled.h1`
color:antiquewhite;
font: italic
font-family:arial;
  
    padding:0px;
`

const HeadingTop = styled.h1`

font: italic
font-family:arial;
margin-top:0px
    padding:0px;
`
class Page3 extends Component {
 
render() {
 
    return (
      
      <Container id="Home">
 
        
        <LeftContainer >

          <TopBox >

          <Figure>
         
          <HeadingTop>Heading</HeadingTop>
          <FigureImg src={Port} alt=""/>
            <MiddlePara>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur </MiddlePara>
          </Figure>
          </TopBox>

          <BottomBox >
          <Figure>
          <FigureImg src={Port} alt=""/>
         
          </Figure>
          </BottomBox>

       

          <BottomBox  >
          <Figure>
          <Heading>Heading</Heading>
          <FigureImg src={Port} alt=""/>
          <MiddlePara>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur </MiddlePara>
          </Figure>
          </BottomBox>

            
        </LeftContainer>


        <RightContainer >

          <div>
          <FigureImg src={Port} alt=""/>
          <Heading2>About Me</Heading2>
          <Para> My name is Zaheer I have 3 years of experience in developing professional websites. I specialize in front-end development which also include design . I have a familiar with each step of the Development lifecycle from concept to implementation </Para>

          <Para>I am a professional who worked for a Cape Town based Media Agency called Digitas Liquorice where I worked on names such as purity Unilever and Ola to name a few.
I am very skilled in my craft

I am keen to learn and share my skill along the journey</Para>

      <Para>I have always had a passion for learning and trying new things. I would like to consider myself a hardworking and reliable person that doesn’t give up until I find a solution to the problem like applying new methods and ideas to traditional problem solving I like working on new and exciting projects that allow me to express my creativity and opinions. I also consider myself a team worker and able to cope with a deadline and a high pressure environment </Para>
      
  

      </div>

      <div>
        
          <Heading2>Education</Heading2>
          <Para>
Information Technology & Computer Science
NCV False bay college
L4
</Para>
          <ul>
            <li>Data Communication and Networking</li>
            <li>Multimedia Service</li>
            <li>Computer programming</li>
            <li>System analysis and design</li>
          </ul>
   

      
  

      </div>

      <div>
   

       <Heading2>My Skills</Heading2>
    
      <Gallery/>
      </div>
        </RightContainer>

        
        <MiddleContainer>

<MiddleContainerTopBox >
<Figure>
<HeadingTop>Heading</HeadingTop>
<FigureImg src={Port} alt=""/>
          <MiddlePara>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis </MiddlePara>
            
            <MiddlePara>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur </MiddlePara>
  </Figure>
</MiddleContainerTopBox>






</MiddleContainer>

      </Container>
  );
  }
}

export default Page3;
