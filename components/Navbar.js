"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar = () => {
  const router=useRouter()
  const path=router.pathname
  return (
    <div className='flex justify-end  text-black mx-auto w-[80%] container mt-3'>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}`}><div className='p-4 cursor-pointer font-medium text-xl '>Home</div></Link>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}/work`}><div className='p-4 cursor-pointer font-medium text-xl '>Work</div></Link>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}/blog`}><div className='p-4 cursor-pointer font-semibold text-xl'>Blog</div></Link>
      <Link href={`${process.env.NEXT_PUBLIC_HOST}/contack`}><div className='p-4 cursor-pointer font-semibold text-xl'>Contact</div></Link>
    </div>
  )
}

export default Navbar
