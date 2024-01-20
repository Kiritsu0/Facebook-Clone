import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";


const Story = () => {
    return (
        <div>
            <span>
                <RxCross1 className="text-4xl cursor-pointer bg-slate-600"/>
                <FaFacebook className="text-blue-600 text-4xl cursor-pointer"/>
            </span>

            <div>
                <span>
                    <h2 className="font-bold">Your story</h2>
                </span>

                <div>
                    <IoPersonSharp className="text-black text-2xl rounded-full"/>,
                    <span>Guest</span>
                </div>
            </div>
        </div>
    )
}

export default Story