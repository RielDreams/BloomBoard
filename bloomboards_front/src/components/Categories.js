import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import CatagoryItem from './CatagoryItem'

const categories = [{id: 1, title: 'Number Boards', img: "https://i.imgur.com/zTrW36Yh.jpg", url: '/numberboards'}, {id: 2, title: 'Seasonal', img: "https://i.imgur.com/LgZ51mxh.jpg", url: '/seasonal'}, {id:1, title: 'Add ons', img: "https://i.imgur.com/LIWKTATh.jpg", url: '/addons'}]

const Container = styled.div`
    display: flex;
    padding: 1.2rem;
    justify-content: space-between;
    ${mobile({padding: "0", flexDirection: "column"})}
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