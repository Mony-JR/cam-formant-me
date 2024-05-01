import React from 'react'
import Image from 'next/image'


const page = () => {


  return (
    <div className='h-[100vh] w-full
    flex flex-col'>
      <div className=' w-full h-[20%] Cato '>
        
      </div>
      <div className=' absolute
       bottom-8 rounded-[40px] 
       w-full h-[80%] bg-white '>
        <div className='w-[50px] h-[50px] '>
          <Image 
          src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
          width={500}
          height={400}
          alt='hh'
          />
        </div>
      </div>
    </div>
  )
}

export default page
