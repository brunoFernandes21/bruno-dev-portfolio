import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "./ProjectsData";

const Projects = () => {
  return (
    <main className="flex justify-center lg:flex lg:justify-start lg:flex-wrap gap-5 flex-wrap">
      {projects.map((project) => (
        <section
          key={project.id}
          className="project__card text-center shadow-md shadow-gray-400 transition ease-in-out lg:hover:scale-105 rounded mb-5  max-w-md"
        >
          <section className="px-4 py-6 ">
            {/* <div className="w-20 mx-auto h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full my-2"></div> */}
            <div>
              <p className="text-slate-100 font-black leading-8 text-left">
                {project.description}
              </p>
            </div>

            <section className="tags text-white font-black">
              <p className=" text-lg md:text-xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                <span>Stack</span>
              </p>
              <div className="pt-3 flex flex-wrap justify-center items-center">
                {project.stack.map((item) => (
                  <p
                    key={item[0]}
                    className="mr-6 text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
            <section className="flex justify-center items-center mt-5 px-4 gap-4">
              <p>
                <strong>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer transition ease-in-out text-white bg-gradient-to-r from-cyan-500 to-blue-700 p-2 lg:p-3 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700"
                  >
                    Source
                  </a>
                </strong>
              </p>
              <p>
                <strong>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer transition ease-in-out text-white bg-gradient-to-r from-cyan-500 to-blue-700 p-2 lg:p-3 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700"
                  >
                    Live Preview
                  </a>
                </strong>
              </p>
            </section>
          </section>
        </section>
      ))}
    </main>
  );
};

export default Projects;
