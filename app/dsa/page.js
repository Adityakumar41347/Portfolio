"use client"
import React from 'react'
import { useContext } from 'react'
import { ModeContext } from '@/components/mode'

const DSA = () => {
  const { mode } = useContext(ModeContext)

  return (
    <div className={`${mode ? "bg-zinc-900 text-gray-300" : "bg-white text-gray-900"} min-h-screen`}>
      <div className="container mx-auto md:p-10 p-4 md:w-[70%]">
        <h1 className="text-4xl font-bold mb-6">Solving Problems with Structure & Strategy</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🧠 My Approach to DSA</h2>
          <p>
            Data Structures and Algorithms aren’t just interview prep—they’re the foundation of how I think. I approach problems with clarity,
            break them into modular steps, and optimize for both time and space. Whether it’s recursion, dynamic programming, or graph traversal,
            I build solutions that scale and explain themselves.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔍 Areas of Expertise</h2>
          <ul className="list-disc list-inside mt-3">
            <li>Recursion & Backtracking: palindrome partitioning, parentheses removal, subset generation</li>
            <li>Dynamic Programming: memoization, tabulation, space optimization</li>
            <li>Graph Algorithms: BFS, DFS, cycle detection, shortest paths</li>
            <li>Trees & Tries: traversal, construction, prefix matching</li>
            <li>Stacks, Queues, Heaps: custom implementations and use-case optimization</li>
            <li>Sliding Window & Two Pointers: for efficient array/string manipulation</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🧪 Problem Solving Mindset</h2>
          <p>
            I don’t rush to code—I analyze edge cases, visualize recursion trees, and write dry runs before implementation.
            I debug with intent, using print traces, stack snapshots, and test cases that expose hidden flaws.
            My goal is not just to solve, but to understand and explain.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📚 Platforms & Practice</h2>
          <p>
            I regularly solve problems on LeetCode, Codeforces, and GeeksforGeeks. I focus on patterns, not just problems—
            identifying reusable strategies across categories. I also maintain a personal notebook of optimized templates and edge-case insights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🚀 Real-World Impact</h2>
          <p>
            My DSA skills directly influence how I build backend logic, optimize database queries, and structure frontend state.
            Whether it’s designing a search algorithm for a dashboard or optimizing link rendering in a portfolio, I apply algorithmic thinking to real code.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🎯 Why It Matters</h2>
          <p>
            DSA is more than theory—it’s how I stay sharp, think clearly, and build systems that work under pressure.
            It’s the difference between code that runs and code that scales.
          </p>
        </section>

        <footer className="mt-12 text-sm text-center">
          Built with ❤️ using Next.js and Tailwind CSS. Designed to reflect my algorithmic mindset and problem-solving clarity.
        </footer>
      </div>
    </div>
  )
}

export default DSA