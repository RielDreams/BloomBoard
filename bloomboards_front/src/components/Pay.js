import React, { useState, useEffect, } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const KEY = "pk_test_51Mu6frIJJVxi0mfiMU3vRaiMvYU93EjfaBF5QyDo1uqCBxCCRrbvugy3uDUiNSVOcoC1czqRJqsFgz5kFHmd9OqI00vrBMvZ6Y"

const Button = styled.button`
width: 100%;
padding: .6rem;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;

&:hover {
    background-color: green;
}
`

const Pay = () => {
    const [stripeToken, setStripeToken]= useState(null);
    const navigate = useNavigate()



    const onToken = (token) => {
        setStripeToken(token)
    }
useEffect(()=> {
    const makeReq = async () => {
        try {
            const res = await axios.post('http://localhost:4000/stripetoken/payment',
                {
                    tokenId: stripeToken.id,
                    amount: 2000
                }
            );
            console.log(res.data)
            navigate('/ordercomplete')
        } catch (error) {
            console.log(error)
        }
    }
    stripeToken && makeReq()
}, [stripeToken, navigate])

  return stripeToken ? <span>Processing. please wait... </span> : (
    <StripeCheckout
    name='BloomBoards'
    image=''
    billingAddress
    shippingAddress
    description='Your Total is 20$'
    amount={2000}
    token={onToken}
    stripeKey={KEY}
    >
        <Button>
            Pay
        </Button>
    </StripeCheckout>
    )
}

export default Pay