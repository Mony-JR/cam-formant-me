"use client"
import React, { useState } from 'react'
import "../Menu.css"
import { FaFile } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import Link from 'next/link';




const Menu:React.FC = () => {
  
 
  return (
    <div
     className='flex sm:flex-col justify-between items-center text-3xl 
     fixed h-20 w-full  
     bottom-0 pl-5 pr-5  
     pt-2 pb-2 menu z-10 bg-white '
    >
    <Link href={'/home'}>
      <span className='text-black flex justify-center flex-col items-center'><GoHomeFill />
      <label className='text-xl'>Home</label>
       </span></Link>
      
      <span className='text-black flex justify-center flex-col items-center'>
        <FaFile />
        <label className='text-xl'>Resume</label>
        </span>
      <span className='text-black flex justify-center flex-col items-center'>
        <FaClipboardCheck />
        <label className='text-xl'>Apply</label>
      </span>
      <Link href={'/Profile'} ><span className='text-black flex justify-center flex-col items-center'>
        <FaCircleUser />
        <label className='text-xl'>Profile</label>
        </span>
        </Link>
    </div>
  )
}

export default Menu
