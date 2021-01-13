import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Container = styled.div`
height:100%;
margin: 20vw 0% 10vw 0%;
position: relative;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
 margin: 0px;

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

font-weight:bolder;
@media (min-width: 1px) and (max-width: 426px) {

  }
`


const TextHolder =styled.div`
display:flex;
margin: 31vw;
justify-content:center;
@media (min-width: 1px) and (max-width: 426px) {
 
  margin: 55vw 0vw;

  }
`

const Focus =styled.h1`
font-size:10vw;
color:white;
margin:0px;
font-family:arial;
@media (min-width: 1px) and (max-width: 426px) {
 
  }

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
  <Heading2  data-aos='slide-up' data-aos-duration="1000">PROJECTS</Heading2>

  </TextHolder>


      </Container>
  );
  }
}

export default Page2;
