import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'
import Home from "./components/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import MenuItem from "./Pages/MenuItem";
import CreateOrder from "./Pages/CreateOrder";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

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
            path='/'
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
            <Route path='/orders/new'
            element={<CreateOrder/>}/>
            <Route path='/numberboards'
            element={<Product/>}/>
            <Route path='cart'
            element={<Cart/>}/>

        </Routes>
    </main>
  )
}

export default Main