"use client";
import { techStack } from "./TechData";

const Skills = () => {
  return (
    <main className="w-full py-14 tech__container relative">
    <section className="w-[70%] m-auto grid grid-cols-3 md:grid md:grid-cols-4  lg:grid lg:grid-cols-6 lg:justify-center lg:items-center gap-10">
      {techStack.map((stack) => (
        <section key={stack.id} className="transition ease-in-out hover:scale-110 flex justify-self-center items-center w-20 h-20 p-4 bg-white rounded-md overflow-hidden ">
          {stack.image}
        </section>
      ))}
    </section>
    </main>
  );
};

export default Skills;
