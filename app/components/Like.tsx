"use client";
import React, { useState, useEffect } from "react";

interface LikeButtonProps {
  postId: string; // ID of the post or item to like
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId }) => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  // Load the like count and liked state from LocalStorage when the component mounts
  useEffect(() => {
    // Use unique localStorage keys based on the postId
    const storedLikes = localStorage.getItem(`likes-${postId}`);
    const storedLiked = localStorage.getItem(`liked-${postId}`);

    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }

    if (storedLiked === "true") {
      setLiked(true);
    }
  }, [postId]);

  const handleLike = () => {
    // Toggle the like state
    const newLiked = !liked;
    setLiked(newLiked);

    // Update like count based on whether it's being liked or unliked
    const newLikes = newLiked ? likes + 1 : likes - 1;
    setLikes(newLikes);

    // Save the like state and count in LocalStorage with unique postId key
    localStorage.setItem(`likes-${postId}`, newLikes.toString());
    localStorage.setItem(`liked-${postId}`, newLiked.toString());
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center space-x-2 text-lg"
    >
      {/* Heart Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "red" : "none"} // Red when liked
        stroke={liked ? "red" : "currentColor"} // Stroke red when liked
        viewBox="0 0 24 24"
        className={`w-[18px] h-[18px] ${liked ? "text-red-600" : "text-gray-500"} transition-all`}
        strokeWidth="2"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>

      
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
