import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { removeFromPastes } from '../redux/pasteSlice';
import { toast, Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash, faCopy, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(pastes);

  const dispatch = useDispatch();


  const filteredData = pastes.filter(
    (paste) => paste.title?.
      toLowerCase().includes
      (searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  function handleShare(){
    const shareUrl = `${window.location.origin}/paste/${pastes._id}`;
navigator.clipboard.writeText(shareUrl);
toast.success("Shareable link copied to clipboard!");

  }
  return (
    
    <div className=' flex flex-col px-4 items-center jusify-center'>
      <Toaster position="top-center" reverseOrder={false} />
      <FontAwesomeIcon icon="fas fa-search" />
      <input
          className='p-2 rounded-2xl w-180 sm:min-w-[300px] md:min-w-[500px] h-[35px] mt-5 mb-10 bg-gray-100 border border-gray-400'

        // className='p-2 rounded-2xl min-w-[500px] h-[35px] mt-5  mb-10 bg-color-gray border border-gray-400 w-200  '
        type='Search'
        placeholder='Search Question Here.....'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
  <div className='border border-gray-400 p-5 pt-3 m-3 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] rounded-2xl mx-auto'>

{/* <div className='border border-gray-400 p-5  pt-3 m-3 w-200 rounded 2xl ml-52'> */}
  <div className='text-black text-left'>
  <h1>All Pastes</h1></div>
      <div className='flex flex-col gap-5'>{
        filteredData.length > 0 &&
        filteredData.map(
          (paste) => {
            return (
              <div key={paste._id} className='border  border-gray-400 mt-4'>
                <div  className='text-left text-xl font-bold text-black pt-3 pl-3'>
                  {paste.title}
                </div>
                <div className='text-left p-3 pt-1'>
                  {paste.content}
                </div>
                            <div className='flex flex-wrap justify-end text-[15px] h-auto gap-2 m-2 pr-2'>

                {/* <div className='flex flex-wrap  place-content-end text-[15px] h-10 m-1 pr-2 gap-1  '> */}
                  <button className=' flex items-center justify-center border border-gray  w-8 h-8 p-0 m-0' >
                    <a href={`/?pasteId=${paste?._id}`}>
                          <FontAwesomeIcon icon={faEdit} /></a>
                    </button>
                  <button className=' flex items-center justify-center border border-gray w-8 h-8 p-0 m-0'  >
                  <a href={`/pastes/${paste?._id}`}>
                        <FontAwesomeIcon icon={faEye} /></a>
                  
                  </button>
                  <button  className=' flex items-center justify-center border border-gray w-8 h-8 p-0 m-0' onClick={() => handleDelete(paste?._id)}>
                        <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className=' flex items-center justify-center border border-gray w-8 h-8 p-0 m-0'  onClick={() => {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copied to clipboard")
                  }}>
                      <FontAwesomeIcon icon={faCopy} />
                  </button>
                  {/* <button onClick={handleShare} >
                        <FontAwesomeIcon icon={faShareAlt} />
                  </button> */}
                </div>
                <div className=' flex justify-end items-center gap-2 text-right m-3 text-gray-600 text-sm'>
                    <FontAwesomeIcon icon={faCalendar} />
                  {new Date(paste.createdAt).toLocaleString('en-US',{
                  year:'numeric',
                  month:'long',
                  day:'numeric'
          })}

                </div>
              </div>
            )
          }
        )
      }
      </div>
      </div>
    </div>
  
  )
}
export default Pastes
