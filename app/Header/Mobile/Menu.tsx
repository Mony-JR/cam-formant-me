"use client"
import React, { useEffect, useState } from 'react';
import "../Menu.css";
import { FaFile } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import Link from 'next/link';
import { LuChevronsUpDown } from "react-icons/lu";

const Menu: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [hover, setHover] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (!hover) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [show, hover]);

  return (
    <div className='fixed bottom-0 z-10 w-full h-20'>
      <span onClick={handleShow} className={` ${show ? 'block' : 'hidden'} z-10 absolute text-4xl top-[-35%] right-0`}>
        <LuChevronsUpDown />
      </span>
      <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`flex sm:flex-col justify-between items-center text-3xl 
        fixed h-20 w-full  
        bottom-0 pl-5 pr-5  
        pt-2 pb-2 menu z-10 bg-white ${show ? 'hidden' : 'flex'} `}
      >
        <Link href={'/home'}>
          <span className='text-black flex justify-center flex-col items-center'><GoHomeFill />
            <label className='text-xl'>Home</label>
          </span>
        </Link>

        <span className='text-black flex justify-center flex-col items-center'>
          <FaFile />
          <label className='text-xl'>Resume</label>
        </span>
        <span className='text-black flex justify-center flex-col items-center'>
          <FaClipboardCheck />
          <label className='text-xl'>Apply</label>
        </span>
        <Link href={'/Profile'}>
          <span className='text-black flex justify-center flex-col items-center'>
            <FaCircleUser />
            <label className='text-xl'>Profile</label>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
