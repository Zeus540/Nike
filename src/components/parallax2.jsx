import React, {Component} from 'react';
import styled from 'styled-components';
import Left from '../images/left.png'

const Container = styled.div`
  background:#323a3a;
  min-height:100vh;
  position:relative;
  display: flex;

  @media  (min-width: 426px) and (max-width: 768px) {

  }
  @media  (min-width: 769px) and (max-width: 2560px) {
    min-width:100vw;
`

const LeftContainer = styled.div`
background: url(${Left});  
background-size:100% 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  min-width: 28vw;
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 114vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    width:90vw;
  }
`


const RightContainer = styled.div`
  min-width: 70vw;
  height: 100vh;
  float:right;
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:200vw;
  }
`

const Img = styled.img`
  width:100%;
  height:100%;
  border:none;
`   

const TextContainer =styled.div`
width:100%;

@media  (min-width: 1px) and (max-width: 425px) {
  width: 77vw;
  position: relative;
  top: 0vw;
  left: 0vw;
  overflow-y: auto;
  
}
`

const Text = styled.p`
  color:${props=> props.Tcolor};
  padding:2vw 2vw 2vw 2vw;
  text-align:justify;
  width:20vw;
  @media  (min-width: 1px) and (max-width: 425px) {
    padding:6vw 8vw 5vw 8vw;
    font-size: 4.5vw;
    position: relative;
    width: unset;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    padding:4vw 4vw 4vw 4vw;
    width:35vw;
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

const Text1 = styled.h1`
color:${props=> props.T1};
font-size:6vw;
padding: 4vw 0vw 2vw 2vw;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 25vw;
  padding: 10vw 0vw 5vw 8vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size:10vw;

}
`

const Text2 = styled.h1`
margin:0px;
position:absolute;
color:${props=> props.T2};
font-size:6vw;
right: 7vw;
bottom: 4vw
margin:5% 0px 0px 0px;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 22vw;
  margin:4vw 0px 0px 0px;
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size:10vw;

  margin:2vw 0px 0px 0px;
}
`

class Parallax2 extends Component {

render() {


    return (
      <Container color={this.props.color}>

        <Floating>
         
          <Text2 T2={this.props.T2}>{this.props.text2}</Text2>
        </Floating>

        <LeftContainer>
        <Text1 T1={this.props.T1}>{this.props.text1}</Text1>

          <TextContainer>
         
          <Text Tcolor={this.props.Tcolor}>{this.props.paragraph1}</Text>
          </TextContainer>

        </LeftContainer>

        <RightContainer>
          <Img src={this.props.img1} alt=""/>
        </RightContainer>

      </Container>
  );
  }
}

export default Parallax2;
