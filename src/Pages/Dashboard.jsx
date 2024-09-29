import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { auth, getData, sendData } from '../Config/method'

const Dashboard = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {

    onAuthStateChanged(auth , async(user)=>{
      if(user){
        // console.log(user.uid)
        const blogsData = await getData("blogs" , user.uid)
        console.log(blogsData)
        setBlogs([...blogsData])
      }
    })
}, [])
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  

  const Addblog = async(data)=>{
     console.log(data.title);
     console.log(data.description);
     console.log(data.name);

     try {
      const adddata = await sendData({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid,
        name : data.name

      }, 'blogs')
      blogs.push({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid,
        name : data.name
      })
      setBlogs([...blogs])
      console.log(adddata);
      // data.title=""
      reset()

    } catch (error) {
      alert(error)
    }
     
  }
  return (
    <>
    <h1 className='text-center text-4xl m-2 font-bold'>Add Blogs</h1>
      <div className='flex justify-center my-5 '>
      <div className='w-[80vh]'>
        <form onSubmit={handleSubmit(Addblog)}  >
        <label className="input input-bordered flex items-center gap-2 mb-3">
 
  <input type="text" className="grow" placeholder="Blog title" {...register("title", { required: true })}/>
  {errors.title && <span className='text-danger'>This field is required</span>}

</label>
        <textarea
        
             placeholder="Blog Description"
             className="textarea textarea-bordered textarea-lg w-full "
             {...register("description", { required: true })}></textarea> 
              {errors.description && <span className='text-danger'>This field is required</span>}
              <label className="input input-bordered flex items-center gap-2 mb-3">
 
 <input type="text" className="grow" placeholder="Auther name" {...register("name", { required: true })}/>
 {errors.name && <span className='text-danger'>This field is required</span>}

</label>
 
        <button type='submit' className='btn btn-primary'>Publish</button>
        </form>
      </div>
    </div>


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
    </>

  )
}

export default Dashboard