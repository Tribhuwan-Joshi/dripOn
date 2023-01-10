import drip from "../assets/dripGoku.jpg";
import { Link } from "react-router-dom";
const TextInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl min-w-[300px] md:text-[45px] md:leading-normal bold w-[70%] font-semibold text-center">
        GET THE REAL DRIP THAT DEFINES YOU !{" "}
      </h1>
      <br />
      <Link to="/shop" className="min-w-[100px]">
        <button className="border transition hover:scale-125 duration-300 ease-in-out border-black text-2xl p-4 hover:text-white hover:bg-[#321F28]  min-w-[100px] mx-auto ">
          {" "}
          Buy Now
        </button>
      </Link>
    </div>
  );
};

const Home = () => (
  <>
    <div className="flex bg-red-200 flex-1 font-['Cinzel'] tracking-wider  font-semibold">
      <TextInfo />
      <img
        src={drip}
        alt="drip"
        className="h-[60%] md:h-[90%] self-center  ml-auto "
      />
    </div>
  </>
);
export default Home;
