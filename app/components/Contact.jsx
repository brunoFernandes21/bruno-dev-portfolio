"use client";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";

const contactVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [-20, 20, 0],
    transition: {
      duration: 1.5,
    },
  },
};

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-4 px-5 md:px-20 lg:px-40 lg:flex lg:justify-center"
    >
      <motion.section
        className="contact__form rounded-xl p-6 lg:w-[70%] h-fit"
        variants={contactVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <p className="text-xl mb-2 font-black text-gray-400">GET IN TOUCH</p>
          <h2 className="text-5xl mb-2 font-black text-slate-300">Contact</h2>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 text-gray-400 mt-10"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Your Name</label>
            <input
              className="rounded-md p-4 bg-black"
              type="text"
              id="name"
              name="name"
              placeholder="What's your name?"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Your Email</label>
            <input
              className="rounded-md p-4 bg-black"
              type="text"
              id="email"
              name="email"
              placeholder="What's your email?"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="message">Your Message</label>
            <textarea
              className="rounded-md p-4 bg-black"
              type="text"
              name="message"
              id="message"
              placeholder="What's your message?"
            />
          </div>
          <div>
            <button className="bg-black px-6 py-3 rounded-md text-xl font-bold hover:bg-gray-400 hover:text-slate-800 transition ease-in-out duration-500 flex items-center gap-4">
              SEND
              <MdEmail className="text-2xl" />
            </button>
          </div>
        </form>
        <div className="back__to_top absolute hidden md:block bottom-6 right-4">
          <a href="#home">
            <BsFillArrowUpCircleFill className=" text-4xl text-white cursor-pointer hover:scale-125 transition ease-linear" />
          </a>
        </div>
      </motion.section>
    </section>
  );
};

export default Contact;
