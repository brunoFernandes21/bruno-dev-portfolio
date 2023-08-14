"use client";
import Image from "next/image";
import html from "@/public/images/html-5.png"
import css from "@/public/images/003-css-3.png"
import javascript from "@/public/images/002-javascript.png"
import react from "@/public/images/006-atom.png"
import node from "@/public/images/001-nodejs.png"
import postgres from "@/public/images/009-postgre.png"
import firebase from "@/public/images/firebase.svg"
import nextjs from "@/public/images/nextjs.svg"
import tailwind from "@/public/images/tailwind.svg"
import mongodb from "@/public/images/mongodb.svg"
import express from "@/public/images/express.svg"
import jest from "@/public/images/jest.svg"

const frontend = [
  {
    id: 1,
    image: <Image src={html} key={html} alt="Html logo"/> 
  },
  {
    id: 2,
    image: <Image src={css} key={css} alt="css logo"/> 
  },
  {
    id: 3,
    image: <Image src={javascript} key={javascript} alt="javascript logo"/>
  },
  {
    id: 4,
    image: <Image src={react} key={react} alt="react logo"/> 
  },
  {
    id: 6,
    image: <Image src={nextjs} key={nextjs} alt="NextJs logo"/>
  },
  {
    id: 7,
    image: <Image  className="m-auto mt-4" src={tailwind} key={tailwind} alt="Tailwind logo"/>
  },
  {
    id: 8,
    image: <Image src={node} key={node} alt="Node logo"/>
  },
  {
    id: 9,
    image: <Image  src={express} key={express} alt="Express logo"/>
  },
  {
    id: 10,
    image: <Image className="m-auto w-40 " src={firebase} key={firebase} alt="Firebase logo"/>
  },
  {
    id: 11,
    image: <Image className="m-auto mt-4 " src={mongodb} key={mongodb} alt="MongoDb logo"/>
  },
  {
    id: 12,
    image: <Image src={postgres} key={postgres} alt="Postgres logo"/>
  },
  {
    id: 13,
    image: <Image className="m-auto w-40" src={jest} key={jest} alt="Html logo"/>
  },

]


const Skills = () => {
  return (
    <main className="w-full py-14 tech__container relative">
    <section className="w-[70%] m-auto grid grid-cols-3 md:grid md:grid-cols-4  lg:grid lg:grid-cols-6 lg:justify-center lg:items-center gap-10">
      {frontend.map((stack) => (
        <section key={stack.id} className=" flex justify-self-center items-center w-20 h-20 p-4 bg-white rounded-md overflow-hidden ">
          {stack.image}
        </section>
      ))}
    </section>
    </main>
  );
};

export default Skills;
