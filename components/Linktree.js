"use client"
import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { ModeContext } from '@/components/mode'
const Linktree = () => {
    const { mode } = useContext(ModeContext)
    return (
        <div className={`${mode ? "bg-zinc-900 text-gray-300" : 'bg-white'}`}>
            <div className={`container md:mx-auto md:p-8 p-2 rounded-3xl  md:w-[60%]  shadow-xl ${mode ? "bg-neutral-900  shadow-2xl" : 'bg-white'}`}>
                <h1 className='text-xl  font-bold'>Centralize Your Links with Theme Toggle</h1>
                <div className="flex gap-3 mb-6 py-1">
                    <Link target='blank' href={'https://github.com/Adityakumar41347/Linktree-clone'}><span className="bg-slate-950 rounded-full py-1 px-3 text-white" >Github</span></Link>
                    <span className="font-light">Tailwind, Next.js, React, Context API, HTML, CSS, JavaScript, Node.js.</span>
                </div>
                <p className='pr-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus eligendi nostrum totam voluptatum consequuntur unde. Quisquam expedita quo cumque?</p>
                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>Your Digital Identity, All in One Place</h1>
                    <img className='w-[94%] px-6' src="/Page-1.png" alt="" />
                    <p className='px-6'>Showcase your digital footprint with a clean, customizable profile. Share all your important links in one place—optimized for mobile, responsive across devices.</p>

                </div>
                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>Explore My World, One Link at a Time</h1>
                    <img className='w-[94%] px-6' src="/Page-2.png" alt="" />
                    <p className='px-6'>Browse a curated list of my favorite tools, projects, and platforms. Each link is styled for clarity and built with responsive design for seamless access across devices.</p>

                </div>
                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>All My Links, One Simple View</h1>
                    <img className='w-[94%] px-6' src="/Page-3.png" alt="" />
                    <p className='px-6'>A simple, scrollable list of my key links—projects, profiles, and platforms I use or love. Designed for clarity, mobile-first, and built with responsive layout for easy access.</p>

                </div>
                <p>A minimalist Linktree clone built with Next.js, Tailwind CSS, and MongoDB. It features a responsive layout, customizable profile, and dynamic link management powered by a backend database. Designed for clarity and mobile-first access, this project centralizes your digital presence with modular components and clean UI—perfect for sharing links effortlessly.


                </p>
            </div>

        </div>
    )
}

export default Linktree
