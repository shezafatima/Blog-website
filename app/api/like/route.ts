// import type { NextApiRequest, NextApiResponse } from "next";
// import { createClient } from "@sanity/client";

// const sanityClient = createClient({
//   projectId: process.env.SANITY_PROJECT_ID,  
//   dataset: process.env.SANITY_DATASET, 
//   token: process.env.SANITY_TOKEN,
//   useCdn: false,
// });

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
//   ) {
//     const { id } = req.query; // Get the post ID from the query
  
//     if (req.method === "GET") {
//       try {
//         const count = await sanityClient.fetch(
//           `count(*[_type == "like" && post._ref == $postId])`,
//           { postId: id }
//         );
//         res.status(200).json({ likes: count });
//       } catch (error) {
//         res.status(500).json({ message: "Failed to fetch likes" });
//       }
//     } else {
//       res.status(405).json({ message: "Method not allowed" });
//     }
//   }
  
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";



// Define the GET handler
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("id");

  if (!postId) {
    return NextResponse.json({ message: "Post ID is required" }, { status: 400 });
  }

  try {
    const count = await client.fetch(
      `count(*[_type == "like" && post._ref == $postId])`,
      { postId }
    );
    return NextResponse.json({ likes: count });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json({ message: "Failed to fetch likes" }, { status: 500 });
  }
}

// Optionally handle other methods
export function POST() {
  return NextResponse.json({ message: "Method not implemented" }, { status: 405 });
}
