
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-blue-950"><>
  <footer className="bg-blue-950 text-white body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg> */}
<div>
<Image
              src={require("@/../public/assets/logo.png")}
              alt="Kyzee logo"
              className="w-44"
              width={500}
              height={500}
              />
              </div>
        </a>
        <p className="mt-2 text-sm text-white">
          Save Energy With Us
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center text-white">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 z-auto fixed top-0">
      <div className="inline-flex flex-row mx-auto py-4 px-5 flex-wrap sm:flex-row">
        <p className="text-gray-500 text-sm sm:text-left">
          © 2024 KyZee Solars —
          </p>
          </div>
          <div className="gap-7 hover:text-blue-800 text-3xl mx-auto py-4 px-5 text-gray-500 inline-flex sm:ml-auto sm:mt-0 text-right sm:justify-start ">
          <span>
          <Link
          target="blank"
          href={"https://www.youtube.com/@kyzeesolars"}
          >
         
         <BsYoutube/>
          </Link>
          </span>
          <div>
          <span>
          <Link
          target="blank"
          href={"https://www.facebook.com/kyzeesolars"}
         >
         
         <BsFacebook  />
          </Link>
          </span>
          </div>
          <div>
          <span >
          <Link
          target="blank"
          href={"https://www.instagram.com/kyzeesolars/"}
          >
         
         <BsInstagram />
          </Link>
          </span>
          </div>
          <div>
          <span >
          <Link
          target="blank"
          href={"https://www.linkedin.com/in/kyzeesolars/"}
          >
         
         <BsLinkedin/>
          </Link>
          </span>
          </div>
          </div>
      </div>
  </footer>
</>
</div>
  )
}

export default Footer