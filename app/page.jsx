"use client";
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
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: { delay: 0.2, type: "spring", stiffness: 120 },
  },
};

const introVariants = {
  hidden: {
    opacity: 0,
    rotate: -180,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};
const introTwoVariants = {
  hidden: {
    y: -250,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

const buttonVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 3,
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    },
  },
};

const homeImageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [-20, 20, 0],
    transition: {
      delay: 4,
      duration: 1.5,
    },
  },
};
export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <main className="main__container scroll-smooth">
      <section id="home" className="min-h-screen md:px-20 lg:px-40 home">
        <motion.nav
          className={`relative py-6 md:flex md:justify-between items-center border-b-2 `}
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="ml-4 text-purple-100 font-black text-xl md:text-xl lg:text-3xl">
            <p>Bruno.Dev</p>
          </div>

          <ul
            className={`${
              showNav ? "active" : ""
            } hidden md:flex justify-center items-center md:gap-2`}
          >
            <li className="mt-2 py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl  text-purple-100 transition duration-150 ease-in hover:text-slate-400 md:mt-0 md:px-0 md:mr-10">
              <a href="#skills">
                <span>Tech Stack</span>
              </a>
            </li>

            <li className="py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl text-purple-100 transition duration-150 ease-in hover:text-slate-400 md:mt-0 md:px-0 md:mr-10">
              <a href="#projects">
                <span>Projects</span>
              </a>
            </li>

            <li className="py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl text-purple-100 transition duration-150 ease-in hover:text-slate-400 md:mt-0 md:px-0">
              <Link
                href="https://docs.google.com/document/d/1JZNQOT2RCbmeD0BAp8UvmMoBizHL5-_VjqewAAtfaec/edit?usp=sharing"
                target="_blank"
              >
                CV
              </Link>
            </li>
          </ul>

          <ul
            className={` ${
              showNav ? "active" : ""
            } hidden md:mr-4 md:flex justify-center md:gap-4 items-center`}
          >
            <li
              className={`mt-4 md:mt-0 text-4xl flex justify-center text-slate-100`}
            >
              <Link href="https://github.com/brunoFernandes21" target="_blank">
                <AiFillGithub className="hover:text-slate-400 hover:cursor-pointer" />
              </Link>
            </li>
            <li className="mt-4 md:mt-0 text-4xl flex justify-center text-slate-100">
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
            className="absolute right-5 top-5  hover:bg-purple-100 hover:text-purple-900 p-2 rounded-lg text-purple-100 cursor-pointer text-2xl transition ease-in duration-300 flex md:hidden"
          >
            <FaBars />
          </Link>
        </motion.nav>

        <div className="text-center ">
          <motion.h1
            className="text-5xl mt-24 py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-black md:text-6xl"
            variants={introVariants}
            initial="hidden"
            animate="visible"
          >
            Hello, I am Bruno Fernandes
          </motion.h1>

          <motion.h3
            className="text-2xl pt-3 mt- text-purple-100 font-medium md:text-3xl"
            variants={introTwoVariants}
            initial="hidden"
            animate="visible"
          >
            I am a Junior Software Developer
          </motion.h3>

          <motion.p
            className="text-xl text-purple-100 leading-8 max-w-xl mx-auto"
            variants={introTwoVariants}
            initial="hidden"
            animate="visible"
          >
            With a passion for creating{" "}
            <strong className="text-2xl">beautiful</strong> and{" "}
            <strong className="text-2xl">functional</strong> web applications
            using <strong className="text-2xl">modern technology.</strong>
            <br />
          </motion.p>

          <motion.button
            className="mt-10 text-lg md:text-xl lg:text-3xl p-3 px-6 md:p-3 md:px-6 text-white bg-gradient-to-r from-purple-500 to-blue-700 rounded-full "
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <strong>
              <a href="#skills" className="">
                View Projects
              </a>
            </strong>
          </motion.button>
        </div>

        <motion.div
          className="relative mx-auto mt-20 bg-gradient-to-b from-blue-500 rounded-full w-60 h-60 overflow-hidden md:h-80 md:w-80"
          variants={homeImageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={code}
            alt="An image of a monitor que code on the screen"
            fill
          />
        </motion.div>
      </section>

      <section
        id="skills"
        className="min-h-screen px-5 md:px-20 lg:px-40 bg-slate-800 w-full "
      >
        <div >
          <div className="tech__section__intro w-4/5 m-auto text-center p-6 h-50">
            <h2 className="text-2xl md:text-3xl lg:text-4xl pb-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-blue-500">
              Tech Stack
            </h2>
            <p className="text-purple-100 text-xl py-2 leading-8 lg:w-1/2 m-auto">
              I have worked with some of the most popular technologies in the
              web development world. From Backend to Frontend.
            </p>
          </div>
          <Skills/>
          <div className="back__to_top absolute hidden md:block bottom-6 right-4">
            <a href="#home">
              <BsFillArrowUpCircleFill className="text-white text-4xl cursor-pointer hover:scale-125 transition ease-linear" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative min-h-screen pt-4 px-5 md:px-20 lg:px-40 bg-slate-100 "
      >
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-5 font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-blue-500">
            My Projects
          </h2>
          <p className="text-xl text-purple-100 text-md py-2 leading-8">
            Below you will find my most recent{" "}
            <span className="font-black">projects.</span>
          </p>
        </div>
        <Projects />

        <div className="back__to_top absolute hidden md:block bottom-6 right-4">
          <a href="#home">
            <BsFillArrowUpCircleFill className=" text-4xl text-white cursor-pointer hover:scale-125 transition ease-linear" />
          </a>
        </div>
      </section>
    </main>
  );
}
