"use client";
import Image from "next/image";
import html from "@/public/images/html-5.png"
import css from "@/public/images/003-css-3.png"
import javascript from "@/public/images/002-javascript.png"
import react from "@/public/images/006-atom.png"
import node from "@/public/images/001-nodejs.png"
import postgres from "@/public/images/009-postgre.png"

const frontend = [<Image src={html} key={html} alt="Html logo"/>, <Image src={css} key={css} alt="css logo"/> , <Image src={javascript} key={javascript} alt="javascript logo"/>, <Image src={react} key={react} alt="react logo"/>, "NextJs", "Tailwind", <Image src={node} key={node} alt="Node logo"/>, "Express", "Firebase", "MongoDb", <Image src={postgres} key={postgres} alt="Html logo"/>, "Jest"]


const Skills = () => {
  return (
    <main className="w-full grid grid-cols-4 mt-10 md:flex md:justify-center md:items-center flex-wrap gap-4 md:gap-10 ">
      {frontend.map((stack) => (
        <section key={stack} className="stack justify-self-center w-20 h-20 p-2 bg-white rounded-md md:w-40 md:h-40 overflow-hidden md:p-6">
          {stack}
        </section>
      ))}
    </main>
  );
};

export default Skills;
