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

  return (
    <div className=" text-center mx-auto mt-5 w-[90%] md:w-[80%] text-white">
      <Slider {...settings}>
        <section className="p-4">
          <section className="bg-slate-800 max-w-[500px] text-center shadow-md shadow-gray-700 transition ease-in-out hover:scale-105 rounded-t pb-6 mx-auto">
            <Image
              src="/images/northcoders-updated.png"
              className="mx-auto rounded-t"
              width={500}
              height={500}
              alt="A picture of northcoders news homepage"
              priority={true}
            />
            <section className="mt-4">
              <p className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                Northcoders News
              </p>
              <button className="mt-4 text-md p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full font-black hover:border-2 transition ease-in-out">
                <Link href="https://www.bfnc-news.com" target="__blank">
                  Live Project
                </Link>
              </button>
            </section>
          </section>
        </section>


        <section className="p-4">
          <section className="bg-slate-800 max-w-[500px] text-center shadow-md shadow-gray-700 transition ease-in-out hover:scale-105 rounded-t pb-6 mx-auto">
            <Image
              src="/images/brunos_blog.png"
              className="mx-auto rounded-t"
              width={500}
              height={500}
              alt="A picture of northcoders news homepage"
              priority={true}
            />
            <section className="mt-4">
              <p className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                Bruno&apos;s Blog
              </p>
              <button className="mt-4 text-md p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full font-black hover:border-2 transition ease-in-out">
                <Link href="https://bfblog.netlify.app" target="__blank">
                  Live Project
                </Link>
              </button>
            </section>
          </section>
        </section>


        <section className="p-4">
          <section className="bg-slate-800 max-w-[500px] text-center shadow-md shadow-gray-700 transition ease-in-out hover:scale-105 rounded-t pb-6 mx-auto">
            <Image
              src="/images/news-homepage.png"
              className="mx-auto rounded-t"
              width={500}
              height={500}
              alt="A picture of northcoders news homepage"
              priority={true}
            />
            <section className="mt-4">
              <p className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                News Homepage
              </p>
              <button className="mt-4 text-md p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full font-black hover:border-2 transition ease-in-out">
                <Link href="https://bf-news-homepage.netlify.app" target="__blank">
                  Live Project
                </Link>
              </button>
            </section>
          </section>
        </section>

        <section className="p-4">
          <section className="bg-slate-800 max-w-[500px] text-center shadow-md shadow-gray-700 transition ease-in-out hover:scale-105 rounded-t pb-6 mx-auto">
            <Image
              src="/images/Books-buzz-updated.png"
              className="mx-auto rounded-t"
              width={500}
              height={500}
              alt="A picture of northcoders news homepage"
              priority={true}
            />
            <section className="mt-4">
              <p className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                Books-Buzz
              </p>
              <button className="mt-4 text-md p-3 px-6 md:p-3 md:px-6 text-slate-100 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full font-black hover:border-2 transition ease-in-out">
                <Link href="https://books-buzz-app.netlify.app/landing-page" target="__blank">
                  Live Project
                </Link>
              </button>
            </section>
          </section>
        </section>
      </Slider>
    </div>
  );
}
