import Link from "next/link";

// Icons
import { IoPersonSharp, IoStatsChart, IoHeartCircle } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaClockRotateLeft, FaGamepad } from "react-icons/fa6";
import { HiBookmark } from "react-icons/hi";
import {
  MdGroups,
  MdOutlineWysiwyg,
  MdPayments,
  MdFlag,
  MdImage,
} from "react-icons/md";
import { PiVideoFill, PiPlantFill } from "react-icons/pi";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { SiFacebookgaming } from "react-icons/si";
import { RiMessengerFill } from "react-icons/ri";

const Nav = ({ linkNum }) => {
  // Functions
  const handleNav = () => {
    const icons = [
      <IoPersonSharp className="text-2xl rounded-full" />,
      <FaUserFriends className="text-2xl text-blue-400" />,
      <FaClockRotateLeft className="text-2xl text-blue-500" />,
      <HiBookmark className="text-2xl text-purple-600" />,
      <MdGroups className="text-2xl text-white bg-blue-600 rounded-full px-1" />,
      <PiVideoFill className="text-2xl text-blue-600" />,
      <HiMiniBuildingStorefront className="text-2xl text-blue-600" />,
      <MdOutlineWysiwyg className="text-2xl text-blue-600" />,
      <IoStatsChart className="text-2xl text-blue-600" />,
      <PiPlantFill className="text-2xl text-green-600" />,
      <IoHeartCircle className="text-2xl text-yellow-600" />,
      <SiFacebookgaming className="text-2xl text-blue-600 rounded-sm" />,
      <RiMessengerFill className="text-2xl text-blue-600" />,
      <RiMessengerFill className="text-2xl text-blue-800" />,
      <MdPayments className="text-2xl text-green-800" />,
      <MdFlag className="text-2xl text-orange-600" />,
      <FaGamepad className="text-2xl text-blue-600" />,
      <MdImage className="text-2xl text-blue-600" />,
    ];
    let linkStyle =
      "flex items-center gap-2 font-medium pl-2 py-2 hover:bg-gray-300 rounded-md scroll-smooth";
    let linkText = [
      "Guest",
      "Friends",
      "Memories",
      "Saved",
      "Groups",
      "Video",
      "Marketplace",
      "Events",
      "AdsManager",
      "Climate Science Center",
      "Fundraisers",
      "Gaming Video",
      "Messenger",
      "Messenger Kids",
      "Orders and payments",
      "Pages",
      "Play games",
      "Recent and activity",
    ];
    let nav = [];
    for (let i = 0; i < linkNum; i++) {
      nav.push(
        <Link
          role="link"
          href=""
          className={linkStyle}
          key={i}
          id={i === 17 ? "link" : ""}
          loading="lazy"
        >
          {icons[i]}
          {linkText[i]}
        </Link>
      );
    }
    return nav;
  };

  return (
    <nav className="w-52 md:w-60 lg:w-64 max-h-96 pl-2 py-4 overflow-auto scrollbar">
      {handleNav()}
    </nav>
  );
};

export default Nav;
