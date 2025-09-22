"use client"
import React, { useContext } from 'react';
import { ModeContext } from '@/components/mode'
import Link from 'next/link';
const Work = () => {
    const {mode}=useContext(ModeContext)
    return (
        <div className={`h-[77vh] ${mode?"bg-zinc-900 text-white": 'bg-white'}`}>
            <div className={`${mode ? "bg-neutral-900  shadow-2xl" : 'bg-white'} container md:mx-auto p-8   md:w-[60%]  shadow-xl`}>
                <h1 className='text-2xl mb-10 font-extrabold'>Work</h1>
                <div className=" flex gap-3 m-3">
                    <img className="w-65 h-45 rounded-2xl" src="/Page-1.png" alt="not found " />
                    <div className="">
                       <Link href={"/work/linktree"}> <h1 className="font-bold hover:underline text-2xl">Linktree</h1></Link>
                        <div className="flex gap-3 py-4">
                            <Link target='blank' href={'https://github.com/Adityakumar41347/Linktree-clone'}><span className="bg-slate-950 rounded-full py-1 px-3 text-white" >Github</span></Link>
                            <span className="font-light">Web dev</span>
                        </div>
                        <p>A sleek Linktree clone that centralizes your online presence—built with modular components, responsive design, and theme toggling. Users can share multiple links through a customizable, dark/light mode-enabled profile hub.</p>
                    </div>
                </div>
                <hr className="hidden md:block w-[77%] border-t border-zinc-300 my-4 mx-auto" />
                <div className=" flex gap-3 m-3">
                    <img className="w-65 h-45 rounded-2xl" src="/pet-1.png" alt="not found " />
                    <div className=" ">
                        <Link href={"/work/patreon"}><h1 className="font-bold hover:underline text-2xl">Patreon-Clone</h1></Link>
                        <div className="flex gap-3 py-4">
                            <Link target='blank' href={'https://github.com/Adityakumar41347/Patreon-Clone-'}>
                        <span className="bg-slate-950 rounded-full py-1 px-3 text-white">Github</span>
                    </Link>
                            <span className="font-light">Web dev</span>
                        </div>
                        <p>Petreton is a Patreon-inspired platform for creators to manage subscriptions, showcase content, and receive payments with Razorpay integration.</p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Work
