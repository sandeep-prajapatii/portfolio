"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import "../globals.css";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const liCSS =
    "menu-hover px-2 border-r-2 border-white hover:italic hover:rounded-lg ease-in-out duration-300 translate-x-0 hover:translate-x-1";
  const sidenav =
    "sidenav-li text-center py-6 mx-4 border-b-2 hover:italic hover:rounded-xl  ";
    
  const toggleMenu = () => {
    setShow(!show);
    console.log("clicked");
  };

  return (
    <>
      <div className="navbar-blur text-white fixed w-full flex justify-around items-center z-10">
        <Link href="/" className="text-3xl py-2 font-semibold cursor-pointer no-underline">Sandeep.</Link>

        <div className="md:flex hidden items-center text-lg">
          <a  className={liCSS} href="#about">ABOUT</a>
          <a  className={liCSS} href="#project">PROJECT</a>
          <a  className={liCSS} href="#contact">CONTACT</a>
          <a  className={`${liCSS} border-none`} href='resume.pdf' download={"SandeepsResume.pdf"}>RESUME</a>
        </div>

        <GiHamburgerMenu
          onClick={toggleMenu}
          className="block md:hidden text-2xl "
        />
      </div>

      {show && (
        <div className=" h-screen w-3/5 fixed right-0 top-0 md:hidden rounded-xl z-[20] animation">
          <div className="navbar-blur border-s-2 rounded-xl h-screen w-3/5 fixed right-0 top-0 -z-[1]"></div>
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-white text-3xl  m-4"
          />

          <div className="flex flex-col h-full  text-lg">
            <a className={sidenav} href="#about" >ABOUT</a>
            <a className={sidenav} href="#project">PROJECT</a>
            <a className={sidenav} href="#contact">CONTACT</a>
            <a className={`${sidenav} border-none`} href='resume.pdf' download={"SandeepsResume.pdf"}>Resume</a>
          </div>
        </div>
      )}
    </>
  );
}
