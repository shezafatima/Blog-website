import { client } from "@/sanity/lib/client";
import Header from "../../components/Header";
import { Post } from "../../utils/interface";
import PostComponent from "../../components/PostComponent";


async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    image,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  
  return (
    <div>
      <Header title="Blogs"  tags />
      <div className="container mx-auto p-6">
     
        <div className="sm:grid flex justify-center items-center flex-wrap  sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {posts?.length > 0 ? (
            posts.map((post) => <PostComponent key={post?._id} post={post} />)
          ) : (
            <p>No posts available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}
