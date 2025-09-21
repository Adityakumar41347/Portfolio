import Link from 'next/link'
import { useContext } from 'react'
import { ModeContext } from '@/components/mode'

const CustomLink = ({ href, label }) => {
  const { mode } = useContext(ModeContext)

  return (
    <Link href={href}>
      <span
        className={`inline-block px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer
          ${mode
            ? 'bg-zinc-800 text-gray-200 hover:bg-zinc-700 hover:text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-black'}`}
      >
        {label}
      </span>
    </Link>
  )
}

export default CustomLink
