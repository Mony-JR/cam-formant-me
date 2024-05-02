"use client"

import React, { useState } from "react";


interface pp{
  S1:(value:string)=>void
  S2:string
}

  interface Show{
    txt:string,
    po?:string
  }

const Search:React.FC<pp>=({S1,S2})=> {

  const se:Show[]=[
    {
      txt:'IT support',
      po:'Staff'
    },
    {
      txt:'IT support',
      po:'intern ship '
    },
    {txt:'IT'},
    {txt:'Developer'},
    {txt:'Information Technology'},
    {txt:'Front-end'},
    {txt:'Full stact Dev'}

  ]

  const [va,setva]=useState<string>('')

  const fil_search=se.filter((ss)=>ss.txt.toUpperCase().includes(S1.toUpperCase()))


  return (

    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center items-start gap-3">
      {fil_search.map((p,index)=>(
        <span key={index} className="p-2 bg-red-300 rounded-xl">{p.txt}</span>
      ))}
      </div>
      <div className=" flex flex-col gap-1 justify-center items-center ">
        {
          fil_search.map((p,index)=>(
            <div key={index} className="w-[95%] h-[300px] bg-red-500 ">
              
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default Search
