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

const page = () => {

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
    let linkStyle = "flex items-center gap-2 font-medium pl-2 py-2 hover:bg-gray-300 rounded-md";
    let linkText = ["Guest", "Friends", "Memories", "Saved", "Groups", "Video", "Marketplace", "Events", "AdsManager", 
                "Climate Science Center", "Fundraisers", "Gaming Video", "Messenger", "Messenger Kids", "Orders and payments", 
                "Pages", "Play games", "Recent and activity"];
    let nav = [];
    for (let i = 0; i<18; i++) {
      nav.push(
          <Link href="" className={linkStyle} key={i}>{icons[i]}{linkText[i]}</Link>
        )
    }
    return nav
  }
  return (
    <div>
      <nav className="w-80 max-h-96 pl-2 py-4 overflow-auto scrollbar">
        {handleNav()}
        <button className="flex gap-3 items-center font-medium pl-2 py-2 hover:bg-gray-300 rounded-md w-full"><MdExpandMore className="text-3xl bg-gray-400 p-1 rounded-full"/>See more</button>
      </nav>
    </div>
  )
}

export default page