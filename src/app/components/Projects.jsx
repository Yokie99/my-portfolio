"use client";
import React, { useState } from "react";
import Image from "next/image";
import pokemonSS from "../assets/pokemon_Screencap.png";

const Projects = () => {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [btnNumber, setBtnNumber] = useState(0);

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
        break;
      case 2:
        setIsSelected1(false);
        setIsSelected2(true);
        setIsSelected3(false);
        break;
      case 3:
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(true);
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
          Project 1
        </button>
        <button
          className={`${buttonStyles3} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
          onClick={() => handleBtnClick(3)}
        >
          Project 1
        </button>
      </div>

      <div className="grid grid-cols-7">
        <div className="col-span-5 transition-transform duration-300 transform-gpu hover:scale-90 bg-blue-600 pe-4 pt-4 pb-4">
          <a
            href="https://pokemonreactrebuild.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="cursor-pointer "
              src={pokemonSS}
              alt={"preview of pokemon react project"}
            />
          </a>
        </div>
        <div className="projDes p-3 top-20 right-10 flex  items-center col-span-2">
          <div>
            <h1 className="text-4xl py-3">PokeDex</h1>
            <h2>
              React project utilizing the Pokemon API to call fetch its data.
              Local storge used to save favorites.
            </h2>
            <p>Built with:</p>
            <div className="grid grid-cols-4 gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
