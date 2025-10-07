"use client"
import React, { useContext } from 'react';
import { ModeContext } from '@/components/mode'
import Link from 'next/link'

const Footer = () => {
  const {mode}=useContext(ModeContext)
  return (
    <div className={`${mode?"bg-zinc-900 text-white": 'bg-white'}`}>   
       <div className='flex flex-col justify-center items-center w-full pt-10  '>
      <div className='flex gap-10'>
         <Link target='blank' href={'https://www.instagram.com/itzaditya6207/'}><img className='w-10 rounded-3xl' src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png" alt="" /></Link>
         <Link target='blank'  href={'https://www.linkedin.com/in/aditya-kumar-348927323/'}><img className='w-10 rounded-3xl' src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcSIaMRGRXIcw7PLuQwrNT3owQpigxHG_LJNWQ&s" alt="" /></Link>
         <Link target='blank' href={'https://github.com/Adityakumar41347'}><img className='w-10 rounded-3xl' src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcSMzEkaAN0BJ2o3ri2IsQRKXVk6ejQQqz0GUg&s" alt="" /></Link>
      </div>
      <div>
           Copyright ©2020 All rights reserved 
      </div>
    </div>
    </div>

  )
}

export default Footer
