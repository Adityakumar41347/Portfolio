"use client"
import React, { useContext } from 'react';
import { ModeContext } from '@/components/mode'
import Link from 'next/link';

const Work = () => {
    const {mode}=useContext(ModeContext)
    return (
        <div className={`md:h-[77vh]  ${mode?"bg-zinc-900 text-white": 'bg-white'} `}>
            <div className={`${mode ? "bg-neutral-900  shadow-2xl" : 'bg-white'} container md:mx-auto p-8   md:w-[60%]  shadow-xl`}>
                <h1 className='text-2xl mb-10 font-extrabold'>Work</h1>
                <h2 className='m-3'>Follow link- <Link target='blank' href={'https://github.com/Adityakumar41347'}><span className='text-blue-500'>Github</span></Link></h2>
                <Link href={"/work/linktree"}> <div className=" flex flex-col md:flex-row   gap-3 m-3">
                    <img className="w-65 h-45 rounded-2xl" src="/Page-1.png" alt="not found " />
                    <div className="">
                       <h1 className="font-bold hover:underline text-2xl">Linktree</h1>
                        <div className="flex gap-3 py-4">
                            <span className="bg-slate-950 rounded-full py-1 px-3 text-white" >Github</span>
                            <span className="font-light">Web dev</span>
                        </div>
                        <p>A sleek Linktree clone that centralizes your online presence—built with modular components, responsive design, and theme toggling. Users can share multiple links through a customizable, dark/light mode-enabled profile hub.</p>
                    </div>
                </div></Link>
                <hr className="hidden md:block w-[77%] border-t border-zinc-300 my-4 mx-auto" />
                <Link href={"/work/patreon"}><div className=" flex flex-col md:flex-row  gap-3 m-3">
                    <img className="w-65 h-45 rounded-2xl" src="/pet-1.png" alt="not found " />
                    <div className=" ">
                        <h1 className="font-bold hover:underline text-2xl">Patreon-Clone</h1>
                        <div className="flex gap-3 py-4">
                            
                        <span className="bg-slate-950 rounded-full py-1 px-3 text-white">Github</span>
                    
                            <span className="font-light">Web dev</span>
                        </div>
                        <p>Petreton is a Patreon-inspired platform for creators to manage subscriptions, showcase content, and receive payments with Razorpay integration.</p>
                    </div>
                </div></Link>
                

            </div>
        </div>
    )
}

export default Work
