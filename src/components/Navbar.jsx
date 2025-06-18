import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className=" w-full px-0 place-content-evenly gap-4 flex flex-row bg-slate-800 text-[20px] p-2 justify-center items-center mt-0">
     <NavLink to="/" className="text-white px-4">
        Home
      </NavLink> 
      <NavLink to="/pastes" className="text-white px-4">
        Paste
      </NavLink>
      </div>
    
    
  )
}

export default Navbar
