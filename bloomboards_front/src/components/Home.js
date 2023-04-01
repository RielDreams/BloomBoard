import React from 'react'
import MenuItem from '../Pages/MenuItem'
import Slider from './Slider'
import Menu from '../Pages/Menu'
import Newsletter from './Newsletter'

function Home({menu}) {
 return <>
 <Slider menu= {menu}/>
 <Menu menu={menu}/>
 <Newsletter/>
 </>





}


export default Home