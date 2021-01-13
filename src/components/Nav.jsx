import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`

display:flex;
justify-content: space-between;
padding:5vw;
padding-top:0vw;
padding-bottom:2vw;
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
@media (min-width: 1px) and (max-width: 426px) {
  font-size:2vw;
 }
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

          <Holder data-aos='fade-down'>
          <Heading>Work with me</Heading>
          </Holder>

      </Container>
  );
  }
}

export default Nav;