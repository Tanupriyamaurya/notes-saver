import { useState } from 'react'
import './App.css'
import {createBrowserRouter} from 'react-router-dom'
import Navbar from  './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Pastes from './components/Pastes.jsx'
import ViewPaste from './components/ViewPaste.jsx'
import { RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([{
  path:"/",
  element:
<div>
<div ><Navbar/></div>
<Home/>
  </div>
},{
path:"/pastes",
  element:
  <div>
    <Pastes/>
  </div>
},
{
path:"/pastes/:id",
  element:
  <div>
    <Navbar/>
    <ViewPaste/>

  </div>
},
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >
      <RouterProvider router={router}/>
    </div>
        
        
    </>
  )
}

export default App
