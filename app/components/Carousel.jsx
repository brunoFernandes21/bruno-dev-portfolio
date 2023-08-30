import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Image from "next/image";

export default function Carousel({ showDetails, setShowDetails }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const northcodersStack = [
    "ReactJs",
    "Css",
    "Tailwind Css",
    "Node",
    "Express",
    "Postgresql",
  ];
  const totalfitnessStack = [
    "Mongo DB",
    "Express",
    "ReactJS",
    "Node",
    "Css",
    "Tailwind Css",
  ];

  return (
    <div className=" text-center mx-auto mt-5 w-[90%] md:w-[80%] text-white">
      <Slider {...settings}>
        <section>
          <Image
            src="/images/northcoders-news.png"
            className="mx-auto rounded"
            width={500}
            height={500}
            alt="A picture of northcoders news homepage"
          />
          <p className="text-lg md:text-2xl font-black pt-5 pb-2 text-transparent bg-clip-text bg-gradient-to-r  from-white to-blue-500">
            Northcoders News
          </p>
          <p
            className="font-bold text-md md:text-lg text-slate-100 cursor-pointer "
            onClick={() => setShowDetails(!showDetails)}
          >{`${showDetails ? "Hide details" : "Show details"}`}</p>
          {showDetails && (
            <main className="flex mx-auto justify-center flex-wrap mt-4  p-4">
              <section className="project__card text-center shadow-md shadow-gray-400 transition ease-in-out hover:scale-105 rounded max-w-lg px-4 pt-4 pb-6">
                  <div className="w-20 mx-auto h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full my-2"></div>
                  <div>
                    <p className="text-slate-100 font-black leading-8 text-left">
                      Northcoders News is a social news aggregation, web content
                      rating and discussion website. It is a full stack fully responsive web
                      application that I built as my personal project for the
                      Northcoders bootcamp I attended.
                    </p>
                  </div>

                  <section className="tags text-white font-black">
                    <p className=" text-lg md:text-xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                      <span>Stack</span>
                    </p>
                    <div className="pt-3 flex flex-wrap justify-center items-center">
                      {northcodersStack.map((item) => (
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
                          href="https://github.com/brunoFernandes21/nc-news/"
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
                          href="https://www.bfnc-news.com"
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
            </main>
          )}
        </section>

        {/* <section>
          <Image
            src="/images/total__fitness.png"
            className="mx-auto rounded"
            width={500}
            height={500}
            alt="A picture of northcoders news homepage"
          />
          <p className="text-lg md:text-2xl font-black pt-5 pb-2 text-transparent bg-clip-text bg-gradient-to-r  from-white to-blue-500">
            Total Fitness
          </p>
          <p
            className="font-bold text-md md:text-lg text-slate-100 cursor-pointer "
            onClick={() => setShowDetails(!showDetails)}
          >{`${showDetails ? "Hide Details" : "Show Details"}`}</p>

          {showDetails && (
            <main className="flex mx-auto justify-center flex-wrap mt-4">
              <section className="project__card text-center shadow-md shadow-gray-400 transition ease-in-out hover:scale-105 rounded max-w-lg px-4 pt-4 pb-6">
                  <div className="w-20 mx-auto h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full my-2"></div>
                  <div>
                    <p className="text-slate-100 font-black leading-8 text-left">
                      Total Fitness is a full stack MERN application that allows users to keep track of their workout and see other user's workouts.

                    </p>
                  </div>

                  <section className="tags text-white font-black">
                    <p className=" text-lg md:text-xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                      <span>Stack</span>
                    </p>
                    <div className="pt-3 flex flex-wrap justify-center items-center">
                      {totalfitnessStack.map((item) => (
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
                          href="https://www.bfnc-news.com"
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
                          href="https://github.com/brunoFernandes21/nc-news/"
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
            </main>
          )}
        </section> */}
      </Slider>
    </div>
  );
}
