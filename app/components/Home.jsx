"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


import code from "/public/images/monitor_coding_2.png";
// import { motion } from "framer-motion";


const Home = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const downloadCV = () => {
    fetch("Bruno-Developer CV.pdf").then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Bruno-Developer CV.pdf";
        alink.click();
      })
    })
  }
  return (
    <section id="home" className="min-h-screen md:px-20 lg:px-40 home">
      <nav
        className={`py-6 lg:flex lg:justify-between items-center border-b-2 relative`}
      >
        <div className="ml-4 text-slate-100 font-black text-xl md:text-xl lg:text-3xl">
          <p>Bruno.Dev</p>
        </div>

        <ul
          className={`${
            showNav ? "active" : ""
          } hidden lg:flex justify-center items-center lg:gap-8`}
        >
          <li className="mt-2 py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl  text-slate-100  md:mt-0 md:px-0">
            <a href="#about" className="transition duration-150 ease-in hover:text-slate-400">
              <span>About Me</span>
            </a>
          </li>
          <li className="py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl  text-slate-100 md:mt-0 md:px-0">
            <a href="#skills" className="transition duration-150 ease-in hover:text-slate-400">
              <span>Technologies</span>
            </a>
          </li>

          <li className="py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl text-slate-100 md:mt-0 md:px-0 ">
            <a href="#projects" className="transition duration-150 ease-in hover:text-slate-400">
              <span>Projects</span>
            </a>
          </li>

          <li className="py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl text-slate-100 md:mt-0 md:px-0 ">
            <a href="#contact" className="transition duration-150 ease-in hover:text-slate-400">
              <span>Contact</span>
            </a>
          </li>

          <li className="py-2 flex justify-center cursor-pointer font-black text-lg md:text-xl text-slate-100  md:mt-0 md:px-0">
            <button onClick={downloadCV} className="transition duration-150 ease-in hover:text-slate-400">Get CV</button>
          </li>
        </ul>

        <ul
          className={` ${
            showNav ? "active" : ""
          } hidden lg:mr-4 lg:flex justify-center lg:gap-4 items-center`}
        >
          <li
            className={`mt-4 lg:mt-0 text-4xl flex justify-center text-slate-100`}
          >
            <Link href="https://github.com/brunoFernandes21" target="_blank">
              <AiFillGithub className="hover:text-slate-400 hover:cursor-pointer" />
            </Link>
          </li>
          <li className="mt-4 lg:mt-0 text-4xl flex justify-center text-slate-100">
            <Link
              href="https://linkedin.com/in/bruno-fernandes-879b0725a"
              target="_blank"
            >
              <AiFillLinkedin className="hover:text-slate-400 hover:cursor-pointer " />
            </Link>
          </li>
        </ul>
        {!showNav && <button
          onClick={toggleNav}
          className="absolute right-5 top-5  hover:bg-slate-100 hover:text-slate-900 p-2 rounded-lg text-slate-100 cursor-pointer text-2xl transition ease-in duration-300 flex lg:hidden"
        >
          <FaBars />
        </button>}
        {showNav && <button
          onClick={toggleNav}
          className="absolute right-5 top-5  hover:bg-slate-100 hover:text-slate-900 p-2 rounded-full text-slate-100 cursor-pointer text-2xl transition ease-in duration-300 flex lg:hidden"
        >
          <AiOutlineClose  />
        </button>}
      </nav>

      <div className="text-center px-5">
        <h1
          className="text-3xl mt-6 md:mt-24 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500 font-black md:text-5xl"
        >
          Hello, I am Bruno Fernandes
        </h1>

        <h3
          className="text-2xl pt-3 mt- text-slate-100 font-medium md:text-3xl"

        >
          I am a Junior Software Developer
        </h3>

        <p
          className="text-lg text-slate-100 leading-8 max-w-xl mx-auto"

        >
          With a passion for creating{" "}
          <strong className="text-2xl">beautiful</strong> and{" "}
          <strong className="text-2xl">functional</strong> web applications
          using <strong className="text-2xl">modern technology.</strong>
          <br />
        </p>

        <button
          className="mt-10 text-md md:text-lg lg:text-xl p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full "

        >
          <strong>
            <a href="#about" className="">
              Find out more
            </a>
          </strong>
        </button>
      </div>

      <div
        className="relative mx-auto mt-20 bg-gradient-to-b from-blue-500 rounded-full w-60 h-60 overflow-hidden md:h-80 md:w-80"

      >
        <Image
          src={code}
          sizes="250"
          alt="An image of a monitor que code on the screen"
          fill
          priority={true}
        />
      </div>
    </section>
  );
};

export default Home;
