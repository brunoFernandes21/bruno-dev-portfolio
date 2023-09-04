"use client";
import React, { useRef, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  const [success, setSuccess] = useState(null);
  const [unsuccess, setUnsuccess] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null)
  const sendEmail = (e) => {
    e.preventDefault();
    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.forEach((element) => {
      if (element.value !== "") {
        setIsEmpty(false)
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_KEY,
            process.env.NEXT_PUBLIC_TEMPLATE_KEY,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            (result) => {
              inputs.forEach((element) => {
                element.value = "";
              });
              document.querySelectorAll("textarea")[0].value = "";
              setSuccess(
                "Thank you. Your message has been sent. Bruno will be in contact with you soon."
              );
              setTimeout(() => {
                setSuccess(null);
              }, 3000);
              setUnsuccess(null);
            },
            (error) => {
              console.log(error.text);
              setSuccess(null);
              setUnsuccess(
                "Unable to send message. Try again later or contact Bruno by email: brunoaf1523@gmail.com"
              );
              setTimeout(() => {
                setUnsuccess(null);
              }, 3000);
            }
          );
      } else {
        setIsEmpty("Please fill in all the empty fields.")
        setTimeout(() => {
          setIsEmpty(null);
        }, 3000);
      }
    });
  };

  return (
    <>
      <section
        id="contact"
        className="relative min-h-screen pt-4 px-5 md:px-20 lg:px-40 lg:flex lg:justify-center"
      >
        <section
          className="contact__form rounded-xl p-6 lg:w-[70%] h-fit"
        >
          <div>
            <p className="text-xl mb-2 font-black text-gray-400">
              GET IN TOUCH
            </p>
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
                className={`rounded-md p-4 bg-black ${isEmpty ? "text-black bg-red-100 border-2 border-red-600" : ""}`}
                type="text"
                id="name"
                name="user_name"
                placeholder="What's your name?"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email">Your Email</label>
              <input
                className={`rounded-md p-4 bg-black ${isEmpty ? "text-black bg-red-100 border-2 border-red-600" : ""}`}
                type="text"
                id="email"
                name="user_email"
                placeholder="What's your email?"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="message">Your Message</label>
              <textarea
                className={`rounded-md p-4 bg-black ${isEmpty ? "text-black bg-red-100 border-2 border-red-600" : ""}`}
                type="text"
                name="message"
                id="message"
                placeholder="What's your message?"
              />
            </div>
            <div>
              <button
                type="submit"
                value="Send"
                className="bg-black px-6 py-3 rounded-md text-xl font-bold hover:bg-gray-400 hover:text-slate-800 transition ease-in-out duration-500 flex items-center gap-4"
              >
                SEND
                <MdEmail className="text-2xl" />
              </button>
            </div>
            {success && (
              <div className='w-[80%] bg-slate-100 border mb-5 border-slate-400 text-slate-700 px-4 py-3 rounded flex justify-center text-center mx-auto "'>
                <span className="font-bold">{success}</span>
              </div>
            )}
            {unsuccess && (
              <div className="w-[80%] bg-slate-100 border mb-5 border-slate-400 text-slate-700 px-4 py-3 rounded flex justify-center text-center mx-auto">
                <span className="font-bold ">{unsuccess}</span>
              </div>
            )}
            {isEmpty && (
              <div className="w-[80%] bg-red-100 border mb-5 border-red-400 text-slate-700 px-4 py-3 rounded flex justify-center text-center mx-auto">
                <span className="font-bold ">{isEmpty}</span>
              </div>
            )}
          </form>
          <div className="back__to_top absolute hidden md:block bottom-6 right-4">
            <a href="#home">
              <BsFillArrowUpCircleFill className=" text-4xl text-white cursor-pointer hover:scale-125 transition ease-linear" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
