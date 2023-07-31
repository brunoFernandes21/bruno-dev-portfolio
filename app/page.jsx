import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { AiFillProject, AiFillFolder } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import code from "/public/images/monitor_coding_2.png";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="scroll-smooth">
      <section
        id="home"
        className="min-h-screen relative px-10 md:px-20 lg:px-40"
      >
        <nav className={`py-8 flex justify-between border-b-2`}>
          <p className="logo text-slate-800 font-black text-3xl">Bruno_Dev</p>
          <ul className=" links flex items-center gap-2 ">
            <li className="link px-2 cursor-pointer font-black text-xl text-slate-800 transition duration-150 ease-in-out hover:text-slate-600 hover:border-b-2 hover:border-b-slate-800 ">
              <a href="#skills">
                <span>Skills</span>
              </a>
            </li>
            <li className="px-2 cursor-pointer font-black text-xl text-slate-800 transition duration-150 ease-in-out hover:text-slate-600 hover:border-b-2 hover:border-b-slate-800 ">
              <a href="#projects">
                <span>Projects</span>
              </a>
            </li>
            <li className="px-2 cursor-pointer font-black text-xl text-slate-800 transition duration-150 ease-in-out hover:text-slate-600 hover:border-b-2 hover:border-b-slate-800 ">
              <a href="#code">
                <span>Code</span>
              </a>
            </li>
            <li className="px-2 cursor-pointer font-black text-xl text-slate-800 transition duration-150 ease-in-out hover:text-slate-600 hover:border-b-2 hover:border-b-slate-800 ">
              <a href="#softSkills">
                <span>Soft Skills</span>
              </a>
            </li>
          </ul>

          <ul className="socials flex items-center">
            <div className="text-3xl flex justify-center gap-4 text-slate-800">
              <Link href="https://github.com/brunoFernandes21" target="_blank">
                <AiFillGithub className="hover:text-slate-400 hover:cursor-pointer dark:text-white dark:hover:cursor-pointer" />
              </Link>
              <Link
                href="https://linkedin.com/in/bruno-fernandes-879b0725a"
                target="_blank"
              >
                <AiFillLinkedin className="hover:text-slate-400 hover:cursor-pointer " />
              </Link>
            </div>
          </ul>
        </nav>

        <div className="text-center mt-5">
          <h1 className="text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 font-black md:text-6xl">
            Bruno Fernandes
          </h1>
          <h3 className="text-2xl pt-3 text-slate-800 font-medium md:text-3xl">
            I am a Software Developer
          </h3>
          <p className="text-xl mb-5 text-slate-800 leading-8 max-w-xl mx-auto">
            With a passion for creating <strong>beautiful</strong> and{" "}
            <strong>functional web applications</strong> using modern
            technology.
            <br />
          </p>
          <p>
            <strong>
              <a
                href="#skills"
                className="text-lg md:text-xl lg:text-3xl p-2 md:p-3 text-white bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full"
              >
                Find out more!
              </a>
            </strong>
          </p>
        </div>
        <div className="relative mx-auto mt-12 bg-gradient-to-b from-blue-500 rounded-full w-60 h-60 overflow-hidden md:h-80 md:w-80">
          <Image src={code} alt="" fill />
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen pt-4 px-10 md:px-20 lg:px-40 bg-slate-800 w-full"
      >
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
            Skills
          </h2>
          <p className="text-gray-300 text-xl py-2 leading-8">
            I have worked with some of the most popular technologies in the web
            development world. From Backend to Frontend.
          </p>
          <Skills />
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen pt-4 px-10 md:px-20 lg:px-40"
      >
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-5 font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
            Projects
          </h2>
          <p className="text-xl text-slate-800 text-md py-2 leading-8">
            Below you will find some of my most recent projects using{" "}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
              ReactJs.
            </span>
          </p>
        </div>
        {/* <Projects/> */}
      </section>

      <section
        id="code"
        className="min-h-screen pt-4 px-10 md:px-20 lg:px-40 bg-slate-800 w-full"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl pb-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
          Code
        </h2>
      </section>

      <section id="softSkills" className="min-h-screen pt-4 px-10 md:px-20 lg:px-40 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl pb-5 font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          Soft Skills
        </h2>
      </section>
    </main>
  );
}
