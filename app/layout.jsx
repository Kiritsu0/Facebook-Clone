"use client";

import "./global.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderMainMenu from "../components/header_menu";

// Icons
import { FaFacebook } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { CgMenuGridO } from 'react-icons/cg';
import { RiMessengerFill } from 'react-icons/ri';
import { IoNotifications, IoPersonSharp } from 'react-icons/io5';


const layout = ({ children }) => {
  // Variables
  const metadata = {
    tile: "Facebook",
  };
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-200">
        {pathName === "/stories" ? (
          ""
        ) : (
          <header className="flex justify-between bg-white items-center px-3 py-2 fixed top-0 z-10 w-full">
            <div className="flex items-center gap-2">
              <FaFacebook className="text-blue-600 text-3xl lg:text-4xl cursor-pointer" />
              <div className="bg-gray-200 p-2 rounded-l-full rounded-r-full hidden md:flex">
                <MdSearch className="text-gray-500 text-2xl" />
                <input
                  className="bg-gray-200 outline-none placeholder-gray-600 "
                  placeholder="Search Facebook"
                />
              </div>
            </div>
            <HeaderMainMenu />
            <div className="relative lg:hidden">
              <FiMenu
                className="cursor-pointer text-2xl"
                onClick={() => setShowMenu((previous) => !previous)}
              />

              {showMenu ? (
                <div className="absolute top-14 left-1/2 transform -translate-x-3/4 rounded-md bg-white w-36 flex flex-col">
                  <span className="hover:bg-gray-100 cursor-pointer p-1 flex items-center gap-2 rounded-t-md">
                    <CgMenuGridO className="" />
                    Menu
                  </span>
                  <span className="hover:bg-gray-100 cursor-pointer p-1 flex items-center gap-2">
                    <RiMessengerFill className="" />
                    Messenger
                  </span>
                  <span className="hover:bg-gray-100 cursor-pointer p-1 flex items-center gap-2">
                    <IoNotifications className="" />
                    Notifications
                  </span>
                  <span className="hover:bg-gray-100 cursor-pointer p-1 flex items-center gap-2 rounded-b-md">
                    <IoPersonSharp className="" />
                    Account
                  </span>
                </div>
              ) : null}
            </div>
          </header>
        )}
        {children}
      </body>
    </html>
  );
};

export default layout;
