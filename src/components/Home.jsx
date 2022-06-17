import React from "react";
import delivery from "../img/delivery.png";
import heroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
function Home() {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={delivery}
              alt="delivery"
              className="w-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centurie
        </p>
        <button
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          type="button"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 relative">
        <img
          src={heroBg}
          alt="hero"
          className="top-0 right-16 h-420 w-full lg:w-auto lg:h-685 ml-auto"
        />
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((item) => {
              const { id, name, desc, imageSrc, price } = item;
              return (
                <div
                  className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                  key={id}
                >
                  <img src={imageSrc} alt={imageSrc} className=" w-20 lg:w-40 -mt-10 lg:-mt-20" />
                  <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                    {name}
                  </p>
                  <p className="text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                    {desc}
                  </p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span>
                    {price}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Home;
