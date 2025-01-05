"use client"
import { useEffect, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/app/components/pagination"
  
import {client} from "../../sanity/lib/client"; 

const BlogPost = ({ currentSlug }: { currentSlug: string }) => {
    const [posts, setPosts] = useState<{ slug: { current: string }; title: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          slug { current },
          title
        }`;
        const data = await client.fetch(query);
        setPosts(data);
  
        // Determine the current index dynamically
        const index = data.findIndex((post: any) => post.slug.current === currentSlug);
        setCurrentIndex(index);
      };
  
      fetchPosts();
    }, [currentSlug]);
  
    if (currentIndex === null) return <p>Loading...</p>;
  
    const previousPost = posts[currentIndex - 1] || null;
    const nextPost = posts[currentIndex + 1] || null;
  
    return (
      <div>
  
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={previousPost ? `/posts/${previousPost.slug.current}` : "#"}
                className={previousPost ? "" : "opacity-50 pointer-events-none"}
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={nextPost ? `/posts/${nextPost.slug.current}` : "#"}
                className={nextPost ? "" : "opacity-50 pointer-events-none"}
              >
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  };
  
  export default BlogPost;