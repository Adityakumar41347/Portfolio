"use client"
import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { ModeContext } from '@/components/mode'

const Petreton = () => {
    const { mode } = useContext(ModeContext)
    return (
        <div className={`${mode ? "bg-zinc-900 text-gray-300" : 'bg-white'}`}>
            <div className={`container md:mx-auto md:p-8 p-2 rounded-3xl  md:w-[60%]  shadow-xl ${mode ? "bg-neutral-900  shadow-2xl" : 'bg-white'}`}>
                <h1 className='text-xl font-bold'>Empower Creators with Theme Toggle</h1>
                <div className="flex gap-3 mb-6 py-1">
                    <Link target='blank' href={'https://github.com/Adityakumar41347/Patreon-Clone-'}>
                        <span className="bg-slate-950 rounded-full py-1 px-3 text-white">Github</span>
                    </Link>
                    <span className="font-light">Next.js, Tailwind CSS, React, Context API, MongoDB, Razorpay, Node.js.</span>
                </div>
                <p className='pr-5'>
                    Petreton is a Patreon-inspired platform that allows creators to showcase their work, manage subscriptions, and receive payments seamlessly. Built for scalability and clarity, it offers a clean UI and secure backend integration.
                </p>

                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>Welcome to Petreton</h1>
                    <img className='w-[94%] px-6' src="/pet-1.png" alt="Main Page" />
                    <p className='px-6'>
                        The landing page introduces Petreton’s mission: helping creators monetize their content. With a sleek layout and responsive design, users are invited to explore or sign up instantly.
                    </p>
                </div>

                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>Secure GitHub Authentication</h1>
                    <img className='w-[94%] px-6' src="/pet-2.png" alt="GitHub Login" />
                    <p className='px-6'>
                        Petreton uses GitHub OAuth for secure login. This simplifies onboarding for developers and ensures account safety with minimal friction.
                    </p>
                </div>

                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>Creator Dashboard</h1>
                    <img className='w-[94%] px-6' src="/pet-3.png" alt="Dashboard" />
                    <p className='px-6'>
                        The dashboard provides creators with a snapshot of their earnings, subscribers, and content performance. Built with modular components, it’s optimized for clarity and quick access.
                    </p>
                </div>

                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>User Profile Page</h1>
                    <img className='w-[94%] px-6' src="/pet-5.png" alt="User Page" />
                    <p className='px-6'>
                        Each user has a customizable profile showcasing their bio, subscription tiers, and published content. The layout is mobile-first and designed for easy navigation.
                    </p>
                </div>

                <div className='mt-8 mb-5'>
                    <h1 className='font-bold text-2xl m-2'>Razorpay Integration</h1>
                    <img className='w-[94%] px-6' src="/pet-6.png" alt="Razorpay Checkout" />
                    <p className='px-6'>
                        Petreton integrates Razorpay for secure and fast payments. Users can subscribe to creators with a few clicks, and creators receive real-time updates on transactions.
                    </p>
                </div>

                <p>
                    Petreton is a minimalist Patreon clone built with Next.js, Tailwind CSS, and MongoDB. It features GitHub authentication, a dynamic dashboard, user profiles, and Razorpay-powered payments. Designed for creators who want a clean, scalable platform to manage subscriptions and showcase their work.
                </p>
            </div>
        </div>
    )
}

export default Petreton