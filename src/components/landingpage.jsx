import React, {Component} from 'react';
import styled from 'styled-components';
import af1 from '../images/off.jpg';

const Container = styled.div`
min-width: 100vw;
background-image:url(${af1});
background-size:100% 100%;
background-attachment:fixed;
min-height:100vh;
`

class Landingpage extends Component {

render() { 
    return (
      <Container>
        
      </Container>
  );
  }
}

export default Landingpage;
