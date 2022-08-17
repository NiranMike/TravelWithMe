import React from "react";
import beachVid from "../Assets/t1.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={beachVid}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-[#00000053]"></div>
      <div className="absolute top-0 h-full w-full flex flex-col text-center text-white p-4 justify-center">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top Locations in Africa</h2>
        <form
          className="flex justify-between relative items-center w-full border p-1 
            max-w-[100vh] rounded-md text-black bg-[#f4f4f4f0] mx-auto "
        >
          <div>
            <input
              type="text"
              className="bg-transparent focus:outline-none w-[200px] sm:w-[400px] font-[Poppins]"
              placeholder="Destinations"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
