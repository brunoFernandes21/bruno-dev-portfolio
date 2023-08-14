"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";


const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.4,
      yoyo: Infinity
    }
  },
};
const ProjectDetailsPage = () => {
  const { title } = useParams();
  return (
    <main className="min-h-screen pt-8 px-5 md:px-20 lg:px-40 bg-slate-800 w-full relative text-slate-100">
      <Link href="/">
        <motion.button className="border rounded-full p-2 "
        variants={buttonVariants} 
        whileHover="hover"
        >Back To Home</motion.button>
      </Link>
      <h1>{title}</h1>
    </main>
  );
};

export default ProjectDetailsPage;
