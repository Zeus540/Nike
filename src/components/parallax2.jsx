import React, {Component} from 'react';
import styled from 'styled-components';


const Container = styled.div`
  min-width: 100vw;
  min-height:100vh;
  background: ${props=> props.color};
  position:relative;

`

const LeftContainer = styled.div`
  min-width: 30vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  float:left;
  @media (max-width: 480px) {
    max-height: unset;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
    min-width: 50vw;
  }
`
const Topbox = styled.div`
  min-width: 30vw;
  min-height: 50vh;
  width:30vw;
  height:50vh;
  padding:0px 0px 0px 0px;
`

const RightContainer = styled.div`
  min-width: 70vw;
  height: 100vh;
  float:right;
  @media (max-width: 480px) {
    height:50vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
    min-width: 50vw;
  }

`

const Img = styled.img`
  width:70vw;
  height:100%;
  border:none;
  @media (max-width: 480px) {
    width:100vw;
    height:50vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
    width: 50vw;
  }
`
const Imgtop = styled.img`
  width:100%;
  height:100%;
  border:none;
  @media (max-width: 480px) {
    width:100vw;
    height:50vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
    width: 50vw;
  }
`
const TextContainer =styled.div`
width:30vw;

  @media (max-width: 480px) {
    width:100vw;
    height:unset;
    overflow-y: scroll;
  }
`

const Text = styled.p`
  color:${props=> props.Tcolor};
  padding:0px 5px 0px 5px;

  

`
const Heading = styled.h1`
padding:0px 20px 0px 20px;
margin:0px;
color:${props=> props.Hcolor};
font-size:25px;
display:none;
@media (max-width: 480px) {
  padding:0px 0px 0px 0px;
  text-align:center;
  display:block;
}
`

const Heading2 = styled.h1`
padding:0px 20px 0px 20px;
margin:0px;
color:${props=> props.Hcolor};
font-size:25px;
display:none;
@media (max-width: 480px) {
  padding:0px 0px 0px 0px;
  text-align:center;
  display:block;
}
`

const Floating = styled.div`
position:absolute;
padding:0px 20px 0px 17%;
color:white;
@media (max-width: 480px){
position:unset;
text-align:center;
display:none;
}
`

const Text1 = styled.h1`
color:${props=> props.T1};
margin:5% 0px 0px 0px;

`

const Text2 = styled.h1`
margin:0px;
color:${props=> props.T2};
@media (min-width: 731px){
  font-size:9vw;
  }
  @media (min-width: 1440px){
    font-size:7vw;
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
            <Heading Hcolor={this.props.Hcolor}>{this.props.heading}</Heading>
            <Heading2 Hcolor={this.props.Hcolor}>{this.props.heading2}</Heading2>
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
