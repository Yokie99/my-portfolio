import React from "react";
import Image from "next/image";
import headshot from "../assets/Kyle_Ma_02_CSAS6_Headshots.jpg";

const About = () => {



  return (
    <section id="about" className=" min-h-screen">
      <div className="grid lg:grid-cols-2 mx-6 lg:mx-24 mt-36 ">
        <div className="">
          <h1 className="text-7xl text-white py-3">Kyle, </h1>
          <h2 className="text-5xl py-3"> Junior FullStack Developer</h2>
          <p className="text-xl">
            Hello, my name is Kyle Yok Eyh Ma. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi laborum quaerat vero quisquam,
            nulla enim soluta harum facilis repellat perspiciatis at provident
            maiores? Voluptatem quo ab inventore, voluptatibus dolore enim?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            necessitatibus sint eos dolorum cumque, sapiente enim delectus optio
            nihil est, atque perspiciatis ducimus, porro at? Aliquid illum
            inventore eveniet ea.
          </p>
        </div>

        <div className="flex justify-center items-start">
          <Image
            className=" rounded-full"
            src={headshot}
            alt={"Kyle Ma Web Dev"}
            height={380}
          />
        </div>
      </div>

      <div className="text-3xl mt-48  ">

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
