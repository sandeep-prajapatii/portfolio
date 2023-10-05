"use client"
import React, {useState, useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import "../globals.css"


export default function Navbar() {
  const [show, setShow] = useState(false);
  const liCSS = "px-2 border-r-2 border-white hover:italic hover:rounded-lg ease-in-out duration-300 translate-x-0 hover:translate-x-1"
  const sidenav = "text-center py-6 mx-4 border-b-2 hover:italic hover:rounded-xl ease-in-out duration-300 "
  const toggleMenu = () => {
    setShow(!show);
    console.log("clicked")
  }

  return (
    <div className='glass text-white fixed w-full flex justify-around items-center z-10'>
        <p className='text-3xl py-2 font-semibold'>Sandeep.</p>

        <ul className='md:flex hidden items-center text-lg'>
          <li  className={liCSS}>ABOUT</li>
          <li className={liCSS}>PROJECTS</li>
          <li className={liCSS}>CONTACT</li>
          <li className={`${liCSS} border-none`}>RESUME</li>
        </ul>

        {/* {!show &&
        } */}
        <GiHamburgerMenu onClick={toggleMenu} className='block md:hidden text-2xl'/>

        {show &&
            <div  className='border-s-2 border-white h-screen w-3/5 fixed right-0 top-0 md:hidden rounded-xl z-[20]'>
              <div className='glasstwo rounded-xl h-screen w-3/5 fixed right-0 top-0 -z-[1]'></div>
              <AiOutlineClose onClick={toggleMenu} className='text-white text-3xl  m-4' />

              <ul className='flex flex-col h-full  text-lg'>
                <li  className={sidenav}>ABOUT</li>
                <li className={sidenav}>PROJECTS</li>
                <li className={sidenav}>CONTACT</li>
                <li className={`${sidenav} border-none`}>RESUME</li>
              </ul>
            </div>
        } 
    </div>
  )
}