"use client";
import react from 'react'
import Image from 'next/image'
import Link from "next/link"
import Typewriter from 'typewriter-effect';



export default function Home() {
  return (
<div className="relative h-screen w-full">
      <div className="absolute inset-0">
      <Image 
src={require("@/../public/assets/web-img.jpg")} 
alt="Background Image" 
layout="fill" 
objectFit="cover" 
quality={100}
/>

      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold"> Welcome to 
          <br className="hidden lg:inline-block "/>
      <Typewriter
      options={{
        strings: ["KyZee Solars (Pvt) Ltd",
        "Your Energy Partner",
        "Here To Serve",
        "Battery and Solars"],
  autoStart: true,
  loop: true,
    }}
    />
    </h1>

        <p className="mt-4 text-lg md:text-2xl">
Your Smart Energy Partner for a Sustainable Tomorrow

At KyZee Solars, we're not just another solar company – we're your dedicated partner in navigating the transition to clean, renewable energy. With a commitment to innovation, reliability, and customer satisfaction, we're here to empower you to harness the power of the sun and build a brighter, more sustainable future.
</p>
        <button className="mt-8 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Get Started</button>
      </div>
    </div>
)
};