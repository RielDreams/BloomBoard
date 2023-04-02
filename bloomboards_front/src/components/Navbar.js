import React from 'react'
import styled from 'styled-components'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge } from '@mui/material';

const Container = styled.div`
  height: 10rem;
`
const Wrapper = styled.div`
  padding: 5px 3px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
flex: 1;`

const Logo = styled.h1`
font-weight: bold;
text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Navlinks = styled.div`
font-size: 14px;
margin-left: 25px;
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
          <a href="/platterideas">Platter Ideas</a>
          </Navlinks>
          
          
          
          <Navlinks>
            <a href="/contact">Contact</a> 
          </Navlinks>
          
          {user ? <>
            <Navlinks>
            <a href="/orders/new">Create order</a> 
            </Navlinks>

            <Navlinks>
              <Badge badgeContent={2}>
              <a href="/orders"><ShoppingCartCheckoutIcon/></a>
              </Badge>
            </Navlinks>
            
            <Navlinks>
              <form action="/account?_method=DELETE" method="POST">
                <input type="submit" value="Log Out" id="button"/>
            </form>
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