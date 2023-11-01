import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg'
import { SidebarContext } from '../contexts/SidebarContext';
import { ManageContext } from '../contexts/ManageContext';
import { BsBag } from 'react-icons/bs'
import { GrUserSettings } from "react-icons/gr";
import { RiMenu2Fill } from "react-icons/ri"
import { FaTimes } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { BiListCheck } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  AiFillShop,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import { CartContext } from '../contexts/CartContext';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen}  = useContext(SidebarContext);
  const [openMenu, setOpenMenu] = useState(false);
  const { manageIsOpen, setManageIsOpen } = useContext(ManageContext)
  const { itemAmount } = useContext(CartContext);
  const [Pop, setPop] = useState(false)

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return(
    <>
    <header className={`${
      isActive ? 'bg-white py-4 shadow-md': 'bg-none py-6'} fixed w-full z-10 transition-all px-5 md:px-0`}>
        <div className='container mx-auto flex items-center justify-between align-items h-full'>

        {/* logo */}
        <Link to={'/'}>
          <div className="  ">
        <div className="h-[18px] w-[18px]  px-3 py-3 rounded-full bg-orange-500">
          <Link className="font-bold text-[22px] text-gray-500">P2P</Link>
        </div>
      </div>
        </Link>

        {/* Manage */}
        <div className='md:hidden block'>
          <RiMenu2Fill className={`${openMenu ? 'hidden': ''} text-3xl`}onClick={ (e) => setOpenMenu(true)} />
          <FaTimes className={`${openMenu ? '': 'hidden'} ${Pop ? 'hidden': ''} text-3xl`} onClick={ (e) => setOpenMenu(false)} />
        </div>
        
        {openMenu &&(
          <div className={`${Pop ? "hidden":""} absolute bg-white  w-[95%] top-[102%] right-[2%] rounded-md  px-5 `}> 
            <div className='  border-b h-16  flex items-center gap-x-8 cursor-pointer'>
            <div className='p-2 '> <BsBag className='text-xl' /> </div>
            <span className='text-[15px]'>shopping bag</span>
            </div>
           

      <div className="flex flex-col gap-y-2   border-b">
        <div>
          <div className="text-2xl  ml-2 border-b h-16  flex items-center gap-x-8 cursor-pointer relative ">
            <AiFillShop className="" />
            <p className="text-[15px]">Informations</p>
            <BsPencilSquare className="text-xl ml-8 bg-slate-200 absolute right-[2%] " />
          </div>
          <div className="text-2xl  border-b h-16  flex items-center gap-x-8 cursor-pointer">
            <AiOutlinePlusCircle className="text-xl ml-2" />
            <p className="text-[15px]">Add a product</p>
          </div>

          <div className="text-2xl  border-b h-16  flex items-center gap-x-8 cursor-pointer" onClick={(e) => setPop(true)}>
            <FiLogOut className="text-xl ml-2" />
            <p className="text-[15px] text-red-500 text-center">Logout</p>
          </div>
         
        </div>
        
      </div>
          </div>
        )}
        <div className=' cursor-pointer hidden md:flex relative ml-[85%]' 
             onClick={() => setManageIsOpen(!manageIsOpen)}
        >

        </div>

        {/* cart */}
        <div className='flex gap-10 relative md:flex hidden   '>
        <div
        onClick={() => setIsOpen(!isOpen)} 
        className='cursor-pointer hidden md:flex  relative'
        >
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>

        <div
        onClick={() => setManageIsOpen(!isOpen)} 
        className='cursor-pointer hidden md:flex  relative'
        >
          <GrUserSettings className='text-2xl' />
        </div>

        </div>
       
        <div
        className='cursor-pointer hidden md:flex  absolute right-[2%]'
        >
          <FiLogOut className='text-2xl' />
        </div>
      </div>
      
    </header>
    {Pop &&(
      <div className='absolute top-[20%] bg-white left-[12%] p-5 rounded-md w-[80%]'>
           <div className='  text-[15px] font-bold'>
        souhaitez vous vous deconnecter ?
      </div>
      <div className='flex  justify-between mt-10'>
        <button className=' text-green-500 font-bold p-2 shadow-gray-200 shadow rounded-md hover:bg-gray-200'>Confirmer</button>
        <button className=' text-red-500 p-2 font-bold shadow-gray-200 shadow rounded-md hover:bg-gray-200' onClick={() => setPop(false)}> Annuler</button>
      </div>

      </div>
   
    )}
</>
  );
};

export default Header;
