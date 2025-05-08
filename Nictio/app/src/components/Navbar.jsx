import React from "react";
import logo from "../assets/logo.svg";
import { useState,useEffect } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nightEffect , setNighteffect] = useState(false)

 
  return (
    <div className={` w-full max-w-screen-xl mx-auto top-0 sticky py-0.25 bg-white ${isScrolled ? 'shadow-b-lg   ' : ''} `}>
            <div className={`flex justify-between my-10 mx-5 ${nightEffect ? 'text-white bg-blacky':''} `}>
                <div className='flex gap-10  w-1/2'>
                    <img src={logo} alt="" />
                    <div className='mt-3 hidden lg:block' >
                        <ul className='flex gap-8'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Docs</li>
                        </ul>
                    </div>
                </div>
    
                <div className='flex gap-4 '>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="self-center "
                  onClick={()=>setNighteffect(!nightEffect)}
                >
                  <path
                    fill="currentColor"
                    d="M11.712 3.45a.75.75 0 0 0-.668-1.197c-5.414.494-8.436 4.752-8.764 9.105c-.328 4.361 2.037 8.975 7.451 10.166c5.686 1.25 11.472-2.837 12.016-8.646a.75.75 0 0 0-1.189-.676c-2.837 2.069-6.08 1.316-8.136-.724c-2.054-2.039-2.8-5.239-.71-8.028"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className='lg:hidden'
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 17h14M5 12h14M5 7h14"
                    className="scale-125"
                  />
                </svg>
                
                <div className='hidden lg:flex lg:gap-3'>
                <button className='bg-blue-700 px-4 rounded-md text-white flex gap-2 py-2 '> Sign in <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 12h16m0 0l-6-6m6 6l-6 6"
                    />
                  </svg></button>
                  <button className='border px-4 rounded-md text-blue-500  flex gap-2 py-2'> Sign up <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 12h16m0 0l-6-6m6 6l-6 6"
                    />
                  </svg></button>
                </div>
                </div>
            </div>
        </div>
  );
};

export default Navbar;
