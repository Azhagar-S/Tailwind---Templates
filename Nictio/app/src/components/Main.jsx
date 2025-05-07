import React from "react";
import google from '../assets/google.webp'
import pay from '../assets/pay.webp'
import stripe from '../assets/stripe.webp'
import wise from '../assets/wise.webp'
import contact from '../assets/contact.svg'

const Main = () => {
  return (
    <div >
      <div className="p-3  flex flex-col gap-7 px-4">
        <h1 className="font-semibold  text-3xl text-gray-800 mt-10  ">
          Quickest and <br />easiest <br />
          <span className="text-blue-500  bg-blue-200 ">online payment</span> <br />platform
          for your product.
        </h1>
        <p className="font-normal text-gray-400">
          Embed powerful financial features into your product, Build in minutes,
          launch in weeks.
        </p>
        <div className="flex justify-between">
          <button className="btn bg-blue-500  text-white font-semibold  rounded-md px-8 py-4 flex justify-between hover:bg-white hover:border border-blue-500 hover:text-blue-500">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" className="text-white hover:text-blue-500"><path fill="currentColor" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/></svg>
          </button>
          <button className="btn text-gray-400 font-semibold  rounded-md px-8 py-4 flex justify-between">
            See Features
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" className="text-gray-400"><path fill="currentColor" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/></svg>
          </button>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-5 py-10">
        <p className="text-gray-400">Trused by</p>
        <div className="flex gap-10 w-10 scale-75">
            <img src={google} alt="" />
            <img src={pay} alt="" />
            <img src={stripe} alt="" />
            <img src={wise} alt="" />
        </div>
      </div>

      <section className="flex flex-col gap-6 py-14" data-aos="fade-down" data-aos-duration="900"
    data-aos-easing="ease-in-out">
        
        <h2 className="text-2xl font-bold text-center" >Easy and affordable for your <br /> personal and <span className="text-blue-500">business <br /> payment</span> needs</h2>
        
        <div>
          <ul className="flex  justify-center gap-10 flex-wrap text-gray-500">
            <li className="border-r-1 pe-5 mt-3">Cards</li>

            <li className="border-r-1 pe-5 mt-3">Expenses</li>
            
            <li className="border-r-1 pe-5 mt-3">Bill Pay</li>
            <li className="border-r-1 pe-5 mt-3">Accounting</li>
            <li className="border-r-1 pe-5 mt-3">Reporting</li>
          </ul>
        </div>

        <div>
          <div className="contact-logo">
            
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Main;
