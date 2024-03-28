"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Icons
import { MdAddPhotoAlternate } from "react-icons/md";

const Post = () => {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [buttonState, setButton] = useState(true);
  const [selectedPost, setPost] = useState("");
  const [addedPosts, setAddedposts] = useState([]);

  useEffect(() => {
    if (description.trim() !== "" && selectedPost !== "") {
      setButton(false);
    }
  }, [description, selectedPost]);

  useEffect(() => {
    const storedPostList = localStorage.getItem("postList");
    if (storedPostList) {
      setAddedposts(JSON.parse(storedPostList));
    }
  }, []);

  const handlePost = (event) => {
    setPost(event.target.files[0]);
  };

  const handleAddPost = () => {
    if (addedPosts) {
      setAddedposts((previous) => {
        const newPostList = [{url: URL.createObjectURL(selectedPost), description: description}, ...previous];
        localStorage.setItem("postList", JSON.stringify(newPostList));
        router.push("/");
        return newPostList;
      });
    }
    setPost("");
    setDescription("");
    setButton(true);
  };

  return (
    <div className="w-[35rem] h-[28rem] bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-center">
        <h1 className="font-semibold text-2xl">Create Post</h1>
      </div>
      <hr className="my-4" />

      <textarea
        rows={2}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        className="outline-none placeholder-gray-600 rounded-full px-5 w-full resize-none mb-4"
        placeholder="What's on your mind, User?"
        wrap="hard"
      />

      {buttonState ? (
        <div className="flex justify-center">
          <label
            htmlFor="fileInput"
            className="flex justify-center items-center h-52 w-3/4 bg-gray-300 rounded-lg cursor-pointer hover:brightness-95 border-gray-500 border-2"
          >
            <div className="flex-col items-center">
              <MdAddPhotoAlternate className="rounded-full bg-white text-4xl p-1 mx-auto" />
              <p className="text-white">Add photo</p>
            </div>
            <input
              id="fileInput"
              type="file"
              className="absolute opacity-0"
              onChange={handlePost}
            />
          </label>
        </div>
      ) : (
        <div className="w-80 h-52 flex mx-auto">
          <img src={URL.createObjectURL(selectedPost)} width={400} height={450} />
        </div>
      )}
      <button
        onClick={handleAddPost}
        className="w-full rounded-lg p-2 mt-7 cursor-pointer"
        disabled={buttonState}
        style={{ backgroundColor: buttonState ? "gray" : "rgb(24, 119, 242)" }}
      >
        Create Post
      </button>
    </div>
  );
};

export default Post;
