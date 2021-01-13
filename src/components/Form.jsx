import React, {Component} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Container = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
padding-bottom:10vw;;
    @media (min-width: 1px) and (max-width: 426px) {
      flex-direction: column;
      
      }
`

const FormHolder = styled.form`

margin:0 auto;
color:white;
`
const Label = styled.label`
color:white;
font-size:2vw;
font-family:arial;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:3.5vw;
 }
`
const Input = styled.input`
background:transparent;
height:5vw;
font-size:1vw;
width:50vw;
border:none;
border-bottom:2px solid white;
margin:1vw 0vw;
color:white;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:3.4vw;
 }
`
const TextArea = styled.textarea`
background:transparent;
min-height:5vw;
font-size:2vw;
width:50vw;
border:none;
border-bottom:2px solid white;
margin:2vw 0vw;
color:white;
@media (min-width: 1px) and (max-width: 426px) {
  font-size:3.4vw;
 }
`

const Button = styled.input`
border: none;
border-radius: 0px;
padding: 1vw 6vw;
    text-align: center;
    @media (min-width: 1px) and (max-width: 426px) {
      width: auto;

      }
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
            <FormHolder action="" data-aos='slide-up'>
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
              <br/>
              <Label htmlFor="Message">Message</Label>
              <br/>
              <TextArea name="Message" id="" cols="30" rows="10"></TextArea>
              <br/>
              <Button type="submit" value="Submit"/>
            </FormHolder>
      </Container>
  );
  }
}

export default Form;
