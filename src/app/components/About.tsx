import React from 'react'
import Image from "next/image";
import headshot from "../assets/Kyle_Ma_02_CSAS6_Headshots.jpg"

const About = () => {
  return (
    <section id='about'>
    <div className="grid grid-cols-2 mx-20 mt-20 px-12 py-4">
      <div className="p-5">
        <h1 className="text-7xl text-white py-3">Kyle, </h1>
      <h2 className="text-5xl py-3"> Junior Web Developer</h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum quaerat vero quisquam, nulla enim soluta harum facilis repellat perspiciatis at provident maiores? Voluptatem quo ab inventore, voluptatibus dolore enim? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam necessitatibus sint eos dolorum cumque, sapiente enim delectus optio nihil est, atque perspiciatis ducimus, porro at? Aliquid illum inventore eveniet ea.</p>
      </div>

      <div className="flex justify-center">
        <Image src={headshot} alt={"Kyle Ma Web Dev"} height={500}/>
      </div>
      
    </div> 
    </section>
  )
}

export default About