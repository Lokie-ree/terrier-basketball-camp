import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-vc-gold text-vc-blue mx-auto text-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              className="btn btn-ghost btn-circle"
              tabIndex={0}
              role="button"
            >
              <svg
                className="h-8 w-8"
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
              className="menu menu-sm dropdown-content bg-vc-gold text-vc-blue font-bold rounded-box z-[1] mt-3 w-auto p-1 shadow"
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
          <Link
            href="/"
            className="btn btn-ghost font-extrabold text-xl md:text-3xl"
          >
            Waski's Basketball Camp
          </Link>
        </div>
        <div className="navbar-end m-2 sm:m-1">
          <button className="btn btn-ghost btn-circle">
            <img
              className="w-10 h-10 object-scale-down rounded-full"
              src="/images/vc_terrier.jpg"
              alt="Terrier Logo"
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
