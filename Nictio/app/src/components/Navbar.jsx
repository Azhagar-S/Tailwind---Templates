import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div>
      <div className=" flex m-5  w-screen  justify-between px-4 mb-14">
        <img src={logo} alt="" className="scale-125 col-4" />
        <div className="col-4 hidden">
          <ul className="flex justify-around gap-10">
            <li> Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Docs</li>
          </ul>
        </div>
        <div className="flex gap-3 col-4">
          <div className="flex p-4 gap-4 me-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
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
          </div>
          <div className="hidden">
            <button className="btn bg-blue-500 text-white font-semibold  rounded-md px-4 py-1 flex gap-2">
              Sign in
              <svg
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
              </svg>
            </button>
            <button className="btn border-blue-500 font-semibold rounded-md px-4 py-1 flex gap-2">
              Sign up
              <svg
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
              </svg>
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
