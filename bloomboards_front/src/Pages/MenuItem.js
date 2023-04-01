import React from 'react'
import styled from 'styled-components'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0, .2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`

const Container = styled.div`
flex: 1;
margin: .4rem;
min-width: 17.5rem;
height: 20rem;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
    opacity: 1;
}
`

const Circle = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: white;
`

const Image = styled.img`
    height: 75%;
`



const Icon = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .7rem;
    transition:all .5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`


const MenuItem = ({item}) => {

    const loaded = () => {
  return <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <AddShoppingCartIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderIcon/>
            </Icon>
        </Info>
    </Container>
}
return item ? loaded() : <h1>Loading ...</h1>
}

export default MenuItem