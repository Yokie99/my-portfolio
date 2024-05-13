"use client";
import React, { useState } from "react";
import ProjectToggle from "./ProjectToggle"


const Projects = () => {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [btnNumber, setBtnNumber] = useState(1);

  const buttonStyles1 = isSelected1
    ? "text-white border-primary-500"
    : "text-blue-500 border-slate-600 hover:border-white";
  const buttonStyles2 = isSelected2
    ? "text-white border-primary-500"
    : "text-blue-500 border-slate-600 hover:border-white";
  const buttonStyles3 = isSelected3
    ? "text-white border-primary-500"
    : "text-blue-500 border-slate-600 hover:border-white";

  const handleBtnClick = (arg) => {
    switch (arg) {
      case 1:
        setIsSelected1(true);
        setIsSelected2(false);
        setIsSelected3(false);
        setBtnNumber(1)
        break;
      case 2:
        setIsSelected1(false);
        setIsSelected2(true);
        setIsSelected3(false);
        setBtnNumber(2)
        break;
      case 3:
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(true);
        setBtnNumber(3)
        break;
      default:
        break;
    }
  };
  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="flex justify-center">
        <h1 className="text-5xl">Projects</h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 py-6 ">
        <button
          className={`${buttonStyles1} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
          onClick={() => handleBtnClick(1)}
        >
          PokeDex Project
        </button>
        <button
          className={`${buttonStyles2} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
          onClick={() => handleBtnClick(2)}
        >
          Court Monitor
        </button>
        <button
          className={`${buttonStyles3} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
          onClick={() => handleBtnClick(3)}
        >
          All For One API Challenge
        </button>
      </div>

      <ProjectToggle toggle={btnNumber}/>
    </section>
  );
};

export default Projects;
