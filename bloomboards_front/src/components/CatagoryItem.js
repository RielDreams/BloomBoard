import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    flex: 1;
    margin: .2rem;
    height: 70vh;
    position: relative;
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    ${mobile({height: "20vh"})}
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 1.2rem;
    text-shadow: 1px 0 black;
`

const Button = styled.button`
    border: none;
    padding: .8rem;
    background-color: white;
    color: grey;
    font-weight: 500;
    cursor: pointer;

    &:hover{
    background-color: green;
    color: white;
  }
`


const CatagoryItem = ({item}) => {
  
  const loaded = () => {
    return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Link to={item.url}> 
                <Button>Check it out!</Button>
            </Link>
        </Info>
    </Container>
  )
}

return item ? loaded() : <h1>Loading...</h1>

}

export default CatagoryItem