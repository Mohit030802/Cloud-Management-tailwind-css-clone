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
      <div className='w-full h-screen bg-zinc-200 flex flex-col justify-betweens'>
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

        </div>
      
    </div>
    </div>
  )
}

export default NewHero
// 37 min