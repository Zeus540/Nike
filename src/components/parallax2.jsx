import React, {Component} from 'react';
import styled from 'styled-components';


const Container = styled.div`

  min-height:100vh;
  background: ${props=> props.color};
  position:relative;
  display: flex;
`

const LeftContainer = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:80vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    width:90vw;
  }
`
const Topbox = styled.div`
  min-width: 30vw;
  min-height: 50vh;
  width:30vw;
  height:50vh;
  padding:0px 0px 0px 0px;
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:100%;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    width:100%;
  }
`

const RightContainer = styled.div`
  min-width: 70vw;
  height: 100vh;
  float:right;

  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:240vw;
  }


`

const Img = styled.img`
  width:100%;
  height:100%;
  border:none;
 
`
const Imgtop = styled.img`
  width:100%;
  height:100%;
  border:none;
`
const TextContainer =styled.div`
width:100%;
overflow-y: auto;
`

const Text = styled.p`
  color:${props=> props.Tcolor};
  padding:2vw 2vw 2vw 2vw;
  text-align:justify;
  @media  (min-width: 1px) and (max-width: 425px) {
    padding:6vw 8vw 5vw 8vw;
    font-weight: lighter;
    font-size: 4.5vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
   
    padding:4vw 4vw 4vw 4vw;
  }
`

const Floating = styled.div`
position:absolute;
color:white;
top: 4.5vw;
left: 20vw;
white-space:nowrap;
font-family:arial;
font-weight:bold;
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
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 27vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size:10vw;
  top:10vw;
  left: 40vw;
}
`

const Text2 = styled.h1`
margin:0px;
color:${props=> props.T2};
font-size:6vw;
margin:5% 0px 0px 0px;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 27vw;
  margin:4vw 0px 0px 0px;
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size:10vw;
  top:10vw;
  left: 40vw;
  margin:2vw 0px 0px 0px;
}
`

class Parallax2 extends Component {

render() {


    return (
      <Container color={this.props.color}>

        <Floating>
          <Text1 T1={this.props.T1}>{this.props.text1}</Text1>
          <Text2 T2={this.props.T2}>{this.props.text2}</Text2>
        </Floating>

        <LeftContainer>
      
          <Topbox>
          <Imgtop src={this.props.img} frameborder="0"></Imgtop>
          </Topbox>

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
