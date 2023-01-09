import github from "../assets/github.png"

function Cart() {
  return (
    <div className="bg-[#ee9e9e] flex-1 flex">
      <div className="cart-items flex-1 p-4 bg-purple-500">
        <h1 className="text-4xl font-mono font-semibold text-center text-white">
          Your Cart Items
        </h1>
      </div>
      <div className="w-[25vw] bg-gray-200  flex flex-col pt-4 gap-12 shadow-lg h-full shadow-gray-700">
        <h1 className="text-4xl text-center underline underline-offset-4 font-semibold mt-4">
          {" "}
          Net Amount
        </h1>
        <h1 className="text-2xl font-semibold w-max mx-auto break-words">
          $ 20000
        </h1>
        <button className=" bg-green-600 active:bg-green-700  transition duration-300   hover:scale-110 ease-in-out w-[70%] py-3 text-white tracking-wider font-bold text-2xl border-black border mx-auto">
          {" "}
          <span className="pay"> Pay Now</span>
        </button>
        <button className=" bg-red-600 active:bg-red-700 transition duration-300 hover:scale-110 w-[70%]  ease-in-out py-3  text-white font-bold tracking-wider text-2xl border-black border mx-auto">
          <span className="empty"> Empty Cart</span>
        </button>
        <div className="bg-black mt-auto flex items-center justify-center  h-[15vh] text-white">Lorem Ispeum</div>
      </div>
    </div>
  );
}
export default Cart;
