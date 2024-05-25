'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import Image from 'next/image';

interface Data2 {
    id: number
    txt: string
    logo: string
    position: number
    time: JobTime
    salary: Salary
    date: string
    location: string
    like: boolean
}

interface JobTime {
    part: string
    full: string
}

interface Salary {
    min: number
    max: number
}

const JobMain: React.FC = () => {
    const [data, setData] = useState<Data2[]>([
        {
            id: 1,
            txt: 'Developer',
            logo: 'https://optimise2.assets-servd.host/dig-upsiide/production/images/starbsloh.png?w=735&h=400&q=100&fm=jpg&fit=crop&dm=1668098882&s=3ee470c8b1123213d7f7f147bc1126e4',
            position: 5,
            time: { part: "part time", full: "full time" },
            salary: { min: 200, max: 500 },
            date: '2023-05-25',
            location: 'Khan Camkarmon',
            like: false
        },
        {
            id: 2,
            txt: 'ABA Dev',
            logo: '',
            position: 10,
            time: { part: "part time", full: "full time" },
            salary: { min: 500, max: 1000 },
            date: '2023-05-25',
            location: 'Khan Camkarmon',
            like: false
        },
        {
            id: 3,
            txt: 'Flutter Developer',
            logo: '',
            position: 10,
            time: { part: "part time", full: "full time" },
            salary: { min: 500, max: 1000 },
            date: '2023-05-25',
            location: 'Khan Camkarmon',
            like: false
        },
    ]);

    const handleHeartClick = (id: number) => {
        setData(prevData =>
            prevData.map(job =>
                job.id === id ? { ...job, like: !job.like } : job
            )
        );
    }

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            
            <div className='flex justify-between w-full pl-4 pr-4'>
                <h3>Recommend</h3>
                <Link href="/Search"><span className='text-orange-400'>Searching more</span></Link>
            </div>
            <main className='flex flex-row gap-10 ip14:pl-7 ipse:pl-3 pr-5 justify-start w-full h-[300px] overflow-y-auto scroll-main'>
                {data.map((p) => (
                    <section key={p.id} className='w-[400px] flex justify-between flex-col items-center'>
                       
                        <div className='ipse:w-[350px] ip14:w-[400px] h-[250px] flex justify-between flex-col items-center bg-white drop-shadow-lg rounded-2xl pt-3'>

                            <div className='flex justify-between w-11/12 items-center'>
                                <h1>{p.txt}</h1>
                                <span onClick={() => handleHeartClick(p.id)} className='text-2xl z'>{p.like ? <IoMdHeart /> : <CiHeart />}</span>
                            </div>
                         <Link className='ipse:w-[350px] ip14:w-[400px] h-[250px] flex justify-between flex-col items-center pt-3' href={`${p.date}/${p.txt}`}>    
                            <div className='flex justify-between w-11/12 items-center'>
                                <div className='flex flex-col gap-7 w-full justify-between'>
                                    <div className='flex gap-8 w-full justify-start'>
                                        <span className='text-orange-500'>Remote</span>
                                        <span className='text-orange-500'>{p.time.full}</span>
                                        <span className='text-orange-500'>{p.time.part}</span>
                                    </div>
                                    <div className='flex gap-3'>
                                        <button className='bg-orange-200 p-1 rounded-xl w-5/12 text-orange-500'>Communication</button>
                                        <button className='bg-orange-200 p-1 rounded-xl w-5/12 text-orange-500'>Language</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full flex-col justify-between gap-5 items-center'>
                                <div className='flex justify-between w-10/12'>
                                    <span className='text-slate-400'>Position {p.position}</span>
                                    <h1 className='text-orange-500'>{p.salary.min}$ - {p.salary.max}$</h1>
                                </div>
                                <div className='flex justify-between w-10/12 mb-4'>
                                    <label className='flex items-center gap-3'>
                                        <FaBusinessTime />
                                        <span>{p.date}</span>
                                    </label>
                                    <label className='flex items-center gap-3'>
                                        <FaLocationDot />
                                        <span>{p.location}</span>
                                    </label>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                    </section>
                ))}
            </main>
            <div className='w-full h-3 flex justify-center gap-3'>
                <span className='pl-1 pr-2 bg-orange-500 rounded-full'></span>
                <span className='pl-1 pr-2 bg-orange-500 rounded-full'></span>
                <span className='pl-1 pr-2 bg-orange-500 rounded-full'></span>
            </div>
            <button className='p-3 text-white text-xl bg-orange-500 w-[90%] flex justify-center items-center gap-2 rounded-3xl'>
                Find Your Matching
                <span className='text-4xl text-white'><GrFormNextLink /></span>
            </button>
            
        </div>
    )
}

export default JobMain
