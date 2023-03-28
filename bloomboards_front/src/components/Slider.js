import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    opacity: 0.6;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw)
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex: 1;`

const Image = styled.img`
height: 80%;
`

const ImgContainer = styled.div`
height: 100vh;`

const Info = styled.div`
padding: 50px;
flex: 1;`

const Title = styled.h1`
font-size: 5rem;`

const Desc = styled.p`
margin: 3.5rem 0;
font-size: 1.5rem;
font-weight: 400;
letter-spacing: .2rem;`

const Button = styled.button`
padding: 1rem;
font-size: 1.2rem;
background-color: transparent;`


function Slider() {
    const[slideIndex, setSlideIndex] = useState(0)


    const handleClick = (direction) => {}



  return <Container>
    <Arrow direction="left" onClick={()=>handleClick('left')}>
        <ArrowLeftIcon/>
    </Arrow>
    <Wrapper>
        <Slide>
        <ImgContainer>
            <Image src='https://i.imgur.com/JUJit7V.jpg'></Image>
        </ImgContainer>
        <Info>
        <Title>JOCE</Title>
            <Desc>GREAT</Desc>
            <Button>Add to cart</Button>
        </Info>
        </Slide>
    </Wrapper>
    <Wrapper>
        <Slide>
        <ImgContainer>
            <Image src='https://i.imgur.com/JUJit7V.jpg'></Image>
        </ImgContainer>
        <Info>
        <Title>JOCE</Title>
            <Desc>GREAT</Desc>
            <Button>Add to cart</Button>
        </Info>
        </Slide>
    </Wrapper>
    <Arrow direction='right' onClick={()=>handleClick('right')}>
        <ArrowRightIcon/>
    </Arrow>
  </Container>
}

export default Slider