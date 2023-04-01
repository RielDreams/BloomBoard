import React, { useState } from "react";
import { logIn, logOut } from "../Firebase";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)), url("https://i.imgur.com/q0Aiby6h.jpg") no-repeat center ;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 1.2rem;
    width: 40%;
    background-color: white;
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



const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1rem 1.2rem;
    background-color: green;
    color: white;
`

 function Login (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder='Username'/>
                    <Input placeholder='Password'/>
                    <Button>Login</Button>
                    <Link>Don't Remember password?</Link>
                    <Link to='/registration'>Don't have an account? Register here</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;