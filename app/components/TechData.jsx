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

export const techStack = [
    {
      id: 1,
      name: "Html",
      image: <Image className="m-auto" src={html} width={60} height={60} key={html} alt="Html logo"/> 
    },
    {
      id: 2,
      name: "Css",
      image: <Image className="m-auto" src={css} width={60} height={60} key={css} alt="css logo"/> 
    },
    {
      id: 3,
      name: "Javascript",
      image: <Image className="m-auto" src={javascript} width={60} height={60} key={javascript} alt="javascript logo"/>
    },
    {
      id: 4,
      name: "React",
      image: <Image className="m-auto" src={react} width={60} height={60} key={react} alt="react logo"/> 
    },
    {
      id: 6,
      name: "Next",
      image: <Image className="m-auto" src={nextjs} width={60} height={60} key={nextjs} alt="NextJs logo"/>
    },
    {
      id: 7,
      name: "Tailwind",
      image: <Image  className="m-auto" src={tailwind} width={60} height={60} key={tailwind} alt="Tailwind logo"/>
    },
    {
      id: 8,
      name: "Node",
      image: <Image className="m-auto" src={node} key={node} width={60} height={60} alt="Node logo"/>
    },
    {
      id: 9,
      name: "Express",
      image: <Image className="m-auto" width={60} height={60} src={express} key={express} alt="Express logo"/>
    },
    {
      id: 10,
      name: "Firebase",
      image: <Image className="m-auto" width={60} height={60} src={firebase} key={firebase} alt="Firebase logo"/>
    },
    {
      id: 11,
      name: "MongoDB",
      image: <Image className="m-auto" width={60} height={60} src={mongodb} key={mongodb} alt="MongoDb logo"/>
    },
    {
      id: 12,
      name: "PostGres",
      image: <Image className="m-auto" src={postgres} key={postgres} width={60} height={60} alt="Postgres logo"/>
    },
    {
      id: 13,
      name: "Jest",
      image: <Image className="m-auto" width={60} height={60} src={jest} key={jest} alt="Html logo"/>
    },
  
  ]