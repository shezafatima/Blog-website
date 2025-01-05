import React from 'react'
import Image from 'next/image'
function Author() {
  return (
    <div className='max-w-7xl mb-28 mt-[140px]'>
       <h2 className="text-4xl font-bold  text-center my-12 ">Meet Our Authors</h2>
          <div className=" flex  justify-center items-center flex-wrap gap-8 ">
        <div>

        <div className="w-[340px]  bg-gray-200 dark:bg-gray-800 rounded">
          <Image
          src="/img1.png"
          alt="tom"
          width={1000}
          height={1000}
          className="w-[236px] h-[351px] flex items-center mx-auto pt-6"/>

        </div>
        <div className="flex flex-col mt-6">
<h1 className="text-[22px] text-black dark:text-white">Tom Cruise</h1>

<div className="flex flex-wrap mt-2 gap-2">
<Image
src="/icon-Facebook.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>

<Image
src="/icon-instagram.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>

<Image
src="/icon-Twitter.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>
</div>
</div>

        </div>

        <div>

<div className="w-[340px]  bg-gray-200 dark:bg-gray-800 rounded">
  <Image
  src="/img2.png"
  alt="tom"
  width={1000}
  height={1000}
  className="w-[236px] h-[351px] flex items-center mx-auto pt-6"/>

</div>
<div className="flex flex-col mt-6">
<h1 className="text-[22px] text-black dark:text-white">Emma Watson</h1>

<div className="flex flex-wrap mt-2 gap-2">
<Image
src="/icon-Facebook.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>

<Image
src="/icon-instagram.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>

<Image
src="/icon-Twitter.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>
</div>
</div>

</div>
<div>

<div className="w-[340px]  bg-gray-200 dark:bg-gray-800 rounded">
  <Image
  src="/img3.png"
  alt="tom"
  width={1000}
  height={1000}
  className="w-[236px] h-[351px] flex items-center mx-auto pt-6"/>

</div>
<div className="flex flex-col mt-6">
<h1 className="text-[22px] text-black dark:text-white">Will Smith</h1>

<div className="flex flex-wrap mt-2 gap-2">
<Image
src="/icon-Facebook.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>

<Image
src="/icon-instagram.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>

<Image
src="/icon-Twitter.png"
alt="icon"
width={1000}
height={1000}
className="w-5 bg-purple-800"/>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default Author