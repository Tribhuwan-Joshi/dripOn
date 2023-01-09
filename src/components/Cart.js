import github from "../assets/github.png";
import h1 from "../assets/hoodies/h1.jpg";
import h2 from "../assets/hoodies/h2.jpg";
import h3 from "../assets/hoodies/h3.jpg";
import h4 from "../assets/hoodies/h4.jpg";
import h5 from "../assets/hoodies/h5.jpg";
import h6 from "../assets/hoodies/h6.jpg";
const hoodies = [
  { name: "Driper", src: h1 },
  { name: "SuperDry", src: h2 },
  { name: "Pirate", src: h3 },
  { name: "Coax", src: h4 },
  { name: "Phew", src: h5 },
  { name: "Mighty Morty", src: h6 },
];
function Cart() {
  return (
    <div className="flex-1 flex ">
      <div className="cart-items w-3/4 flex gap-4 flex-col  p-4 bg-purple-100">
        <h1 className="text-4xl font-mono font-semibold text-center ">
          Your Cart Items
        </h1>
        <div className="bg-gray-400   p-2  grid grid-rows-[repeat(2,1fr)] grid-cols-[repeat(auto-fit,1fr)] md:grid-cols-3 gap-6">
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
                      type="number"
                      className="h-[60%] text-center text-black w-[40%] font-mono"
                    />
                    <button className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg">
                      +
                    </button>
                  </div>
                  <button className="bg-red-600 px-1 text-sm font-sans">
                    Remove from Cart
                  </button>
                </div>
              </div>
            );
          })}
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
                      type="number"
                      className="h-[60%] text-center text-black w-[40%] font-mono"
                    />
                    <button className="bg-gray-200 font-serif w-[30px] h-[80%] text-black text-lg">
                      +
                    </button>
                  </div>
                  <button className="bg-red-600 px-1 text-sm font-sans">
                    Remove from Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[25vw] checkout bottom-0   fixed right-0 h-[90vh]  bg-gray-200  flex flex-col pt-4 gap-12 shadow-lg  shadow-gray-700">
        <h1 className="text-3xl lg:text-4xl text-center underline underline-offset-4 font-semibold mt-4">
          {" "}
          Net Amount
        </h1>
        <h1 className="text-2xl font-semibold w-max mx-auto break-words">
          $ 20000
        </h1>
        <button className=" bg-green-600 active:bg-green-700  transition duration-300   hover:scale-110 ease-in-out w-[60%] py-3 text-white tracking-wider font-bold text-xl md:text-2xl border-black border mx-auto">
          {" "}
          <a
            href="https://youtu.be/AJytCG-_sno?list=LL"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="pay"> Pay Now</span>
          </a>
        </button>
        <button className=" font-[default] bg-red-600 active:bg-red-700 transition duration-300 hover:scale-110 w-[60%]  ease-in-out py-3  text-white font-bold tracking-wider text-2xl border-black border mx-auto">
          <span className="empty"> Empty Cart</span>
        </button>
        <div className="box w-full bg-purple-600 flex items-end text-white text-lg justify-evenly pb-4 mt-auto h-[17vh]">
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
    </div>
  );
}
export default Cart;
