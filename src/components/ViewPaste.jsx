import React from 'react'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux';
import { addToPaste, updateToPastes } from '../redux/pasteSlice.js';
import { useParams } from 'react-router-dom';


const ViewPaste = () => {
  const{id}=useParams();
  const allPastes=useSelector((state)=>state.paste.pastes);
  const paste=allPastes.filter((p)=>p._id===id)[0];
  console.log("final paste:",paste)
  return (
      <div >
    <div className="flex flex-row gap-7 place-content-between justify-center items-center">
      <input
      className='rounded 2xl h-[30px] border w-197 mt-6 '
      type="text" placeholder ="Enter title here"
      value={paste.title}
      disabled
      onChange={(e)=>setTitle(e.target.value)} />
      {/* <button  className ="h-[40px] mt-2" onClick={createPaste} >
      {pasteId ? "Update My Paste" : "Create My Paste"}  
      </button>*/}
      </div> 
      <div className='mt-9 text-white items-center' >
        <textarea 
        className="rounded-2xl  min-w-[800px] bg-black p-4 text-l "
        value={paste.content}
        placeholder=" enter content here"
        disabled
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
        />
      </div>
    
    </div>
  )
}

export default ViewPaste
