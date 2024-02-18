"use client"

import { useState } from "react";
import Link from "next/link"

// Icons
import { IoTextOutline } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";

const Clientstory = () => {
  // Variables
  const [fileStory, setFilestory] = useState(null)

  // Functions
  const handleFile = (event) => {
    setFilestory(event.target.files[0])
  }
  if (fileStory) {
    console.log("mission completed")
  }
  return (
    <div>
      {fileStory ? (
        <div className="flex justify-center items-center gap-5 ml-20">
          <label 
            htmlFor="fileInput" 
            className="flex justify-center items-center h-80 w-52 bg-gradient-to-tr from-cyan-300 to-blue-900 rounded-lg hover:brightness-95">
            <input 
              id="fileInput" 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
            />
            <div className="flex-col items-center" onClick={handleFile}>
              <MdAddPhotoAlternate 
                className="rounded-full bg-white text-4xl p-1 mx-auto" 
              />
              <p className="text-white">Create a photo story</p>
            </div>
          </label>

          <div
            className="flex justify-center items-center h-80 w-52 cursor-pointer bg-gradient-to-t from-red-500 to-purple-600 rounded-lg hover:brightness-95">
            <div className="flex-col">
              <IoTextOutline 
              className="rounded-full bg-white text-4xl p-1 mx-auto"
              />
              <p className="text-white">Create a text story</p>
            </div>
          </div>
        </div>
        ) : (
          <div className="bg-white shadow-md p-5 w-3/4 my-auto">
            <div className="bg-black mb-5">
              <div>
                {fileStory}
              </div>
            </div>

            <div className="m-2 border-2">
              <Link href="" className="text-blue-500">Discard</Link>
              <Link href="" className="text-blue-500">Create Story</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Clientstory