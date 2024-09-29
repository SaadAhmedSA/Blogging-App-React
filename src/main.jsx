import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './Pages/Blogs.jsx'
import Protected from './component/Protected.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Profile from './Pages/Profile.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import SingleUser from './Pages/SingleUser.jsx'

const router = createBrowserRouter([{
  path :"/",
  element:<App/>,
  children:[{
    path:"",
    element:<Blogs/>
  },
  {
    path:"dashboard",
    element:<Protected component={<Dashboard/>}/>
  },
  {
    path:"profile",
    element:<Protected component={<Profile/>}/>
  },
  {
    path:"register",
    element:<Register/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"singleuser/:id",
    element:<Protected component={<SingleUser/>}/>
  },
]
}])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
  

)
