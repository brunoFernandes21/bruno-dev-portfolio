import { techStack } from "./TechData";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-5 pb-4 md:px-20 lg:px-40 w-full relative"
    >
      <div className="pt-6 md:pt-44">
        <div className="tech__section__intro w-4/5 m-auto text-center p-6 h-50 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-2 font-black text-slate-100">
            Technologies
          </h2>
          <p className="text-white text-left md:text-center text-md md:lg py-2 leading-8 lg:w-1/2 m-auto">
            I have worked with some of the most popular technologies in the web
            development world. From Backend to Frontend.
          </p>
        </div>
        <section className="w-full py-14 tech__container relative">
          <section className="w-[70%] m-auto grid grid-cols-3 md:grid md:grid-cols-4  lg:grid lg:grid-cols-6 lg:justify-center lg:items-center gap-10">
            {techStack.map((stack) => (
              <section
                key={stack.id}
                className="transition ease-in-out hover:scale-110 flex justify-self-center items-center w-20 h-20 p-4 bg-white rounded-md overflow-hidden "
              >
                {stack.image}
              </section>
            ))}
          </section>
        </section>
        <div className="back__to_top absolute hidden md:block bottom-10 right-8">
          <a href="#home">
            <BsFillArrowUpCircleFill className="text-white text-4xl cursor-pointer hover:scale-125 transition ease-linear" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
