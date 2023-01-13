import { useEffect, useState } from "react";
import github from "../assets/github.png";
import { getTotal } from "../helper";

function countClickCart(e, name, setCartItems) {
  const sign = e.target.textContent;
  setCartItems((prev) =>
    prev.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          itemCount:
            sign === "+"
              ? +item.itemCount + 1
              : +item.itemCount > 1
              ? +item.itemCount - 1
              : 1,
        };
      }
      return item;
    })
  );
}
function countChangeCart(e, name, setCartItems) {
  const value = e.target.value;
  setCartItems((prev) =>
    prev.map((item) => {
      if (item.name === name)
        return { ...item, itemCount: value > 1 ? value : 1 };
      return item;
    })
  );
}
function emptyCard(setCartItems,setShopItems) {
  setCartItems([]);
setShopItems((prev) =>
  prev.map((cat) =>
    cat.map((item) => {
      return { ...item, onCart: false };
    })
  )
);

}

function removeCartItem(name, setCartItems, setShopItems) {
  setCartItems((prev) => prev.filter((item) => item.name !== name));
  setShopItems((prev) =>
    prev.map((cat) => {
      return cat.map((item) => {
        // console.log("on handle Click ", item, name);
        if (item.name === name) {
          // console.log("Add to cart item is ", item[0]);
          return { ...item, onCart: false };
        }
        return item;
      });
    })
  );
}

function CartCard({ h, setCartItems, setShopItems }) {
  return (
    <div
      key={h.name}
      className=" flex flex-col  border border-black flex-1 h-[400px]  "
    >
      <h2 className="bg-[#704F4F] text-white  tracking-wider text-center p-1 text-lg font-bold h-auto">
        {h.name}
      </h2>
      <img src={h.src} alt={h.name} className=" flex-1  h-[80%] object-cover" />
      <div className="flex text-white bg-[#704F4F] border-t-2 border-black items-center flex-grow-0 flex-wrap justify-between flex-1">
        <h2 className="tracking-wider text-semibold text-2xl text-black bg-red-200">
          $ {h.price}
        </h2>
        <div className="flex-1 flex justify-center items-center gap-2  ">
          {" "}
          <button
            onClick={(e) => countClickCart(e, h.name, setCartItems)}
            className="bg-gray-200  font-serif w-[30px] h-[80%] text-black text-lg"
          >
            -
          </button>{" "}
          <input
            onChange={(e) => countChangeCart(e, h.name, setCartItems)}
            value={h.itemCount}
            type="number"
            className="h-[60%] text-center text-black w-[40%] font-mono"
          />
          <button
            onClick={(e) => countClickCart(e, h.name, setCartItems)}
            className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeCartItem(h.name, setCartItems, setShopItems)}
          className="bg-red-400 px-1 font-sans active:bg-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

function Checkout({ total, setCartItems ,setShopItems}) {
  return (
    <div className="w-[25vw] checkout bottom-0   fixed right-0 h-[90vh]  bg-gray-200  flex flex-col pt-4 gap-12 shadow-lg min-w-[200px] shadow-gray-700">
      <h1 className="text-3xl lg:text-4xl text-center underline underline-offset-4 font-semibold mt-4">
        {" "}
        Net Amount
      </h1>
      <h1 className="text-xl md:text-2xl font-semibold w-max mx-auto break-words">
        $ {total}
      </h1>
      <button className=" bg-green-600 active:bg-green-700  transition duration-300   hover:scale-110 ease-in-out w-[60%] py-3 text-white tracking-wider font-bold text-xl md:text-2xl border-black border mx-auto">
        {" "}
        <span className="pay">
          <a
            href="https://www.buymeacoffee.com/tjsm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Pay Now
          </a>
        </span>
      </button>
      <button
        onClick={() => emptyCard(setCartItems,setShopItems)}
        className=" font-[default] bg-red-600 active:bg-red-700 transition duration-300 hover:scale-110 w-[60%]  ease-in-out py-3  text-white font-bold tracking-wider text-2xl border-black border mx-auto"
      >
        <span className="empty"> Empty Cart</span>
      </button>
      <div className="box w-full bg-gray-600 flex items-end text-white text-lg justify-evenly pb-4 mt-auto h-[17vh]">
        <a
          href="https://github.com/Tribhuwan-Joshi/dripOn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={github} alt="github" />
        </a>
        <h1 className=" ml-4 tracking-wider">Tribhuwan Joshi</h1>
      </div>
    </div>
  );
}

function Cart({ cartItems, setCartItems, setShopItems }) {
  const [total, setTotal] = useState(0);

  useEffect(() => setTotal(getTotal(cartItems)), [cartItems]);

  return (
    <div className="flex-1 flex ">
      <div className="cart-items w-3/4 flex gap-4 flex-col  p-4 bg-purple-100">
        <h1 className="text-4xl font-mono font-semibold text-center ">
          {total ? "Your Cart Items" : "Empty Cart"}
        </h1>
        <div
          className={` ${
            total ? "bg-gray-400" : ""
          }   p-2  grid grid-rows-[repeat(2,1fr)] grid-cols-[repeat(auto-fit,minmax(400px,1fr))] md:grid-cols-3 gap-6`}
        >
          {cartItems.map((h) => (
            <CartCard
              key={h.name}
              h={h}
              setShopItems={setShopItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      </div>
      <Checkout total={total} setCartItems={setCartItems} setShopItems={setShopItems} />
    </div>
  );
}
export default Cart;
