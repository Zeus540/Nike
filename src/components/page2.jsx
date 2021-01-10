import React, {Component} from 'react';
import styled from 'styled-components';
import Gallery1 from '../images/gallery1.jpg'
import Gallery2 from '../images/gallery2.jpg'
import Gallery3 from '../images/gallery3.jpg'
import Gallery4 from '../images/gallery4.jpg'
import yellow1 from '../images/yellow1.jpg'

const Container = styled.div`
min-width: 100vw;
height: 100%;
display:flex;
overflow:hidden
background:#1f1f1f;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 margin: 0px;
 height: unset;
}
`

const LeftContainer = styled.div`
width: 33.3%;
display:flex;
margin: 20px 0px;
margin-bottom: 0px;
padding-bottom: 0px;
overflow-y:scroll;
flex-direction:column
@media (min-width: 1px) and (max-width: 426px) {
 width:100%;
 }
`
const LeftContainerTopBox = styled.div`
width:90%;
height: 100%;
margin: 0 auto;
margin-bottom:5%;
@media (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
`

const MiddleContainer = styled.div`
width: 33.3%;
height: 100vh;
display:flex;
flex-direction:column
padding: 20px;
padding-bottom: 0px;
place-content: space-evenly;
@media (min-width: 1px) and (max-width: 426px) {
  width:100%;
  padding: 0px;
  }
`

const Heading = styled.h1`
color: antiquewhite;
    text-align: center;
    letter-spacing: 7px;
    font-style: italic;
`

const RightContainer = styled.div`
width: 33.3%;
display:flex;
margin: 20px 0px;
margin-bottom: 0px;
padding-bottom: 0px;
overflow-y:auto;
flex-direction:column
@media  (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
  
}

`
const RightContainerTopBox = styled.div`
width:90%;
height: 100%;
margin: 0 auto;
margin-bottom:5%;
@media (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
`

const LeftFigure = styled.figure`
width: 100%;
    height: 100%;
    position: relative;
    margin: 0px 0px;
    overflow:hidden;
 
`

const RightFigure = styled.figure`
width: 100%;
    height: 100%;
    position: relative;
    margin: 0px 0px;
    overflow:hidden;
    
 
`
const FigureCaption = styled.figcaption`
background-color: #1f1f1f;
color: #fff;
font: italic smaller sans-serif;
padding: 3px;
text-align: center;
position: absolute;
bottom: 0px;
width: auto;
padding: 20px;
`
const FigureImg = styled.img`
width: 100%;
height: 100%;

`
class Page2 extends Component {

render() {
 
    return (
      
      <Container color={this.props.color} class="dragscroll">
 
        
        <LeftContainer >

        <LeftContainerTopBox>
          <LeftFigure>
            <FigureImg src={Gallery4}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </LeftFigure>
          </LeftContainerTopBox>

          <LeftContainerTopBox>
          <LeftFigure>
            <FigureImg src={Gallery3}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </LeftFigure>
          </LeftContainerTopBox>

          <LeftContainerTopBox>
          <LeftFigure>
            <FigureImg src={Gallery1}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </LeftFigure>
          </LeftContainerTopBox>

          <LeftContainerTopBox>
          <LeftFigure>
            <FigureImg src={Gallery2}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </LeftFigure>
          </LeftContainerTopBox>

        </LeftContainer>

        <MiddleContainer>

   
          <Heading>GALLERY</Heading>
      

        </MiddleContainer>

        <RightContainer>

          <RightContainerTopBox>
          <RightFigure>
            <FigureImg src={yellow1}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </RightFigure>
          </RightContainerTopBox>

          <RightContainerTopBox>
          <RightFigure>
            <FigureImg src={yellow1}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </RightFigure>
          </RightContainerTopBox>

          <RightContainerTopBox>
          <RightFigure>
            <FigureImg src={yellow1}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </RightFigure>
          </RightContainerTopBox>

          <RightContainerTopBox>
          <RightFigure>
            <FigureImg src={yellow1}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </RightFigure>
          </RightContainerTopBox>
       

        </RightContainer>

      </Container>
  );
  }
}

export default Page2;
