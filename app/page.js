"use client"
import Image from "next/image";
import { useState, } from "react";
import { useContext } from 'react';
import { ModeContext } from "@/components/mode";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CustomLink from "@/components/customlink";
export default function Home() {
  const { mode } = useContext(ModeContext);
  return (

    <div className={`${mode?'bg-zinc-900 text-gray-300':'bg-white'}`}>

      <div className="first   mx-auto container w-full md:w-[80%]  flex p-2   flex-col  md:pt-4  ">
        <div className=" flex w-full items-center">
          <div className=" w-[70%] flex flex-col  md:px-30">

            <h1 className="font-bold text-3xl">Hey, I am Aditya</h1>
            <h1 className="font-bold text-3xl">Creative Technologist</h1>
            <p className=" mt-3 h-[120px] overflow-y-scroll no-scrollbar">I’m Aditya—a creative technologist who thrives at the intersection of design, code, and systems thinking. I build intuitive, production-ready web experiences from scratch, blending aesthetic precision with backend logic. Whether it’s architecting dashboards, optimizing workflows, or experimenting with new frameworks, I approach each challenge with curiosity, clarity, and a touch of rebellion against the ordinary. My work isn’t just about pixels or performance—it’s about crafting tools that feel alive, purposeful, and scalable.</p>

          </div>
          <img src="/profile.jpg" alt="image not found" className="md:w-60 md:h-60 w-30 h-30 object-cover rounded-full" />
        </div>
        <button onClick={() => {
          const link = document.createElement('a');
          link.href = '/resume.pdf';
          link.download = 'resume.pdf';
          link.click();
        }} className="bg-red-400 p-4 rounded-full w-50 mt-2 md:mx-30 outline-red-900 text-white cursor-pointer">Download Resume</button>
      </div>
      <div className=" second  mx-auto container w-full md:w-[80%]  flex p-2  flex-col  md:mt-4">
        <div className="w-[91%] md:pl-30 flex justify-between my-2">
          <div className="">Skills</div>
          <Link href={`${process.env.NEXT_PUBLIC_HOST}/skill`}><div className="text-blue-500 hover:underline">viewall</div></Link>
        </div>
        <div className=" w-full md:w-[91%] md:ml-20  flex flex-col md:flex-row gap-6 justify-center items-center">
           <div className=" shadow-2xl w-[90%] md:w-1/2 h-60 md:ml-10 rounded-xl p-3">
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
          <div className=" shadow-2xl w-[90%] md:w-1/2 h-auto md:mr-20 rounded-xl p-3">
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
      <div className="third mx-auto container w-full md:w-[80%]  flex p-2  flex-col  md:mt-4 ">
        <div className="md:px-30 flex justify-between">
          <h2 >Feature Work</h2>
          <Link href={"/work"}><h2 className="text-blue-500 hover:underline">Viewall</h2></Link>
        </div>
        <div className="md:px-30 flex flex-col md:flex-row gap-1 m-3">
          <img className="md:w-65 w-[80%] h-45 rounded-2xl" src="/Page-1.png" alt="not found " />
          <div className=" ">
            <Link href={"/work/linktree"}><h1 className="font-bold text-2xl hover:underline">Linktree</h1></Link>
            <div className="flex gap-3 py-4">
              <Link href={"https://github.com/Adityakumar41347/Linktree-clone"}><span className="bg-black rounded-full px-3 text-white" >Github</span></Link>
              <span className="font-light">Web dev</span>
            </div>
            <p>A sleek Linktree clone that centralizes your online presence—built with modular components, responsive design, and theme toggling. Users can share multiple links through a customizable, dark/light mode-enabled profile hub.</p>
          </div>

        </div>
        <hr className="w-[77%] border-t border-zinc-300 my-4 mx-auto" />

        <div className=" hidden   md:px-30 md:flex gap-1 m-3">
          <img className="w-65 h-45 rounded-2xl" src="/pet-1.png" alt="not found " />
          <div className=" ">
            <Link href={'/work/patreon'}><h1 className="font-bold text-2xl hover:underline">Patreon-clone</h1></Link>
            <div className="flex gap-3 py-4">
              <Link href={"https://github.com/Adityakumar41347/Patreon-Clone-"}><span className="bg-black rounded-full px-3 text-white" >Github</span></Link>
              <span className="font-light">Web dev</span>
            </div>
            <p>Petreton is a Patreon-inspired platform for creators to manage subscriptions, showcase content, and receive payments with Razorpay integration.</p>
          </div>
        </div>
        <hr className="hidden md:block w-[77%] border-t border-zinc-300 my-4 mx-auto" />
        

      </div>

    </div>
  );
}
