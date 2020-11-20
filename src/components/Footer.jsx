import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:#000000;
display:inline-block;
width:100vw;
bottom:0px;
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
padding:10px 5px!important;
    @media(max-width:480px){
        text-align: center;

        writing-mode: unset;
}
}
@media (min-width: 480px) and (max-width: 320px) and (orientation:landscape) {
font-size:8px

}

@media (min-width: 360px) and (max-width: 640px) and (orientation:landscape) {
  font-size:8px
  
}
@media (min-width: 411px) and (max-width: 731px) and (orientation:landscape) {
  font-size:8px
  
}
@media (min-width: 411px) and (max-width: 823px) and (orientation:landscape) {
  font-size:8px
  
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait) {
  width: 50vw;
  
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation:landscape) {
  font-size:9px
  
}

@media (min-width: 823px) and (max-height: 411px) and (orientation:landscape) {
  font-size:9px
  
}

@media (min-width: 1024px) and (max-width: 1366px) and (orientation:portrait) {
  font-size:18px
  
}
@media (min-width: 560px) and (min-height: 320px) and (max-height: 320px) and (orientation:landscape) {
  font-size:7px
  
}
`

const Legal = styled.div`
display: inline-block;
padding: 15px 10px;
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