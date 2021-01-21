import React, { Component } from 'react';
import styled from 'styled-components';
import footer from '../images/footer.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    width: 19vw;
    height: 98vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    width: 14vw;
    height: 51vw;

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
position:absolute;
top:2vw;
right:0vw;

font-size: 1vw;

@media  (min-width: 1px) and (max-width: 425px) {
     font-size: 3.5vw;
     top:16vw;
right:0vw;
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
           
            <Container data-aos='slide-left'>
                <Legal>
                    <Copyright>All Right Reserved Copyright &copy; 2020</Copyright>
                </Legal>
            </Container>
           
         );
    }
}
 
export default Footer ;