import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { mobile } from "../Responsive";
import { meats, cheese, size, addOns } from '../menuitem'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)), url("https://i.imgur.com/LIWKTATh.jpg") no-repeat center ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10rem;
`

const Wrapper = styled.div`
    padding: 1.2rem;
    max-width: 40%;
    background-color: white;
    ${mobile({width: "75%"})}
    `

const Title = styled.h1`
font-size: 1.5rem;
font-weight: 300;
text-align: center;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Agreement = styled.span`
font-size: .9rem;
margin: 1.2rem 0;`


const Button = styled.button`
    width: 100%;
    border: none;
    padding: 1rem 1.2rem;
    background-color: black;
    color: white;

    &:hover {
      background-color: green;
    }
`

//DROPDOWN MENUS

const OrderContainer = styled.div`
margin: 2rem 0;
display: flex;
justify-content: space-evenly;
width: 100%;
`

const OrderChoices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`

const OtherChoices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`


const OrderTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
  text-align: center;
`

const OrderSelect = styled.select`
  margin: .6rem;
  padding: .8rem .5rem;
  color: green;
  background-color: white;
  border: 1px solid #dddddd;
  cursor: pointer;
  border-radius: 5px;


  // replace default styling

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &:focus {

  }

  &:hover{
    outline: none;
    border: 1px solid #bbbbb 
  }
`
const OrderOption = styled.option`
margin-left: .4rem;
padding:.3rem;
font-size:1rem;
background-color: #ffffff;
`

//REQUEST BOX

const SpecialRequestText = styled.textarea`
  width: 100%;
  height: 5rem;
  resize: none;
  margin: .4rem;
  padding: .1rem;
`

const CreateOrder = () => {
  const [limit, setLimit] = useState(2)
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCheeses, setSelectedCheeses] = useState(Array(limit).fill(null));
  const [selectedMeats, setSelectedMeats] = useState(Array(limit).fill(null));
  const [selectedAddOn, setSelectedAddOn] = useState('')
  const [specialRequest, setSpecialRequest] =useState('')
  


    const handleSizeChange = async (e) => {
      const newSize = e.target.value;
      const currentCheeses = [...selectedCheeses];
      const currentMeats = [...selectedMeats];
    
      if (newSize === "Mini") {
        setLimit(2);
        setSelectedCheeses(currentCheeses.slice(0, 2));
        setSelectedMeats(currentMeats.slice(0, 2));
      } else if (newSize === "Small" || newSize === "Medium") {
        setLimit(3);
        setSelectedCheeses(currentCheeses.slice(0, 3));
        setSelectedMeats(currentMeats.slice(0, 3));
      } else if (newSize === "Large" || newSize === "X-Large") {
        setLimit(4);
        setSelectedCheeses(currentCheeses.slice(0, 4));
        setSelectedMeats(currentMeats.slice(0, 4));
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
                <Title>Create your board</Title>
                <Form >
                        <OtherChoices>
                          <OrderTitle>size</OrderTitle>
                            <OrderSelect onChange={handleSizeChange}>
                            {size.map(size => (
                              <OrderOption value={size.size} key={size.size} >{size.size}</OrderOption>
                              ))}
                            </OrderSelect>
                        </OtherChoices>
                      <OrderContainer>
                        <OrderChoices>
                          <OrderTitle>Cheese</OrderTitle>
                          {renderCheeseSelects()}
                        </OrderChoices>
                        <OrderChoices>
                          <OrderTitle>meats</OrderTitle>
                          {renderMeatSelects()}
                        </OrderChoices>
                      </OrderContainer>
                        <OtherChoices>
                          <OrderTitle>addOns</OrderTitle>
                          <OrderSelect onChange={handleAddOnsChange}>
                            <OrderOption value="" disabled selected>NONE</OrderOption>
                              {addOns.map(addOns => (
                                <OrderOption value={addOns.name} key={addOns.name}>{addOns.name}</OrderOption>
                                ))}
                          </OrderSelect>
                        </OtherChoices>
                        <SpecialRequestText onChange={(e) => setSpecialRequest(e.target.value)} placeholder="allergies, special request or any other information you might want to share for your order">

                        </SpecialRequestText>
                    <Agreement>
                        Delieveries Only in NYC or nassua county NY. Pick ups available in queens. contact for more information
                    </Agreement>
                    <Button type="submit">ADD TO CART</Button>
                </Form>
            </Wrapper>
        </Container>

  )
}

export default CreateOrder