import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 20rem;
`
const Wrapper = styled.div`
  padding: 5px 10px;  
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
flex: 1;`

const menu = styled.div`
font-size: 14px;
`



function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Bloom Boards Charcuterie</Logo>
        </Left>
        <Right>
        <div id="links">
          <a href="/">Home</a> | <a href="/menu">Menu</a> |
          <a href="/orders/new">Create order</a> | <a href="/orders">orders</a> |
          <a href="/contact">Contact</a> |
          <form action="/account?_method=DELETE" method="POST">
              <input type="submit" value="Log Out" id="button"/>
          </form>
          <a href="/account/login">Login</a>
        </div>
        </Right>
    </Wrapper>
  </Container>
  )
}

export default Navbar