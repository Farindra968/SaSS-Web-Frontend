import { IoSearchOutline, IoCartOutline  } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";


const MainHeader = () => {
  return (
    <section className="border-b-2 border-primary-50">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-6 py-4">
      <div className="w-80">
        <h1 className="font-Poppins-Bold text-2xl text-primary-500">BookMart📚</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-12  relative rounded-lg bg-primary-100">
          <input type="search" placeholder="Harry Potter, Romeo & Julite, ...." className="font-Poppins bg-transparent focus:outline-0 absolute  bottom-3 pl-12 pr-28 w-full"/>
          <button className="absolute right-2 bottom-1.5 font-Poppins bg-primary-500 text-white rounded-lg py-1.5 px-4 hover:bg-primary-600 transition duration-300">Search</button>
          <span className="absolute left-3 bottom-2.5 text-2xl"><IoSearchOutline/></span>
        </div>
      </div>
      <div className="w-96 flex justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-Poppins-Medium hover:bg-primary-50 rounded-md p-3">
          <span className="text-primary-400 text-2xl"><FaRegUserCircle/></span>
          <p>Account</p>
        </div>
                <div className="flex items-center gap-2 font-Poppins-Medium hover:bg-primary-50 rounded-md p-3">
          <span className="text-primary-400 text-2xl"><IoCartOutline /></span>
          <p>Cart</p>
        </div>
      </div>
    </div>
      </section>
  )
}

export default MainHeader