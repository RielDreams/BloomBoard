import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import Main from "./Main";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";





function App() {
const [user, setUser] = useState(null)
console.log(user)
const USER_URL = "http://localhost:4000/user/"

useEffect(() => {
  const getToken = async () => {
    if (user) {
      const token = await user.getIdToken()
      console.log(token)
    } else {
      //set orders to null
    }
  }
  getToken()
}, [user])


useEffect(()=> {
  const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
  return () => {
    // Clean Up Actions
    unsubscribe()
  }
}, [])

  return (
    <div className="App">
      <Announcement/>
      <Navbar user={user}/>
      <Main user={user} setUser={setUser} />
      <Footer/>
    </div>
  );
}

export default App;
