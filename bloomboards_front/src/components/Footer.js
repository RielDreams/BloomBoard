import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
`
const Logo = styled.h1`
  
`

const Description = styled.p`
  margin: 1.3rem 0px;
`

const SocialContainer = styled.div`
  display: flex;`


const Center = styled.div`
 flex: 1;
 padding: 1.2rem;
`

const Title = styled.h3`
  margin-bottom: 2rem;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin: .5rem;
`

const Icon = styled.a`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  flex: 1;
  padding: 1.2rem;`

const ContactItem = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
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
          <a href="www.google.com">face</a>
          <Icon color="3b5999" >
            <FacebookIcon/>
          </Icon>
          <Icon color="e4405f">
            <InstagramIcon/>
          </Icon>
        </SocialContainer>
      </Left>
      
      <Center>
      <Title>
        UseFul Links
      </Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Order History</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Favorites</ListItem>
      </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          num 1
        </ContactItem>
        <ContactItem>
          2
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight:'.8rem'}}/>
          BloomBoards@gmail.com
        </ContactItem>
        <Payment/>
      </Right>
      
    </Container>
  )
}

export default Footer