import Link from "next/link";

// icons
import { GoHomeFill } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { FaStore, FaGamepad } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotifications, IoPersonSharp } from "react-icons/io5";

const HeaderMainMenu = () => {
  const handleMenu = () => {
    let icons = [
      <GoHomeFill />,
      <PiVideoFill />,
      <FaStore />,
      <MdGroups />,
      <FaGamepad />,
    ];
    let linkStyle = "w-16 md:w-20 lg:w-24 flex justify-center p-2 hover:bg-gray-200 rounded-md";
    let href = "";
    let spanStyle =
      "hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm";
    let tooltipText = ["Home", "Video", "Marketplace", "Groups", "Gaming"];
    let menu = [];
    for (let i = 0; i < 5; i++) {
      menu.push(
        <div className="group relative text-2xl md:text-3xl text-gray-500" key={i}>
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
      <CgMenuGridO className="rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
      <RiMessengerFill className="rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
      <IoNotifications className="rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
      <IoPersonSharp className="rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />,
    ];
    let spanStyle =
      "hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm";
    let tooltipText = ["Menu", "Messenger", "Notifications", "Account"];
    let menu = [];
    for (let i = 0; i < 4; i++) {
      menu.push(
        <div className="group relative text-4xl hidden lg:block" key={i}>
          {icons[i]}
          <span className={spanStyle}>{tooltipText[i]}</span>
        </div>
      );
    }
    return menu;
  };

  return (
    <>
      <div className="flex gap-2 sm:w-1/2 w-auto">{handleMenu()}</div>

      <div className="flex gap-2">{handleSideMenu()}</div>
    </>
  );
};

export default HeaderMainMenu;
