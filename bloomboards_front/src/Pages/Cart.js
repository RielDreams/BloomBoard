import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import React from 'react'
import styled from 'styled-components'
import Pay from '../components/Pay'
import { mobile } from '../Responsive'


const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 1rem;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    padding: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: .8rem;
    font-weight: 600 ;
    cursor: pointer;
    border: ${props=>props.type === 'filled' && "none"};
    color: ${props=>props.type === 'filled' && 'white' };
    background-color: ${props=>props.type === 'filled' ? "black" : "transparent"};

    &:hover {
    background-color: green;
}
`
const TopTexts = styled.div`
      ${mobile({display: "none"})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 .7rem;
`



const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`


const Image = styled.img`
    width: 13rem;
`

const Detail = styled.div`
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
`

const ProductName = styled.span`
    
`

const ProductID = styled.span`
    
`

const ProductSize  = styled.span`
    
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
`


const ProductAmount = styled.div`
    font-size: 1.5rem;
    margin: .4rem;
    ${mobile({marigin: ".8rem"})}
`

const Price = styled.div`
font-size: 2rem;
font-weight: 200;
${mobile({marginBottom: "1.2rem"})}
    
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 1.2rem;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "1.4rem"};
`
const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`

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

const Cart = () => {
  return ( <Container>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>
                    CONTINUE SHOPPING
                </TopButton>
                <TopTexts>
                    <TopText>In Cart(2)</TopText>
                    <TopText>Favorites(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>
                    Checkout NOW!
                </TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image></Image>
                            <Detail>
                                <ProductName><b>Product:</b>STUFF</ProductName>
                                <ProductID><b>ID:</b>45234432</ProductID>
                                <ProductSize><b>Size:</b>medium</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <Price>$ 30</Price>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>ESTIMATED Delievery</SummaryItemText>
                        <SummaryItemPrice>$10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discounts</SummaryItemText>
                        <SummaryItemPrice></SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>20$</SummaryItemPrice>
                    </SummaryItem>
                    <Pay/>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart