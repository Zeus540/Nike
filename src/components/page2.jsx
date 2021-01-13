import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Container = styled.div`

margin: 20vw 0% 10vw 0%;

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
        
          <Focus > 0</Focus>
          <Focus> 2</Focus>
  <Heading2 >PROJECTS</Heading2>



      </Container>
  );
  }
}

export default Page2;
