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
    @media (min-width: 1px) and (max-width: 426px) {
      flex-direction: column;
      
      }
`

const Holder = styled.div`
color:antiquewhite;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;

    text-align: center;
    padding: 5vw;
    @media (min-width: 1px) and (max-width: 426px) {
      width: auto;
      padding: 10vw;
      }
`

const Heading = styled.h1`
color:antiquewhite;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;
font-size:1.5vw;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:2.5vw;
  }
`
const Anchor = styled.a`
color:antiquewhite;
font: italic
font-family:arial;
text-transform:uppercase;
letter-spacing:5px;
border:2px solid white;
width: 33.3%;
    text-align: center;
    @media (min-width: 1px) and (max-width: 426px) {
      width: auto;

      }
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

          <Anchor href="https://github.com/Zeus540" target="_blank" rel="noopener noreferrer"><Holder  >
          <Heading>GITHUB</Heading>
          </Holder>
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/zaheerroberts/" target="_blank" rel="noopener noreferrer">
          <Holder >
          <Heading>LINKEDIN</Heading>
          </Holder>
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/zaheerroberts/" target="_blank" rel="noopener noreferrer">
          <Holder  >
          <Heading>RESUME</Heading>
          </Holder>
</Anchor>
      </Container>
  );
  }
}

export default Social;
