import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Navbar() {
    return (
    
        <div className="bg-white z-50 sticky top-0 flex justify-between flex-wrap font-bold py-3 px-4">
    
            <Image
              src={require("@/../public/assets/logo.png")}
              alt="Kyzee logo"
              className='w-52'
              width={500}
              height={500}
              />
        <div className= 'flex gap-7 font-bold  text-blue-950 text-s px-7 py-6 m-1' >
  <Link href="/about" className='hover:text-red-600'>About</Link>
  <Link href='/services' className='hover:text-red-600'>Services</Link>
  <Link href='/product' className='hover:text-red-600'>Product</Link>
  <Link href="#Contact" className='hover:text-red-600'>Contact</Link>
  <Link href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="darkblue">
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" className='hover:text-red-600'/>
</svg> </Link>
  </div>
  
  
</div>
    );
    }

    
export default Navbar// hifza 03406097991
