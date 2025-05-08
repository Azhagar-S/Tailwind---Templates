import React, { useState } from "react";
import google from "../assets/google.webp";
import pay from "../assets/pay.webp";
import stripe from "../assets/stripe.webp";
import wise from "../assets/wise.webp";
import user from "../assets/user.svg";
import contact from "../assets/contact.svg";
import bank from "../assets/bank.svg";
import pic from "../assets/pic.svg";
import files from "../assets/files.svg";
import settings from "../assets/setting.svg";
import spend from "../assets/spend.webp";
import card from "../assets/card.webp"
import method1 from '../assets/method1.webp'
import method3 from '../assets/method3.webp'
import benift from '../assets/benefit.webp'
import method2 from '../assets/method2.webp'
import hero from '../assets/hero-image.webp'

const Main = () => {
  const [showframe, setShowFrame] = useState(false);
  
  return (
    <div className=" w-full max-w-screen-xl mx-auto ">
     
      <div className="flex items-center justify-between px-5">
      <div className="lg:w-2/5 mt-10 w-screen">
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight " >Quickest and easiest <span className="text-blue-600 bg-blue-100 px-2 rounded">online payment</span> platform for your product.</h1>
        <p className="font-normal text-gray-400 mt-10">
          Embed powerful financial features into your product, Build in minutes,
          launch in weeks.
        </p>
        <div className="flex gap-10 mt-10">
        <button className="btn bg-blue-500  text-white font-thin  rounded-md lg:px-8 lg:py-4 px-2 py-4 flex justify-between hover:bg-white hover:border border-blue-500 hover:text-blue-500">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 12 24"
              className="text-white hover:text-blue-500"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
              />
            </svg>
          </button>
          <button className="btn text-gray-400 font-thin  rounded-md lg:px-8 lg:py-4 px-2 py-4 flex justify-between">
            See Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 12 24"
              className="text-gray-400"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
              />
            </svg>
          </button>
        </div>
      </div>
         
          <div><img src={hero} alt="" className="lg:h-screen lg:block hidden"/></div>
           
      </div>
      
      <div className="p-3 flex flex-col gap-5 ps-10">
        <p className="text-gray-400">Trused by</p>
        <div className="flex gap-10 w-10 scale-75">
          <img src={google} alt="" />
          <img src={pay} alt="" />
          <img src={stripe} alt="" />
          <img src={wise} alt="" />
        </div>
      </div>

      <section
        className="flex flex-col gap-6 lg:ps-14 mx-10 lg:mt-30"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl font-bold text-center md:text-4xl md:w-2/3 md:ms-40">
          Easy and affordable for your  personal and{" "}
          <span className="text-blue-500">
            business payment
          </span>{" "}
          needs
        </h2>

        <div className="md:my-15 ">
          <ul className="flex  justify-center gap-10 flex-wrap text-gray-500">
            <li className="border-r-1 pe-5 mt-3">Cards</li>
            <li className="border-r-1 pe-5 mt-3">Expenses</li>
            <li className="border-r-1 pe-5 mt-3">Bill Pay</li>
            <li className="border-r-1 pe-5 mt-3">Accounting</li>
            <li className="border-r-1 pe-5 mt-3">Reporting</li>
          </ul>
        </div>
      </section>
      <div data-aos="fade-up " data-aos-duration="500" className="md:flex ">
        <div className="ms-5 md:flex  md:gap-10 flex-wrap">
          <img
            src={user}
            alt="contact"
            className="mask-radial-at-center md:h-20 p-4 rounded-full shadow-lg bg-white"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-5 mt-4">
            <p className="font-thin text-2xl text-dark-500">
              Create an account
            </p>
            <p className="text-gray-400 ">
              Mobile app made easy check out across the web and in apps without
              having to enter any payment information
            </p>
          </div>
        </div>
        <div className="ms-5 md:flex   md:gap-10 flex-wrap">
          <img
            src={user}
            alt="contact"
            className="mask-radial-at-center md:h-20 p-4 rounded-full shadow-lg bg-white"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-5 mt-4">
            <p className="font-thin text-2xl text-dark-500">
              Verify your identity
            </p>
            <p className="text-gray-400 ">
              Mobile app made easy check out across the web and in apps without
              having to enter any payment information
            </p>
          </div>
        </div>
        <div className="ms-5 md:gap-10 md:flex flex-wrap">
          <img
            src={user}
            alt="contact"
            className="mask-radial-at-center md:h-20 p-4 rounded-full shadow-lg bg-white"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-5 mt-4 ">
            <p className="font-thin text-2xl text-dark-500">
              Link your bank account
            </p>
            <p className="text-gray-400 ">
              Mobile app made easy check out across the web and in apps without
              having to enter any payment information
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto px-5 mt-10 md:ms-20 mt-30">
        <div
          className="container  "
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-2xl font-semibold text-left px-5 md:text-4xl ">
            How will{" "}
            <span className="text-blue-600 bg-blue-100">online payment</span>
            <br />
            platform benefit your product.
          </h2>
        </div>

      <div className="flex mt-20 ">
        <img src={benift} alt="" className="md:flex md:w-full hidden lg:w-1/2 h-1/2 mt-20" />
      <div
          className="px-5 container flex flex-col gap-10 mt-5 lg:w-1/2 lg:gap-1"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-linear"
          data-aos-delay="100"
        >
          <div className="font-thin  text-xl">
            Grow revenues and delight your customers by building financial
            features.
          </div>
          <div className="flex gap-5 mb-10">
            <img src={pic} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div className="flex gap-5 mb-10">
            <img src={contact} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div className="flex gap-5 mb-10">
            <img src={bank} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div className="flex gap-5 mb-10">
            <img src={files} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div className="flex gap-5 mb-10">
            <img src={settings} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>

          <div className="flex justify-start">
            <button className="btn bg-blue-500  text-white font-thin  rounded-md px-6 py-4 flex justify-around hover:bg-white hover:border border-blue-500 hover:text-blue-500 gap-5">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                className="text-white hover:text-blue-500"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
        
      </section>

      <section
        className="px-4 mt-15 "
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="700"
      >
        <div className="px-5">
          <p className="text-2xl text-center md:text-4xl md:font-medium ">
            The best way to <span className="text-blue-700">spend and save</span>
          </p>
          <p className="mt-5 text-gray-500 text-justify md:text-center md:text-xl md:mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ducimus voluptas ratione ipsam in unde debitis eum quos at cumque?
          </p>
        </div>
      </section>
      <div
        className="videoBackground  w-full max-w-screen-md relative mx-auto "
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <img src={spend} alt="" className='w-fit h-fit' />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="lg:size-15 absolute lg:top-1/2 lg:left-1/2 top-1/3 size-13 left-43 inset-x-auto bg-white rounded-full p-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
      </div>
      {showframe && (
        <div className="px-10 w-screen  flex justify-center align-middle"> 
          <iframe
            width="390"
            height="215"
            src="https://www.youtube.com/embed/zzBxZeOTuDw?si=4ImYYKnyut0ZmOZm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen

          ></iframe>
        </div>
      )}

      <section data-aos="fade-down" data-aos-duration="600" className="mt-20">
        <div className="text-center flex flex-col">
          <h2 className="text-4xl mb-10">Many ways to manage your online payment</h2>
          <p className="text-gray-400">Embed powerful financial features into your product, Build in minutes, launch in weeks.</p>
        </div>
      </section>

      <section  data-aos-duration="1000" data-aos-delay="40" className="xl:flex justify-center ">
        <div className="flex flex-col gap-7   mt-10 ms-15 xl:w-1/3 ">
          <h2 className="text-2xl font-medium md:text-3xl md:font-medium ">Physical & Virtual Cards</h2>
          <p className="text-left text-gray-400 w-2/3">Fully programmable, debit - credit physical & virtual cards for individuals and businesses.</p>
          <button className="text-left text-blue-400 flex gap-2">Get started <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 12 24"
              className="text-blue-400"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
              />
            </svg></button>
          
        </div>
        <div>
            <img src={card} alt="" className="w-80 h-80 md:w-fit md:h-fit ms-10"  />
        </div>
      </section>

      <section className="lg:flex w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-10 items-center  ">
        <div className='flex lg:w-1/2 gap-4 px-5  lg:px-0'>
                <div className='flex flex-col lg:gap-10 gap-5 w-1/2 lg:w-2/3 justify-center'>
                    <h2 className='text-2xl'>Banking</h2>
                    <p className=''>Fully programmable, debit credit physical & virtual cards for individuals and businesses.</p>
                    <button className="text-left text-blue-400 flex gap-2">Get started <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      className="text-blue-400"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                      />
                    </svg></button>
                </div>
        
                <div>
                    <img src={method1} alt="" className='rounded-e-lg'/>
                </div>
        </div>
        <div className='flex lg:w-1/2 gap-4 px-5 lg:px-0'>
                <div className='flex flex-col lg:gap-10 gap-5 w-1/2 lg:w-2/3 justify-center'>
                    <h2 className='text-2xl'>Payments</h2>
                    <p className=''>Fully programmable, debit credit physical & virtual cards for individuals and businesses.</p>
                    <button className="text-left text-blue-400 flex gap-2">Get started <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      className="text-blue-400"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                      />
                    </svg></button>
                </div>
        
                <div>
                    <img src={method3} alt="" className='rounded-e-lg'/>
                </div>
        </div>

        
        </div>
        <div className="flex flex-col gap-7 px-10 md:px-0">
              <div ><img src={method2} alt="" /></div>
              <div className="lg:mt-20">
              <div className='flex flex-col lg:gap-10 gap-5  lg:w-1/2 justify-center '>
                    <h2 className='text-2xl'>Access $175,000 in partner rewards</h2>
                    <p className=''>Fully programmable, debit credit physical & virtual cards for individuals and businesses.</p>
                    <button className="text-left text-blue-400 flex gap-2">Get started <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      className="text-blue-400"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                      />
                    </svg></button>
                </div>
              </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
