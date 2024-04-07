import Clientstory from "@/components/clientside_story";
import Link from "next/link";

// Icons
import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoPersonSharp, IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

const Story = () => {
  return (
    <div className="flex justify-between">
      <div className="hidden md:block md:w-64 lg:w-72 bg-white h-screen">
        <div className="flex gap-2 shadow-md py-2 pl-3 w-full">
          <div className="group relative">
            <Link href="/">
              <RxCross1 className="text-4xl cursor-pointer bg-gray-400 text-white rounded-full p-2" />
            </Link>
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Exit
            </span>
          </div>
          <FaFacebook className="text-blue-600 text-4xl cursor-pointer" />
        </div>

        <div className="my-5 p-3">
          <span className="flex justify-between">
            <h2 className="font-bold md:text-lg lg:text-2xl">Your story</h2>
            <IoMdSettings className="md:text-3xl lg:text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />
          </span>

          <div className="flex items-center gap-3 mt-5">
            <IoPersonSharp className="md:text-3xl lg:text-5xl rounded-full bg-gray-200 p-2" />
            <span className="font-medium">Guest</span>
          </div>
        </div>
        <hr />
      </div>

      <div className="md:hidden flex flex-col gap-2 p-2">
        <FaFacebook className="text-blue-600 text-4xl cursor-pointer" />
        <Link href="/">
          <RxCross1 className="text-4xl cursor-pointer bg-gray-400 text-white rounded-full p-2" />
        </Link>
        <IoMdSettings className="text-4xl rounded-full bg-gray-400 hover:bg-gray-300 p-2 cursor-pointer" />
      </div>

      <div className="flex h-9 gap-2 order-3 mr-5">
        <div className="group relative cursor-pointer">
          <CgMenuGridO className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2" />
          <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
            Menu
          </span>
        </div>

        <div className="group relative cursor-pointer">
          <IoNotifications className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer" />
          <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
            Notifications
          </span>
        </div>

        <div className="group relative cursor-pointer">
          <IoPersonSharp className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2" />
          <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
            Account
          </span>
        </div>
      </div>
      <Clientstory />
    </div>
  );
};

export default Story;
