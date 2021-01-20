import React, { Component } from 'react';
import styled from 'styled-components';
import footer from '../images/footer.png'

const Container = styled.div`
background: url(${footer});  
background-size:100% 100%;
display:inline-block;
right: 0;
width: 7vw;
    height: 32vw;
    z-index:25;
    position: absolute;
    color: black;

@media  (min-width: 1px) and (max-width: 425px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    width: 31vw;
    height: 98vw;
  }
`

const Copyright = styled.p`
color:white;

margin: 0px;

display: flex;
writing-mode: vertical-lr;
justify-content: center;
@media  (min-width: 1px) and (max-width: 425px) {

  font-size:4vw;
}
@media  (min-width: 426px) and (max-width: 768px) {

}

`

const Legal = styled.div`
display: inline-block;
padding: 2vw 1vw;
position:absolute;
top:2vw;
right:0vw;
@media  (min-width: 1px) and (max-width: 425px) {
  padding: 4vw 2vw;
}
@media  (min-width: 426px) and (max-width: 768px) {

}
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