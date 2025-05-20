import { useEffect } from "react";
import getBook from "../services/bookApi.js";
import HeroSection from "../components/HeroSection.jsx";

const Home = () => {
  useEffect(() => {
    const fetchBook = async ()=> {
      try {
        const data = await getBook();
        console.log(data.data)
      } catch (error) {
        console.log(error)
      }
    }
   fetchBook();
  }, []);
  

  return (
    <>
    <HeroSection/>
    </>
  );
};

export default Home;
