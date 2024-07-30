import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className="navbar flex justify-center text-vc-blue bg-vc-gold p-4">
          <ul className="flex justify-between text-yellow-400 gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/gallery">Photos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div> 
    </> 
  )
}

export default Navbar