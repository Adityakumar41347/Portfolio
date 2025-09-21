"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname  } from 'next/navigation'
import { useContext } from 'react';
import { ModeContext } from "@/components/mode";
const Navbar = () => {
  const path= usePathname()
  const { mode,setMode } = useContext(ModeContext);
  return (
    <div className={`flex md:pr-40 justify-end  text-black mx-auto w-full  pt-3 ${mode?"bg-zinc-900 text-gray-300": "bg-white"}`}> 
      <button onClick={() => setMode((mode + 1) % 2)}><img className={`w-10 border-2  p-2 rounded-full ${mode?"bg-gray-300  invert-100":"bg-gray-200 border-white text-white"}`} src="/dark.svg" alt="" /></button>
      
      <Link href={`${process.env.NEXT_PUBLIC_HOST}`}><div className={`{} md:m-4  my-4 mx-2 p-2 cursor-pointer font-semibold text-xl ${path=="/" ? 'text-red-600 hover: border-b-3 border-red-600 ':'hover:underline'}`}>Home</div></Link>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}/work`}><div className={`md:m-4  my-4 mx-2 p-2 cursor-pointer font-semibold text-xl ${path=="/work" ? 'text-red-600 border-b-3 border-red-600':'hover:underline'}`}>Work</div></Link>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}/skill`}><div className={`md:m-4  my-4 mx-2 p-2 cursor-pointer font-semibold text-xl ${path=="/skill" ? 'text-red-600 border-b-3 border-red-600':'hover:underline'}`}>Toolset</div></Link>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}/contact`}><div className={`md:m-4  my-4 mx-2 p-2 cursor-pointer font-semibold text-xl ${path=="/contact" ? 'text-red-600 border-b-3 border-red-600':'hover:underline'}`}>Contact</div></Link>
    </div>
  )
}

export default Navbar
