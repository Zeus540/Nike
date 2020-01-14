import React, {Component} from 'react';
import styled from 'styled-components';
import af1 from '../images/Nike-x-Carhartt-WIP-Air-Force-1-Low-_57.jpg';

const Container = styled.div`
min-width: 100vw;
min-height:100vh;

`

const LeftContainer = styled.div`
min-width: 30vw;
min-height: 100vh;
display: flex;
flex-direction: column;
float:left;
`
const Topbox = styled.div`
min-width: 30vw;
min-height: 50vh;

`
const Bottombox = styled.div`
min-width: 30vw;
min-height: 50vh;

`

const RightContainer = styled.div`
min-width: 70vw;
background: pink;
min-height: 100vh;
float:right;
`

const Img = styled.img`
width:70vw;
height:100vh;
`
const Imgtop = styled.img`
width:30vw;
height:50vh;
`
const Imgbottom = styled.img`
width:30vw;
height:50vh;
`


class Parallax2 extends Component {

render() { 
    return (
      <Container>
        <LeftContainer>
          <Topbox>
          <Imgtop src= {af1} alt=""/>
          </Topbox>
          <Bottombox>
          <Imgbottom src= {af1} alt=""/>
          </Bottombox>
        </LeftContainer>
        <RightContainer>
          <Img src= {af1} alt=""/>
        </RightContainer>
      </Container>
  );
  }
}

export default Parallax2;
