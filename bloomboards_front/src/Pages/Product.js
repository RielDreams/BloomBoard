import React from 'react'
import styled from 'styled-components'
import { meats, cheese, addOns, size } from '../menuitem'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../Responsive';


const Container = styled.div`
    
`

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  ${mobile({flexDirection: "column", padding: ".7rem"})}
`

const ImgContainer = styled.div`
  flex:1;
`

const Image = styled.img`
width: 100%;
height: 100%;
${mobile({height: "50%"})}
  
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
  ${mobile({padding: " 0 1rem"})}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 1.2rem 0 ;
`

const OrderContainer = styled.div`
margin: 2rem 0;
display: flex;
justify-content: space-evenly;
`

const OrderChoices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const OrderTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
`

const OrderSelect = styled.select`
  
`
const OrderOption = styled.option`
margin-left: .4rem;
padding:.3rem;
`
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: .8rem;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .4rem;
`

const Button = styled.button`
  padding: 1rem;
  border: .1rem solid green;
  background-color: white;
  cursor: pointer;

  &:hover{
    background-color: green;
    color: white;
  }
`

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`

const Product = () => {

  return (
    <Container>
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.imgur.com/zTrW36Yh.jpg"/>
          </ImgContainer>
          <InfoContainer>
            <Title>Number Boards</Title>
            <Desc>Description</Desc>
            <OrderContainer>
              <OrderChoices>
                <OrderTitle>size</OrderTitle>
                <OrderSelect >
                  {size.map(size => (
                    <OrderOption >{size.size}</OrderOption>
                    ))}
                  </OrderSelect>
              </OrderChoices>
              <OrderChoices>
                <OrderTitle>Cheese</OrderTitle>
                <OrderSelect>
                  {cheese.map(cheese => (
                    <OrderOption>{cheese.name}</OrderOption>
                    ))}
                </OrderSelect>
              </OrderChoices>
              <OrderChoices>
                <OrderTitle>meats</OrderTitle>
                <OrderSelect>
                  {meats.map(meats => (
                    <OrderOption>{meats.name}</OrderOption>
                    ))}
                </OrderSelect>
              </OrderChoices>
              <OrderChoices>
                <OrderTitle>addOns</OrderTitle>
                <OrderSelect>
                <OrderOption>NONE</OrderOption>
                  {addOns.map(addOns => (
                    <OrderOption>{addOns.name}</OrderOption>
                    ))}
                </OrderSelect>
              </OrderChoices>
            </OrderContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveIcon/> 
                <Amount>1</Amount>
                <AddIcon/>
                </AmountContainer>
                <Button>Add To Cart</Button>
              </AddContainer>            
          </InfoContainer>
          <Price>
            0.00
          </Price>
        </Wrapper>
    </Container>
  )
}

export default Product