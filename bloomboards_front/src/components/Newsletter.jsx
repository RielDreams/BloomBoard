import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';


const Container = styled.div`
height: 40vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
    font-size: 4.5rem;
    margin: 1.2rem;
    margin-bottom: 1.2;
`

const Description = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1.2;
`

const InputContainer = styled.div`
    width: 50%;
    height: 2.8rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 1.2rem;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Savor the flavors of the season with our rotating charcuterie offerings - stay in the loop and never miss a bite by signing up for our seasonal updates</Description>
        <InputContainer>
             <Input placeholder="Your email"/>
                <Button>
                    <SendIcon/>
                </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter