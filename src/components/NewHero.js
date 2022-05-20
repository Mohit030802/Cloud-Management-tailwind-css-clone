import React from 'react'
import{
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'
import bgimg from '../assests/cyber-bg.png'
const NewHero = () => {
  return (
    <div>
      <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:justify-start w-full px-2 py-8'>
                <p className='text-3xl'>Unique sequencing  & Product</p>
                <h1 className='text-5xl md:text-7xl  font-bold py-3'>Cloud Management</h1>
                <p className='text-2xl'>This is our tech brand</p>
                <button className='py-3 my-4 px-6 sm:w-[60%]'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgimg} alt="No image found" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-300 border border-slate-300 rounded-xl text-center shadow-xl'>
              <p>
                Data Services
              </p>
              <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6  text-indigo-600'/> App Security</p>
                <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600'/> Dashboard</p>
                <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600'/> Cloud Data </p>
                <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/> API </p>
              </div>
            </div>

        </div>
      
    </div>
    </div>
  )
}

export default NewHero
// 37 min