"use client"
import React from 'react'
import { useContext } from 'react'
import { ModeContext } from '@/components/mode'
import CustomLink from '@/components/customlink'
const WebDev = () => {
  const { mode } = useContext(ModeContext)

  return (
    <div className={`${mode ? "bg-zinc-900 text-gray-300" : "bg-white text-gray-900"} min-h-screen`}>
      <div className="container mx-auto md:p-10 p-4 md:w-[70%]">
        <h1 className="text-4xl font-bold mb-6">Crafting the Web with Precision & Purpose</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">👨‍💻 My Philosophy</h2>
          <p>
            I don’t just build websites—I architect digital experiences. Every line of code I write is intentional, modular, and scalable.
            I believe in clarity over complexity, and I design systems that reflect both technical rigor and personal authenticity.
            Whether it’s a minimalist portfolio or a full-stack SaaS platform, I build with purpose.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">⚙️ My Stack</h2>
          <p>
            My core stack includes <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>MongoDB</strong>.
            I use <strong>Node.js</strong> for backend logic and <strong>Context API</strong> for state management.
            I design mobile-first layouts, implement dynamic routing, and integrate secure APIs with real-time data flow.
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Frontend: Next.js, React, Tailwind CSS, HTML, CSS, JavaScript</li>
            <li>Backend: Node.js, MongoDB, Flask (for Python-based services)</li>
            <li>Auth & Payments: GitHub OAuth, Razorpay</li>
            <li>Design: Responsive UI/UX, modular components, theme toggling</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🧠 Technical Strengths</h2>
          <p>
            I’m known for my debugging precision and architectural clarity. I optimize recursive algorithms, manage complex state flows,
            and ensure backend operations are secure and efficient. I handle file uploads, database queries, and RESTful APIs with confidence.
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Recursive/backtracking problem solving</li>
            <li>Dynamic link management with MongoDB</li>
            <li>File handling and CRUD operations in Flask</li>
            <li>Responsive design across all devices</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🚀 Projects That Reflect Me</h2>
          <p>
            I build projects that are not just functional—they’re personal. Each one is a reflection of my design philosophy and technical depth.
            From the Linktree clone to Petreton, I’ve built platforms that centralize identity, streamline workflows, and empower creators.
          </p>
          <ul className="list-disc list-inside mt-3">
            <li><strong>Linktree Clone:</strong> Modular, responsive, theme-aware link manager with MongoDB backend</li>
            <li><strong>Petreton:</strong> Patreon-style platform with GitHub login, Razorpay integration, and creator dashboards</li>
            <li><strong>Portfolio:</strong> Built with Next.js and Tailwind, showcasing my stack and design ethos</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🎯 What Drives Me</h2>
          <p>
            I thrive on clarity, feedback, and authenticity. I’m not afraid to challenge vague specs or refine misleading descriptions—
            I make sure the tech matches the talk. I build systems that scale, designs that speak, and experiences that feel human.
          </p>
        </section>

        <footer className="mt-12 text-sm text-center">
          Built with ❤️ using Next.js, Tailwind CSS, and MongoDB. Designed to reflect my passion for clean code and creative systems.
        </footer>
      </div>
    </div>
  )
}

export default WebDev