import React, { useState } from "react";
import { logIn, logOut } from "../firebase";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from "../Responsive";

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
    background-color:rgba(255,255,255, 0.8);
    -moz-box-shadow: 0rem 1rem 2rem rgba(0,0,0,.5);
-webkit-box-shadow: 0rem 1rem 2rem rgba(0,0,0,.5);
box-shadow: 0rem 1rem 2rem rgba(0,0,0,.5);
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



const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1rem 1.2rem;
    background-color: green;
    color: white;
    cursor: pointer;
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
                    <Button onClick={(logIn)}>Login with Google</Button>
                    <Link>Don't Remember password?</Link>
                    <Link to='/registration'>Don't have an account? Register here</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;