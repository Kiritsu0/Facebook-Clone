import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoPersonSharp, IoTextOutline, IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { MdAddPhotoAlternate } from "react-icons/md";


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

            <div className="flex h-9 gap-2 order-3 mr-5">
                <div className="group relative cursor-pointer">
                        <CgMenuGridO className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2"/>
                        <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                            Menu
                        </span>
                </div>
                <div className="group relative cursor-pointer">
                        <IoNotifications className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"/>
                        <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                            Notifications
                        </span>
                </div>
                <div className="group relative cursor-pointer">
                        <IoPersonSharp className="text-black text-4xl rounded-full bg-gray-200 hover:bg-gray-300 p-2"/>
                        <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                            Account
                        </span>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 ml-20">
                <div className="flex justify-center items-center h-80 w-52 cursor-pointer bg-gradient-to-tr from-cyan-300 to-blue-900 rounded-lg hover:brightness-95">
                    <div className="flex-col">
                        <MdAddPhotoAlternate className="rounded-full bg-white text-4xl p-1 mx-auto"/>
                        <p className="text-white">Create a photo story</p>
                    </div>
                </div>
                <div className="flex justify-center items-center h-80 w-52 cursor-pointer bg-gradient-to-t from-red-500 to-purple-600 rounded-lg hover:brightness-95">
                    <div className="flex-col">
                        <IoTextOutline className="rounded-full bg-white text-4xl p-1 mx-auto"/>
                        <p className="text-white">Create a text story</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story