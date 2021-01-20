import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:#cac8bb;
display:inline-block;
right: 0;
    position: absolute;
    color: black;
@media(max-width:480px){
    display:flex;
    flex-direction:column;
    text-align:center;
   
}
`

const Copyright = styled.p`
color:white;

margin: 0px;

display: flex;
writing-mode: vertical-lr;
justify-content: center;
@media  (min-width: 1px) and (max-width: 425px) {
  writing-mode:unset;
  font-size:4vw;
}
@media  (min-width: 426px) and (max-width: 768px) {

}

`

const Legal = styled.div`
display: inline-block;
padding: 15px 15px;
`



class Footer extends Component {
    render() { 
        return ( 
           
            <Container>
                <Legal>
                    <Copyright>All Right Reserved Copyright &copy; 2020</Copyright>
                </Legal>
            </Container>
           
         );
    }
}
 
export default Footer ;