import React from 'react'
import Image from "next/image";
import pokemonSS from "../assets/pokemon_Screencap.png";
import courtmonitor from "../assets/courtmonitor.png"
import miniquest from "../assets/miniquest.png"

const ProjectToggle = (props) => {
    const { toggle } = props


    switch (toggle) {
        case 1:
            return (
                <div className="grid grid-cols-12">
                    <div className="col-span-7 transition-transform duration-300 transform-gpu hover:scale-90 pe-8  bg-blue-600 pt-8 pb-8">
                        <a
                            href="https://pokemonreactrebuild.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <Image
                                className="cursor-pointer"
                                src={pokemonSS}
                                alt={"preview of pokemon react project"}
                            />
                        </a>
                    </div>

                    <div className="projDes ps-16 pb-32 p-3 top-20 right-10 flex  items-center col-span-4">
                        <div>
                            <h1 className="text-5xl py-3 font-bold">PokeDex</h1>
                            <h2 className="text-xl py-3">
                            The PokeDex is an encyclopedia of monsters from one favorite video game ever created. I utilize a Pokemon API to gather all the data and use TypeScript and React to display it. Users are able to search their favorite Pokemon by national dex number or name. Give it a try!
                            </h2>
                            <p className="text-xl">Built with:</p>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="flex icons gap-4">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        case 2:
            return (
                <div className="grid grid-cols-12">
                    <div className="col-span-7 transition-transform duration-300 transform-gpu hover:scale-90 pe-8  bg-blue-600 pt-8 pb-8">
                        <a
                            href="https://pokemonreactrebuild.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <Image
                                className="cursor-pointer"
                                src={courtmonitor}
                                alt={"preview of pokemon react project"}
                            />
                        </a>
                    </div>

                    <div className="projDes ps-16 pb-32 p-3 top-20 right-10 flex  items-center col-span-4">
                        <div>
                            <h1 className="text-5xl py-3 font-bold">Court Monitor</h1>
                            <h2 className="text-xl py-3">
                                Court Monitor is a full-stack web application that aims to simplify communication between sports programs. The goal of this app is to solve real-life scheduling issues that the Tennis program I currently coach is facing in real life.
                            </h2>
                            <p className="text-xl">Built with:</p>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="flex icons gap-4">


                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />


                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        case 3:
            return (
                <div className="grid grid-cols-12">
                    <div className="col-span-7 transition-transform duration-300 transform-gpu hover:scale-90 pe-8  bg-blue-600 pt-8 pb-8">
                        <a
                            href="https://pokemonreactrebuild.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <Image
                                className="cursor-pointer"
                                src={miniquest}
                                alt={"preview of pokemon react project"}
                            />
                        </a>
                    </div>

                    <div className="projDes ps-16 pb-32 p-3 top-20 right-10 flex  items-center col-span-4">
                        <div>
                            <h1 className="text-5xl py-3 font-bold">MiniQuest: API Challenge</h1>
                            <h2 className="text-xl py-3">
                                The challenge in this project was to create 10 different endpoints in C# and after hosting them on Azure, I was to create a web application so a user could access all of them. This challenge helped me start my foundational knowledge of creating endpoints, accessing APIs, and creating React Applications.
                            </h2>
                            <p className="text-xl">Built with:</p>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="flex icons gap-4">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        default:
            break;
    }


}

export default ProjectToggle