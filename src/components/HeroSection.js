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
      <section id="overlay" className="h-screen w-full snap-start relative">
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white py-24 px-8 z-20">
    <div className="max-w-5xl text-center space-y-8">
      <h2 className="text-5xl font-extrabold mb-4 leading-tight animate-pulse">
        Methane Emissions: A Global Challenge
      </h2>
      {/* <p className="text-lg md:text-xl font-light tracking-wide mb-6">
        Methane emissions are among the top contributors to global warming, yet they often go unnoticed.
        It’s time to take action and reverse the damage before it’s too late. Every step we take matters!
      </p> */}
      <p className="text-xl font-light mb-8">
        Methane emissions contribute significantly to global warming, accounting for about 25% of today's climate change. 
        <br/>The good news? We can change that. Simple everyday actions like recycling, reducing food waste, and switching to renewable energy can make a massive difference.
      </p>
      <p className="text-lg mb-8">
        Waste management, agriculture, and fossil fuels are the primary sources of methane. With better practices, we can cut down emissions, slow climate change, and preserve the planet for future generations. 
      </p>
      <div className="flex justify-center space-x-8">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-2">Reduce Food Waste</h3>
          <p className="text-sm">
            Simple habits like meal planning and composting can lower methane emissions from landfills.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-2">Support Clean Energy</h3>
          <p className="text-sm">
            Transitioning to renewable energy reduces the need for methane-emitting fossil fuels.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-2">Recycle Responsibly</h3>
          <p className="text-sm">
            Proper waste management and recycling prevent methane from building up in landfills.
          </p>
        </div>
      </div>

      <p className="text-base md:text-lg mt-10 italic">
        Imagine a world where waste is transformed into resources, renewable energy powers our lives, and the air is clean. This isn't just a dream—it's achievable. But it requires all of us to take action, starting with small, impactful changes in our daily habits.
        <br/>The time to act is now.
      </p>
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
              <h2 className="text-2xl font-semibold mb-2">30% Waste Reduction</h2>
              <p className="text-md font-light">
                Recycling and composting can reduce 30% of the waste that produces methane.
              </p>
            </div>
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
              <FaLeaf className="text-6xl mx-auto text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">50% Renewable Energy</h2>
              <p className="text-md font-light">
                Switching to renewable energy sources could cut methane emissions by up to 50%.
              </p>
            </div>
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
              <FaChartLine className="text-6xl mx-auto text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">20% Emissions Cut</h2>
              <p className="text-md font-light">
                Implementing proper waste management could reduce methane emissions by up to 20%.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center transition-all duration-700 ease-in-out ${playGameClicked ? 'transform translate-y-full opacity-0' : ''}`}>
            <h2 className="text-4xl font-bold mb-4 quicksand">Take Action, Save the Planet!</h2>
            <p className="text-lg font-light mb-8">
            We have created a small game which will help you learn simple yet powerful actions we can take to reduce methane emissions.<br/> As you go through a series of helpful tips, you'll face questions about your daily habits. <br/>For every correct answer, you'll help clean up our planet, reducing the waste and garbage in the landscape. <br/>But be careful—wrong answers will add to the pollution! <br/>Let's take action and save the planet!"
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