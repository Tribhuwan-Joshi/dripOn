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
  // const [hoodies, watches, shoes] = [...itemData];
  const [hoodies, setHoddies] = useState(shopItems[0]);
  const [watches, setWatches] = useState(shopItems[0]);
  const [shoes, setShoes] = useState(shopItems[0]);
  useEffect(() => {
    
    setHoddies(shopItems[0]);
    setWatches(shopItems[1]);
    setShoes(shopItems[2]);
  }, [shopItems]);
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
                  ? item.itemCount + 1
                  : item.itemCount > 1
                  ? item.itemCount - 1
                  : 1,
            };
          }
          return item;
        });
      })
    );
  }

  function handleCountChange(e, name) {}
  function handleCartClick(name) {}
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              itemData={itemData}
              hoodies={hoodies}
              shoes={shoes}
              watches={watches}
              handleCartClick={handleCartClick}
              handleCountChange={handleCountChange}
              handleCountClick={handleCountClick}
            />
          }
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}
