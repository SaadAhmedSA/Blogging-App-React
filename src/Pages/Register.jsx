import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  signUpUser, uploadImage } from '../Config/method'
import { useForm } from 'react-hook-form'

const Register = () => {
    const navigate = useNavigate()
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const Registeruser = async (data) => {
    
    console.log(data.email)
    console.log(data.password)
    console.log(data.Username)
    console.log(data.profileImage[0])

    const userProfileImageUrl = await uploadImage(data.profileImage[0], data.email)
    try {
        const userData = await signUpUser({
          email: data.email,
          password: data.password,
          fullName: data.Username,
          profileImage: userProfileImageUrl,
         
        })
        console.log(userData);
        // alert("User Register Successfully")

        navigate("/login")
  
      } catch (error) {
        alert(error);
  
      }
  
    }
    return (
        <div className='flex justify-center items-center h-[90vh] gap-7'>
            <div className='p-10 border bg-red-100 rounded-xl'>
           <h1 className='text-center mb-3 text-3xl font-bold'>Sign up</h1>
            <form onSubmit={handleSubmit(Registeruser)}>
            <label className="input input-bordered flex items-center gap-2 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
            
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
    </label>
    {errors.email && <span className='text-danger'>This field is required</span>}
    <label className="input input-bordered flex items-center gap-2 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input type="text" className="grow" placeholder="Username" {...register("Username", { required: true })} />
    </label>
    {errors.Username && <span className='text-danger'>This field is required</span>}

    <label className="input input-bordered flex items-center gap-2 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          fillRule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clipRule="evenodd" />
      </svg>
      <input type="password" className="grow" placeholder='Password' {...register("password", { required: true })}/>
    </label>
    {errors.password && <span className='text-danger'>This field is required</span>}

    <input
      type="file"
     
      className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-3" {...register("profileImage", { required: true })}/>
          {errors.profileImage && <span className='text-danger'>This field is required</span>}

    <div className='text-center'>
    <button className='btn btn-primary mb-3'>SignUp</button>
        <p><Link to="/login" className='underline'>Already have an Account</Link></p>
    
    </div>
            </form>
            </div>
        </div>
      )
    
  }
  

export default Register