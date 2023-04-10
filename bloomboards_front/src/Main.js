import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'
import Home from "./components/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import MenuItem from "./Pages/MenuItem";
import CreateOrder from "./Pages/CreateOrder";
import Product from "./Pages/NumberBoards";
import Cart from "./Pages/Cart";
import NumberBoards from "./Pages/NumberBoards";
import Seasonal from "./Pages/Seasonal";
import Contact from "./Pages/Contact"

function Main({createUser, setUser}) {
const [menu, setMenu] = useState(null)
const MENU_URL = "http://localhost:4000/menu"

//GET
const getMenu = async () => {
    const response = await fetch(MENU_URL);
    const data = await response.json()
    setMenu(data)
}

useEffect(()=> {
    getMenu();
}, [])

  return (
    <main>
        <Routes>
            <Route 
            exact path='/'
            element={<Home menu={menu} />} />
            <Route 
            path='/registration'
            element={<Registration createUser={createUser}/>}
            />
            <Route path='/login'
            element={<Login setUser={setUser}/>}/>
            <Route path='/platterideas'
            element={<Menu menu={menu} />}/>
            <Route path='/platterideas/:id'
            element={<MenuItem menu={menu} />}/>
            <Route path='/createorder'
            element={<CreateOrder/>}/>
            <Route path='/numberboards'
            element={<Product/>}/>
            <Route path='/cart'
            element={<Cart/>}/>
            <Route path='/numberBoards'
            element={<NumberBoards/>}/>
            <Route path='/seasonal'
            element={<Seasonal/>}/>
            <Route path='/Contact'
            element={<Contact/>}/>
        </Routes>
    </main>
  )
}

export default Main