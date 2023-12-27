"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileCarousel from "@/app/components/MobileCarousel";

const booksBuzzStack = ["NextJs", "Css", "Tailwind Css", "Firebase"];

const cardVariantsOne = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [-20, 20, 0],
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const cardVariantsTwo = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [-20, 20, 0],
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};
const cardVariantsThree = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [-20, 20, 0],
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
};
const cardVariantsFour = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [-20, 20, 0],
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};
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
      <section className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 w-full text-white gap-4 justify-center m-auto mt-4">
        <motion.section
          variants={cardVariantsOne}
          initial="hidden"
          animate="visible"
          className=" bg-slate-900 transition ease-in-out hover:scale-105   mx-auto shadow-md shadow-gray-500 rounded-md "
        >
          <Image
            src="/images/books-buzz1.png"
            className="mx-auto rounded-t"
            width={500}
            height={500}
            alt="A picture of books-buzz landing page"
            priority={true}
          />
          <section className="px-4 w-md pb-6 pt-4">
            <div className="w-20 mx-auto h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full my-2"></div>
            <div className="max-w-md mx-auto">
              <p className="text-slate-100 font-black leading-8 text-left">
                Books-Buzz is a Full Stack Fully Responsive Web Application that allows its users to keep track of books they are currently reading, check out what other users are reading and much more. <br /> 
                This project was built as part of a group project for the Software Engineering course at Northcoders. Click the link below to use the application. 
              </p>
            </div>

            <section className="tags text-white font-black max-w-md mx-auto text-center">
              <p className=" text-lg md:text-xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                <span>Stack</span>
              </p>
              <div className="pt-3 flex flex-wrap justify-center items-center">
                {booksBuzzStack.map((item) => (
                  <p
                    key={item[0]}
                    className="mr-6 text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
            <section className="flex justify-center items-center mt-5 px-4 gap-4">
              <p>
                <strong>
                  <a
                    href="https://github.com/brunoFernandes21/books-app"
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer transition ease-in-out text-white bg-gradient-to-r from-cyan-500 to-blue-700 p-2 lg:p-3 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700"
                  >
                    Source
                  </a>
                </strong>
              </p>
              <p>
                <strong>
                  <a
                    href="https://books-buzz-app.netlify.app/landing-page"
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer transition ease-in-out text-white bg-gradient-to-r from-cyan-500 to-blue-700 p-2 lg:p-3 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700"
                  >
                    Live Preview
                  </a>
                </strong>
              </p>
            </section>
          </section>
        </motion.section>

        <motion.section
          variants={cardVariantsTwo}
          initial="hidden"
          animate="visible"
          className=" bg-slate-900 transition ease-in-out hover:scale-105  w-md mx-auto shadow-md shadow-gray-500 rounded-md"
        >
          <Image
            src="/images/booksHome.png"
            className="mx-auto rounded-t"
            width={500}
            height={500}
            alt="A picture of books-buzz page"
            priority={true}
          />
          <section className="px-4 w-md pb-6 pt-4">
            <div className="w-20 mx-auto h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full my-2"></div>
            <div className="max-w-md mx-auto">
              <p className="text-slate-100 font-black leading-8 text-left">
              Once a user successfully logs into the application they are taken to the home page which is where they will be presented with book search functionality, New York Times best sellers, users favourites and a map that shows local libraries and bookshops. <br />
              From the home page, once a users clicks on a books poster, they are taken to a different page containing the books info. From this page, they are also able to perfom some important actions. Checkout the last card!
              </p>
            </div>
          </section>
        </motion.section>

        <motion.section
          variants={cardVariantsThree}
          initial="hidden"
          animate="visible"
          className=" bg-slate-900 transition ease-in-out hover:scale-105  w-md mx-auto shadow-md shadow-gray-500 rounded-md"
        >
          <Image
            src="/images/books-buzz1.png"
            className="mx-auto rounded-t"
            width={500}
            height={500}
            alt="A picture of northcoders news homepage"
            priority={true}
          />
          <section className="px-4 w-md pb-6 pt-4">
            <div className="w-20 mx-auto h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full my-2"></div>
            <div className="max-w-md mx-auto">
              <p className="text-slate-100 font-black leading-8 text-left">
              In order to use the application and enjoy its useful functionalities users must create an account.
                One of the more exciting functionalities of Books-Buzz is that it allows its users to not only search a book by the tile or author&apos;s name, it also allows users to search by scanning the book&apos;s barcode. <br />
                It has a barcode scanner system built-in which makes it easy for users to quickly scan a barcode and get results directly on their screen.
              </p>
            </div>
          </section>
        </motion.section>

        <motion.section
          variants={cardVariantsFour}
          initial="hidden"
          animate="visible"
          className=" bg-slate-900 transition ease-in-out hover:scale-105 w-md mx-auto shadow-md shadow-gray-500 rounded-md"
        >
          <Image
            src="/images/books-buzz1.png"
            className="mx-auto rounded-t"
            width={500}
            height={500}
            alt="A picture of northcoders news homepage"
            priority={true}
          />
          <section className="px-4 w-md pb-6 pt-4">
            <div className="w-20 mx-auto h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full my-2"></div>
            <div className="max-w-md mx-auto">
              <p className="text-slate-100 font-black leading-8 text-left">
              There is a user profile page which is where users will find the books they have marked as favourites, marked as read, currently reading, save for later. These are organised in shelves which makes it easy to visualise all the books and different sections. <br />
                Once a user clicks on a book, they are taken a page containing information about the book. From this page they can add it to favourites, and other categories (mentioned above).
              </p>
            </div>
          </section>
        </motion.section>

      </section>

      <section className="md:hidden justify-center m-auto">
        <MobileCarousel booksBuzzStack={booksBuzzStack} />
      </section>
    </main>
  );
};

export default page;
