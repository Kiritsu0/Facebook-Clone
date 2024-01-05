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

const page = () => {

  const handleNav = () => {
    const icons = [<IoPersonSharp className="text-black text-2xl rounded-full"/>,
                <FaUserFriends className="text-2xl rounded-full text-blue-500"/>,
                <FaClockRotateLeft />,
                <HiBookmark />,
                <MdGroups />,
                <PiVideoFill />,
                <HiMiniBuildingStorefront />,
                <MdOutlineWysiwyg />,
                <IoStatsChart />,
                <PiPlantFill />,
                <IoHeartCircle />,
                <SiFacebookgaming />,
                <RiMessengerFill />,
                <RiMessengerFill />,
                <MdPayments />,
                <MdFlag />,
                <FaGamepad />,
                <MdImage />,
  ];
    let linkStyle = "flex items-center gap-2 font-medium pl-2 py-2 hover:bg-gray-200 rounded-md";
    let linkText = ["Guest", "Friends", "Memories", "Saved", "Groups", "Video", "Marketplace", "Events", "AdsManager", 
                "Climate Science Center", "Fundraisers", "Gaming Video", "Messenger", "Messenger Kids", "Orders and payments", 
                "Pages", "Play games", "Recent and activity"];
    let nav = [];
    for (let i = 0; i<20; i++) {
      nav.push(
          <Link href="" className={linkStyle}>{icons[i]}{linkText[i]}</Link>
        )
    }
    return nav
  }
  return (
    <div>
      <nav className="w-80 max-h-96 pl-2 py-4 overflow-auto">
        {handleNav()}
      </nav>
    </div>
  )
}

export default page