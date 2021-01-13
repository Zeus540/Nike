import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cv from '../images/cv.pdf';

const Container = styled.div`
width: 100%;
display:flex;
justify-content: space-between;

  
    @media (min-width: 1px) and (max-width: 426px) {
      flex-direction: column;
      
      }
`

const FormHolder = styled.form`
text-align:right;

`
const Label = styled.label`
color:white;
font-size:2vw;
`
const Input = styled.input`
background:transparent;
height:1vw;
font-size:2vw;
width:50vw;
border:none;
border-bottom:2px solid white;
margin:2vw 0vw;
`

class Form extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
render() {
 
    return (
      
      <Container id="Home">
            <FormHolder action="">
      <Label htmlFor="Name">Name</Label>
      <br/>
              <Input type="text" name="Name"/>
              <br/>
              
              <Label htmlFor="Email">Email</Label>
              <br/>
              <Input type="text" name="Email"/>
              <br/>
              <Label htmlFor="Subject">Subject</Label>
              <br/>
              <Input type="text" name="Subject"/>
            </FormHolder>
      </Container>
  );
  }
}

export default Form;
