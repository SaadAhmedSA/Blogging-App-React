import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signOutUser } from '../Config/method'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const Navbar = () => {
    const Navigate = useNavigate()
    const [user,setIsUser] = useState(null)
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(user)
                
            }
            
        })
    }, [])
    const signout =()=>{
      signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
        setIsUser(null)
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });

      // alert("User logout")
    }
  return (
    <>
   
<div className="navbar bg-primary text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
    {user? (<ul
        tabIndex={0}
        className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to="">Home</Link></li>
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <a className="btn btn-ghost h-[30px]" onClick={signout}>logout</a>
      </ul>):(null)}
    </div>
    <a className="text-xl">Daily Blogging App</a>
  </div>
 {user? (
 <div className="navbar-center hidden lg:flex items-center h-8">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="">Home</Link></li>
    <li><Link to="dashboard">Dashboard</Link></li>
    <li><Link to="profile">Profile</Link></li>
    <a className="btn" onClick={signout}>logout</a>
    </ul>
  </div>):(<div className="navbar-end">
    <a className="btn" onClick={()=>Navigate("/login")}>login</a>
  </div>)}
  
</div>
    </>
  )
}

export default Navbar