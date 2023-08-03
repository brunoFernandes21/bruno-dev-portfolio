"use client"
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { AiFillProject, AiFillFolder } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import code from "/public/images/monitor_coding_2.png";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";

export default function Home() {
  const [showNav, setShowNav] = useState(false)
  const toggleNav = () => {
    setShowNav(!showNav)
  }
  return (
    <main className="main__container scroll-smooth">
      <section
        id="home"
        className="min-h-screen md:px-20 lg:px-40 bg-slate-100"
      >
        <nav
          className={`relative py-4 md:flex md:justify-between items-center border-b-2 `}
        >
          <div className="ml-4 text-slate-800 font-black text-3xl">
            <p>BrunoF_Dev</p>
          </div>

          <ul className={`${showNav ? "active" : ""} hidden md:flex justify-center items-center md:gap-2`}>

            <li className="mt-2 py-2 flex justify-center cursor-pointer font-black text-xl text-slate-800 transition duration-150 ease-in hover:text-white hover:bg-slate-800  md:hover:border-b-4 md:hover:border-b-slate-800 md:hover:text-slate-400 md:mt-0 md:px-2 md:mr-2">
              <a href="#skills">
                <span>Skills</span>
              </a>
            </li>

            <li className="py-2 flex justify-center cursor-pointer font-black text-xl text-slate-800 transition duration-150 ease-in hover:text-white hover:bg-slate-800  md:hover:border-b-4 md:hover:border-b-slate-800 md:hover:text-slate-400 md:mt-0 md:px-2 md:mr-2">
              <a href="#projects">
                <span>Projects</span>
              </a>
            </li>

            <li className="py-2 flex justify-center cursor-pointer font-black text-xl text-slate-800 transition duration-150 ease-in hover:text-white hover:bg-slate-800  md:hover:border-b-4 md:hover:border-b-slate-800 md:hover:text-slate-400 md:mt-0 md:px-2 md:mr-2">
              <Link
                href="https://docs.google.com/document/d/1JZNQOT2RCbmeD0BAp8UvmMoBizHL5-_VjqewAAtfaec/edit?usp=sharing"
                target="_blank"
              >
                CV
              </Link>
            </li>
          </ul>

          <ul className={` ${showNav ? "active" : ""} hidden md:mr-4 md:flex justify-center md:gap-4 items-center`}>
            <li className={`mt-4 md:mt-0 text-4xl flex justify-center text-slate-800`}>
              <Link href="https://github.com/brunoFernandes21" target="_blank">
                <AiFillGithub className="hover:text-slate-400 hover:cursor-pointer" />
              </Link>
            </li>
            <li className="mt-4 md:mt-0 text-4xl flex justify-center text-slate-800">
              <Link
                href="https://linkedin.com/in/bruno-fernandes-879b0725a"
                target="_blank"
              >
                <AiFillLinkedin className="hover:text-slate-400 hover:cursor-pointer " />
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            onClick={toggleNav}
            className="absolute right-6 top-4 hover:bg-slate-800 p-2 rounded-lg hover:text-white cursor-pointer text-2xl transition ease-in duration-300 flex md:hidden"
          >
            <FaBars />
          </Link>
        </nav>

        <div className="text-center mt-5">
          <h1 className="text-5xl mt-10 py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 font-black md:text-6xl">
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
          <p className="mt-10">
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
          <Image
            src={code}
            alt="An image of a monitor que code on the screen"
            fill
          />
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen pt-4 px-5 md:px-20 lg:px-40 bg-slate-800 w-full relative"
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
          <div className="back__to_top absolute hidden md:block bottom-6 right-4">
            <a href="#home">
              <BsFillArrowUpCircleFill className="text-slate-100 text-4xl cursor-pointer hover:scale-125 transition ease-linear" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative min-h-screen pt-4 px-5 md:px-20 lg:px-40 bg-slate-100 "
      >
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-5 font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
            Projects
          </h2>
          <p className="text-xl text-slate-800 text-md py-2 leading-8">
            Below you will find my most recent full stack project using{" "}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
              ReactJs and PostgreSQL.
            </span>
          </p>
        </div>
        <Projects />

        <div className="back__to_top absolute hidden md:block bottom-6 right-4">
          <a href="#home">
            <BsFillArrowUpCircleFill className=" text-4xl cursor-pointer hover:scale-125 transition ease-linear" />
          </a>
        </div>
      </section>
    </main>
  );
}
