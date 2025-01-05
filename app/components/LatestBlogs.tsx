
"use client";
import React from 'react';
import Link from 'next/link';
import { Post } from "../utils/interface";
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import LikeButton from './Like';
import ShareButton from './Share';
import { Lilita_One } from 'next/font/google';
import { urlFor } from '@/sanity/lib/image';
const font = Lilita_One({ weight: '400', subsets: ['latin'] });

 const query = `
   *[_type == "post"] | order(publishedAt desc) [0..3] {
     title,
     slug,
     publishedAt,
     image,
     excerpt,
     _id,
     "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
   }
 `;

 export const getLatestPosts = async () => {
   const posts = await client.fetch(query);
   return posts;
 };

 const LatestBlogs: React.FC = () => {
   const [posts, setPosts] = React.useState<Post[]>([]);

   React.useEffect(() => {
    
     const fetchPosts = async () => {
       const latestPosts = await getLatestPosts();
       setPosts(latestPosts);
     };

     fetchPosts();
   }, []);

   return (
     <section className="latest-blogs max-w-7xl mx-auto">
       <h2 className="text-4xl font-bold my-16 text-center pt-8">Latest Blogs</h2>
       <div className="sm:grid flex flex-wrap items-center justify-center sm:grid-cols-2  lg:grid-cols-4 sm:gap-6 ">
         {posts.map((post) => (
           <div key={post._id} className={`${cardStyle}`}>
            <Link href={`/posts/${post?.slug?.current}`}>
        <div className="block h-full">
          {/* Image */}
          <div className="relative h-48 w-full">
            <Image
            width={1000}
            height={1000}
              src={urlFor(post?.image).url()}
              alt={post?.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className={`${font.className} text-xl font-semibold dark:text-slate-300`}>
              {post?.title}
            </h2>
            <p className="flex my-4 gap-2 items-center text-purple-500">
              <FaCalendarAlt />
              {new Date(post?.publishedAt).toDateString()}
            </p>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{post?.excerpt}</p>
          <div className="flex items-center gap-4">

 <LikeButton postId={post?._id} /> 
 <ShareButton  />
 <div className='text-lg'>

 <BsEye />
 </div>
 </div>
        </div>
          </div>
      </Link>
           </div>
         ))}
       </div>
       <Link href="/blogs">
       <button className="mt-8 flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:text-purple-500 hover:border hover:border-purple-500 hover:bg-transparent rounded text-lg">
               View all Blogs
             </button>
       </Link>
     </section>
   );
 };

 export default LatestBlogs;

 const cardStyle = `
 mb-12
 
   w-full
   max-w-[300px]
   h-[435px]
   bg-white 
   dark:bg-gray-800 
   rounded-xl
   shadow-lg 
   hover:scale-105 
   transform 
   transition 
   duration-300 
   hover:bg-gray-50 
   dark:hover:bg-gray-700
   overflow-hidden
   flex 
   flex-col
 `;
 