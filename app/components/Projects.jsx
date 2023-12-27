"use client"
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Carousel from "./Carousel";


const Projects = () => {

  return (
    <section
    id="projects"
    className="relative min-h-screen pt-4 px-5 md:px-20 lg:px-40"
  >
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl pb-2 font-black text-slate-100">
        My Projects
      </h2>
      <p className="text-xl text-slate-100 text-md py-2 leading-8">
        These projects demonstrate my expertise with practical examples of
        some of my work, including brief descriptions and links to code
        repositories and live demos. <a href="https://brunofer-projects.netlify.app" target="_blank" className="font-bold underline">Click here</a> to check out all the projects 
      </p>
    </div>
    <Carousel/>
    <div className="back__to_top absolute hidden md:block bottom-6 right-4">
      <a href="#home">
        <BsFillArrowUpCircleFill className=" text-4xl text-white cursor-pointer hover:scale-125 transition ease-linear" />
      </a>
    </div>
  </section>
  )
}

export default Projects