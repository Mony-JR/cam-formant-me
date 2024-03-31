import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const JobMain = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-5 '>
            <div className='flex justify-between w-full pl-4 pr-4'>
                <h3>Recomment</h3>
                <span className='text-orange-400'>Searching more</span>
            </div>
            <div className='w-11/12 h-[250px] 
            flex justify-between flex-col items-center
             bg-white drop-shadow-lg
             rounded-2xl pt-3 '>

                <div className='flex justify-between w-11/12 items-center'>
                    <h1>Logo</h1>
                    <h1>Insurace Advisor </h1>
                    <span className='text-2xl'><CiHeart /></span>
                </div>
                <div className='flex justify-between w-11/12 items-center'>
                    <div className='flex flex-col gap-7 w-full justify-between '>
                        <div className='flex gap-8 w-full justify-start'>
                            <span className='text-orange-500'>Remote</span>
                            <span className='text-orange-500'>Full-Time</span>
                            <span className='text-orange-500'>Part-time </span>
                        </div>

                        <div className='flex gap-3'>
                            <button className='bg-orange-200 p-1
                             rounded-xl w-5/12 
                             text-orange-500'>Commuication</button>
                            <button className='bg-orange-200 p-1
                             rounded-xl w-5/12
                             text-orange-500
                             '>Language</button>
                        </div>
                    </div>

                </div>
                <div className='flex  w-full flex-col justify-between gap-5 items-center'>
                    <div className='flex justify-between w-10/12'>
                        <span className=' text-slate-400 '>5 Job Opening </span>
                        <h1 className='text-orange-500'>200$-800$</h1>
                    </div>
                    <div className='flex justify-between w-10/12 mb-4'>
                        <label className='flex items-center gap-3'>
                            <FaBusinessTime />
                            <span>28 Sep 2023</span>
                        </label>
                        <label className='flex items-center gap-3'>
                            <FaLocationDot />
                            <span>Khan Camkarmon </span>
                        </label>
                    </div>


                </div>

            </div>
            <div className='w-full h-3 flex justify-center gap-3'>
                <span className='pl-1 pr-2 bg-orange-500 rounded-full '></span>
                <span className='pl-1 pr-2 bg-orange-500 rounded-full '></span>
                <span className='pl-1 pr-2 bg-orange-500 rounded-full '></span>
            </div>

        </div>
    )
}

export default JobMain
