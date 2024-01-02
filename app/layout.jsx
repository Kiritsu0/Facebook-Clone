import "./global.css"
import { FaFacebook } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
// import { CiShop } from "react-icons/ci";
const layout = ({children}) => {
    const metadata = {
        tile: "Facebook",
    }
  return (
    <html lang="en">
        <body>
            <header className="flex justify-between">
                <div className="flex">
                    <FaFacebook className="text-blue-600 text-4xl"/>
                     <div>
                        <input></input>
                     </div>
                </div>
                <div className="flex">
                    <GoHomeFill className="text-gray-500 text-4xl"/>
                    <PiVideoFill className="text-gray-500 text-4xl "/>
                    {/* <CiShop className="text-gray-500 text-4xl "/> */}
                </div>
            </header>
            {children}
        </body>
    </html>
  )
}

export default layout