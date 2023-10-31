import React, { useContext } from "react";
import { ManageContext } from "../contexts/ManageContext";
import { IoMdArrowForward } from "react-icons/io";
import {
  AiFillShop,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { BiListCheck } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Manage = () => {
  const { manageIsOpen, handleCloseManage } = useContext(ManageContext);
  return (
    <div
      className={`${
        manageIsOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
   xl:max-w-[20vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Store management</div>
        {/* icon */}
        <div
          onClick={handleCloseManage}
          className="cursor-pointer w-8 h-8 justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        <div>
          <div className="text-2xl mt-10 ml-2 border-b h-16  flex items-center gap-x-8 cursor-pointer">
            <AiFillShop className="transform scale-150" />
            <p className="text-2xl">Informations</p>
            <BsPencilSquare className="text-2xl ml-8 bg-slate-200" />
          </div>
          <div className="text-2xl mt-10 ml-2 border-b h-16  flex items-center gap-x-8 cursor-pointer">
            <AiOutlinePlusCircle className="transform scale-150" />
            <p className="text-2xl">Add a product</p>
          </div>
          <div className="text-2xl mt-10 ml-2 border-b h-16  flex items-center gap-x-8 cursor-pointer">
            <BiListCheck className="transform scale-150" />
            <p className="text-2xl">Manage items</p>
          </div>
          <div className="text-2xl mt-10 ml-2 border-b h-16  flex items-center gap-x-8 cursor-pointer">
            <FaUserClock className="transform scale-150" />
            <div className="bg-red-500 absolute ml-2 mb-8 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              12
            </div>
            <p className="text-2xl">Managing orders</p>
          </div>
        </div>
        
      </div>
      <Link
          to={"/"}
          className="bg-black flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
    </div>
  );
};

export default Manage;
