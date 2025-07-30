import React from 'react';
// import { BsChatSquareDots } from 'react-icons/bs';
import {CgComedyCentral } from 'react-icons/cg';
import LOGO from '../assets/logo1.png';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
<div className="lg:mt-[6rem] lg:h-[15rem] m-auto p-[2rem] bg-gray-100 w-full">
    <div className="grid grid-cols-2 justify-between">
    <img className='lg:w-[50] sm:w-[40] rounded-xl object-cover p-1 max-h-[60px] lg:h-[60px]' src={LOGO} alt="" />
    <div className="flex justify-evenly lg:mt-6 lg:px-[5rem]">
                <FaFacebookF size={60} className='mx-2  text-[#057ffa]  lg:p-3 cursor-pointer' />
                <FaTwitter size={60} className='mx-2  text-[#057ffa]  lg:p-3 cursor-pointer' />
                <FaGooglePlusG size={60} className='mx-2  text-[#057ffa]  lg:p-3 cursor-pointer' />
                <FaInstagram size={60} className='mx-2  text-[#057ffa]  lg:p-3 cursor-pointer' />
            </div>
    </div>
    <div className="flex text-center justify-center items-center text-[14px]">
    <CgComedyCentral size={30} />
    <p className='text-center'>Penticostal Church</p>
    </div>
    </div>
  )
}

export default Footer









