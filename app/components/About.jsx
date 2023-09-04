import { BsFillArrowUpCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section
    id="about"
    className="min-h-screen px-5 md:px-20 lg:px-40 w-full relative"
  >
   <section className="pt-6 md:pt-28 lg:pt-44">
    <div className="about__me__intro w-4/5 m-auto text-center p-6 h-50 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl pb-2 font-black text-slate-100">
        About Me
      </h2>
    </div>
  </section>
  <section className="w-full py-14 about__me relative">
    <section className="w-[90%] md:w-[80%] lg:w-[70%] m-auto justify-center text-slate-100 border-b-4 pb-4">
      <p className="text-slate-100 text-left text-md ">
        Hi there, my name is Bruno Fernandes. I am a Junior Software
        Developer with a passion for creating{" "}
        <strong>
          beautiful and functional web applications using modern Tech.{" "}
        </strong>{" "}
        I am looking for an opportunity to kick start my career in the
        Tech world. Are you on the market looking for a Junior Developer?
        Feel free to <a href="#contact" className="underline"><strong>contact me!</strong></a>
      </p>
    </section>
    <section className="w-[90%] md:w-[80%] lg:w-[70%] m-auto justify-center text-slate-100 border-b-4 pb-4 pt-4">
      <p className="text-white md:text-white text-left text-md ">
        I am passionate about learning in general and building Software
        Applications. I studied Computer Science at The University of
        Leeds and have just trained as a Junior Full Stack Software
        Developer at Northcoders. My goal is to become a successful
        Software Developer. In 5 years I see myself working as a Full
        Stack Software Developer.
      </p>
    </section>

    <section className="w-[90%] md:w-[80%] lg:w-[70%] m-auto justify-center text-slate-100 pt-4">
      <p className="text-white text-left text-md ">
        15 years ago I was living on an Island and could hardly introduce
        myself in English. Today I live in England and studied Computer Science and did a bootcamp in
        Software Engineering. This is mind blowing. Teaching myself
        English has been my greatest achievement, as it has unlocked doors
        to opportunities and enabled me to achieve things that I could not
        have done otherwise. Dreams do come true when you believe it and
        work hard.
      </p>
    </section>
  </section>
    <div className="back__to_top absolute hidden md:block bottom-10 right-8">
      <a href="#home">
        <BsFillArrowUpCircleFill className="text-white text-4xl cursor-pointer hover:scale-125 transition ease-linear" />
      </a>
    </div>
  </section>
    
  );
};

export default About;