import React, { Component } from 'react';
import styled from 'styled-components';

const Container =styled.div`
    width:45%;
@media(max-width:425px){
    width:90%;
}
`

const Form =styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

const Input =styled.input`
background:transparent;
color:#000000;
border:none;
border-bottom:black 2px solid;
min-width:90%;
min-height:30px;
`

const Textarea =styled.textarea`
background:#000000;
color:#ffffff;
min-width:90%;
margin-top:5%;
@media(max-width:480px) and (orientation:portrait){
    height:150px

}
@media(min-width:480px) and (orientation:landscape){
    height:100px
}
`
const Btn =styled.button`
padding:10px 20px 10px 20px ;
border:none;
background:transparent;
border-bottom:2px solid black;
color:black;
`
class Forms extends Component {
    render() { 
        return (
        <Container>
            <Form method="post" action="/contact.php" name="contactform">

                <Input type="text" placeholder="Name"/>
                <Input type="text" placeholder="Email"/>
                <Input type="text" placeholder="Subject"/>            
                <Textarea />
                <input type="submit" class="submit btn outline" id="submit" value="Send message" />

            </Form>
        </Container>
         );
    }
}
 
export default Forms;