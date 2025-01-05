"use client"
import { useEffect, useState } from "react";
import { FaShare } from "react-icons/fa";

const ShareButton = () => {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    // Accessing window only on the client-side
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      // For mobile: Use the native sharing API (navigator.share)
      navigator
        .share({
          title: document.title, // Title of the current page (optional)
          text: "Check out this blog post!", // Text to share (optional)
          url: currentUrl, // URL of the current blog post
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // For desktop: Open the share URL in a new window (e.g., for social media, email)
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div>
      <button onClick={handleShare} className="p-2 hover:text-gray-300">
      <FaShare />  
      </button>
    </div>
  );
};

export default ShareButton;
