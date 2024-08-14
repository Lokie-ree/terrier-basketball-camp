import Link from "next/link";
import React from "react";

const Hero = () => {
  const girlBballImg1 = "/images/girls_bball1.png";

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row gap-12 lg:gap-0 m-3">
        <div className="flex flex-col text-vc-gold w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-2">Coleman's Basketball Camp</h1>
          <h2 className="text-2xl font-semi-bold mt-2">
            Learn the fundamentals of basketball
          </h2>
          <p className="font-thin mt-4 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veritatis voluptate quo suscipit, sed aut voluptas eos facere
            aliquid tempore. Architecto iure autem quae recusandae dicta illum
            ducimus, repellendus tempora!
          </p>
          <div className="flex flex-row items-center justify-center gap-1">
            <Link
              href="/contact"
              className="btn btn-neutral bg-vc-gold text-vc-blue"
            >
              Get Started
            </Link>
          </div>
        </div>
        <img
          className="mask mask-circle"
          src={girlBballImg1}
          width={400}
          height={400}
          alt="Girls playing basketball"
        />
      </div>
    </div>
  );
};

export default Hero;
