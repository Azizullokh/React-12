import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, edit } from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.attributes.price * item.count;
  }, 0);

  return (
    <div className="p-10 bg-white dark:bg-gray-800 h-[700px] w-[100%] pl-[10%] pr-[10%]">
      <h2 className="text-3xl font-bold text-blue-950 dark:text-white">Bag</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Bag is empty</p>
      ) : (
        <div className="mt-5">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border-b"
            >
              <img
                src={item.product.attributes.image}
                alt={item.product.attributes.title}
                className="w-20 h-20 rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-blue-950 dark:text-white">
                  {item.product.attributes.title}
                </h3>
                <p className="flex items-center gap-[7px] text-gray-500 dark:text-gray-400">
                  Color:{" "}
                  <span
                    style={{ backgroundColor: item.color }}
                    className="block w-[20px] h-[20px] rounded-full text-white"
                  ></span>
                </p>
                <p className="text-violet-600 dark:text-white">
                  ${item.product.attributes.price} x {item.count}
                </p>
              </div>
              <div className="flex items-center gap-[25px]">
                <select
                  value={item.count}
                  onChange={(e) =>
                    dispatch(
                      edit({
                        id: item.id,
                        color: item.color,
                        count: Number(e.target.value),
                      })
                    )
                  }
                  className="select select-bordered w-full max-w-xs"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => dispatch(remove(item))}
                  className="btn btn-error"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <h3 className="text-xl font-semibold text-blue-950 dark:text-white">
            Total Price
          </h3>
          <p className="text-lg font-semibold text-violet-600 dark:text-white">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
