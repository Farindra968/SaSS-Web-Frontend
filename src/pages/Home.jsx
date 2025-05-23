import { useEffect, useState } from "react";
import {getBook} from "../services/bookApi.js";
import HeroSection from "../components/HeroSection.jsx";
import PrimaryHeading from "../components/uI/PrimaryHeading.jsx";
import bookData from "../data/bookData.js";
import Card2 from "../components/uI/Card2.jsx";

const Home = () => {
  const [getBookData, setGetBookData] = useState();
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBook();
        setGetBookData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, []);

  return (
    <section>
      <HeroSection />
      <div className="py-6 px-4 lg:px-0">
        <PrimaryHeading title="Best Selling" label="see more" path={"/"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4 py-4">
          {getBookData?.map((book, index) => (
            <Card2 key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
