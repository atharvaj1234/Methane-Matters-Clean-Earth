import React, { useState, useEffect, useRef } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import { FaRecycle, FaLeaf, FaChartLine } from "react-icons/fa";
import GameSection from './GameSection';

const HeroSection = () => {
  const [sliderPosition, setSliderPosition] = useState(17.34);
  const [currentView, setCurrentView] = useState('hero');
  const [playGameClicked, setPlayGameClicked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = Array.from(container.children);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentView(entry.target.id);
        }
      });
    }, { threshold: 0.6, rootMargin: "-45% 0px -45% 0px" });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const newSliderPosition = (mouseX / container.offsetWidth) * 100;
    setSliderPosition(newSliderPosition);
  };

  const handlePlayGameClick = () => {
    setPlayGameClicked(true);
  };

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto invisible-scrollbar overflow-x-hidden snap-y snap-mandatory">
      {/* Gradient background - transitions to dark theme */}
      <div 
        className={`fixed inset-0 transition-all duration-700 ease-in-out z-0 ${
          playGameClicked 
            ? 'bg-gradient-to-r from-green-800 via-blue-800 to-purple-800' 
            : 'bg-gradient-to-r from-green-500 via-blue-500 to-purple-500'
        }`}
      ></div>

      {/* Hero Section */}
      <section id="hero" className="h-screen w-full snap-start relative">
        <div
          className="slider-container relative w-full h-full overflow-hidden z-10"
          onMouseMove={handleMouseMove}
        >
          <img src={slide1} alt="Polluted Earth" className="absolute top-0 left-0 w-full h-full object-cover" />
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
          <div className="absolute bottom-0 w-full text-center text-white pb-8">
            <h1 className="text-5xl font-bold quicksand tracking-wide">Clean vs. Polluted Earth</h1>
            <p className="text-lg font-light">Slide to see the impact of methane emissions.</p>
          </div>
        </div>
      </section>

      {/* Overlay Section */}
      <section id="overlay" className="h-screen w-full snap-start relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white py-24 px-8 z-20">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-20">Methane Emissions: A Global Challenge</h2>
      <p className="text-lg mb-8">
        Methane emissions contribute significantly to global warming, accounting for about 25% of today's climate change. 
        The good news? We can change that. Simple everyday actions like recycling, reducing food waste, and switching to renewable energy can make a massive difference.
      </p>
      <p className="text-lg mb-8">
        Waste management, agriculture, and fossil fuels are the primary sources of methane. With better practices, we can cut down emissions, slow climate change, and preserve the planet for future generations. 
      </p>
      <p className="text-lg mb-20">
        Imagine a world where waste is transformed into resources, renewable energy powers our lives, and the air is clean. This isn't just a dream—it's achievable. But it requires all of us to take action, starting with small, impactful changes in our daily habits.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <center>
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Food Waste</h3>
          <p className="text-md">
            Rotting food in landfills produces methane. By composting and planning meals, we can reduce the amount of food waste dramatically.
          </p>
        </div>
        </center>
        <center>
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex justify-center flex-col">
          <h3 className="text-2xl font-semibold mb-4">Fossil Fuels</h3>
          <p className="text-md">
            Fossil fuel extraction and burning release vast amounts of methane. Switching to renewable energy like solar and wind can cut emissions in half.
          </p>
        </div>
        </center>
        <center>
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex justify-center flex-col">
          <h3 className="text-2xl font-semibold mb-4">Waste Management</h3>
          <p className="text-md">
            Proper waste management, including recycling and efficient waste disposal, can significantly reduce methane emissions from landfills.
          </p>
        </div>
        </center>
        <center>
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex justify-center flex-col">
          <h3 className="text-2xl font-semibold mb-4">Agriculture</h3>
          <p className="text-md">
            Livestock farming contributes to methane emissions. Reducing meat consumption and supporting sustainable farming practices are key steps.
          </p>
        </div>
        </center>
        
      </div>
    </div>
  </div>
</section>



      {/* Stats Section */}
      <section id="stats" className="h-screen w-full snap-start relative">
        <div className={`absolute inset-0 flex flex-col justify-center text-white py-24 px-8 z-30 transition-all duration-700 ease-in-out ${playGameClicked ? 'transform -translate-y-full opacity-0' : ''}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            {/* Statistic Cards */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
  <FaRecycle className="text-6xl mx-auto text-green-500 mb-4" />
  <h2 className="text-2xl font-semibold mb-8">30% Waste Reduction</h2>
  <p className="text-md font-light">
    Recycling and composting can reduce 30% of the waste that produces methane. Methane is released when organic waste, such as food scraps and yard waste, decomposes in landfills. By diverting these materials to composting, you prevent methane from forming in the first place.
    <br /><br />
    Not only does this help the environment, but compost can also enrich soil, retain moisture, and reduce the need for chemical fertilizers.
  </p>
</div>
<div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
  <FaLeaf className="text-6xl mx-auto text-green-500 mb-4" />
  <h2 className="text-2xl font-semibold mb-8">50% Renewable Energy</h2>
  <p className="text-md font-light">Switching to renewable energy sources like solar, wind, and hydro can cut methane emissions by up to 50%. Fossil fuels release methane during extraction and burning, but renewable energy provides clean alternatives.
    <br /><br />
    By transitioning to these greener energy sources, we not only combat methane emissions but also create a more sustainable energy system for future generations.
  </p>
</div>
<div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
  <FaChartLine className="text-6xl mx-auto text-green-500 mb-4" />
  <h2 className="text-2xl font-semibold mb-8">20% Emissions Cut</h2>
  <p className="text-md font-light">
    Implementing proper waste management could reduce methane emissions by up to 20%. Landfills are one of the largest human-made sources of methane emissions. By reducing waste through recycling, composting, and efficient disposal methods, we can limit the methane produced from decaying organic material.
    <br /><br />
    Modern landfills are also being redesigned to capture methane and convert it into energy, further reducing emissions and providing a renewable energy source.
  </p>
</div>
          </div>

          {/* Call to Action */}
          <div className={`text-center transition-all duration-700 ease-in-out ${playGameClicked ? 'transform translate-y-full opacity-0' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">Take Action, Save the Planet!</h2>
            <p className="text-xl font-light mb-8">
              Your daily choices can significantly impact methane emissions. Start small, think big.
            </p>
            <button
              onClick={handlePlayGameClick}
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Play the Game
            </button>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <div className={`fixed inset-0 flex justify-center items-center z-40 transition-opacity duration-700 ease-in-out ${playGameClicked ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <GameSection onClose={()=>setPlayGameClicked(false)}/>
      </div>
    </div>
  );
};

export default HeroSection;