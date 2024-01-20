"use client"

import Link from "next/link";

import { IoPersonSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { HiBookmark } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdOutlineWysiwyg } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { IoHeartCircle } from "react-icons/io5";
import { SiFacebookgaming } from "react-icons/si";
import { RiMessengerFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { MdFlag } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

import React from "react"
import {useState} from "react"

const page = () => {
  const [expand, setExpand] = useState(false);
  const [linkNum, setLinkNum] = useState(9);

  const handleNav = () => {
    const icons = [<IoPersonSharp className="text-black text-2xl rounded-full"/>,
                <FaUserFriends className="text-2xl text-blue-400"/>,
                <FaClockRotateLeft className="text-2xl text-blue-500"/>,
                <HiBookmark className="text-2xl text-purple-600"/>,
                <MdGroups  className="text-2xl text-white bg-blue-600 rounded-full px-1"/>,
                <PiVideoFill className="text-2xl text-blue-600"/>,
                <HiMiniBuildingStorefront className="text-2xl text-blue-600"/>,
                <MdOutlineWysiwyg className="text-2xl text-blue-600"/>,
                <IoStatsChart className="text-2xl text-blue-600"/>,
                <PiPlantFill className="text-2xl text-green-600"/>,
                <IoHeartCircle className="text-2xl text-yellow-600"/>,
                <SiFacebookgaming className="text-2xl text-blue-600 rounded-sm"/>,
                <RiMessengerFill className="text-2xl text-blue-600"/>,
                <RiMessengerFill className="text-2xl text-blue-800"/>,
                <MdPayments className="text-2xl text-green-800"/>,
                <MdFlag className="text-2xl text-orange-600"/>,
                <FaGamepad className="text-2xl text-blue-600"/>,
                <MdImage className="text-2xl text-blue-600"/>,
  ];
    let linkStyle = "flex items-center gap-2 font-medium pl-2 py-2 hover:bg-gray-300 rounded-md scroll-smooth";
    let linkText = ["Guest", "Friends", "Memories", "Saved", "Groups", "Video", "Marketplace", "Events", "AdsManager", 
                "Climate Science Center", "Fundraisers", "Gaming Video", "Messenger", "Messenger Kids", "Orders and payments", 
                "Pages", "Play games", "Recent and activity"];
    let nav = [];
    for (let i = 0; i < linkNum; i++) {
      nav.push(
          <Link href="" className={linkStyle} key={i} id={i === 17 ? "link" : ""}>{icons[i]}{linkText[i]}</Link>
        )
    }
    return nav
  }

  const handleExpand = () => {
    setExpand(!expand);
    setLinkNum(expand ? 9 : 18)
  }
  return (
    <div className="flex">
      <div>
        <nav className="w-80 max-h-96 pl-2 py-4 overflow-auto scrollbar">
          {handleNav()}
        </nav>
        <a href="#link"><button onClick={handleExpand} className="flex gap-3 items-center font-medium pl-2 py-2 hover:bg-gray-300 rounded-md w-full">
          {expand ? (
            <MdExpandLess className="text-3xl bg-gray-400 p-1 rounded-full"/>
          ) : (
            <MdExpandMore className="text-3xl bg-gray-400 p-1 rounded-full"/>
          )}
          {expand ? 'See less' : 'See more'}
        </button></a>
      </div>

      <div className="ml-10 mt-10">
        <Link href="/stories">
          <div className="bg-white rounded-lg h-60 w-36 hover:brightness-95">
            <div className="bg-gray-400 flex justify-center items-center h-3/4 rounded-t-lg">
              <IoPersonSharp className="text-7xl"/>
            </div>
            <button className="bg-white rounded-full p-1 relative -top-4 left-1/3"><FaPlusCircle className="text-blue-600 text-3xl"/></button>

            <div>
              <span className="flex justify-center text-xs font-medium">Create Story</span>
            </div>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default page