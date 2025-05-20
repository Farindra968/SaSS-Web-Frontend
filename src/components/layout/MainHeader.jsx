import { IoSearchOutline, IoCartOutline, IoMenu  } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const MainHeader = () => {
  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  }
  return (
    <section className="border-b-2 border-primary-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-6 py-2 px-4 xl:px-0">
        <div className="w-80">
          <h1 className="font-Poppins-Bold text-xl md:text-2xl text-primary-500">
            BookMart📚
          </h1>
        </div>
        <div className="w-full hidden md:flex justify-center items-center">
          <div className="w-full h-12  relative rounded-lg bg-primary-100">
            <input
              type="search"
              placeholder="Harry Potter, Romeo & Julite, ...."
              className="font-Poppins bg-transparent focus:outline-0 absolute  bottom-3 pl-12 pr-28 w-full"
            />
            <button className="absolute right-2 bottom-1.5 font-Poppins bg-primary-500 text-white rounded-lg py-1.5 px-4 hover:bg-primary-600 transition duration-300">
              Search
            </button>
            <span className="absolute left-3 bottom-2.5 text-2xl">
              <IoSearchOutline />
            </span>
          </div>
        </div>
        <div className="lg:w-96 flex justify-center items-center gap-4">
          <buttom onClick={toggleProfile} className="flex items-center gap-2 font-Poppins-Medium hover:bg-primary-50 rounded-md p-3">
            <span className="text-primary-400 text-2xl">
              <FaRegUserCircle />
            </span>
            <p className="hidden lg:block text-text-800">Account</p>
          </buttom>
          <buttom className="flex items-center gap-2 font-Poppins-Medium hover:bg-primary-50 rounded-md p-3">
            <span className="text-primary-400 text-2xl">
              <IoCartOutline />
            </span>
            <p className="hidden lg:block text-text-800">Cart</p>
          </buttom>
          <buttom className=" lg:hidden flex items-center gap-2 font-Poppins-Medium hover:bg-primary-50 rounded-md p-3">
            <span className="text-primary-400 text-2xl">
              <IoMenu />
            </span>

          </buttom>
        </div>
      </div>
      {showProfile && (<div className=" absolute right-20 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow-md dark:divide-gray-600 dark:bg-gray-700">
          <ul className="p-2 text-start text-sm font-Poppins-Medium text-text-700 dark:text-white">
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li>
          </ul>
      
          <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
            <a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </a>
          </div>
        </div>)}
    </section>
  );
};

export default MainHeader;
