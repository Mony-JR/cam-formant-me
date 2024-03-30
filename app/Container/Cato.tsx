import React from 'react'
import { MdNotifications } from "react-icons/md";

const Cato = () => {
  return (
    <div className='flex justify-center mt-2'>
    <div className='Cato w-11/12 h-40 rounded-2xl flex-col justify-between flex  items-center'>
        <div className="location flex flex-col justify-between w-full h-full items-start">
              <select className='text-red-500 mt-2 ml-2'>
                <option selected>Pnhom phenh</option>
                <option>Siem Reap </option>
            </select>  
            <label >This job</label>
            <span className='absolute right-7
             mt-5 w-20 h-20 text-3xl text
              bg-red-500 rounded-full 
              flex justify-center
              items-center
              
              '><MdNotifications /></span>
        </div>
        <div>
            <input className='p-2 mb-3 rounded-2xl'/>
        </div>
      
    </div>
     </div>
  )
}

export default Cato
