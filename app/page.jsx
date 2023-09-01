"use client"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { useState } from "react";

export default function HomePage() {
  return (
    <main className="main__container scroll-smooth">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </main>
  );
}
