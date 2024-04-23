"use client"

import React, { useState } from "react";

interface pp{
  S1:(value:String)=>void
  S2:String
}

const Search:React.FC<pp>=({S1,S2})=> {

  const se=[
    {txt:'IT support'},
    {txt:'Developer'},
    {txt:'Information Technology'},
    {txt:'Front-end'},
    {txt:'Full stact Dev'}

  ]

  const [va,setva]=useState<string>('')

  return (

    <>
    <h1>Hello  {S1}</h1>
    <div className="flex flex-wrap justify-center items-start gap-3">
      
      {se.map((p)=>(
        <span className="p-2 bg-red-300 rounded-xl">{p.txt}</span>
      ))}
    </div>
    </>
  );
}
export default Search
