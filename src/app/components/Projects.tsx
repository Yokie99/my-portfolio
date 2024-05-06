'use client'
import React, { useState } from 'react'
import Image from "next/image";
import pokemonSS from "../assets/pokemon_Screencap.png"

const Projects = () => {

    const [isSelected, setIsSelected] = useState<Boolean>(false)
    const buttonStyles = isSelected
        ? "text-white border-primary-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white";

    return (
        <section id='projects' className='py-20 min-h-screen'>

            <div className='flex justify-center'>
                <h1 className='text-5xl'>Projects</h1>

            </div>
            <div className="flex flex-row justify-center items-center gap-2 py-6">
                <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
                    PokeDex Project
                </button>
                <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
                    Project 1
                </button>
                <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
                    Project 1
                </button>
            </div>


            <div className='relative '>
                <div className='w-[60vw] transition-transform duration-300 transform-gpu hover:scale-90 bg-blue-600 pe-4 pt-4 pb-4'>
                    <a href="https://pokemonreactrebuild.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Image className='cursor-pointer ' src={pokemonSS} alt={'preview of pokemon react project'} />
                    </a>
                </div>
                <div className='projDes p-16 absolute top-20 right-10 flex flex-col min-w-[40vw] max-w-[40vw]'>
                    <div>
                        <h1 className='text-4xl py-3'>PokeDex</h1>
                        <h2>React project utilizing the Pokemon API to call fetch its data. Local storge used to save favorites.</h2>
                    </div>


                </div>

            </div>


        </section>
    )
}

export default Projects