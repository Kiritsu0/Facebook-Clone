import Link from "next/link"
import "./global.css"
import { FaFacebook } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { FaStore } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

const layout = ({children}) => {
    const metadata = {
        tile: "Facebook",
    }
  return (
    <html lang="en">
        <body className="bg-gray-300">
            <header className="flex justify-between bg-white items-center px-3 py-2">
                <div className="flex items-center gap-2">
                    <FaFacebook className="text-blue-600 text-4xl cursor-pointer"/>
                     <div className="flex bg-gray-200 p-2 rounded-l-full rounded-r-full">
                        <MdSearch className="text-gray-500 text-2xl"/>
                        <input className="bg-gray-200 outline-none placeholder-gray-600" placeholder="Search Facebook"></input>
                     </div>
                </div>
                <div className="flex gap-2">
                    <Link href="" className="w-28 flex justify-center p-2 hover:bg-gray-200 rounded-md"><GoHomeFill className="text-gray-500 text-3xl"/></Link>
                    <Link href="" className="w-28 flex justify-center p-2 hover:bg-gray-200 rounded-md"><PiVideoFill className="text-gray-500 text-3xl"/></Link>
                    <Link href="" className="w-28 flex justify-center p-2 hover:bg-gray-200 rounded-md"><FaStore className="text-gray-500 text-3xl"/></Link>
                    <Link href="" className="w-28 flex justify-center p-2 hover:bg-gray-200 rounded-md"><MdGroups className="text-gray-500 text-3xl"/></Link>
                    <Link href="" className="w-28 flex justify-center p-2 hover:bg-gray-200 rounded-md"><FaGamepad className="text-gray-500 text-3xl"/></Link>
                </div>
                <div className="flex gap-2">
                    <CgMenuGridO className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                    <RiMessengerFill className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                    <IoNotifications className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                    <IoPersonSharp className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                </div>
            </header>
            {children}
        </body>
    </html>
  )
}

export default layout