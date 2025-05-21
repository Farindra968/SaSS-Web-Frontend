import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SINGLEPAGE_ROUTE } from "../../constant/routes";

const Card2 = ({image, name, id, author, price, genre}) => {
  return (
    <section className='w-full h-auto hover:bg-primary-50 rounded-lg p-4 '>
        <div className="mx-auto w-full ">
            <img src={image} alt={name} width={400} height={400} className='w-full h-56 rounded-md' />
        </div>
        <div className='py-2 space-y-1'>
            <p className='font-Poppins-SemiBold text-primary-800 '>{name}</p>
                <p className="font-Poppins-Medium text-xs text-primary-900 flex items-center gap-2"><FaUser/>{author}</p>
                                <p className="font-Poppins-Medium text-xs text-primary-900 flex items-center gap-2"><BiSolidCategory/>{genre}</p>
            <p className="font-Poppins-Medium text-base text-primary-900">Rs.{price}/-</p>
            <Link to={`${SINGLEPAGE_ROUTE}/${id}`} className='w-full font-Poppins-Medium text-sm bg-primary-500 text-white rounded-lg py-2 px-4 hover:bg-primary-600 transition duration-300'>Add to Cart</Link>
        </div>
    </section>
  )
}

export default Card2