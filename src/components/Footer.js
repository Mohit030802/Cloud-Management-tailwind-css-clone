import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-col-2 md:grid-cols-6 py-8 border-b-2 border-gray-600'>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Support</h6>
                    <ul>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Guides</li>
                        <li className='py-1'>API</li>
                        
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Company</h6>
                    <ul>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Job</li>
                        <li className='py-1'>Press</li>
                        <li className='py-1'>Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Company</h6>
                    <ul>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Policies</li>
                        
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to Our Newsletter</p>
                    <p className='py-4'>The latest news, article and resources sent to your inbox weekly</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full mr-4 p-2 rounded-md mb-4' type="email" placeholder='Enter your email' />
                        <button className='mb-4 p-2'>Subscribe</button>
                    </form>
                </div>
                
            </div>
            <div className=' flex flex-col max-w-[1240px] mx-auto   px-2 py-4 justify-between sm:flex-row text-center text-gray-500'>
                    <p className='py-4'>2022 WorkFl.ow , LLC. ALl rights reserved</p>
                    <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaTwitch />
                        <FaGithub />
                    </div>
                </div>
        </div>
    )
}

export default Footer
