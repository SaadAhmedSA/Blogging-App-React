import React, { useEffect, useState } from 'react'
import { auth, getData } from '../Config/method'
// import { onAuthStateChanged } from 'firebase/auth'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
    const [blogs, setBlogs] = useState([])
    const [data, setdata] = useState()
    const {id} = useParams()
    useEffect(() => {
  
     async function getdata(){
        const blogsData = await getData("blogs" , id)
        console.log(blogsData)
        setBlogs([...blogsData])
        const UserData = await getData("users" ,id)
        console.log(UserData)
        setdata(...UserData)
     }
     
     getdata()
        console.log(blogs);
        
      
  }, [])
  return (
    <div className=' mt-5 flex justify-center '>
   
    <div className='mx-5 '>
    {blogs.length>0?blogs.map((item,index)=>{
return<div key={index} className=" rounded my-3 overflow-hidden shadow-lg bg-white border border-gray-200">
  <div className="px-6 py-4">
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
  </div>
</div>
    }):    <h1 className='text-center text-4xl m-2 font-bold'>No Blogs found</h1>
}</div> 
{data?
     <div className="max-w-auto mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center p-3">
                <img 
                    src={data.profileImage} 
                    alt="Profile Picture" 
                    className="w-24 h-24 rounded-full border-2 border-gray-300" 
                />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">{data.fullName}</h2>
                    <p className="text-gray-600">Blogger | Traveler | Foodie</p>
                    <p className="text-gray-500 text-sm">{data.email}</p>
                </div>
            </div>
            <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800">About:</h3>
                <p className="text-gray-600 mt-2">
                    Passionate blogger sharing my adventures in travel and culinary experiences. 
                    Join me as I explore new destinations and try out delicious recipes!
                </p>
            </div>
            <div className="p-6 border-t">
                <h3 className="text-lg font-semibold text-gray-800">Social Links</h3>
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                    <a href="#" className="text-blue-500 hover:underline">Instagram</a>
                    <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                </div>
            </div>
        </div>:<h1 className='text-3xl text-center'>Profile not found</h1>}
</div>
  )
}

export default SingleUser