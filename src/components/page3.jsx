import React, {Component} from 'react';
import styled from 'styled-components';
import Vid1 from '../images/production.mp4'
import Vid2 from '../images/production2.mp4'
import Vid3 from '../images/production3.mp4'
import Vid4 from '../images/production4.mp4'
import Vid5 from '../images/production5.mp4'
import Gif from '../images/giphy.mp4'
const Container = styled.div`
min-width: 100vw;
height: 100%;
display:flex;
background-color:floralwhite;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 height: unset;
}
`

const LeftContainer = styled.div`
width: 30%;

display:flex;
flex-direction:column;
position:relative;
margin: 20px;
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
margin: 20px;
overflow-y:auto;
flex-direction:column
position: relative;
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



const Figurevideo = styled.video`
width: 100%;

`

const Figureframe = styled.iframe`
width: 100%;

`
const Para = styled.p`
color: white;
font: italic smaller sans-serif;
    margin-top:0px;
    padding:0px;
    line-height:22px;
`
const Heading = styled.h1`

font: italic
font-family:arial;

    padding:0px;
`
const Heading2 = styled.h1`
color:floralwhite;
font: italic
font-family:arial;
  
    padding:0px;
`
class Page3 extends Component {

render() {
 
    return (
      
      <Container color={this.props.color}>
 
        
        <LeftContainer>

          <TopBox>

          <Figure>
         
         
          <Figurevideo autoplay="autoplay" muted loop id="myVideo2">
            <source src ={Gif} type="video/mp4"/>
            </Figurevideo>
          </Figure>
          </TopBox>

          <BottomBox>
          <Figure>
          <Heading>Heading</Heading>
          <Figurevideo autoplay="autoplay" muted loop id="myVideo4">
            <source src={Gif} type="video/mp4"/>
          </Figurevideo>
         
          </Figure>
          </BottomBox>

       

          <BottomBox>
          <Figure>
          <Heading>Heading</Heading>
          <Figurevideo autoplay="autoplay" muted loop id="myVideo6">
            <source src={Gif} type="video/mp4"/>
          </Figurevideo>
          
          </Figure>
          </BottomBox>

            
        </LeftContainer>


        <RightContainer>
        
          <Figurevideo autoplay="autoplay" muted loop id="myVideo1">
            <source src={Gif} type="video/mp4"/>
          </Figurevideo>
          <Heading2>The Shoot</Heading2>
      <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur </Para>
      
        
      <Figurevideo autoplay="autoplay" muted loop id="myVideo2">
            <source src={Gif} type="video/mp4"/>
          </Figurevideo>

       <Heading2>Heading Here</Heading2>
      <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur </Para>
      
        </RightContainer>

        
        <MiddleContainer>

<MiddleContainerTopBox>
<Figure>
<Heading>Heading</Heading>
<Figurevideo autoplay="autoplay" muted loop id="myVideo5">
            <source src={Gif} type="video/mp4"/>
          </Figurevideo>
          <Para>11Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis </Para>
            
            <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur </Para>
  </Figure>
</MiddleContainerTopBox>






</MiddleContainer>

      </Container>
  );
  }
}

export default Page3;
