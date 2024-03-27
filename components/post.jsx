"use client"

import React, { useState, useEffect } from "react";

// Icons
import { MdAddPhotoAlternate } from "react-icons/md";

const Post = () => {
  const [description, setDescription] = useState("");
  const [buttonState, setButton] = useState(true);

  useEffect(() => {
    if (description.trim() === "") {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [description]);
  

  return (

  <div className="w-[35rem] h-[28rem] bg-white rounded-lg shadow-md p-4">
    <div className="flex justify-center">
      <h1 className="font-semibold text-2xl">Create Post</h1>
    </div>
    <hr className="my-4"/>

    <textarea
      rows={2}
      type="text"
      onChange={(e) => setDescription(e.target.value)}
      className="outline-none placeholder-gray-600 rounded-full px-5 w-full resize-none mb-4"
      placeholder="What's on your mind, User?"
      wrap="hard"
    />
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
      />
      </label>
    </div>
    <button className="bg-blue-500 w-full rounded-lg p-2 mt-4 cursor-pointer hover:bg-blue-400" disabled={buttonState}>Next</button>
  </div>
  );
};

export default Post;
