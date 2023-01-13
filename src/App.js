import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import itemData from "./ItemData";
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
   
  }, [shopItems]);


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
  function handleCartClick(e, name, h) {
    setShopItems((prev) =>
      prev.map((cat) => {
        return cat.map((item) => {
          if (item.name === name) {
            return { ...item, onCart: true };
          }
          return item;
        });
      })
    );
    setCartItems((prev) => {
      let isPresent = prev.find((item) => item.name === name);
      if (isPresent) {
        return prev.map((item) => {
          if (item.name === isPresent.name)
            return { ...item, itemCount: +item.itemCount + +h.itemCount };
          return item;
        });
      }

      return [...prev, h];
    });

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
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              setShopItems={setShopItems}
            />
          }
        />
      </Routes>
    </>
  );
}
