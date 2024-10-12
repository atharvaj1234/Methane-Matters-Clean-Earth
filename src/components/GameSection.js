import React, { useState } from "react";
import garimage1 from "../assets/garbage/1.png";
import garimage2 from "../assets/garbage/2.png";
import garimage3 from "../assets/garbage/3.png";
import garimage4 from "../assets/garbage/4.png";
import garimage5 from "../assets/garbage/5.webp";
import land from "../assets/land.jpg";

const garbage = [
  garimage1,
  garimage2,
  garimage3,
  garimage4,
  garimage5,
  garimage3,
  garimage4,
  garimage1,
  garimage5,
  garimage3,
  garimage5,
  garimage3,
  garimage4,
  garimage1,
  garimage2,
  garimage5,
  garimage3,
  garimage2,
  garimage4,
  garimage1,
  garimage3,
  garimage4,
  garimage1,
  garimage5,
  garimage3,
  garimage5,
];

const statements = [
  "Methane emissions from livestock can be reduced by improving the diet of animals to minimize waste gases.",
  "Capturing methane emissions from landfills can be turned into energy, reducing the harmful impact on the environment.",
  "Using LED light bulbs instead of traditional incandescent bulbs helps lower methane emissions from power generation.",
  "Buying locally grown food reduces the need for transportation and cuts down on methane emissions.",
  "Methane emissions can be reduced by managing agricultural waste through composting and other organic waste treatments.",
  "Sealing leaks in natural gas lines helps reduce methane emissions from the energy sector.",
  "Methane emissions from rice paddies can be reduced through alternate wetting and drying practices.",
  "Switching to plant-based diets can significantly reduce methane emissions from livestock farming.",
  "Using bioenergy with carbon capture and storage (BECCS) can reduce methane emissions from organic waste materials.",
  "Using less air conditioning and heating can reduce energy consumption, thus lowering methane emissions.",
  "Increasing forest cover through reforestation can help capture methane and reduce its concentration in the atmosphere.",
  "Improving waste management systems in urban areas can reduce methane emissions from decaying organic materials.",
  "Installing methane-capture systems in wastewater treatment plants can reduce emissions.",
  "Supporting sustainable farming practices can help reduce methane emissions from crop and livestock production.",
  "Retrofitting buildings to be more energy-efficient helps cut methane emissions from heating and cooling systems.",
  "Encouraging companies to monitor and report methane leaks in oil and gas operations can significantly reduce emissions.",
  "Adopting regenerative farming practices helps restore soil health and reduce methane emissions from agriculture.",
  "Promoting the use of electric vehicles helps lower methane emissions from fossil fuel combustion.",
  "Implementing no-till farming practices can reduce methane emissions from soil disturbance.",
  "Switching to energy sources like hydropower or geothermal energy helps reduce methane emissions from traditional fuels.",
];

const questions = [
  {
    question: "How can methane emissions from livestock be reduced?",
    options: ["Feed them more corn", "Improve their diet", "Let them graze freely"],
    correct: 1,
  },
  {
    question: "What can be done with methane emissions from landfills?",
    options: ["Turn it into energy", "Release it into the air", "Bury it underground"],
    correct: 0,
  },
  {
    question: "Which lighting option helps lower methane emissions from power generation?",
    options: ["LED light bulbs", "Halogen lights", "Incandescent bulbs"],
    correct: 0,
  },
  {
    question: "How can buying locally grown food reduce methane emissions?",
    options: ["Reduces transportation needs", "Increases packaging", "Requires more refrigeration"],
    correct: 0,
  },
  {
    question: "What is a method for reducing methane emissions from agricultural waste?",
    options: ["Burn it", "Compost it", "Throw it in landfills"],
    correct: 1,
  },
  {
    question: "What action helps reduce methane leaks from natural gas lines?",
    options: ["Ignore small leaks", "Seal the leaks", "Increase gas pressure"],
    correct: 1,
  },
  {
    question: "How can methane emissions from rice paddies be reduced?",
    options: ["Use alternate wetting and drying", "Flood the paddies constantly", "Plant more rice"],
    correct: 0,
  },
  {
    question: "Which dietary change can significantly reduce methane emissions?",
    options: ["Eat more beef", "Increase dairy consumption", "Switch to plant-based diets"],
    correct: 2,
  },
  {
    question: "What technology can reduce methane emissions from organic waste materials?",
    options: ["Landfill disposal", "Bioenergy with carbon capture and storage (BECCS)", "Carbon capture"],
    correct: 1,
  },
  {
    question: "How can using less air conditioning and heating help reduce methane emissions?",
    options: ["Reduces energy consumption", "Has no effect", "Increases energy use"],
    correct: 0,
  },
  {
    question: "How does reforestation help reduce methane emissions?",
    options: ["By using fertilizers", "By cutting down trees", "By capturing methane in the atmosphere"],
    correct: 2,
  },
  {
    question: "How can urban waste management improvements help reduce methane emissions?",
    options: ["Ignore waste", "Improve organic waste disposal", "Build more landfills"],
    correct: 1,
  },
  {
    question: "What can wastewater treatment plants install to reduce methane emissions?",
    options: ["Methane-capture systems", "Incinerators", "Water filters"],
    correct: 0,
  },
  {
    question: "Which farming practice helps reduce methane emissions?",
    options: ["Sustainable farming practices", "Monocropping", "Increase chemical fertilizers"],
    correct: 0,
  },
  {
    question: "How can retrofitting buildings help reduce methane emissions?",
    options: ["Add more windows", "Increase insulation", "Make them more energy-efficient"],
    correct: 2,
  },
  {
    question: "How can oil and gas companies reduce methane emissions?",
    options: ["Increase gas extraction", "Monitor and report leaks", "Ignore methane leaks"],
    correct: 1,
  },
  {
    question: "Which farming practice can reduce methane emissions from agriculture?",
    options: ["Use more synthetic fertilizers", "Conventional plowing", "Regenerative farming"],
    correct: 2,
  },
  {
    question: "How can the use of electric vehicles reduce methane emissions?",
    options: ["Reduce fossil fuel combustion", "Increase gas station demand", "Increase fuel consumption"],
    correct: 0,
  },
  {
    question: "What farming practice helps reduce methane emissions from soil disturbance?",
    options: ["Burn the crops", "Use no-till farming", "Plow the fields constantly"],
    correct: 1,
  },
  {
    question: "Which energy sources can help reduce methane emissions?",
    options: ["Natural gas", "Coal and oil", "Hydropower or geothermal energy"],
    correct: 2,
  },
];


const GameSection = ({ onClose }) => {
  const [currentStatement, setCurrentStatement] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [userFailed, setUserFailed] = useState(false);
  const [userWin, setUserWin] = useState(false);
  const [garbageCount, setGarbageCount] = useState(9);

  const handleAnswer = (index) => {
    setUserAnswer(index);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      setGarbageCount(Math.max(garbageCount - 1, 0)); // Reduce garbage
      if (garbageCount <= 1) setUserWin(true);
    } else {
      setGarbageCount(Math.min(garbageCount + 1, 21)); // Increase garbage
      if (garbageCount > 18) setUserFailed(true);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentStatement(currentStatement + 1);
      } else {
        setGameFinished(true);
      }
      setUserAnswer(null);
    }, 1000);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Land section (60% of screen height) */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${land})`,
            maskImage: 'linear-gradient(to bottom, black 80%, rgb(132 204 22) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, rgb(132 204 22) 100%)'
          }}
        >
          {/* Garbage */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-start p-4 min-h-[450px]">
            {[...Array(garbageCount)].map((_, idx) => (
              <img
                key={idx}
                src={garbage[idx]}
                alt="Garbage"
                className="w-[200px] h-[200px] m-1"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Game content section (40% of screen height) */}
      <div className="absolute z-20 right-5 top-5 bg-red-500 pl-5 pr-5 pt-3 pb-3 rounded-3xl text-white cursor-pointer" onClick={() => onClose()}>X</div>
      <div className="flex-grow flex justify-center bg-gradient-to-b from-[#60cd1c] to-green-500 p-4 z-10">
        <div className="bg-gray-700 min-w-[1280px] rounded-lg shadow-md p-4 mt-[-2rem]">
          {!gameFinished && !userFailed && !userWin ? (
            <>
              {/* Display Hint */}
              <div className="mb-8 p-4 bg-gray-600 text-xl text-center text-white rounded">
                <p>For each question, choose the option that best reflects your daily actions. <br/>Correct answers will help reduce the garbage in our illustrated landscape, while incorrect answers will add to it.<br/> Let's see how your choices impact the environment!</p>
              </div>

              {/* Display Question */}
              <h2 className="text-3xl text-center mb-4 font-semibold text-white quicksand">
                {questions[currentQuestion].question}
              </h2>

              {/* Display Options */}
              <div className="flex flex-col space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`ml-4 mr-4 py-2 px-4 rounded-md font-semibold text-xl text-white quicksand ${
                      userAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? "bg-green-500"
                          : "bg-red-600"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                    disabled={userAnswer !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="mt-8 mr-2 ml-2 p-3 bg-gray-600 text-lg text-center text-white rounded">
                <p>Hint: {statements[currentStatement]}</p>
              </div>
            </>
          ) : gameFinished ? (
            <div className="text-center text-white"> 
              <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
              <p>Your score: {score}/{questions.length}</p>
              <p>Garbage remaining: {garbageCount}</p>
            </div>
          ) : userWin ? (
            <div className="text-center text-white">
              <p className="font-semibold">Yay!! You cleaned the GreenLand</p>
            </div>
          ) : (
            <div className="text-center text-white">
              <p className="font-semibold">
                Game Over!! You Polluted the whole GreenLand
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSection;