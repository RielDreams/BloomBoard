import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'
import Home from "../Pages/Home";

function Main() {
  return (
    <main>
        <Routes>
            <Route path='/'
            element={<Home/>} />
        </Routes>
    </main>
  )
}

export default Main