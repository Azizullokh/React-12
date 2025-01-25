import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => {
        if (response.status == 200) {
          setProduct(response.data.data);
        } else {
          setError("Malumot olib bolmadi");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="bg-white flex items-center justify-center pt-14 pb-20 dark:bg-gray-800">
      {product && (
        <div className="flex w-[80%] gap-12">
          <img
            className="w-[500px] h-[500px] object-cover rounded-2xl"
            src={product.attributes.image}
            alt=""
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-blue-950 text-4xl font-bold dark:text-white">
              {product.attributes.title}
            </h2>
            <h3 className="text-2xl text-gray-400 dark:text-white">
              {product.attributes.company}
            </h3>
            <h3 className="text-violet-600 dark:text-white">$ {product.attributes.price}</h3>
            <h3 className="text-blue-950 text-[17px] dark:text-white">
              {product.attributes.description}
            </h3>
            <label className="flex flex-col text-[17px] text-blue-950 dark:text-white " htmlFor="amount">amount
               <select id="amount" className="select select-bordered w-full max-w-xs bg-white border-blue-950 text-blue-950 dark:bg-gray-800 dark:border-white dark:text-white">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
            </select>
            </label>
            <button className="btn btn-active btn-primary w-28 text-white dark:bg-pink-400 dark:text-black">add to bag</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
