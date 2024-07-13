import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { RiShoppingCartFill, RiLoginBoxFill } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [profileShow, setProfileShow] = useState(false);
  const [showNavItem, setShowNavItem] = useState(false)

  const hideProfile= () => {
    setProfileShow(false)
  }
 
  const renderNavLink = () => (
    <ul className="flex flex-col gap-3 mt-10 md:flex-row md:mt-0">
      <l1>
        <Link>Men's</Link>
      </l1>
      <l1>
        <Link>Women's</Link>
      </l1>
      <l1>
        <Link>Kid's</Link>
      </l1>
      <l1>
        <Link>Accessorie's</Link>
      </l1>
    </ul>
  );

  return (
    <section className="bg-black/50 text-white w-full">
      <nav className="flex justify-between items-center h-16 px-4 sm:px-24 ">
        <div className="relative flex items-center gap-2">
          <FaBarsStaggered className="md:hidden text-2xl font-medium cursor-pointer" onClick={() => {setShowNavItem(pre => !pre)}} />
          <Link
            to="/"
            className="font-bold text-xl text-white/90 flex items-center gap-2"
          >
            roShan <SlHandbag className="font-bold text-xl" />
          </Link>
        </div>
        <div className={`${showNavItem ? "left-0" : "-left-full"} absolute top-0 bg-black shadow-md h-screen flex flex-col w-1/2 px-3 py-5`}>
            <IoMdClose className="text-2xl font-bold cursor-pointer" onClick={() => {setShowNavItem(pre => !pre)}} />
            {renderNavLink()}
        </div>
        <div className="hidden md:block">{renderNavLink()}</div>
        <div className="relative">
          <div
            className="cursor-pointer bg-stone-200 w-fit p-3 font-xl text-black rounded-full"
            onClick={() => {
              setProfileShow((pre) => !pre);
            }}
          >
            <FaUserAlt />
          </div>
          <div
            className={`${
              profileShow ? "block" : "hidden"
            } absolute top-[3.5rem] right-7 bg-black/75 border-[1px] rounded-md py-5 px-8 flex flex-col gap-3`}
          >
            <Link to="/user/" onClick={hideProfile}>
              <div className="flex items-center gap-2">
                <FaUserAlt />
                <p>Profile</p>
              </div>
            </Link>
            <Link to="/cart" onClick={hideProfile}>
              <div className="flex items-center gap-2">
                <RiShoppingCartFill />
                <p>Cart</p>
              </div>
            </Link>
            <Link to="/admin/login" onClick={hideProfile}>
              <div className="flex items-center gap-2">
                <FaHeart />
                <p>Watchlist</p>
              </div>
            </Link>
            <Link to="/admin/login" onClick={hideProfile}>
              <div className="flex items-center gap-2">
                <RiLoginBoxFill />
                <p>Login</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
