import React,{useState} from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, Events, animateScroll as scroll, } from 'react-scroll'

const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick=()=> setNav(!nav)
  const handleclose=()=>setNav(!nav)



  return (
    <div className="w-screen z-10 h-[80px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between w-full h-full items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
          <li><Link  to="home"  smooth={true}  duration={500} >Home</Link></li>
          <li><Link  to="about"  smooth={true} offset={-200} duration={500} >About Us</Link></li>
          <li><Link  to="support"  smooth={true} offset={-50} duration={500} >About Us</Link></li>
          <li><Link  to="plat"  smooth={true} offset={-100} duration={500} >Platforms</Link></li>
          <li><Link  to="pricing"  smooth={true} offset={-50} duration={500} >Pricing</Link></li>
          
            
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign up
          </button>
          <button className="px-8 py-3">Log in</button>
        </div>
        <div className="md:hidden " onClick={handleClick}>
          {!nav ?<MenuIcon className="w-5" />:<XIcon className="w-5"/>}
         
        </div> 
      </div>
      <ul className={!nav ? 'hidden':'absolute bg-zinc-200 w-full px-9'}>
      <li><Link onClick={handleclose}  to="home"  smooth={true}  duration={500} >Home</Link></li>
          <li><Link onClick={handleclose}  to="about"  smooth={true} offset={-200} duration={500} >About Us</Link></li>
          <li><Link onClick={handleclose}  to="support"  smooth={true} offset={-50} duration={500} >About Us</Link></li>
          <li><Link onClick={handleclose}  to="plat"  smooth={true} offset={-100} duration={500} >Platforms</Link></li>
          <li><Link onClick={handleclose}  to="pricing"  smooth={true} offset={-50} duration={500} >Pricing</Link></li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign Up</button>
          <button className="px-8 py-3">Log in</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
