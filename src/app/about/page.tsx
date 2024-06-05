// components/About.js
import React from 'react';
import Image from "next/image"

const About = () => {
  return (
    <section className="py-20 bg-blue-950">
      <div className="container mx-auto px-6 flex flex-wrap">
        <div className="w-full lg:w-1/3 px-2 my-4 flex justify-center">
          <Image 
            src={require("@/../public/assets/about-image.jpg")}
            alt="About Us" 
            className="rounded-lg shadow-lg"
            width={700}
            height={700}
          />
        </div>
        <div className="w-full lg:w-2/3 px-4">
          <div className="flex flex-col justify-center items-start h-full border-l-4 border-orange-600 pl-6">
            <div className="text-center text-white lg:text-left mb-12">
              <h1 className="text-4xl font-bold mb-4 flex flex-col justify-center">
              About KyZee Solars
               </h1>
               <div className="mb-5 w-[350px] h-[3px] bg-orange-600">
              </div>
              <p className="text-lg text-white">
          
Founded in 2016 by Engr. Talha Tahir Khanzada, KyZee Solars (Pvt) Ltd is committed to revolutionizing the energy landscape with innovative solar solutions. Our journey from a startup to a trusted industry leader is fueled by a passion for renewable energy and a dedication to customer satisfaction.
              </p>
            </div>
            <div className="mb-8 text-white">
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-white">To provide exceptional value through high-quality products and services.</p>
            </div>
            <div className="text-white mb-8">
              <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
              <p className="text-white">Integrity, Excellence, and Innovation in everything we do.</p>
            </div>
            <div className="text-white mb-8">
              <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
              <p className="text-white">To be a global leader in our industry and a trusted partner for our customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

