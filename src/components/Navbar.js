import React,{useState} from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick=()=> setNav(!nav)



  return (
    <div className="w-screen z-10 h-[80px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between w-full h-full items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About Us</li>
            <li>Platforms</li>
            <li>Pricing</li>
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
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About Us</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign Up</button>
          <button className="px-8 py-3">Log in</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
