import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBookById } from "../../services/bookApi";
import { MdMessage } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import AddToCart from "../../components/product/AddToCart";
import Buttom from "../../components/uI/Buttom";
import { HOME_ROUTE } from "../../constant/routes";

const SinglePage = () => {
  const { id } = useParams();
  const [getBook, setGetBook] = useState([]);
  const navigate = useNavigate()
    useEffect(() => {
    const fetchBookbyId = async () => {
      try {
        const response = await getBookById(id);
        setGetBook(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookbyId();
  }, []);
  const { name, author, price, genre, image, description } = getBook;

  // delete book function
  const deletBook = async (id)=>{
    try {
      const response = await deleteBook(id);
      if (response) {
        alert("Book Deleted Successfully");
        navigate(HOME_ROUTE)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="py-6 flex flex-col lg:flex-row items-start gap-10 px-4 xl:px-0 ">
      <div className="w-full lg:w-[40%] mx-auto">
        <div className="">
          <img
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-96 lg:w-80 h-[450px] lg:h-100 rounded-xl mx-auto"
          />
        </div>
      </div>
      <div className="w-full ">
        <h1 className="text-primary-400 font-Poppins-Bold text-3xl py-2 ">
          {name}
        </h1>
        {/* Author Genere like review etc */}
        <div className="border-t border-b border-primary-100 py-2 flex flex-wrap lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src={image}
              alt={author}
              width={100}
              height={100}
              className="w-8 h-8 rounded-lg"
            />
            <p className="flex flex-col">
              <span className="font-Poppins-SemiBold text-xs text-text-800">
                Author:
              </span>
              <span className="font-Poppins-SemiBold text-xs text-primary-700">
                {author}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={image}
              alt={author}
              width={100}
              height={100}
              className="w-8 h-8 rounded-lg"
            />
            <p className="flex flex-col">
              <span className="font-Poppins-SemiBold text-xs text-text-800">
                Genre:
              </span>
              <span className="font-Poppins-SemiBold text-xs text-primary-700">
                {genre}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 font-Poppins-Medium text-primary-700">
            <span className="text-2xl">
              <MdMessage />
            </span>
            <p>224 reviews</p>
          </div>
          <div className="flex items-center gap-2 font-Poppins-Medium text-primary-700">
            <span className="text-2xl">
              <BiSolidLike />
            </span>
            <p>1,054 likes</p>
          </div>
        </div>
        {/* desc */}
        <div className="py-4">
          <p className="font-Poppins text-text-700 text-sm pb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus accusantium aperiam adipisci dolore, ducimus unde harum
            nobis amet aliquam veritatis, mollitia, exercitationem ipsam iusto
            ex nesciunt! Eligendi odio ipsa temporibus. Minus debitis modi
            asperiores labore soluta libero, rerum, earum qui repellendus
            facilis, officia quod cum excepturi distinctio! Aperiam asperiores
            quibusdam earum recusandae, ut at laudantium labore debitis mollitia
          </p>
          <p className="font-Poppins text-text-700 text-sm pb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus accusantium aperiam adipisci dolore, ducimus unde harum
            nobis amet aliquam veritatis, mollitia, exercitationem ipsam iusto
            ex nesciunt! Eligendi odio ipsa temporibus. Minus debitis modi
            asperiores labore soluta libero, rerum, earum qui repellendus
            facilis, officia quod cum excepturi distinctio! Aperiam asperiores
            quibusdam earum recusandae, ut at laudantium labore debitis mollitia
          </p>
        </div>
        {/* Price & Add to Cart */}
        <div className="flex flex-row justify-between items-center border-t border-b border-primary-100 py-2">
          <p className="font-Poppins-SemiBold text-2xl text-primary-600">
            Rs. {price}/-
          </p>
          <div className="flex items-center gap-4">
            <AddToCart />
              <Buttom onClick={() => deletBook(id)} label="Delete" bg="bg-accent-500" text="text-white" hover_bg="bg-accent-600"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
