import React from 'react'
import method1 from '../assets/method1.webp'
import method3 from '../assets/method3.webp'

const Dummy_card = () => {
  return (
    <div className='flex lg:w-1/2 gap-0 px-5'>
        <div className='flex flex-col lg:gap-10 gap-5 w-1/2 lg:w-1/3 justify-center'>
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
  )
}

export default Dummy_card