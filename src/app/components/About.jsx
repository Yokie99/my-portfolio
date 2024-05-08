import React from "react";
import Image from "next/image";
import headshot from "../assets/Kyle_Ma_02_CSAS6_Headshots.jpg";

const About = () => {
  return (
    <section id="about" className=" min-h-screen">
      <div className="grid grid-cols-2 mx-20 mt-20 px-8 pb-4 py-20">
        <div className="p-5">
          <h1 className="text-7xl text-white py-3">Kyle, </h1>
          <h2 className="text-5xl py-3"> Junior FullStack Developer</h2>
          <p>
            Hello, my name is Kyle Yok Eyh Ma. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi laborum quaerat vero quisquam,
            nulla enim soluta harum facilis repellat perspiciatis at provident
            maiores? Voluptatem quo ab inventore, voluptatibus dolore enim?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            necessitatibus sint eos dolorum cumque, sapiente enim delectus optio
            nihil est, atque perspiciatis ducimus, porro at? Aliquid illum
            inventore eveniet ea.
          </p>

          <div className="mt-24">
          <h1>Skills:</h1>
          <div className="grid grid-cols-4 gap-3">
            <div className="icons">
              <h1>Languages:</h1>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            </div>

            <div className="icons">
              <h1>Productivity</h1>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
            </div>

            <div className="icons">
              <h1>Frameworks</h1>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
        
            </div>

            <div className="icons">
              <h1>Libraries</h1>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </div>

            
          </div>
        </div>
        </div>

        

        <div className="flex justify-center">
          <Image
            className=" rounded-full"
            src={headshot}
            alt={"Kyle Ma Web Dev"}
            height={600}
          />
        </div>

        
      </div>
    </section>
  );
};

export default About;
