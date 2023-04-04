import React from 'react'
import MenuItem from '../Pages/MenuItem'
import Slider from './Slider'
import Menu from '../Pages/Menu'
import Newsletter from './Newsletter'
import Categories from './Categories'
import Cart from '../Pages/Cart'

function Home({menu}) {
 return <>

 <Slider menu= {menu}/>
 <Categories/>
 <Menu menu={menu}/>
 <Newsletter/>
 </>





}


export default Home