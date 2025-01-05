import React from "react";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-1/2  lg:pr-24 md:pr-16 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium    text-purple-950 dark:text-white">
              About TechNowledge
            </h1>
            <p className="mb-8 leading-relaxed text-center lg:text-left">
              Welcome to Technowledge, where innovation meets insight.<br></br>
              In today s rapidly evolving digital landscape, staying informed is
              more than a choice—it s a necessity. At Technowledge, we re
              committed to unraveling the complexities of modern technology and
              translating them into meaningful, actionable insights. From
              groundbreaking innovations in artificial intelligence to the
              intricacies of cybersecurity, we explore the trends and
              advancements shaping our digital future. Our mission is to empower
              tech enthusiasts, professionals, and curious minds alike with the
              knowledge they need to thrive in an ever-changing world. Whether
              you re here to stay updated on the latest tech breakthroughs, gain
              a deeper understanding of internet technologies, or find
              inspiration in the possibilities of tomorrow, Technowledge is your
              gateway to a smarter, more connected future. Join us as we
              navigate the intersection of knowledge and innovation—your journey
              into the world of technology starts here.
            </p>
            <div className="flex justify-center">
            <Link href="/blogs">
      <button className="text-white bg-purple-600 px-3 py-2 sm:mb-6 mb-4 flex lg:block items-center justify-center text-sm rounded hover:border hover:text-purple-500 hover:border-purple-500 hover:bg-transparent ">Start Reading</button>
      </Link>
             
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={1000}
              height={1000}
              className="object-cover object-center rounded"
              alt="hero"
              src="/about.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
