"use client"
export default function Search() {

  const se=[
    {txt:'IT support'},
    {txt:'Developer'},
    {txt:'Information Technology'},
    {txt:'Front-end'},
    {txt:'Full stact Dev'}

  ]

  return (

    <div className="flex flex-wrap justify-center items-start gap-3">
      {se.map((p)=>(
        <span className="p-2 bg-red-300 rounded-xl">{p.txt}</span>
      ))}
    </div>
  );
}

