import { React, useRef, useState } from "react";
import { questionArray as questionsArray } from "../utils/questionsDataset";

function Question() {
  const questionButtonClass =
    "lg:m-1 sm:m-1 xs:m-1 lg: xs:h-[4vh] xs:w-[4vw] sm:h-[5vh] lg:h-[5vh] w-[4vw] border-solid border-2 border-black rounded-lg flex justify-center items-center font-bold lg:text-l sm:text-xl xs:text-l bg-gray-400 cursor-pointer xs:p-1 ";

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [questionArray, setQuestionArray] = useState(questionsArray);
  const [isVisited, setIsVisited] = useState(false);

  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  const renderButton = (buttonNumber) => {
    const isVisited = false;
    let buttonStyle = questionButtonClass;
    if (isVisited) {
      buttonStyle += " bg-green-400";
    } else {
      buttonStyle += " bg-gray-400";
    }
    console.log(questionArray[buttonNumber]);
    return (
      <div
        className={buttonStyle}
        onClick={() => {
          setActiveQuestion(buttonNumber - 1);
        }}
      >
        {buttonNumber}
      </div>
    );
  };

  const renderRow = (start) => {
    return (
      <div className="flex m-4 justify-center">
        {buttons.slice(start, start + 5).map(renderButton)}
      </div>
    );
  };

  return (
    <div className="flex">
      <div className="xs:w-[65vw] lg:w-[85vw]">
        <div className=" h-[60vh] bg-neutral-300 shadow-xl shadow-gray-500 p-2 ml-4 mr-2 mb-4 mt-10 lg:text-2xl sm:text-sm font-bold leading-relaxed flex-column">
          <div className="flex justify-start pl-6">
            <h1 className="m-1">Q{activeQuestion + 1}: </h1>
            <div
              className="flex justify-between w-full m-1"
              id="question-container"
            >
              {questionArray[activeQuestion].question}
            </div>
          </div>

          <div className="flex-column w-full mt-20">
            <div className="flex justify-center">
              <div className="border-solid border-2 flex items-center justify-center bg-gray-200 font-bold text-2xl border-black w-[550px] h-16 rounded-lg m-4 cursor-pointer hover:bg-slate-950 hover:text-white">
                {questionArray[activeQuestion].options[0]}
              </div>
              <div className="border-solid border-2  flex items-center justify-center bg-gray-200 font-bold text-2xl border-black w-[550px] h-16 rounded-lg m-4 cursor-pointer hover:bg-slate-950 hover:text-white">
                {questionArray[activeQuestion].options[1]}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border-solid border-2 flex items-center justify-center bg-gray-200 font-bold text-2xl border-black w-[550px] h-16 rounded-lg m-4 cursor-pointer hover:bg-slate-950 hover:text-white">
                {questionArray[activeQuestion].options[2]}
              </div>
              <div className="border-solid border-2 flex items-center justify-center bg-gray-200 font-bold text-2xl border-black w-[550px] h-16 rounded-lg m-4 cursor-pointer hover:bg-slate-950 hover:text-white">
                {questionArray[activeQuestion].options[3]}
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-neutral-300 ml-4 mr-2 h-[18vh] m-2 flex items-center justify-evenly shadow-xl shadow-gray-500">
          <button
            type="button"
            className=" m-2 inline-block rounded font-bold bg-success w-[10vw] pb-2 pt-2.5 lg:text-2xl sm:text-sm uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-xl shadow-black"
          >
            Save
          </button>
          <button
            type="button"
            className=" m-2 inline-block rounded bg-primary w-[10vw] pb-2 pt-2.5 lg:text-2xl sm:text-sm  font-bold uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-xl shadow-black"
            onClick={() => {
              setActiveQuestion(activeQuestion + 1);
            }}
          >
            Next
          </button>
          <button
            type="button"
            className=" m-2 inline-block rounded bg-danger w-[10vw] pb-2 pt-2.5 lg:text-2xl sm:text-sm  font-bold uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] shadow-xl shadow-black"
          >
            Clear
          </button>
        </div>
      </div>
      <div className=" shadow-xl shadow-gray-500 xs:w-[30vw] sm:w-[30vw] lg:w-[15vw] h-[80vh] bg-neutral-300 p-2 mr-4 ml-2 mb-4 mt-10 text-base font-light leading-relaxed flex-column ">
        <div className="flex-column mt-8 ">
          <div className="flex-column justify-center">
            <div className="m-4 p-2 lg:h-[6vh] lg:w-[13vw] bg-neutral-100 flex items-center rounded-xl ">
              <div className="h-[40px] w-[40px] bg-yellow-400 rounded-full m-2"></div>
              <p className="lg:text-xl sm:text-xs xs:text-xs">Visited</p>
            </div>
            <div className="m-4 p-2 lg:h-[6vh] lg:w-[13vw] bg-neutral-100 flex items-center rounded-xl ">
              <div className=" h-[40px] w-[40px] bg-green-800 rounded-full m-2"></div>
              <p className="lg:text-xl sm:text-xs xs:text-xs">Answered</p>
            </div>
            <div className="m-4 p-2 lg:h-[6vh] lg:w-[13vw] bg-neutral-100 flex items-center rounded-xl ">
              <div className=" h-[40px] w-[40px] bg-red-800 rounded-full m-2"></div>
              <p className="lg:text-xl sm:text-xs xs:text-xs">Not-Answered</p>
            </div>
            <div className="m-4 p-2 lg:h-[6vh] lg:w-[13vw] bg-neutral-100 flex items-center rounded-xl mb">
              <div className=" h-[40px] w-[40px] bg-gray-400 rounded-full m-2"></div>
              <p className="lg:text-xl sm:text-xs xs:text-xs">Not-Visited</p>
            </div>
          </div>
        </div>
        <div className="flex-column">
          <div className="flex-column mt-28">
            {renderRow(0)}
            {renderRow(5)}
            {renderRow(10)} 
            {renderRow(15)}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Question;
