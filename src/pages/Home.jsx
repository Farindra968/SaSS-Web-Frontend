import { useEffect } from "react";
import getBook from "../services/bookApi.js";
import Header from "../components/layout/Header.jsx";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    const fetchBook = async ()=> {
      try {
        const data = await axios.get(`http://localhost:5000/book`)
        console.log(data.data)
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
