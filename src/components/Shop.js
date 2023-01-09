import h1 from "../assets/hoodies/h1.jpg";
import h2 from "../assets/hoodies/h2.jpg";
import h3 from "../assets/hoodies/h3.jpg";
import h4 from "../assets/hoodies/h4.jpg";
import h5 from "../assets/hoodies/h5.jpg";
import h6 from "../assets/hoodies/h6.jpg";
import w1 from "../assets/watches/w1.jpg";
import w2 from "../assets/watches/w2.jpg";
import w3 from "../assets/watches/w3.jpg";
import w4 from "../assets/watches/w4.jpg";
import w5 from "../assets/watches/w5.jpg";
import w6 from "../assets/watches/w6.jpg";
import s1 from "../assets/shoes/s1.jpg";
import s2 from "../assets/shoes/s2.jpg";
import s3 from "../assets/shoes/s3.jpg";
import s4 from "../assets/shoes/s4.jpg";
import s5 from "../assets/shoes/s5.jpg";
import s6 from "../assets/shoes/s6.jpg";
import { useState } from "react";

const hoodies = [
  { name: "Driper", src: h1 },
  { name: "SuperDry", src: h2 },
  { name: "Pirate", src: h3 },
  { name: "Coax", src: h4 },
  { name: "Phew", src: h5 },
  { name: "Mighty Morty", src: h6 },
];
const watches = [
  { name: "Royalty", src: w1 },
  { name: "Timex", src: w2 },
  { name: "Google watch", src: w3 },
  { name: "Coax", src: w4 },
  { name: "Riener", src: w5 },
  { name: "Courel", src: w6 },
];
const shoes = [
  { name: "Asian", src: s1 },
  { name: "Campus", src: s2 },
  { name: "Nike", src: s3 },
  { name: "wolf", src: s4 },
  { name: "Jordan", src: s5 },
  { name: "Comber", src: s6 },
];

function Shop() {
  const [value, setValue] = useState(1);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div
      className={`bg-shop gap-3 h-full flex overflow-auto  items-center p-2 flex-col`}
    >
      <div className="bg-gray-400  flex-1 p-2 w-[80%]  grid grid-rows-[auto_repeat(2,1fr)] grid-cols-[repeat(auto-fit,1fr)] md:grid-cols-3 gap-6">
        <div className="w-full col-start-1 col-end-4 text-center bg-[#413F42] text-white p-2 text-4xl">
          Hoodies
        </div>
        {hoodies.map((h) => {
          return (
            <div
              key={h.name}
              className=" flex flex-col  border border-black flex-1 h-[400px]  "
            >
              <h2 className="bg-[#704F4F] text-white  tracking-wider text-center p-1 text-lg font-bold h-auto">
                {h.name}
              </h2>
              <img
                src={h.src}
                alt={h.name}
                className=" flex-1  h-[80%] object-cover"
              />
              <div className="flex text-white bg-[#704F4F] border-t-2 border-black items-center flex-grow-0 flex-wrap justify-between flex-1">
                <h2 className="tracking-wider text-xl text-black bg-yellow-200">
                  $9.99
                </h2>
                <div className="flex-1 flex justify-center items-center gap-2  ">
                  {" "}
                  <button className="bg-gray-200  font-serif w-[30px] h-[80%] text-black text-lg">
                    -
                  </button>{" "}
                  <input
                    value={value}
                    onChange={handleChange}
                    type="number"
                    className="h-[60%] text-center text-black w-[40%] font-mono"
                  />
                  <button className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg">
                    +
                  </button>
                </div>
                <button className="bg-green-600 px-1 font-sans">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-400  flex-1 p-2 w-[80%]  grid grid-rows-[auto_repeat(2,1fr)] grid-cols-[repeat(auto-fit,1fr)] md:grid-cols-3 gap-6">
        <div className="w-full col-start-1 col-end-4 text-center bg-[#413F42] text-white p-2 text-4xl">
          Watches
        </div>
        {watches.map((h) => {
          return (
            <div
              key={h.name}
              className=" flex flex-col  border border-black flex-1 h-[400px]  "
            >
              <h2 className="bg-[#704F4F] text-white  tracking-wider text-center p-1 text-lg font-bold h-auto">
                {h.name}
              </h2>

              <img
                src={h.src}
                alt={h.name}
                className=" flex-1  h-[80%] object-cover"
              />
              <div className="flex border-t-2 border-black text-white bg-[#704F4F] items-center flex-grow-0 flex-wrap justify-between flex-1">
                <h2 className="tracking-wider text-xl text-black bg-yellow-200">
                  $9.99
                </h2>
                <div className="flex-1 flex justify-center items-center gap-2  ">
                  {" "}
                  <button className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg">
                    -
                  </button>{" "}
                  <input
                    value={value}
                    onChange={handleChange}
                    type="number"
                    className="h-[60%] text-center text-black w-[40%] font-mono"
                  />
                  <button className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg">
                    +
                  </button>
                </div>
                <button className="bg-green-600 px-1 font-sans">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-400  flex-1 p-2 w-[80%]  grid grid-rows-[auto_repeat(2,1fr)] grid-cols-[repeat(auto-fit,1fr)] md:grid-cols-3 gap-6">
        <div className="w-full col-start-1 col-end-4 text-center bg-[#413F42] text-white p-2 text-4xl">
          Shoes
        </div>
        {shoes.map((h) => {
          return (
            <div
              key={h.name}
              className=" flex flex-col  border border-black flex-1 h-[400px]  "
            >
              <h2 className="bg-[#704F4F] text-white  tracking-wider text-center p-1 text-lg font-bold h-auto">
                {h.name}
              </h2>
              <img
                src={h.src}
                alt={h.name}
                className=" flex-1  h-[80%] object-cover"
              />

              <div className="flex border-t-2 border-black text-white bg-[#704F4F] items-center flex-grow-0 flex-wrap justify-between flex-1">
                <h2 className="tracking-wider text-xl text-black bg-yellow-200">
                  $9.99
                </h2>
                <div className="flex-1 flex justify-center items-center gap-2  ">
                  {" "}
                  <button className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg">
                    -
                  </button>{" "}
                  <input
                    value={value}
                    onChange={handleChange}
                    type="number"
                    className="h-[60%] text-center text-black w-[40%] font-mono"
                  />
                  <button className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg">
                    +
                  </button>
                </div>
                <button className="bg-green-600 px-1 font-sans">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
