import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, getData } from '../Config/method'

const Profile = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {

    onAuthStateChanged(auth , async(user)=>{
      if(user){
        // console.log(user.uid)
        const blogsData = await getData("users" ,user.uid)
        console.log(blogsData)
        setBlogs(...blogsData)
      }
    })
}, [])
console.log(blogs);

  return (
    <>
    
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className=" space-x-4">
        <img
          className="w-100 h-100 rounded border-2 border-gray-200"
          src={blogs.profileImage}
          alt="Profile"
        />
        <div className='m-5'>
          <h2 className="text-xl font-bold  my-3">Full name:{blogs.fullName}</h2>
          <p className="text-gray-600 my-3">Email:{blogs.email}</p>
          <p className="text-gray-600 my-3">Id:{blogs.uid}</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default Profile