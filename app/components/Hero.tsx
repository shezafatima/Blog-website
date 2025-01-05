"use client"
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div
  className="hero min-h-screen lg:mt-0 mt-10" 
  style={{
    backgroundImage: "url(/bg.jpg)",
  }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="max-w-lg ">

      <h1 className="mb-5 text-5xl font-bold ">
      Discover the trends that
    <Typewriter
  options={{
    strings: [' shape our digital future'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <Link href="/blogs">
      <button className="text-white bg-purple-600 px-3 py-2 text-sm rounded hover:border hover:border-white hover:bg-transparent ">Start Reading</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default Hero;
