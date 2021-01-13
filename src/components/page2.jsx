import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery1 from './Gallery.jsx'


const Container = styled.div`
height:100%;
margin: 10vw 0% 0% 0%;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 margin: 0px;
 height: unset;
}
 @media (min-width: 427px) and (max-width: 768px) {

  }
 @media (min-width: 769px) and (max-width: 1024px) {

  }
`


const Heading2 =styled.h1`
font-size:6vw;
color:white;
font-family:arial;
margin: 20vw 0vw 0vw 0vw;
font-weight:bolder;
`


const TextHolder =styled.div`
display:flex;
right: 10vw;
margin: 20vw;
`

const Focus =styled.h1`
font-size:10vw;
color:white;
margin:0px;
font-family:arial;
`


class Page2 extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container  id="gallery">
        <TextHolder>
          <Focus data-aos='slide-up' data-aos-duration="1200"> 0</Focus>
          <Focus data-aos='slide-up' data-aos-duration="1400"> 2</Focus>
  <Heading2  data-aos='slide-up' data-aos-duration="400">P</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="600">R</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="800">O</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1000">J</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1200">E</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1400">C</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1600">T</Heading2>
  <Heading2  data-aos='slide-up' data-aos-duration="1800">S</Heading2>
  </TextHolder>
<Gallery1/>

      </Container>
  );
  }
}

export default Page2;
