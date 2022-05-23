import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'
const Pricing = () => {
    return (
        <div name='pricing' className='w-full text-white my-24'>
            <div className='bg-slate-900 mix-blend-overlay w-full h-[800px] absolute'>

            </div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Pricing</h2>
                    <h3 className='text-5xl text-white py-8 font-bold'>The Right Place for your research</h3>
                    <p className='text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique libero reiciendis, voluptatum consectetur suscipit neque molestiae tempore exercitationem odit delectus eveniet! Natus quaerat sequi deserunt!</p>
                </div>
                <div className='grid md:grid-cols-2'>
                    <div className='bg-white p-8 m-4 rounded-xl shadow-2xl text-slate-900 relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>Standard</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-2xl text-slate-500 py-8'>Lorem ipsum dolor sit amet consectetur.</p>
                        <div>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <button className='w-full py-4 my-4 bg-black'>Get Started</button>
                        </div>
                    </div>
                    <div className='bg-white p-8 m-4 rounded-xl shadow-2xl text-slate-900 relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>Premium</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$199<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-2xl text-slate-500 py-8'>Lorem ipsum dolor sit amet consectetur.</p>
                        <div>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <button className='w-full py-4 my-4 bg-black'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing

