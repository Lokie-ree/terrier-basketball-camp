import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-vc-gold text-vc-blue p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              className="btn btn-ghost btn-circle"
              tabIndex={0}
              role="button"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              className="menu menu-sm dropdown-content bg-vc-gold text-vc-blue font-bold rounded-box z-[1] mt-3 w-30 p-1 shadow"
              tabIndex={0}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost font-extrabold text-2xl">
            Waski's Basketball Camp
          </Link>
        </div>
        <div className="navbar-end m-2">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="ring-primary ring-offset-vc-gold w-14 rounded-full ring ring-offset-2">
                <img
                  className="w-28 h-28 object-cover rounded-full"
                  src="/images/vc_terrier.jpg"
                  alt="Terrier Logo"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
