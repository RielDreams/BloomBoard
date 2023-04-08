import React from 'react'
import styled from 'styled-components'
import { addOns } from '../menuitem'

const Container = styled.div`
padding: 1.2rem;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;`

const AddOns = ({addOns}) => {

    const loaded = () => {
        return <Container>
                {addOns.map((item) => (
                    <>
                    <addOnsItem item={item} key={item._id}/>
                    </>
                ))}
                
            </Container>
    }

    return addOns ? loaded() : <h1>Loading ...</h1>
}

export default AddOns