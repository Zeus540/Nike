import React, {Component} from 'react';
import styled from 'styled-components';


const Container = styled.div`
  min-width: 100vw;
  min-height:100vh;
  background: #1f1f1f;

`

const LeftContainer = styled.div`
  min-width: 30vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  float:left;
  background:#8b5729;
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
  padding:0px 0px 0px 0px;
`

const RightContainer = styled.div`
  min-width: 70vw;
  min-height: 100vh;
  float:right;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
    min-width: 50vw;
  }

`

const Img = styled.img`
  width:70vw;
  height:100vh;
  @media (max-width: 480px) {
    width:100vw;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
    width: 50vw;
  }
`
const Imgtop = styled.img`
  width:30vw;
  height:50vh;
  @media (max-width: 480px) {
    width:100vw;
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
  }
`

const Text = styled.p`
  
  padding:0px 20px 0px 20px;
  @media (max-width: 480px) {
    width:98vw;
    height:unset;
    padding:0px 0px 0px 0px;
    text-align:center;
  }
  @media (min-width: 480px) and (max-width: 320px) and (orientation:landscape) {
  font-size:8px
  
  }

  @media (min-width: 360px) and (max-width: 640px) and (orientation:landscape) {
    font-size:8px
    
  }
  @media (min-width: 411px) and (max-width: 731px) and (orientation:landscape) {
    font-size:8px
    
  }
  @media (min-width: 411px) and (max-width: 823px) and (orientation:landscape) {
    font-size:8px
    
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
    width: 50vw;
    
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation:landscape) {
    font-size:9px
    
  }
  
  @media (min-width: 823px) and (max-height: 411px) and (orientation:landscape) {
    font-size:9px
    
  }
  
  @media (min-width: 1024px) and (max-width: 1366px) and (orientation:portrait) {
    font-size:18px
    
  }
  @media (min-width: 560px) and (min-height: 320px) and (max-height: 320px) and (orientation:landscape) {
    font-size:7px
    
  }

`


class Parallax2 extends Component {

render() {

    return (
      <Container>
        <LeftContainer>

          <Topbox>
          <Imgtop src={this.props.img}></Imgtop>
          </Topbox>

          <TextContainer>
            <h1>{this.props.heading}</h1>
          <Text>{this.props.paragraph1}</Text>
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
