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
`

const Wrapper = styled.div`
    padding: 1.2rem;
    width: 40%;
    background-color: white;
    ${mobile({width: "75%"})}
    `

const Title = styled.h1`
font-size: 1.5rem;
font-weight: 300;`


const Form = styled.form`
display: flex;
flex-wrap: wrap;`

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
    width: 40%;
    border: none;
    padding: 1rem 1.2rem;
    background-color: green;
    color: white;
`

function Registration (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container>
            <Wrapper>
                <Title>Registration</Title>
                <Form onSubmit={handleSubmit}>
                    <Input value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
              id="name" 
              placeholder="full Name"/>
                    <Input placeholder='Last Name'/>
                    <Input placeholder='Username'/>
                    <Input value={email} 
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com" 
              id="email"
              name="email"/>
                    <Input  value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="********" 
              id="password" 
              name="password" />
                    <Input placeholder='Confirm Password'/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with <b> PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit"> Create</Button>
                </Form>
                <Link to='/login'>
                    <Button >already have an account? login here</Button>
                </Link>
            </Wrapper>
        </Container>
       
       
    );
}

export default Registration;