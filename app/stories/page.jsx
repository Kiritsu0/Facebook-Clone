import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";


const Story = () => {
    return (
        <div>
            <div className="max-w-80 bg-white h-screen">
                <span className="flex gap-2 shadow-md py-2 pl-3 w-full">
                    <RxCross1 className="text-4xl cursor-pointer bg-slate-500 rounded-full p-2"/>
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
        </div>
    )
}

export default Story