import React from 'react'
import Slider from './Slider'
import Menu from '../Pages/Menu'
import Newsletter from './Newsletter'
import Categories from './Categories'



function Home({menu}) {
 return <>

 <Slider menu= {menu}/>
 <Categories/>
 <Menu menu={menu}/>
 <Newsletter/>
 </>





}


export default Home