import React from 'react'
import styled from 'styled-components'
import logo from '../images/Logo.png'


const FooterGroup = styled.div`
    background: black;
    padding: 50px;
    display: grid;


`
const Text = styled.p`
    color: white;
    font-size: 25px;
    line-height: 1.5;
    max-width: 500px;
    margin: 5px;

`
const Button = styled.button`
    font-size: 20px;
    color: white;
    padding: 9px 20px;
    border: 1px solid black;
    border-radius: 20px;
    transition: 1s;
    opacity: 0;
    animation: HomePageTextAnimation 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    animation-delay: 1.7s;
    width: 150px;

    &:hover {
        color: #FA7A7A;
        background: white;
    }
    `

const Logo = styled.img`
width: 300px;
opacity: 0;
animation: HomePageTextAnimation 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
animation-delay: 1.7s;

    `

const LinkGroup = styled.div`
    width: 500px;
    margin: 5px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    a {
        transition: 0.8s;
    }
    
    a:hover {
        color: white;
    }

`


const CopyRight = styled.div`
    color: white;
    font-weight: lighter;
    font-size: 16px;
    max-width: 500px;
    margin: 5px;
    margin-top: 25px;
`



function share() {
    navigator.clipboard.writeText('Checkout Come.study')
}


const Footer = ({data, children}) => (
    <FooterGroup>
      <Text>Thanks for studying at</Text>
      <Logo src={logo}/>
      <Button onClick={share}>Share it</Button>
      <Text>Contact us at <a href="come.study@gmail.com">come.study@gmail.com</a></Text>
      <CopyRight>{children}</CopyRight>
    </FooterGroup>
)


export default Footer