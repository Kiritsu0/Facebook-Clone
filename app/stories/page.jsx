import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";


const Story = () => {
    return (
        <div className="flex justify-between">
            
            <div className="w-80 bg-white h-screen">
                <span className="flex gap-2 shadow-md py-2 pl-3 w-full">
                    <div className="group relative">
                        <RxCross1 className="text-4xl cursor-pointer bg-slate-500 rounded-full p-2"/>
                        <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                            Exit
                        </span>
                    </div>
                    <FaFacebook className="text-blue-600 text-4xl cursor-pointer"/>
                </span>

                <div className="my-5 p-3">
                    <span className="flex justify-between">
                        <h2 className="font-bold text-2xl">Your story</h2>
                        <IoMdSettings className="text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                    </span>

                    <div className="flex items-center gap-3 mt-5">
                        <IoPersonSharp className="text-5xl rounded-full bg-gray-200 p-2"/>
                        <span className="font-medium">Guest</span>
                    </div>
                </div>
                <hr></hr>
            </div>

            <div className="flex">
                <div className="group relative">
                        <CgMenuGridO className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                        <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                            Menu
                        </span>
                </div>
                <div className="group relative">
                        <IoNotifications className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                        <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                            Notifications
                        </span>
                </div>
                <div className="group relative">
                        <IoPersonSharp className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                        <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                            Account
                        </span>
                </div>
            </div>
        </div>
    )
}

Story.getLayout = (page) => <>{page}</>
export default Story