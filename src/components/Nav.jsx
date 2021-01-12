import React, {Component} from 'react';
import styled from 'styled-components';
import Port from '../images/Port.png'
import Gallery from './Gallery.jsx'
import Back from '../images/back.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Container = styled.div`
width: 100%;
display:flex;
justify-content: space-between;

`

const Holder = styled.div`
color:antiquewhite;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;
`

const Heading = styled.h1`
color:antiquewhite;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;
font-size:1.5vw;
`

class Nav extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Home">

          <Holder  data-aos='fade-down'>
          <Heading>Personal Website</Heading>
          </Holder>

          <Holder  data-aos='fade-down'>
          <Heading> </Heading>
          </Holder>

          <Holder  data-aos='fade-down'>
          <Heading>E-MAIL ME</Heading>
          </Holder>

      </Container>
  );
  }
}

export default Nav;
