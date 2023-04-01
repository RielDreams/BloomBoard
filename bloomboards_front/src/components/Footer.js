import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
`

const Right = styled.div`
  flex: 1;
`

const Center = styled.div`
 flex: 1;
`

const Logo = styled.h1`
  
`

const Description = styled.p`
  margin: 1.3rem 0px;
`

const SocialContainer = styled.div`
  display: flex;

`

const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`



function Footer() {
  return (
    <Container>
      <Left>
        <Logo>
          BloomBoards
        </Logo>
        <Description>
          Best Cheese baords in NYC
        </Description>
        <SocialContainer>
          <Icon color="3b5999">
            <FacebookIcon/>
          </Icon>
          <Icon color="e4405f">
            <InstagramIcon/>
          </Icon>
        </SocialContainer>
      </Left>
      
      <Center>
      <img src="https://i.imgur.com/yEMsjRJ.png" alt="logo" /> 
       <ul id="footer" className="flex justify-center items-center">
        <li>
            instagram: <a href="https://www.instagram.com/bloomboardscharcuterie_/">bloomboardscharcuterie_</a>
        </li>
        <li>
             Facebook:<a href="https://www.facebook.com/bloomboardscharcuterie">Bloom Boards Charcuterie</a>
        </li>
       </ul>
      </Center>
      <Right>

      </Right>
      
    </Container>
  )
}

export default Footer