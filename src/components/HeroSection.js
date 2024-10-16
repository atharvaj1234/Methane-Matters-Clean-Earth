import React, { useState, useEffect, useRef } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import { FaRecycle, FaLeaf, FaChartLine } from "react-icons/fa";
import GameSection from "./GameSection";

const HeroSection = () => {
  const [sliderPosition, setSliderPosition] = useState(17.34);
  // eslint-disable-next-line
  const [currentView, setCurrentView] = useState("hero");
  const [playGameClicked, setPlayGameClicked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = Array.from(container.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentView(entry.target.id);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const newSliderPosition = (mouseX / container.offsetWidth) * 100;
    setSliderPosition(newSliderPosition);
  };

  const handlePlayGameClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    if (isMobile) {
      alert("The game is not supported on mobile devices.");
    } else {
      setPlayGameClicked(true);
    }
  };  

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto invisible-scrollbar overflow-x-hidden snap-y snap-mandatory"
    >
      {/* Gradient background */}
      <div
        className={`fixed inset-0 transition-all duration-700 ease-in-out z-0 ${
          playGameClicked
            ? "bg-gradient-to-r from-green-800 via-blue-800 to-purple-800"
            : "bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
        }`}
      ></div>

      {/* Hero Section */}
      <section id="hero" className="h-[100vh] w-full snap-start relative">
        <div
          className="slider-container relative w-full h-full overflow-hidden z-10"
          onMouseMove={handleMouseMove}
        >
          <img
            src={slide1}
            alt="Polluted Earth"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <img
            src={slide2}
            alt="Clean Earth"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          />
          <div
            className="absolute top-0 h-full bg-gray-800"
            style={{ left: `${sliderPosition}%`, width: "3px" }}
          />
          <div className="absolute bottom-8 md:bottom-0 w-full text-center text-white pb-8">
            <h1 className="text-4xl md:text-5xl font-bold quicksand tracking-wide">
              Clean vs. Polluted Earth
            </h1>
            <p className="text-base md:text-lg font-light">
              Slide to see the impact of methane emissions.
            </p>
          </div>
        </div>
      </section>

      {/* Overlay Section */}
      <section id="overlay" className="h-[100vh] w-full snap-start relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white py-8 px-4 md:py-24 md:px-8 z-20">
          <div className="max-w-5xl text-center space-y-4 md:space-y-8">
            <h2 className="text-2xl md:text-5xl font-extrabold mb-2 md:mb-8 leading-tight animate-pulse">
              Methane Emissions: A Global Challenge
            </h2>
            <p className="text-sm md:text-xl font-light">
              Methane emissions contribute significantly to global warming,
              accounting for about 25% of today's climate change. The good news?
              We can change that. Simple everyday actions like recycling,
              reducing food waste, and switching to renewable energy can make a
              massive difference.
            </p>
            <p className="text-xs md:text-lg">
              Waste management, agriculture, and fossil fuels are the primary
              sources of methane. With better practices, we can cut down
              emissions, slow climate change, and preserve the planet for future
              generations.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <center>
                <div className="bg-white bg-opacity-20 p-2 md:p-6 rounded-lg shadow-lg max-w-xs">
                  <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">
                    Reduce Food Waste
                  </h3>
                  <p className="text-xs md:text-sm">
                    Simple habits like meal planning and composting can lower
                    methane emissions from landfills.
                  </p>
                </div>
              </center>{" "}
              <center>
                <div className="bg-white bg-opacity-20 p-2 md:p-6 rounded-lg shadow-lg max-w-xs">
                  <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">
                    Support Clean Energy
                  </h3>
                  <p className="text-xs md:text-sm">
                    Transitioning to renewable energy reduces the need for
                    methane-emitting fossil fuels.
                  </p>
                </div>
              </center>{" "}
              <center>
                <div className="bg-white bg-opacity-20 p-2 md:p-6 rounded-lg shadow-lg max-w-xs">
                  <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">
                    Recycle Responsibly
                  </h3>
                  <p className="text-xs md:text-sm">
                    Proper waste management and recycling prevent methane from
                    building up in landfills.
                  </p>
                </div>
              </center>
            </div>
            <p className="text-xs md:text-lg mt-4 md:mt-8 italic">
              Imagine a world where waste is transformed into resources,
              renewable energy powers our lives, and the air is clean. This
              isn't just a dream—it's achievable. But it requires all of us to
              take action, starting with small, impactful changes in our daily
              habits.
              <br />
              The time to act is now.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="h-[100vh] w-full snap-start relative">
        <div
          className={`absolute inset-0 flex flex-col justify-center text-white py-8 px-4 md:py-24 md:px-8 z-30 transition-all duration-700 ease-in-out ${
            playGameClicked ? "transform -translate-y-full opacity-0" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center mb-4 md:mb-12">
            {/* Statistic Cards */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-4 md:p-8 transform transition duration-500 hover:scale-105">
              <FaRecycle className="text-2xl md:text-6xl mx-auto text-green-500 mb-2 md:mb-4" />
              <h2 className="text-base md:text-2xl font-semibold mb-1 md:mb-2">
                30% Waste Reduction
              </h2>
              <p className="text-xs md:text-md font-light">
                Recycling and composting can reduce 30% of the waste that
                produces methane. Methane is released when organic waste
                decomposes in landfills. Divert these materials to composting to
                prevent methane from forming.
              </p>
            </div>
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-4 md:p-8 transform transition duration-500 hover:scale-105">
              <FaLeaf className="text-2xl md:text-6xl mx-auto text-green-500 mb-2 md:mb-4" />
              <h2 className="text-base md:text-2xl font-semibold mb-1 md:mb-2">
                50% Renewable Energy
              </h2>
              <p className="text-xs md:text-md font-light">
                Switching to renewable energy sources could cut methane
                emissions by up to 50%. Fossil fuels release methane during
                extraction and burning. Renewable energy like solar and wind
                reduce reliance on methane-producing fuels.
              </p>
            </div>
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-4 md:p-8 transform transition duration-500 hover:scale-105">
              <FaChartLine className="text-2xl md:text-6xl mx-auto text-green-500 mb-2 md:mb-4" />
              <h2 className="text-base md:text-2xl font-semibold mb-1 md:mb-2">
                20% Emissions Cut
              </h2>
              <p className="text-xs md:text-md font-light">
                Proper waste management could reduce methane emissions by up to
                20%. Implement practices like recycling and composting to manage
                waste responsibly.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center transition-all duration-700 ease-in-out ${
              playGameClicked ? "transform translate-y-full opacity-0" : ""
            }`}
          >
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 quicksand">
              Take Action, Save the Planet!
            </h2>
            <p className="text-xs md:text-lg font-light mb-4 md:mb-6">
              We have created a small game which will help you learn simple yet
              powerful actions we can take to reduce methane emissions.
            </p>
            <button
              onClick={handlePlayGameClick}
              className="inline-block bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-full text-sm md:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Play the Game
            </button>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <div
        className={`fixed inset-0 flex justify-center items-center z-40 transition-opacity duration-700 ease-in-out ${
          playGameClicked ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <GameSection onClose={() => setPlayGameClicked(false)} />
      </div>
    </div>
  );
};

export default HeroSection;
