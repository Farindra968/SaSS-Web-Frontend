import { useEffect } from "react";
import getBook from "../services/bookApi.js";
import Header from "../components/layout/Header.jsx";
const Home = () => {
  useEffect(() => {
    const fetchBook = async ()=> {
      try {
        const data = await getBook()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
   fetchBook();
  }, []);

  return (
    <>
    <Header/>
      <h1 className="font-Poppins">Home</h1>
    </>
  );
};

export default Home;
