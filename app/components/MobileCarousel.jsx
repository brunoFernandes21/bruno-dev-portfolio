"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
Image;
const MobileCarousel = ({ northcodersStack }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" text-center mx-auto mt-5 w-[90%] md:hidden text-white">
      <Slider {...settings}>
        <section className=" bg-slate-900 mx-auto shadow-md rounded-md ">
          <Image
            src="/images/northcoders07.png"
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
                Northcoders News is a social news aggregation, web content
                rating and discussion website. It is a full stack fully
                responsive web application that I built as my personal project
                for the Software Development Bootcamp I did at Northcoders.
              </p>
            </div>

            <section className="tags text-white font-black max-w-md mx-auto text-center">
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
        </section>

        <section
          className=" bg-slate-900 w-md mx-auto shadow-md rounded-md"
        >
          <Image
            src="/images/northcoders05.png"
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
                Northcoders News comes with dark mode bake in and makes it
                fairly easy for users to switch from light and dark mode by
                simply clicking on the moon icon on the right side of the
                navigation bar. Click the moon icon to see dark mode in action.
                Dark mode is ideal at night time. It’s better for low-light
                settings – so you can use it in bed without keeping your partner
                awake. It can potentially reduce eye strain and dry eyes in
                low-light conditions.
              </p>
            </div>
          </section>
        </section>

        <section
          className=" bg-slate-900  w-md mx-auto shadow-md rounded-md"
        >
          <Image
            src="/images/northcoders06.png"
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
                When you click on an article in the home page, you are taken to
                the article&apos;s page where you can read the article, like and
                dislike it. You can also see how many comments this article has
                recieved so far. When you like or dislike, the likes count goes
                up or down accordingly.
              </p>
            </div>
          </section>
        </section>

        <section
          className=" bg-slate-900 w-md mx-auto shadow-md rounded-md"
        >
          <Image
            src="/images/northcoders04.png"
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
                From the article&apos;s page you can leave a comment. You are
                also able to see all the comments related to the article by
                clicking show comments and delete your comments in case you
                change your mind. Bear in mind that as a user, you are only able
                to delete your own comments.
              </p>
            </div>
          </section>
        </section>
      </Slider>
    </div>
  );
};

export default MobileCarousel;
