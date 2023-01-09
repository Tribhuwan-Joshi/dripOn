import github from "../assets/github.png";

function Cart() {
  return (
    <div className="flex-1 flex">
      <div className="cart-items flex-1 p-4 bg-purple-100">
        <h1 className="text-4xl font-mono font-semibold text-center ">
          Your Cart Items
        </h1>
      </div>
      <div className="w-[25vw] bg-gray-200  flex flex-col pt-4 gap-12 shadow-lg h-full shadow-gray-700">
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
