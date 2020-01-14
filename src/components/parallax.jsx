import React, {Component} from 'react';
import styled from 'styled-components';
import af1 from '../images/maksim-larin-Ai356rggKvw-unsplash.jpg';

const Container = styled.div`
min-width: 100vw;
background: pink;
min-height:100vh;
`

const Img = styled.img`
width:100%;
height:100%;

`

class Parallax extends Component {

render() { 
    return (
      <Container>
        <Img src= {af1} alt=""/>
      </Container>
  );
  }
}

export default Parallax;
