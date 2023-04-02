import React from 'react'
import styled from 'styled-components'
import CatagoryItem from './CatagoryItem'

const categories = [{id: 1, title: 'Add ons', img: "https://i.imgur.com/zTrW36Yh.jpg"}, {id: 2, title: 'Seasonal', img: "https://i.imgur.com/LgZ51mxh.jpg"}, {id:1, title: 'Menu', img: "https://i.imgur.com/LIWKTATh.jpg"}]

const Container = styled.div`
    display: flex;
    padding: 1.2rem;
    justify-content: space-between;
`
const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CatagoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories