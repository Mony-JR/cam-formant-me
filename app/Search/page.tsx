"use client"
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import Popup from '../Container/Popup';


const page = () => {

  const [pop1, setPop] = useState(true);

  return (
    <div className='flex justify-center items-center h-[100px]'>
      <div>
        <Link href={"/"}><span className='text-3xl'><IoMdArrowBack /></span></Link>
      </div>
      <div className='flex
        gap-3
         justify-start items-center 
        w-full h-full'>

        <input autoFocus placeholder='hello' type='text' className='p-4 ml-4
           placeholder:text-gray-400
            rounded-2xl text-black input r
           elative w-11/12 outline-none pl-20 shadow-md' />
        <span onClick={() => setPop(!pop1)} className='text-xl p-2 
          absolute right-10'><TbMenuDeep /></span>
        <button className='text-xl 
          flex items-center justify-center
           left-10 btn-se p-4 Cato 
           rounded-full text-white pointer-events-none '><IoSearch /></button>
      </div>

      <Popup jj={setPop} up={pop1} />
    </div>
  )
}

export default page
