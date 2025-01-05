import React from 'react'
import Hero from '../components/Hero'
import Author from '../components/Author'
import LatestBlogs from '../components/LatestBlogs'


function Home() {
  return (
    <div>
      <Hero/>
<LatestBlogs/>
<Author/>
    </div>
  )
}

export default Home