import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add} from "../store/cartSlice";
import toast from "react-hot-toast"

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedcolor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

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
        const colors = response.data.data.attributes.colors;
        if (colors && colors.length > 0) {
          setSelectedColor(colors[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  function handleaddtocart() {
    const object = {
      id: id,
      color: selectedcolor,
      count,
      product: product,
    };
    dispatch(add(object))
    toast.success(`${product?.attributes.title} added to the bag!`, {
      duration: 3000,
      position: "top",
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  return (
    <div className="bg-white flex items-center justify-center pt-14 pb-20 dark:bg-gray-800">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
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
            <h3 className="text-violet-600 dark:text-white">
              $ {product.attributes.price}
            </h3>
            <h3 className="text-blue-950 text-[17px] dark:text-white">
              {product.attributes.description}
            </h3>
            <div className="flex items-center flex-row gap-5">
              {product.attributes.colors.length > 0 &&
                product.attributes.colors.map((color, index) => {
                  return (
                    <span
                      key={index}
                      className="block w-[20px] h-[20px] cursor-pointer rounded-full"
                      style={{
                        backgroundColor: color,
                        border:
                          color == selectedcolor ? "2px solid black" : "none",
                      }}
                      onClick={() => {
                        setSelectedColor(color);
                      }}
                    ></span>
                  );
                })}
            </div>
            <label
              className="flex flex-col text-[17px] text-blue-950 dark:text-white "
              htmlFor="amount"
            >
              amount
              <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                id="amount"
                className="select select-bordered w-full max-w-xs bg-white border-blue-950 text-blue-950 dark:bg-gray-800 dark:border-white dark:text-white"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </label>
            <button
              onClick={handleaddtocart}
              className="btn btn-active btn-primary w-28 text-white dark:bg-pink-400 dark:text-black"
            >
              add to bag
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
