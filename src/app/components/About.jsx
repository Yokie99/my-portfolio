'use client'
import React from "react";
import Image from "next/image";
import headshot from "../assets/Kyle_Ma_02_CSAS6_Headshots.jpg";


const About = () => {



  return (

    <section id="about" className=" min-h-screen">
      <div className="grid lg:grid-cols-2 mx-6 lg:mx-24 lg:mt-36 ">
        <div className="">
          <h1 className="lg:text-7xl md:text-4xl text-2xl text-white py-3">Kyle, </h1>
          <h2 className="lg:text-5xl md:text-2xl text-lg py-3"> FullStack Developer</h2>
          <div className=" lg:text-lg md:text-md text-sm">
            <p className="pb-6">
            Hello, I'm Kyle Yok Eyh Ma, a full stack developer with expertise in React, JavaScript, and C#. Although my university degree didn't focus on programming, while looking for a career change, I later committed to learning programming by enrolling at CodeStack Academy. I am always up for a challenge and I find excitement in discovering and concuring new challenges!
            </p>
            <p>When I am away from my computer you will be able most likely to find me either coaching the next generation of tennis players in the NorCal Area or riding a motorcycle around town or at the race tracks. </p>
          </div>

        </div>

        <div className="flex justify-center items-center">
          <Image
            className="rounded-full picture"
            src={headshot}
            alt={"Kyle Ma Web Dev"}
          />
        </div>
      </div>

      <div className="text-3xl mt-28 hidden lg:block mx-10">

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

      <div className="lg:hidden black mt-16">
        <div className="flex flex-col  gap-4 text-start mx-[20vw]">
  
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
