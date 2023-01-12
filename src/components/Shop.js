
function Shop({
  hoodies,
  watches,
  shoes,
  handleCountClick,
  handleCountChange,
  handleCartClick,
}) {
  
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
                <h2 className="tracking-wider text-semibold text-2xl text-black bg-red-200">
                  $ {h.price}
                </h2>
                <div className="flex-1 flex justify-center items-center gap-2  ">
                  {" "}
                  <button
                    onClick={(e) => handleCountClick(e, h.name)}
                    className="bg-gray-200  font-serif w-[30px] h-[80%] text-black text-lg"
                  >
                    -
                  </button>{" "}
                  <input
                    onChange={(e) => handleCountChange(e, h.name)}
                    value={h.itemCount}
                    type="number"
                    className="h-[60%] text-center text-black w-[40%] font-mono"
                  />
                  <button
                    onClick={(e) => handleCountClick(e, h.name)}
                    className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={(e) => handleCartClick(e, h.name)}
                  className="bg-green-600 px-1 font-sans"
                >
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
                <h2 className="tracking-wider text-2xl  text-black bg-red-200">
                  ${h.price}
                </h2>
                <div className="flex-1 flex justify-center items-center gap-2  ">
                  {" "}
                  <button
                    onClick={(e) => handleCountClick(e, h.name)}
                    className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg"
                  >
                    -
                  </button>{" "}
                  <input
                    onChange={(e) => handleCountChange(e, h.name)}
                    value={h.itemCount}
                    type="number"
                    className="h-[60%] text-center text-black w-[40%] font-mono"
                  />
                  <button
                    onClick={(e) => handleCountClick(e, h.name)}
                    className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={(e) => handleCountClick(e, h.name)}
                  className="bg-green-600 px-1 font-sans"
                >
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
                <h2 className="tracking-wider text-2xl text-black bg-yellow-200">
                  ${h.price}
                </h2>
                <div className="flex-1 flex justify-center items-center gap-2  ">
                  {" "}
                  <button
                    onClick={(e) => handleCountClick(e, h.name)}
                    className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg"
                  >
                    -
                  </button>{" "}
                  <input
                    onChange={(e) => handleCountChange(e, h.name)}
                    value={h.itemCount}
                    type="number"
                    className="h-[60%] text-center text-black w-[40%] font-mono"
                  />
                  <button
                    onClick={(e) => handleCountClick(e, h.name)}
                    className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg"
                  >
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
