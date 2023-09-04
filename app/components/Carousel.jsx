import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
        <section className="p-4">
          <section className="bg-slate-800 max-w-[500px] text-center shadow-md shadow-gray-700 transition ease-in-out hover:scale-105 rounded-t pb-6 mx-auto">
            <Image
              src="/images/northcoders-news.png"
              className="mx-auto rounded-t"
              width={500}
              height={500}
              alt="A picture of northcoders news homepage"
            />
            <section className="mt-4">
              <p className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                Northcoders News
              </p>
              <button className="mt-4 text-md p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full font-black hover:border-2 transition ease-in-out">
              <Link
                href="/project-details/northcoders"
              >
                Project Detail
              </Link>
              </button>
            </section>
          </section>
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
