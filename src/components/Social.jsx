import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
left:0px;
    position:absolute;
`

const Holder = styled.div`
color:antiquewhite;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;
border:2px solid white;
width: 33.3%;
    text-align: center;
    padding: 5vw;
`

const Heading = styled.h1`
color:antiquewhite;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;
font-size:1.5vw;
`

class Social extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Home">

          <Holder  >
          <Heading>GITHUB</Heading>
          </Holder>

          <Holder >
          <Heading>LINKEDIN</Heading>
          </Holder>

          <Holder  >
          <Heading>LINKEDIN</Heading>
          </Holder>

      </Container>
  );
  }
}

export default Social;
