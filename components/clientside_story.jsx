"use client"

import { useState } from "react";
import Link from "next/link"
import Image from "next/image"

// Icons
import { IoTextOutline } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";

const Clientstory = () => {
  // Variables
  const [fileStory, setFilestory] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)

  // Functions
  const handleFile = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div className="flex justify-center items-center">
      {!selectedFile ? (
        <div className="flex gap-5 ml-20">
          <label 
            htmlFor="fileInput" 
            className="flex justify-center items-center h-80 w-52 bg-gradient-to-tr from-cyan-300 to-blue-900 rounded-lg hover:brightness-95">
            <input 
              id="fileInput" 
              type="file" 
              onChange={handleFile}
              className="absolute inset-0 opacity-0 cursor-pointer" 
            />
            <div className="flex-col items-center">
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
          <div className="bg-white shadow-md p-3 w-3/4 my-auto">
          {/* <h2 className="font-semibold">Preview<h2/> */}
          <div className="bg-black mb-5 flex justify-center items-center aspect-video">
              <Image 
                src={selectedFile} 
                alt="Selected Photo" 
                width={800}
                height={450}
              />
            </div>

            <div className="m-2 flex gap-3 px-2">
              <Link href="" className="bg-gray-300 px-2 font-medium w-28 flex justify-center items-center rounded-md">
                Discard
              </Link>
              <Link href="" className="text-white bg-blue-500 p-2 w-28 font-medium flex justify-center items-center rounded-md">
                Share to story
              </Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Clientstory