"use client";
import Serverhome from "../components/serverside_home";
import HandleStory from "../components/handle_story";
import Post from "../components/post";
import Link from "next/link";
import { useState, useEffect } from "react";

// Icons
import {
  MdExpandMore,
  MdExpandLess,
  MdAddPhotoAlternate,
} from "react-icons/md";
import { IoPersonSharp, IoVideocam } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegFaceGrin, FaRegComment } from "react-icons/fa6";
import { PiUserSwitch, PiShareFat } from "react-icons/pi";
import { AiOutlineSound, AiOutlineLike } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";

const Home = () => {
  // Variables
  const [expand, setExpand] = useState(false);
  const [linkNum, setLinkNum] = useState(9);
  const [showMedia, setShowMedia] = useState(false);
  const [data, setData] = useState([]);
  const [showAside, setShowAside] = useState(false);

  // Get the posts data
  useEffect(() => {
    const storedData = localStorage.getItem("postList")
      ? JSON.parse(localStorage.getItem("postList"))
      : null;
    if (storedData) {
      setData(storedData);
    }
  }, [showMedia]);

  // Functions
  // Nav expansion
  const handleExpand = () => {
    setExpand(!expand);
    setLinkNum(expand ? 9 : 18);
  };

  // Show media page to add post
  const handleShowMedia = () => {
    setShowMedia(!showMedia);
  };

  // Delete posts
  const handleDeletePost = (index) => {
    const storedData = localStorage.getItem("postList")
      ? JSON.parse(localStorage.getItem("postList"))
      : [];
    storedData.splice(index, 1);
    localStorage.setItem("postList", JSON.stringify(storedData));
    setData(storedData);
  };

  return (
    <div className="flex justify-center lg:justify-between">
      <div className="hidden md:block fixed lg:sticky top-16 left-2 lg:mt-16">
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
      <div className="md:hidden top-16 left-3 block z-20 cursor-pointer fixed">
          < CiMenuBurger className="text-2xl" onClick={() => setShowAside((previous) => !previous)} />
          {showAside ? (
            <div className="absolute top-10 z-20 bg-white rounded-lg p-2">
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
          ) : null}
      </div>

      <div className="flex flex-col items-center w-1/2 mt-14 md:ml-36 lg:ml-0">
        <div className="ml-10 mt-10 flex items-center gap-3 h-64">
          <Link href="/stories">
            <div className="bg-white rounded-lg h-48 md:h-52 lg:h-60 w-28 md:w-32 lg:w-36 hover:brightness-95 shadow-md">
              <div className="bg-gray-400 flex justify-center items-center h-3/4 rounded-t-lg">
                <IoPersonSharp className="text-7xl" />
              </div>
              <button className="bg-white rounded-full p-1 relative -top-4 left-1/3">
                <FaPlusCircle className="text-blue-600 text-3xl" />
              </button>

              <div>
                <span className="relative left-6 md:left-8 lg:left-10 bottom-5 md:bottom-3 text-xs font-medium">
                  Create Story
                </span>
              </div>
            </div>
          </Link>
          <HandleStory />
        </div>

        <div className="bg-white rounded-lg mt-8 p-3 w-[23rem] md:w-[25rem] lg:w-[28rem]">
          <div className="flex gap-3">
            <IoPersonSharp className="text-black text-3xl md:text-4xl lg:text-5xl rounded-full bg-gray-200 hover:bg-gray-300 p-2" />
            <input
              type="text"
              className="bg-gray-200 outline-none placeholder-gray-600 rounded-full px-5 flex-1 hover:bg-gray-300"
              placeholder="What's on your mind, User?"
            />
          </div>
          <hr className="my-2" />
          <div className="flex justify-center gap-1 lg:gap-3">
            <span className="px-3 py-1 rounded-lg hover:bg-gray-200 flex items-center gap-2 cursor-pointer text-sm">
              <IoVideocam className="text-red-700 text-lg md:text-2xl lg:text-3xl" />
              Live video
            </span>
            <span
              onClick={handleShowMedia}
              className="px-3 py-1 rounded-lg hover:bg-gray-200 flex items-center gap-2 cursor-pointer text-sm"
            >
              <MdAddPhotoAlternate className="text-green-300 text-lg md:text-2xl lg:text-3xl" />
              Photo/video
            </span>
            <span className="px-3 py-1 rounded-lg hover:bg-gray-200 flex items-center gap-2 cursor-pointer text-sm">
              <FaRegFaceGrin className="text-yellow-300 text-lg md:text-2xl lg:text-3xl" />
              Activity
            </span>
          </div>
        </div>

        {data.length > 0 && (
          <div className="my-8">
            {data.map((post, index) => (
              <div
                key={index}
                className="w-[31rem] bg-white rounded-lg p-2 mb-5"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="flex items-center gap-2">
                    <IoPersonSharp className="text-black text-4xl rounded-full bg-gray-200 p-2" />
                    User
                  </span>
                  <RxCross2
                    className="text-2xl cursor-pointer"
                    onClick={() => handleDeletePost(index)}
                  />
                </div>
                <div>
                  <p>{post.description}</p>
                </div>
                <div className="h-3/4 scroll-">
                  <img
                    src={post.url}
                    className="mt-5 max-h-96 w-full"
                    onError={() => localStorage.removeItem("postList")}
                  />
                </div>
                <hr className="my-3" />
                <div className="flex justify-around items-center text-2xl">
                  <span className="rounded-full w-20 p-1 hover:bg-gray-300 flex justify-center cursor-pointer">
                    <AiOutlineLike />
                  </span>
                  <span className="rounded-full w-20 p-1 hover:bg-gray-300 flex justify-center cursor-pointer">
                    <FaRegComment />
                  </span>
                  <span className="rounded-full w-20 p-1 hover:bg-gray-300 flex justify-center cursor-pointer">
                    <PiShareFat />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <aside className="w-64 max-h-96 pl-2 py-4 overflow-auto hidden lg:block mt-14">
        <h2 className="text-gray-500 font-medium text-lg">
          Your Pages and profiles
        </h2>
        <div className="flex flex-col mt-3">
          <span className="text-sm text-gray-400 ml-3 hover:bg-gray-300 flex items-center gap-2 cursor-pointer rounded-lg p-2">
            <PiUserSwitch className="" />
            Switch to Page
          </span>
          <span className="text-sm text-gray-400 ml-3 hover:bg-gray-300 flex items-center gap-2 cursor-pointer rounded-lg p-2">
            <AiOutlineSound />
            Create Promotion
          </span>
        </div>
        <hr className="border border-gray-400 my-3" />
        <div>
          <h2 className="text-gray-500 font-medium text-lg mt-3">
            Friend Requests
          </h2>
          <span className="text-sm text-gray-400 my-8 flex justify-center">
            No Requests
          </span>
        </div>
        <hr className="border border-gray-400 my-3" />
      </aside>

      {showMedia && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-35 z-50">
          <span
            onClick={handleShowMedia}
            className="hover:bg-gray-400 rounded-full"
          >
            <RxCross2 className="text-2xl cursor-pointer" />
          </span>
          <Post />
        </div>
      )}
    </div>
  );
};

export default Home;
