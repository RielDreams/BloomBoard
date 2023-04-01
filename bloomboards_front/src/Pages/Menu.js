import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Container = styled.div`
padding: 1.2rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Menu = ({menu}) => {

    const loaded = () => {
        return <Container>
                {menu.map((item) => (
                    <>
                    <MenuItem item={item} key={item._id}/>
                    </>
                ))}
                
            </Container>
    }

    return menu ? loaded() : <h1>Loading ...</h1>
}

export default Menu