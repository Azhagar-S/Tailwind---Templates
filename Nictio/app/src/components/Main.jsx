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
const Main = () => {
  const [showframe, setShowFrame] = useState(false);
  return (
    <div>
      <div className="p-3  flex flex-col gap-7 px-4">
        <h1 className="font-semibold  text-3xl text-gray-800 mt-10  ">
          Quickest and <br />
          easiest <br />
          <span className="text-blue-500  bg-blue-200 ">
            online payment
          </span>{" "}
          <br />
          platform for your product.
        </h1>
        <p className="font-normal text-gray-400">
          Embed powerful financial features into your product, Build in minutes,
          launch in weeks.
        </p>
        <div className="flex justify-between">
          <button className="btn bg-blue-500  text-white font-thin  rounded-md px-8 py-4 flex justify-between hover:bg-white hover:border border-blue-500 hover:text-blue-500">
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
          <button className="btn text-gray-400 font-thin  rounded-md px-8 py-4 flex justify-between">
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
      <div className="p-3 flex flex-col gap-5 py-10">
        <p className="text-gray-400">Trused by</p>
        <div className="flex gap-10 w-10 scale-75">
          <img src={google} alt="" />
          <img src={pay} alt="" />
          <img src={stripe} alt="" />
          <img src={wise} alt="" />
        </div>
      </div>

      <section
        className="flex flex-col gap-6 py-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2 className="text-2xl font-bold text-center">
          Easy and affordable for your <br /> personal and{" "}
          <span className="text-blue-500">
            business <br /> payment
          </span>{" "}
          needs
        </h2>

        <div>
          <ul className="flex  justify-center gap-10 flex-wrap text-gray-500">
            <li className="border-r-1 pe-5 mt-3">Cards</li>
            <li className="border-r-1 pe-5 mt-3">Expenses</li>
            <li className="border-r-1 pe-5 mt-3">Bill Pay</li>
            <li className="border-r-1 pe-5 mt-3">Accounting</li>
            <li className="border-r-1 pe-5 mt-3">Reporting</li>
          </ul>
        </div>
      </section>
      <div data-aos="fade-up " data-aos-duration="500">
        <div className="ms-5">
          <img
            src={user}
            alt="contact"
            className="mask-radial-at-center p-4 rounded-full shadow-lg bg-white"
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
        <div className="ms-5">
          <img
            src={user}
            alt="contact"
            className="mask-radial-at-center p-4 rounded-full shadow-lg bg-white"
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
        <div className="ms-5 ">
          <img
            src={user}
            alt="contact"
            className="mask-radial-at-center p-4 rounded-full shadow-lg bg-white"
            width={80}
            height={80}
          />
          <div className="flex flex-col gap-5 mt-4">
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

      <section className="mx-auto px-5 mt-10 ">
        <div
          className="container "
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-2xl font-semibold text-left px-5">
            How will{" "}
            <span className="text-blue-600 bg-blue-100">online payment</span>
            <br />
            platform benefit your product.
          </h2>
        </div>

        <div
          className="px-5 container flex flex-col gap-10 mt-5 "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-linear"
          data-aos-delay="100"
        >
          <div className="font-thin  text-xl">
            Grow revenues and delight your customers by building financial
            features.
          </div>
          <div>
            <img src={pic} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div>
            <img src={contact} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div>
            <img src={bank} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div>
            <img src={files} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>
          <div>
            <img src={settings} alt="" className="mb-4" />
            <p className="text-dark">
              Stop wasteful spend and save thousands with unlimited points and
              insights that maximize savings.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="btn bg-blue-500  text-white font-thin  rounded-md px-4 py-4 flex justify-around hover:bg-white hover:border border-blue-500 hover:text-blue-500 w-1/2 ">
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
      </section>

      <section
        className="px-4 mt-15"
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="700"
      >
        <div className="px-5">
          <p className="text-2xl text-center  ">
            The best way tospend and save
          </p>
          <p className="mt-5 text-gray-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ducimus voluptas ratione ipsam in unde debitis eum quos at cumque?
          </p>
        </div>
      </section>
      <div
        className="videoBackground flex justify-center relative w-screen"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <img src={spend} alt="" className="" />
        <button
          className="absolute top-1/2 bg-white rounded-full p-2 "
          onClick={() => setShowFrame(!showframe)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </button>
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
    </div>
  );
};

export default Main;
