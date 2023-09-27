"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileCarousel from "@/app/components/MobileCarousel";
const page = () => {
  return (
    <main className="project__details min-h-screen py-5 px-5 md:p-10 lg-20">
      <button className="border rounded text-white mr-auto px-4 py-2 hover:bg-white hover:text-slate-900 transition ease-in-out">
        <Link href="/">Back To Home</Link>
      </button>
      <div className="mt-10 mb-10">
        <h1 className="text-white text-center text-xl font-black ">
          Books-Buzz
        </h1>
      </div>
    </main>
  );
};

export default page;
