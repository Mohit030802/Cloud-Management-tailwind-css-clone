import React from 'react'
import {
    PhoneIcon,ArrowSmRightIcon
} from '@heroicons/react/outline'
import{
    ChipIcon,SupportIcon
}from '@heroicons/react/solid'
import SupportImage from '../assests/support.jpg'

const Support = () => {
  return (
    <div className='w-full  mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={SupportImage} alt="/" />
      </div>
      <div className='max-w-[1240px] text-white relative mx-auto'>
          <div className='px-4 py-12'>
              <h1 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h1>
              <p className='text-5xl font-bold text-center py-6'>Finding the right team</p>
              <p className='text-3xl py-4 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non, numquam nihil veritatis laborum optio blanditiis quis? Animi quo facilis enim eveniet laudantium quos est!</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      < PhoneIcon className='w-16 p-4 bg-indigo-600 rounded-lg mt-[-4rem] text-white' />
                      <h3 className='font-bold text-2xl py-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus tenetur officiis odit ad soluta! Illo quo non, aliquid tenetur sequi accusamus laudantium maxime veritatis reiciendis! </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex text-indigo-600 items-center '>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      < SupportIcon className='w-16 p-4 bg-indigo-600 rounded-lg mt-[-4rem] text-white' />
                      <h3 className='font-bold text-2xl py-6'>Technical Suort</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus tenetur officiis odit ad soluta! Illo quo non, aliquid tenetur sequi accusamus laudantium maxime veritatis reiciendis! </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex text-indigo-600 items-center '>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      < ChipIcon className='w-16 p-4 bg-indigo-600 rounded-lg mt-[-4rem] text-white' />
                      <h3 className='font-bold text-2xl py-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus tenetur officiis odit ad soluta! Illo quo non, aliquid tenetur sequi accusamus laudantium maxime veritatis reiciendis! </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex text-indigo-600 items-center '>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Support
