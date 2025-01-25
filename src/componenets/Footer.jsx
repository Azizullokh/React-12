import React from "react";
import s1 from "../images/s-1.webp";
import s2 from "../images/s-2.jpeg";
import s3 from "../images/s-3.jpeg";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <div className="pb-36 mt-24">
      <div className="flex items-start ml-52 mr-52 border-b border-black pb-7 mb-12">
        <h2 className="text-blue-950 text-3xl dark:text-white">Featured Products</h2>
      </div>
      <div className="flex pl-52 pr-52 justify-between gap-7">
        <div className="flex flex-col items-center justify-between rounded-2xl transition ease-in-out shadow-lg p-4 hover:shadow-2xl w-1/3">
          <img className="w-full h-52 object-cover rounded-lg" src={s1} alt="" />
          <h3 className="text-blue-950 mt-8 text-2xl dark:text-white">Avant-Garde Lamp</h3>
          <h4 className="text-violet-500 mt-3">179.99$</h4>
        </div>
        <div className="flex flex-col items-center justify-between rounded-2xl transition ease-in-out shadow-lg p-4 hover:shadow-2xl w-1/3">
          <img className="w-full h-52 object-cover rounded-lg" src={s2} alt="" />
          <h3 className="text-blue-950 mt-8 text-2xl dark:text-white">Coffee Table</h3>
          <h4 className="text-violet-500 mt-3">179.99$</h4>
        </div>
        <div className="flex flex-col items-center justify-between rounded-2xl transition ease-in-out shadow-lg p-4 hover:shadow-2xl w-1/3">
          <img className="w-full h-52 object-cover rounded-lg" src={s3} alt="" />
          <h3 className="text-blue-950 mt-8 text-2xl dark:text-white">Comfy Bed</h3>
          <h4 className="text-violet-500 mt-3">129.99$</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
