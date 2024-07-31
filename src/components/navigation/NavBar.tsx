import { Link, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, []);

  return ( 
    <>
      <div className="sticky w-full top-0 flex items-center justify-between px-2 nav_bg_gradient border-b-[1px] border-slate-500/30 z-50 select-none">
        <nav className="hidden md:flex md:-mt-1 items-center justify-center">
          <NavLink text="Home" url="/home"/>
          <NavLink text="Products" url="/products"/>
          <NavLink text="Contact" url="/contact"/>
        </nav>
        {
          !mobileNavOpen ? 
          <RxHamburgerMenu 
            onClick={() => setMobileNavOpen(true)}
            className="h-[25px] w-[25px] md:hidden cursor-pointer hover:scale-110 smth_appear duration-200" 
          /> : 
          <IoMdClose 
            onClick={() => setMobileNavOpen(false)}
            className="h-[25px] w-[25px] md:hidden cursor-pointer hover:scale-110 smth_appear duration-200"
          />
        }
        <img className="w-[60px] md:w-[80px] m-1 cursor-pointer hover:scale-110 hover:-rotate-2 duration-300" onClick={() => navigate('/home')} src="/resto_logo.png"/>
      </div>
      {
      mobileNavOpen ? 
      <>
        <nav className="fixed md:hidden w-full m-0 fadein_down select-none border-b-[1px] border-slate-500/30 bg-primary overflow-auto z-40">
          <NavLink onClick={() => setMobileNavOpen(false)} text="HOME" url="/home"/>
          <NavLink onClick={() => setMobileNavOpen(false)} text="PRODUCTS" url="/products"/>
          <NavLink onClick={() => setMobileNavOpen(false)} text="CONTACT" url="/contact"/>
        </nav> 
        <div className="md:hidden absolute top-0 left-0 h-full w-full bg-slate-500/20 z-30" onClick={() => setMobileNavOpen(false)}></div>
      </> : <></>
      }
    </>
  );
}
 
export default NavBar;