import React from 'react'
import styled from 'styled-components'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge } from '@mui/material';
import { mobile } from '../Responsive';
import { logOut } from '../firebase';

const Container = styled.div`
  height: 10rem;

`
const Wrapper = styled.div`
  padding: 5px 3px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "5px 0", flexDirection:  "column"})}
`

const Left = styled.div`
flex: 1;`

const Logo = styled.h1`
font-weight: bold;
text-align: center;
${mobile({fontsize: "24px"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifycontent: "center"})}
`

const Navlinks = styled.div`
font-size: 14px;
margin-left: 25px;
${mobile({fontsize: "10px", marginleft: "20px"})}
`



function Navbar({user}) {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Bloom Boards Charcuterie</Logo>
        </Left>
        <Right>
          <Navlinks>
          <a href="/">Home </a> 
          </Navlinks>
          <Navlinks>
          <a href="/platterideas">Platter</a>
          </Navlinks>
          <Navlinks>
            <a href="/contact">Contact</a> 
          </Navlinks>
          {user ? <>
            <Navlinks>
            <a href="/createorder">Create order</a> 
            </Navlinks>
            <Navlinks>
              <Badge badgeContent={2}>
              <a href="/Cart"><ShoppingCartCheckoutIcon/></a>
              </Badge>
            </Navlinks>
            <Navlinks>
          <button onClick={logOut}>Logout</button>
            </Navlinks> 
            </>
            : <>
            <Navlinks>
            <a href="/login">Login</a>
            </Navlinks>
            <Navlinks>
              <a href="/registration">Sign up</a>
            </Navlinks>
            </>
          }
        </Right>
    </Wrapper>
  </Container>
  )
}

export default Navbar