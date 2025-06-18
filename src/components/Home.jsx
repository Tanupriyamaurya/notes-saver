

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToPaste, updateToPastes } from '../redux/pasteSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';


const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const allPastes = useSelector((state) => state.paste.pastes);
  const [serachParams, setSearchParams] = useSearchParams();
  const pasteId = serachParams.get("pasteId");
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }

  }, [pasteId]);

const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success('Copied to clipboard!');
  };

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }




    if (pasteId) {
      dispatch(updateToPastes(paste));
    }
    else {

      dispatch(addToPaste(paste));
    }
    setTitle('');
    setValue('');
    setSearchParams({});
  }
//   return (
//   <div  className='justify-start m-0 p-0'>
//     <div className=' flex flex-col justify-center items-center  m-0 p-0"'>
//       {/* Title input + button */}
//       <div className="flex flex-row gap-7 place-content-between justify-center ml-46 mt-0 ">
//         <input
//           className= " flex flex-col p-3 rounded-2xl  h-[38px] bg-white border-2 border-blue-900 w-212 text-black items-center justify-center mt-18" 
//           type="text"
//           placeholder="Enter title here"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <button
//           className="h-[40px]  bg-blue-900 text-white px-4 rounded-lg mt-18"
//           onClick={createPaste}
//         >
//           {pasteId ? "Update My Paste" : "Create My Paste"}
//         </button>
//       </div>
// <div className='flex flex-col  items-center justify-center pt-5'>
//       {/* Main container */}
//       <div className="relative mt-4 w-[800px] border-2 border-black rounded-xl bg-white overflow-hidden">

        
//         {/* Top bar with dots + copy icon + border */}
//         <div className="flex justify-between items-center px-3 py-2 border-b-2 border-black
//          hover:border-blue-500 focus:border-blue-800 transition duration-200 ">

//           {/* Three dots */}
//           <div className="flex space-x-2">
//             <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//             <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
//             <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//           </div>

//           {/* Copy Icon */}
//           <FontAwesomeIcon
//             icon={faCopy}
//             className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black"
//             onClick={handleCopy}
//           />
//         </div>

//         {/* Textarea */}
//         <textarea
//           className="w-full bg-white text-black px-4 pb-4 pt-4 outline-none resize-none
//            hover:border-blue-500 focus:border-blue-500 transition duration-200"
//           value={value}
//           placeholder="Write Your Content Here....."
//           onChange={(e) => setValue(e.target.value)}
//           rows={20}
//         />
//       </div>
//     </div>
//   </div>
// </div>
// )
// }
// export default Home 
   


return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start m-0 p-0">
    
    {/* Title input + button */}
    <div className="w-full max-w-screen-lg px-4 mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <input
        className="  ml-30  p-3 rounded-2xl bg-white border-2 border-blue-900 text-black w-213"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="h-[45px] bg-blue-900 text-white p-0 rounded-lg w-48"
        onClick={createPaste}
      >
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>
    </div>

    {/* Main container */}
    <div className="w-full max-w-[800px] mt-6 px-4">
      <div className="relative border-2 border-black rounded-xl bg-white overflow-hidden">
        
        {/* Top bar with dots + copy icon */}
        <div className="flex justify-between items-center px-3 py-2 border-b-2 border-black hover:border-blue-500 transition duration-200">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          <FontAwesomeIcon
            icon={faCopy}
            className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black"
            onClick={handleCopy}
          />
        </div>

        {/* Textarea */}
        <textarea
          className="w-full bg-white text-black px-4 pt-4 pb-4 outline-none resize-none hover:border-blue-500 focus:border-blue-500 transition duration-200"
          value={value}
          placeholder="Write Your Content Here....."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  </div>
)}
export default Home 

