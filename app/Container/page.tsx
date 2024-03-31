"use client"

import React, { useState } from 'react'
import { MdNotifications } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import JobMain from './JobMain';


const Cato = () => {

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-2'>
      <div className='Cato w-11/12 h-40 rounded-2xl flex-col justify-between flex  items-center'>
        <div className='flex justify-between w-full h-full items-center'>
          <div className="location flex flex-col justify-between w-full h-full items-start">
            <select className='text-white mt-2 ml-2 bg-inherit outline-none '>
              <option selected>Pnhom phenh</option>
              <option>Siem Reap </option>
            </select>
            <label className='text-white pl-2'>This job</label>

          </div>
          <span className='
          mt-5 mr-3 w-20 h-14 text-3xl 
              bg-white rounded-full 
              flex justify-center
              items-center text-[red]
              
              '><MdNotifications /></span>

        </div>
        <div className='flex gap-3 justify-start items-center w-full h-full'>
          <input type='text' className='p-2 ml-9 
          rounded-2xl text-black
          input relative w-9/12 outline-none pl-14'
          />
          <span className='text-xl p-2 
          absolute right-20 Class
          Properties
          pointer-events-none '><TbMenuDeep /></span>

          <button className='text-xl flex 
          items-center justify-center
           left-14 btn-se p-2 Cato rounded-full '

          >
            <IoSearch /></button>
        </div>

      </div>

      <JobMain/>
    </div>
  )
}

export default Cato
