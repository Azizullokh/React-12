import React, { useEffect, useState } from "react";
import { BackendAPI } from "../axios";
import Card from "../componenets/Card";
import { Link } from "react-router-dom";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [sort, setSort] = useState("a-z");
  const [shipping, setShipping] = useState(false);
  const [range, setRange] = useState(500);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(false);

  
  useEffect(() => {
    setloading(true);
    BackendAPI.get("/products")
      .then((response) => {
        if (response.status == 200) {
          if (response?.data?.data) {
            setProducts(response.data.data);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  function handleFilter(e) {
    e.preventDefault()
    let strFilter = `?search=${search}&category=${category}&company=${company}&order=${sort}&price=${range}&shipping=${
      shipping && "on" 
    }`;
    BackendAPI(`/products${strFilter}`)
.then(response=> {
  
    setProducts(response.data.data)
  
}).catch(error => {
  console.log(error);
})
  }

  return (
    <div className="w-[100%] flex justify-center flex-col items-center bg-white dark:bg-gray-800">
      <form className="grid grid-cols-4 gap-4 w-[70%] p-7 bg-blue-50 rounded-lg mt-11 mb-11 dark:bg-gray-950">
        <div className="flex flex-col gap-2">
          <label htmlFor="search">Search Products</label>
          <input
            id="search"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-white dark:bg-gray-800"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Select Category</label>
          <select
            id="category"
            className="select select-bordered w-full max-w-xs bg-white dark:bg-gray-800"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>all</option>
            <option>Chairs</option>
            <option>Kids</option>
            <option>Sofas</option>
            <option>Beds</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company">Select Company</label>
          <select
            id="company"
            className="select select-bordered w-full max-w-xs bg-white dark:bg-gray-800"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option>all</option>
            <option>Modenza</option>
            <option>Luxora</option>
            <option>Artifex</option>
            <option>Comfora</option>
            <option>Homestead</option>
          </select>
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            className="select select-bordered w-full max-w-xs bg-white dark:bg-gray-800"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option>a-z</option>
            <option>z-a</option>
            <option>Low</option>
            <option>High</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Select Price</span>
            <span>${range}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100000}
            className="range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
          <div className="flex justify-between">
            <span>0</span>
            <span>Max: 100000$</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <label htmlFor="shipping">Free Shipping</label>
          <input
            id="shipping"
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={shipping}
            onChange={() => {
              setShipping(!shipping);
            }}
          />
        </div>

        <button onClick={handleFilter} className="mt-5 btn btn-primary">
          Search
        </button>
        <button
          onClick={() => {
            setSearch("");
          }}
          className="mt-5 btn btn-secondary"
        >
          Reset
        </button>
      </form>
      <div className="container mx-auto w-[80%]">
        <div className="blocks flex flex-wrap gap-4 justify-center">
          {products.length > 0 &&
            products.map((product,) => {
              return (
                <Card
                  key={product.id}
                  image={product.attributes.image}
                  id={product.id}
                  title={product.attributes.title}
                  price={product.attributes.price}
                ></Card>
              );
            })}
          {loading && (
            <div className="flex justify-center mt-10">
              <span className="loading loading-spinner text-primary"></span>
              <span className="loading loading-spinner text-secondary"></span>
              <span className="loading loading-spinner text-accent"></span>
              <span className="loading loading-spinner text-neutral"></span>
              <span className="loading loading-spinner text-info"></span>
              <span className="loading loading-spinner text-success"></span>
              <span className="loading loading-spinner text-warning"></span>
              <span className="loading loading-spinner text-error"></span>
            </div>
          )}{" "}
          {!products && (
            <p>Sorry, no products matched your search...</p>
          )}
        </div>
        <div className="flex justify-end mt-11">
          <div className="join">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              defaultChecked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
