"use client";
import Serverhome from "../components/serverside_home";
import HandleStory from "../components/handle_story";
import Link from "next/link";
import { useState } from "react";

// Icons
import {
  MdExpandMore,
  MdExpandLess,
  MdAddPhotoAlternate,
} from "react-icons/md";
import { IoPersonSharp, IoVideocam } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegFaceGrin } from "react-icons/fa6";

const Home = () => {
  // Variables
  const [expand, setExpand] = useState(false);
  const [linkNum, setLinkNum] = useState(9);

  // Functions
  const handleExpand = () => {
    setExpand(!expand);
    setLinkNum(expand ? 9 : 18);
  };
  return (
    <div className="flex">
      <div>
        <Serverhome linkNum={linkNum} />
        <a href="#link">
          <button
            onClick={handleExpand}
            className="flex gap-3 items-center font-medium pl-2 py-2 hover:bg-gray-300 rounded-md w-full"
          >
            {expand ? (
              <MdExpandLess className="text-3xl bg-gray-400 p-1 rounded-full" />
            ) : (
              <MdExpandMore className="text-3xl bg-gray-400 p-1 rounded-full" />
            )}
            {expand ? "See less" : "See more"}
          </button>
        </a>
      </div>

      <div className="">
        <div className="ml-10 mt-10 flex items-center gap-3 h-64">
          <Link href="/stories">
            <div className="bg-white rounded-lg h-60 w-36 hover:brightness-95 shadow-md">
              <div className="bg-gray-400 flex justify-center items-center h-3/4 rounded-t-lg">
                <IoPersonSharp className="text-7xl" />
              </div>
              <button className="bg-white rounded-full p-1 relative -top-4 left-1/3">
                <FaPlusCircle className="text-blue-600 text-3xl" />
              </button>

              <div>
                <span className="flex justify-center text-xs font-medium">
                  Create Story
                </span>
              </div>
            </div>
          </Link>
          <HandleStory />
        </div>

        <div className="bg-white rounded-lg mx-auto mt-8 p-3">
          <div className="flex gap-3">
            <IoPersonSharp className="text-black text-5xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />
            <input
              type="text"
              className="bg-gray-200 outline-none placeholder-gray-600 rounded-full px-5 flex-1 hover:bg-gray-300"
              placeholder="What's on your mind, User?"
            />
          </div>
          <hr className="my-2" />
          <div className="flex gap-3">
            <span className="p-3 rounded-lg hover:bg-gray-200 flex items-center gap-2 cursor-pointer">
              <IoVideocam className="text-red-700 text-3xl" />
              Live video
            </span>
            <span className="p-3 rounded-lg hover:bg-gray-200 flex items-center gap-2 cursor-pointer">
              <MdAddPhotoAlternate className="text-green-300 text-3xl" />
              Photo/video
            </span>
            <span className="p-3 rounded-lg hover:bg-gray-200 flex items-center gap-2 cursor-pointer">
              <FaRegFaceGrin className="text-yellow-300 text-3xl" />
              Feeling/activity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
