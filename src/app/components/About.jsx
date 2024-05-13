'use client'
import React from "react";
import Image from "next/image";
import headshot from "../assets/Kyle_Ma_02_CSAS6_Headshots.jpg";


const About = () => {



  return (
   
    <section id="about" className=" min-h-screen">
      <div className="grid lg:grid-cols-2 mx-6 lg:mx-24 mt-36 ">
        <div className="">
          <h1 className="text-7xl text-white py-3">Kyle, </h1>
          <h2 className="text-5xl py-3"> FullStack Developer</h2>
          <div className="text-xl">
             <p className="pb-6">
            Hello, my name is Kyle Yok Eyh Ma. I am a full stack developer with experince in React, JavaScript, and C#. During my time in university I took a couple of programming classes but it was not the core focus of my degree so I never put my full effort into learning how to fully ultilize it. While looking for a career change, I took the chance and commited my time to learning how to properly program by enrolling at CodeStack Academy. I am always up for a challenge and I find excitement in discovering and concuring new challenges!
          </p>
          <p>When I am away from my computer you will be able most likely to find me either coaching the next generation of tennis players in the NorCal Area or riding a motorcycle around town or at the race tracks. </p>
          </div>
         
        </div>

        <div className="flex justify-center items-start">
          <Image
            className=" rounded-full"
            src={headshot}
            alt={"Kyle Ma Web Dev"}
            height={450}
          />
        </div>
      </div>

      <div className="text-3xl mt-40  ">

        <div className="flex flex-row gap-12 justify-center">

          <div>
            <h1>Libraries:</h1>

            <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          </div>

          <div>
            <h1>Languages:</h1>
            <div className="flex flex-row gap-2">
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />

              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" /></div>
          </div>

          <div className="">
            <h1>Frameworks:</h1>
            <div className="flex flex-row gap-2">
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />

              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />

            </div>
          </div>
          <div className="">
            <h1>Productivity:</h1>
            <div className="flex flex-row gap-2">
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
            </div>
          </div>


        </div>
      </div>
    </section>
   
  );
};

export default About;
