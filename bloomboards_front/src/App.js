import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import Main from "./Main";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";





function App() {
const [user, setUser] = useState(null)
const USER_URL = "http://localhost:4000/user/"


useEffect(()=> {
  onAuthStateChanged(auth, (user) => setUser(user));
}, [])


 //GET
 const getUser = async () => {
  const response = await fetch(USER_URL);
  const data = await response.json();
  setUser(data);
};

//CREATE
const createUser = async (user) => { //user param will be an object of key:value pairs
  await fetch(USER_URL, {
    method: 'POST',
    headers: {'Content-type': 'Application/json'},
    //set req body
    body: JSON.stringify(user),
  })
  getUser()
}

//UPDATE
const updateUser = async (id, updatedUser) => {
  await fetch(USER_URL + id, {
    method: 'PUT',
    headers: {'Content-type':'Application/json'},
    body: JSON.stringify(updatedUser)
  })
  getUser()
}

//DELETE
const deleteUser = async (id) => {
  await fetch(USER_URL + id, {method:'DELETE'})
  getUser()
} 

  return (
    <div className="App">
      <Announcement/>
      <Navbar user={user}/>
      <Main user={user} setUser={setUser} createUser={createUser}/>
      <Footer/>
    </div>
  );
}

export default App;
