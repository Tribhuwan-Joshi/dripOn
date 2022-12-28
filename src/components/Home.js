import drip from "../assets/dripGoku.jpg";

const Home = () => (
  <>
    <div className="flex font-['Cinzel']  font-semibold">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[50px] bold w-[70%] text-center">
          GET THE REAL DRIP THAT DEFINES YOU !{" "}
        </h1>
        <br />
        <button className="border border-black text-2xl p-4 hover:text-white hover:bg-gray-500 w-[20%] min-w-[100px] mx-auto ">
          {" "}
          Buy Now
        </button>
      </div>

      <img src={drip} alt="drip" className="h-full ml-auto" />
    </div>
  </>
);
export default Home;
