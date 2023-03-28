import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 30px;
background-color: black;
color: white;
align-items: center;
justify-content: center;
font-size:14px;
text-align: center;`

function Announcement() {
  return (
    <Container>Announcement</Container>
  )
}

export default Announcement