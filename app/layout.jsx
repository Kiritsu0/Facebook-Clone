"use client"

import "./global.css";
import { usePathname } from "next/navigation"
import Serverside from "C:/Programming/Git-Repositories/Facebook/facebook-app/app/components/serverside_layout"

// Icons
import { FaFacebook } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const layout = ({children}) => {
    // Variables
    const metadata = {
        tile: "Facebook",
    }
    const pathName = usePathname()

  return (
    <html lang="en">
        <body className="bg-gray-200">
            {pathName === "/stories" ? "" : 
            <header className="flex justify-between bg-white items-center px-3 py-2">
                <div className="flex items-center gap-2">
                    <FaFacebook 
                      className="text-blue-600 text-4xl cursor-pointer"
                    />
                    <div className="flex bg-gray-200 p-2 rounded-l-full rounded-r-full">
                        <MdSearch 
                          className="text-gray-500 text-2xl"
                        />
                        <input 
                          className="bg-gray-200 outline-none placeholder-gray-600" 
                          placeholder="Search Facebook"
                        />
                    </div>
                </div>
                <Serverside />
            </header>
            }
            {children}
        </body>
    </html>
    )
}

export default layout