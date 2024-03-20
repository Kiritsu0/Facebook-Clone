import Link from "next/link";

// icons
import { GoHomeFill } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { FaStore, FaGamepad } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotifications, IoPersonSharp } from "react-icons/io5";

const Serverside = () => {
  const handleMenu = () => {
    let icons = [
      <GoHomeFill className="text-gray-500 text-3xl" />,
      <PiVideoFill className="text-gray-500 text-3xl" />,
      <FaStore className="text-gray-500 text-3xl" />,
      <MdGroups className="text-gray-500 text-3xl" />,
      <FaGamepad className="text-gray-500 text-3xl" />,
    ];
    let linkStyle = "w-28 flex justify-center p-2 hover:bg-gray-200 rounded-md";
    let href = "";
    let spanStyle =
      "hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm";
    let tooltipText = ["Home", "Video", "Marketplace", "Groups", "Gaming"];
    let menu = [];
    for (let i = 0; i < 5; i++) {
      menu.push(
        <div className="group relative" key={i}>
          <Link href={href} className={linkStyle}>
            {icons[i]}
          </Link>
          <span className={spanStyle}>{tooltipText[i]}</span>
        </div>
      );
    }
    return menu;
  };

  const handleSideMenu = () => {
    let icons = [
      <CgMenuGridO className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
      <RiMessengerFill className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
      <IoNotifications className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
      <IoPersonSharp className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
    ];
    let spanStyle =
      "hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm";
    let tooltipText = ["Menu", "Messenger", "Notifications", "Account"];
    let menu = [];
    for (let i = 0; i < 4; i++) {
      menu.push(
        <div className="group relative" key={i}>
          {icons[i]}
          <span className={spanStyle}>{tooltipText[i]}</span>
        </div>
      );
    }
    return menu;
  };

  return (
    <>
      <div className="flex gap-2">{handleMenu()}</div>

      <div className="flex gap-2">{handleSideMenu()}</div>
    </>
  );
};

export default Serverside;
