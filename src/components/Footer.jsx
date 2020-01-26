import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:#710b13;
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
padding:0px 0px;
display: flex;
writing-mode: vertical-lr;
justify-content: center;
    @media(max-width:480px){
        text-align: center;
        margin: 5%;
        margin-top: 0px;
        writing-mode: unset;
}
`

const Social = styled.div`
color:white;
float:right;
    @media(max-width:480px){
        color: white;
        justify-content: center;
        display:flex;
        flex-direction:row;
        margin: 0 auto;
        width: 100%;
}
`

const List = styled.ul`
float:right;
margin: 0px;
padding:0px;
    @media(max-width:480px){
        
}
`

const ListItem = styled.li`
list-style:none;
color:#1f1f1f;
font-weight:bolder;
display:inline-block;
padding:0px 0px;
   
    @media(max-width:480px){
        display:inline-flex;
        flex-direction:row;
        text-align:center;
}
`
const Legal = styled.div`
display: inline-block;
`

const Image = styled.img`
width:35px;
height:35px;
margin: 10px;

`

const Anchor = styled.a`
text-decoration:none;
color:white;
`
class Footer extends Component {
    render() { 
        return ( 
           
            <Container>
                        <Social>
                            <List>
                                <ListItem><Anchor href=""><Image src={this.props.link1} alt=""/></Anchor></ListItem>
                                <ListItem><Anchor href="https://github.com/Zeus540/React" target="_blank"><Image src={this.props.link2} alt=""/></Anchor></ListItem>
                            </List>
                        </Social>
                        <Legal>
                <Copyright>All Right Reserved Copyright &copy; 2020</Copyright>
                </Legal>
            </Container>
           
         );
    }
}
 
export default Footer ;