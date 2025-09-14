import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router";

export default function Nav() {
  return (
    <div>
      {/* Top-Header */}
      <div className="bg-[#EDF2EE] flex px-[300px] justify-between h-[42px]">
        <div className="flex items-center text-[12px] font-[400]">
          <CiLocationOn />
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center text-[12px] font-[400]">
            <p>ENG</p>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center text-[12px] font-[400]">
            <p>USD</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      {/* Nav */}
      <div className="h-[78px] bg-white flex items-center justify-around shadow">
        <ul className="text-gray-500 flex gap-[27px]">
          <li className="flex items-center text-[14px] font-[500] hover:text-green-500 gap-1">
            <Link to={"/"}>Home</Link>
            <IoIosArrowDown />
          </li>
          <li className="flex items-center text-[14px] font-[500] hover:text-green-500 gap-1">
            <Link to={"/shop"}>Shop</Link>
            <IoIosArrowDown />
          </li>
          <li className="flex items-center text-[14px] font-[500] hover:text-green-500 gap-1">
            <Link to={"/pages"}>Pages</Link>
            <IoIosArrowDown />
          </li>
          <li className="flex items-center text-[14px] font-[500] hover:text-green-500 gap-1">
            <Link to={"/blog"}>Blog</Link>
            <IoIosArrowDown />
          </li>
          <li className="flex items-center text-[14px] font-[500] hover:text-green-500 gap-1">
            <Link to={"/about"}>About us</Link>
          </li>
        </ul>
        {/* Logo */}
        <div className="flex gap-[8px] justify-center items-center">
          <img className="h-[30px] w-[30px]" src="./logo.png" />
          <h1 className="text-[32px] font-[500]">Ecobazar</h1>
        </div>
        {/* Icons */}
        <div className="flex gap-[40px]">
          <div className="flex items-center text-[14px] font-[500] gap-2">
            <FiPhoneCall />
            <p>(219) 555-0114</p>
          </div>
          <div className="flex gap-[20px]">
            <CiSearch size={24} />
            <CiHeart size={24} />
            <SlHandbag size={20} />
            <FaRegUser size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
