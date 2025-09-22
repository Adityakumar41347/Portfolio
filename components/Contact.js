"use client"
import React from 'react'
import { useContext } from 'react'
import { ModeContext } from '@/components/mode'
import Link from 'next/link'
import Head from 'next/head'

 
const Contact = () => {
  const { mode } = useContext(ModeContext)

  return (
    <>
    <Head>
      <title>Contact - Aditya</title>
      <meta name="description" content="Get in touch with Aditya Kumar" />
    </Head>
    <div className={`${mode ? "bg-zinc-900 text-gray-300" : "bg-white text-gray-900"} min-h-screen`}>
      <div className="container mx-auto md:p-10 p-4 md:w-[70%]">
        <h1 className="text-4xl font-bold mb-6">Let's Connect</h1>

        <section className="mb-10">
          <p className="text-lg">
            Whether you want to collaborate, ask a question, or just say hi — I’d love to hear from you.
            I’m always open to discussing new projects, solving tough problems, or sharing ideas.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Info</h2>
          <ul className="space-y-2">
            <li><strong>Name:</strong> Aditya Kumar</li>
            <li><strong>Email:</strong> <a href="mailto:aditya@example.com" className="underline hover:text-blue-400">aditya@example.com</a></li>
            <li><strong>Location:</strong> Hardwar, India</li>
            <li><strong>GitHub:</strong> <Link href="https://github.com/Adityakumar41347" target="_blank"><span className="underline hover:text-blue-400">github.com/Adityakumar41347</span></Link></li>
            <li><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/aditya" target="_blank"><span className="underline hover:text-blue-400">linkedin.com/in/aditya</span></Link></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📝 Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </section>

        <footer className="mt-12 text-sm text-center">
          Built with ❤️ using Next.js and Tailwind CSS. Let’s build something amazing together.
        </footer>
      </div>
    </div>
    </>
  )
}

export default Contact