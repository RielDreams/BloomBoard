import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'
import Home from "./components/Home";
import Registration from "./Pages/Registration";

function Main({createUser}) {
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
        </Routes>
    </main>
  )
}

export default Main