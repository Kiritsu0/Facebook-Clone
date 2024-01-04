import Link from "next/link";

import { IoPersonSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { HiBookmark } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdOutlineWysiwyg } from "react-icons/md";

const page = () => {

  const handleNav = () => {
    const icons = [<IoPersonSharp />,
                <FaUserFriends />,
                <FaClockRotateLeft />,
                <HiBookmark />,
                <MdGroups />,
                <PiVideoFill />,
                <HiMiniBuildingStorefront />,
                <MdOutlineWysiwyg />,
                
  ];
    let linkStyle = "flex";
    let linkText = ["Guest"];
    let nav = [];
    for (let i = 0; i<20; i++) {
      nav.push(
          <Link href="" className={linkStyle}>{icons[i]}{linkText[i]}</Link>
        )
    }
    return nav
  }
  return (
    <div>
      <nav>
        {handleNav()}
      </nav>
    </div>
  )
}

export default page