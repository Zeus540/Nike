import React, { Component } from 'react';
import sytled from "styled-components";
import Form from "./form.jsx";

const Container=sytled.div`
    background-color: white;
    padding-bottom: 10px;
    min-width: 100vw;
    margin: 0px 0px;
    max-height:100vh;
`

const Heading=sytled.h1`
    text-align:center;
    color:black;
`

const FormContainer=sytled.div`
    width:Calc(100%/1);
    display:flex;
    align-items:center;
    justify-content:center; 
@media(max-width:425px){
    padding:0px;
}

`

class ContactMe extends Component {
    
render() { 
    return (
       
           <Container id="ContactMe">
               <Heading>Get In Touch </Heading>
             
               <FormContainer >
                    <Form/>
               </FormContainer>
             
           </Container>
     
         );
    }
}
 
export default ContactMe;



