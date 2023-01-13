import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import itemData from "./ItemData";
import { getCartItems } from "./helper.js";
import { useState, useEffect } from "react";

export default function App() {
  const [shopItems, setShopItems] = useState(itemData);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [hoodies, setHoddies] = useState(shopItems[0]);
  const [watches, setWatches] = useState(shopItems[0]);
  const [shoes, setShoes] = useState(shopItems[0]);
  useEffect(() => {
    setHoddies(shopItems[0]);
    setWatches(shopItems[1]);
    setShoes(shopItems[2]);
    setCartItems(getCartItems(shopItems));
  }, [shopItems]);

  // set total item count on basis of cartItem count
  useEffect(() => {
    setTotalItems(cartItems.length);
  }, [cartItems]);

  function handleCountClick(e, name) {
    const sign = e.target.textContent;

    setShopItems((prev) =>
      prev.map((cat) => {
        return cat.map((item) => {
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
        });
      })
    );
  }

  function handleCountChange(e, name) {
    const value = e.target.value;
    setShopItems((prev) =>
      prev.map((cat) =>
        cat.map((item) => {
          if (item.name === name)
            return { ...item, itemCount: value > 1 ? value : 1 };
          return item;
        })
      )
    );
  }
  function handleCartClick(e, name) {
    setShopItems((prev) =>
      prev.map((cat) => {
        return cat.map((item) => {
          // console.log("on handle Click ", item, name);
          if (item.name === name) {
            // console.log("Add to cart item is ", item[0]);
            return { ...item, onCart: true };
          }
          return item;
        });
      })
    );

    // filter all those shop items which has property onCart to true
  }

  return (
    <>
      <Navbar totalItems={totalItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              hoodies={hoodies}
              shoes={shoes}
              watches={watches}
              handleCartClick={handleCartClick}
              handleCountChange={handleCountChange}
              handleCountClick={handleCountClick}
            />
          }
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </>
  );
}
