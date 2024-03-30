import React from 'react'
import { IoMdHome } from "react-icons/io";
import "../Menu.css"
import { FaFile } from "react-icons/fa";

import { FaCircleUser } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";


const Menu = () => {

 
  return (
    <div className='flex sm:flex-col justify-between 
    items-center text-3xl 
    fixed h-20 w-full 
    bottom-0 pl-5 pr-5 
    pt-2 pb-2 menu '
    
    >
      <span className='text-slate-950'><IoMdHome /></span>
      <span className='text-slate-950'><FaFile /></span>
      <span className='text-slate-950'><FaClipboardCheck /></span>
      <span className='text-slate-950'><FaCircleUser /></span>
    </div>
  )
}

export default Menu
