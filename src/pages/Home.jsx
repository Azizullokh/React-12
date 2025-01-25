import React from "react";
import g1 from "../images/g-1.webp";
import g2 from "../images/g-2.webp";
import g3 from "../images/g-3.webp";
import g4 from "../images/g-4.webp";
import Footer from "../componenets/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate()
  function handleNavigate() {
    navigate('/products')
  }
  return (
    <div className="bg-white dark:bg-gray-800 transition ease-in-out">
        <div className="flex justify-between pl-52 pr-52 pt-20 ">
      <div className="w-[450px] flex flex-col justify-between items-start">
        <h1 className="text-6xl text-blue-950 dark:text-white">
          We are chanping the way people shop
        </h1>
        <p className="text-xl text-gray-600 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          quas aut. Sunt dolor, officiis quisquam quo facilis reiciendis
          obcaecati corrupti quam maxime quae rem expedita?
        </p>
        <button onClick={handleNavigate} className="rounded-lg p-3 bg-blue-500 text-xl dark:bg-pink-400 dark:text-black">
          our products
        </button>
      </div>
      <div className="flex overflow-auto w-[40%] p-6 bg-gray-600 gap-5 rounded-xl scrollbar-none">
        <img className="w-[350px] h-[400px] rounded-2xl" src={g1} alt="" />
        <img className="w-[350px] h-[400px] rounded-2xl" src={g2} alt="" />
        <img className="w-[350px] h-[400px] rounded-2xl" src={g3} alt="" />
        <img className="w-[350px] h-[400px] rounded-2xl" src={g4} alt="" />
      </div>
      
    </div>
    <Footer></Footer></div>
    
  );
}

export default Home;
