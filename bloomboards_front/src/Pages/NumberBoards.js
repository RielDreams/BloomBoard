import {React, useState} from 'react'
import styled from 'styled-components'
import { meats, cheese, addOns} from '../menuitem'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../Responsive';


const number = [1,2,3,4,5,6,7,8,9,0] 
const size = [{size: 8, price: 30},{size: 12, price: 35}, {size: 16, price:40} ]

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

const NumberBoards = () => {
  const [quantity, setQuantity] = useState(1)
  const [limit, setLimit] = useState(2)
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCheeses, setSelectedCheeses] = useState(Array(limit).fill(null));
  const [selectedMeats, setSelectedMeats] = useState(Array(limit).fill(null));
  const [selectedAddOn, setSelectedAddOn] = useState('')
  const [specialRequest, setSpecialRequest] =useState('')
  const [price, setPrice ] = useState(0)
  
  const handleQuantity = (type) => {
    if(type === "dec"){
     quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity+1)
    }
  }

    const handleSizeChange = async (e) => {
      const newSize = e.target.value;
      const newPrice = e.target.key
      const currentCheeses = [...selectedCheeses];
      const currentMeats = [...selectedMeats];
    
      if (newSize === "8") {
        setLimit(2);
        setSelectedCheeses(currentCheeses.slice(0, 2));
        setSelectedMeats(currentMeats.slice(0, 2));
        console.log(e.target.name)
        setPrice("30")
      } else if (newSize === "12" || newSize === "Medium") {
        setLimit(3);
        setSelectedCheeses(currentCheeses.slice(0, 3));
        setSelectedMeats(currentMeats.slice(0, 3));
        setPrice(35)
      } else if (newSize === "16" || newSize === "X-Large") {
        setLimit(4);
        setSelectedCheeses(currentCheeses.slice(0, 4));
        setSelectedMeats(currentMeats.slice(0, 4));
        setPrice(40)
      }
    };


  const handleCheeseChange = (e, index) => {
    const newCheese = e.target.value;
    const updatedCheeses = [...selectedCheeses];
    updatedCheeses[index] = newCheese;
    setSelectedCheeses(updatedCheeses);
  };
  
  const handleMeatChange = (e, index) => {
    const newMeats = e.target.value
    const updatedMeats = [...selectedMeats]
    updatedMeats[index] = newMeats
    setSelectedMeats(updatedMeats);
  };

  const handleAddOnsChange = (e) => {
    const newAddOn = e.target.value
    setSelectedAddOn(newAddOn)
  }


 const handleSubmit = (e) => {
      e.preventDefault();
       // Reset cheese and meat selections to null arrays
      setSelectedCheeses(Array(limit).fill(null));
      setSelectedMeats(Array(limit).fill(null));
 }



 const renderCheeseSelects = () => {
  const selects = []
  for (let i = 0; i < limit ; i++) {
    selects.push(
      <OrderSelect key={i} onChange={(e) => handleCheeseChange(e, i)}>
        <OrderOption disabled selected>Selection {i + 1}</OrderOption>
        {cheese.map((cheese) => (
          <OrderOption key={cheese.name}>{cheese.name}</OrderOption>
        ))}
      </OrderSelect>
    );
  }
  return selects;
};

const renderMeatSelects = () => {
  const selects = []
  for (let i = 0; i < limit; i++) {
    selects.push(
      <OrderSelect key={i} onChange={(e) => handleMeatChange(e,i)}>
        <OrderOption value="" disabled selected>Selection {i + 1}</OrderOption>
        {meats.map(meat => (
          <OrderOption value={meat.name} key={meat.name}>{meat.name}</OrderOption>
        ))}
      </OrderSelect>
    );
  }
  return selects;
};


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
                <OrderSelect onChange={handleSizeChange} >
                  {size.map(size => (
                    <OrderOption value={size.price} >{size.size}</OrderOption>
                    ))}
                  </OrderSelect>
              </OrderChoices>
              <OrderChoices>
                <OrderTitle>Number</OrderTitle>
                <OrderSelect >
                  {number.map(num => (
                    <OrderOption >{num}</OrderOption>
                    ))}
                  </OrderSelect>
              </OrderChoices>
              <OrderChoices>
                <OrderTitle>Cheese</OrderTitle>
                {renderCheeseSelects()}
              </OrderChoices>
              <OrderChoices>
                <OrderTitle>meats</OrderTitle>
                {renderMeatSelects()}
              </OrderChoices>
              <OrderChoices>
                <OrderTitle>addOns</OrderTitle>
                <OrderSelect onChange={handleAddOnsChange}>
                  <OrderOption value="" disabled selected>NONE</OrderOption>
                  {addOns.map(addOns => (
                    <OrderOption value={addOns.name} key={addOns.name}>{addOns.name}</OrderOption>
                  ))}
                </OrderSelect>
              </OrderChoices>
            </OrderContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveIcon onClick={()=>handleQuantity("dec")}/> 
                <Amount>{quantity}</Amount>
                <AddIcon onClick={()=>handleQuantity("inc")}/>
                </AmountContainer>
                <Button onclick={handleSubmit}>Add To Cart</Button>
              </AddContainer>            
          </InfoContainer>
          <Price>
            {price}
          </Price>
        </Wrapper>
    </Container>
  )
}

export default NumberBoards