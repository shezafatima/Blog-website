"use client"
// import Link from 'next/link'
// import React from 'react'
// import { Lilita_One} from 'next/font/google'
// import { Post } from '../utils/interface'
// import { FaCalendarAlt } from 'react-icons/fa'
import LikeButton from './Like'
import ShareButton from './Share'
import { BsEye } from "react-icons/bs";
// interface Props {
//   post: Post;
// }

// const font = Lilita_One({weight: "400", subsets: ["latin"]})


// const PostComponent = ({post}: Props) => {
//   return (
//     <div className=''>

//     <div className={`${cardStyle}`}>
//       <Link href={`/posts/${post?.slug?.current}`}>
//         <h2 className={`${font.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
//         <p  className='flex my-2   gap-2 items-center  text-purple-500 '>
//                 <FaCalendarAlt />
//                   {new Date(post?.publishedAt).toDateString()}
//                 </p>
//         <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
//       </Link>

//       {/* TAGS */}

//       <div>
//         {post?.tags?.map((tag) => (
//           <span key={tag?._id} className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>#{tag?.name}</span>
//         ))}
//       </div>
//       <div className="flex items-center gap-4">

// <LikeButton postId={post?._id} /> 
// <ShareButton  />
// <div className='text-lg'>

// <BsEye />
// </div>
// </div>
//     </div>
//     </div>
//   )
// }

// export default PostComponent

// const cardStyle = `

// mb-8
// p-4
// border
// border-gray-900
// rounded-md
// shadow-md
// dark:shadow-sm
// shadow-purple-950
// hover:scale-105 transform transition duration-300 p-4 shadow-lg dark:shadow-md
// `
import Link from 'next/link';
import React from 'react';
import { Lilita_One } from 'next/font/google';
import { Post } from '../utils/interface';
import { FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const font = Lilita_One({ weight: '400', subsets: ['latin'] });

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div className={`${cardStyle}`}>
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
  );
};

export default PostComponent;

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
