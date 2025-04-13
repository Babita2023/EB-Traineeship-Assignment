import React from "react";
import HeroImg from "../../assets/image/hero.png";
function Hero() {

  
  return (
    <div>
      <section className="bg-[#121D2D] py-1">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side Text */}
          <div className="flex-1">
            <h1 className="text-3xl mt-4 md:block md:text-5xl font-bold text-white mb-6">
              Get instant cash <br /> flow with invoice <br />
              factoring
            </h1>
            <p className="text-xs text-white mb-6">
              Why wait? Get same day funding and a faster way to access cash
              flow.
            </p>
            <a
              href="#task-manager"
              className="inline-block bg-white text-blue-600 px-5 py-2 rounded-3xl text-md hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>

          <div className="flex-1">
            <img
              src={HeroImg}
              alt="Task Management"
              className="w-full max-w-md mx-auto hidden md:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
