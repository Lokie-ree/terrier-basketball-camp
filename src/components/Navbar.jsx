import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-vc-blue text-vc-gold p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-vc-gold text-vc-blue font-bold rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>Register</a></li>
              <li><a>Photos</a></li>
              <li><a>Videos</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <button className="btn btn-ghost">
            <a className="btn btn-ghost text-2xl">Waski's Basketball Camp</a>
          </button>
        </div>
        <div className="navbar-end m-2">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="ring-primary ring-offset-vc-gold w-14 rounded-full ring ring-offset-2">
              <img className="w-28 h-28 object-cover rounded-full"
                src="/images/vc_terrier.jpg" 
                alt="Terrier Logo" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </> 
  )
}

export default Navbar