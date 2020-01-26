import React, {Component} from 'react';
import styled from 'styled-components';


const Container = styled.div`
min-width: 100vw;
max-height:100vh;
`

const Img = styled.img`
width:100vw;
height:100vh;
@media (max-width: 480px) {
  height:50vh;
}
`

class Parallax extends Component {

render() { 
    return (
      <Container>
         <Img src={this.props.img}></Img>
      </Container>
  );
  }
}

export default Parallax;
