import React, { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)), url("https://i.imgur.com/LIWKTATh.jpg") no-repeat center ;
display: flex;
align-items: center;
justify-content: center;
margin-top: -10rem;
`

const Wrapper = styled.div`
    padding: 1.2rem;
    max-width: 40%;
    ${mobile({width: "75%"})}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:rgba(255,255,255, 0.8);
    -moz-box-shadow: 0rem 1rem 2rem rgba(0,0,0,.5);
-webkit-box-shadow: 0rem 1rem 2rem rgba(0,0,0,.5);
box-shadow: 0rem 1rem 2rem rgba(0,0,0,.5);
    `

const Title = styled.h1`
font-size: 1.5rem;
font-weight: 300;
text-align: center;
width:100%;
`


const Form = styled.form`
display: flex;
flex-wrap: wrap;`

const InputContainer = styled.div`
margin: 2rem 0;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 100%;
`


const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 1.2rem .6rem 0 0 ;
    padding: 10px;
    `

const Agreement = styled.span`
font-size: .9rem;
margin: 1.2rem 0;`


const Button = styled.button`
    width: 100%;
    border: none;
    padding: 1rem 1.2rem;
    background-color: black;
    color: white;

    &:hover {
      background-color: green;
    }
`

const TextBox = styled.textarea`
width: 100%;
height: 5rem;
resize: none;
margin: .4rem;
padding: .1rem;
text-align: center;
`

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <Input value={name} 
                            name="name" 
                            onChange={(e) => setName(e.target.value)} 
                            id="name" 
                            placeholder="full Name"/>
                        <Input value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                            placeholder='Order Number'
                            id="orderNumber"
                            name="orderNumber" />
                        <Input value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email" 
                            id="email"
                            name="email"/>
                        <Input value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder='Phone Number'
                            id="phoneNumber"
                            name="phoneNumber"/>
                    </InputContainer>
                    <TextBox>
                        concerns or request here
                    </TextBox>
                    <Button type="submit">Send</Button>
                </Form>

            </Wrapper>
        </Container>
       
       
    );
}

export default Contact