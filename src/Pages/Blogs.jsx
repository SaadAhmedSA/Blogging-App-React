import React, { useEffect, useState } from 'react'
import { getAllData } from '../Config/method';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blog,setblog]= useState([])

  const Navigate = useNavigate()
  function show(id){
   Navigate(`singleuser/${id}`)
  // console.log(id);
  

  }

  useEffect(()=>{
      
  async function get(){
  const getdata = await getAllData("blogs")
  console.log(getdata);
  // blog.push(getdata)
  // setblog([...blog,getdata])
  setblog(prevBlog => [...prevBlog, ...getdata]);
  }
  get()

  },[])
   console.log(blog);
   
  return (
   <>
   <div className='m-5 text-2xl font-bold'>
   <h1>Hello Readers! Have a Nice Day</h1>
   </div>
   <div>
    {blog.length>0 ? blog.map((item,index)=>{
      return <div key={index} className= " rounded my-3 overflow-hidden shadow-lg bg-white border border-gray-200">
      <div className="px-6 py-4">
      <img
          className="w-30 h-20 mb-5 rounded border-2 border-gray-200"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile"
        />
        <h2 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h2>
        <p className="text-gray-600 text-base">
          {item.description}
        </p>
        <h5 className="font-bold text-l mt-2 text-gray-800">
         Auther name: {item.name}
        </h5>
        
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">#blogs</span>
        <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">#trending blog</span>
        <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-600 mr-2 mb-2">#latest blog</span>
      <p className="text-primary  underline font-bold cursor-pointer" onClick={()=>show(item.uid)}>See All of this User</p>
      </div>
    
    </div>

      
    }):<p className='text-center'>loading..</p>}
   </div>
   </>
  )
}

export default Blogs