import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
display:inline-block;
right: 0;
bottom:0
    z-index:25;
    position: absolute;
    color: black;
@media  (min-width: 1px) and (max-width: 425px) {
    display:flex;
    flex-direction:column;
    text-align:center;
  }
  @media  (min-width: 426px) and (max-width: 768px) {

  }
`

const Copyright = styled.p`
color:white;
margin: 0px;
display: flex;
writing-mode: vertical-lr;
justify-content: center;
@media  (min-width: 1px) and (max-width: 425px) {
    font-size: 3.5vw;
}
@media  (min-width: 426px) and (max-width: 768px) {

}

`

const Legal = styled.div`
display: inline-block;
padding: 2vw 1vw;
font-size: 1vw;
@media  (min-width: 1px) and (max-width: 425px) {
     font-size: 3.5vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
    font-size: 2.1vw;
}
`



class Footer extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1500
        })
      }
    render() { 
        return ( 
           
            <Container className="fade">
                <Legal>
                    <Copyright>All Right Reserved Copyright &copy; 2020</Copyright>
                </Legal>
            </Container>
           
         );
    }
}
 
export default Footer ;