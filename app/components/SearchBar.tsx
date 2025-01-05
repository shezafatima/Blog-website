"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Tag } from "@/app/utils/interface";

async function getAllTags(): Promise<Tag[]> {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
  `;
  const tags = await client.fetch(query);
  return tags;
}

const SearchBar: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchTags = async () => {
      const fetchedTags = await getAllTags();
      setTags(fetchedTags);
      setFilteredTags(fetchedTags);
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const filtered = tags.filter((tag) =>
      tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTags(filtered);
  }, [searchTerm, tags]);

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search blog..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (!searchTerm) setIsFocused(false);
          }}
          className="w-full  p-1 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        
        {/* Suggestions */}
        {isFocused && searchTerm && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-10">
            {filteredTags.length > 0 ? (
              filteredTags.map((tag) => (
                <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
                  <div className="p-2 text-sm lowercase text-black hover:bg-gray-100 cursor-pointer">
                    #{tag.name} ({tag.postCount})
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-2 text-sm text-gray-500">No blog found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

