"use client"
import React, { useContext } from 'react';
import Link from 'next/link';
import { ModeContext } from '@/components/mode'

const Skill = () => {
    const { mode } = useContext(ModeContext)
    return (
        <div className={  ` md:h-[77vh] ${mode ? "bg-zinc-900 text-gray-300" : 'bg-white'}`}>
            <div className={`${mode ? "bg-neutral-900  shadow-2xl" : 'bg-white'} rounded-3xl h-[77vh] container md:mx-auto p-8  md:w-[60%]  shadow-xl`}>
                <h1 className='text-2xl mb-10 font-extrabold'>Specialization</h1>
                <div className='m-3 '>
                    <Link href={"/web-dev"}><h1 className=" text-xl font-bold hover:underline">
                        Full Stack Web Development
                    </h1></Link>
                    <div>
                        <p className="my-4 mb-5 flex gap-1">
                            <span>12 Feb 2025</span>
                            <span>|</span>
                            <span>Next.js, Node.js, MongoDB, Tailwind CSS,React</span>
                        </p>
                    </div>
                    <p>
                        I build scalable web apps with clean UI and robust backend logic. From RESTful APIs to dynamic dashboards, I focus on modular architecture, performance, and production-grade reliability.
                    </p>
                </div>
                <hr className="w-[77%] border-t border-zinc-300 my-4 mr-auto" />
                <div className='m-3 '>
                    <Link href={"/dsa"}><h1 className="text-xl hover:underline font-bold">
                        Data Structures & Algorithms
                    </h1></Link>
                    <div>
                        <p className="my-4 mb-5 flex gap-4 flex-wrap">
                            <span>19 Sep 2025</span>
                            <span>|</span>
                            <span>Recursion, Trees, Hashing, Arrays</span>
                        </p>
                    </div>
                    <p>
                        I approach problem-solving with precision and strategy—breaking down complex challenges into modular, optimized solutions. My strength lies in debugging recursive flows, designing efficient tree traversals, and leveraging hashing for performance-critical tasks.
                    </p>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Skill
