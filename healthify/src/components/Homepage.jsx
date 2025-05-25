import React from "react";
import { world } from "../assets";
import {
  frame147,
  frame148,
  frame149,
  frame150,
  frame151,
  frame152,
  frame153,
  frame154,
  frame160,
  frame164,
  frame168,
  frame172,
  frame176,
} from "../assets/images";
import { arrowUp, boldSettings, exit } from "../assets/icons";

const Homepage = () => {
  const doctorsDetails = [
    {
      id: 1,
      image: frame147,
      fullname: "Miss Oyenuga Ibukun",
      speciality: "Gynecologist",
      officialName: "drIbukun",
    },
    {
      id: 2,
      image: frame148,
      fullname: "Mr Oyenuga Farouq",
      speciality: "General practicioner",
      officialName: "drFarouq",
    },
    {
      id: 3,
      image: frame149,
      fullname: "Miss Sodiq Zainab",
      speciality: "Gynecologist",
      officialName: "drZainab",
    },
    {
      id: 4,
      image: frame150,
      fullname: "Mr newsong",
      speciality: "General practicioner",
      officialName: "drNewsong",
    },
    {
      id: 5,
      image: frame151,
      fullname: "Miss Olosasa kareemah",
      speciality: "Gynecologist",
      officialName: "drKeemah",
    },
    {
      id: 6,
      image: frame152,
      fullname: "Mr Imam",
      speciality: "General practicione",
      officialName: "drImam",
    },
    {
      id: 7,
      image: frame153,
      fullname: "Miss Daniella",
      speciality: "Gynecologist",
      officialName: "drDanny",
    },
  ];
  const articles = [
    {
      id: 1,
      image: frame154,
      title: "HEALTH",
      author: "faruq",
      text: "5 Things to do every morning for lower blood pressure",
    },
    {
      id: 2,
      image: frame160,
      title: "Fitness",
      author: "faruq",
      text: "4 benefits of jumping rope that will convince you to give it a try",
    },
    {
      id: 3,
      image: frame164,
      title: "Fitness",
      author: "faruq",
      text: "This one mobility exercise loosen tight shoulders",
    },
    {
      id: 4,
      image: frame168,
      title: "HEALTH",
      author: "faruq",
      text: "5 Things to do every morning for lower blood pressure",
    },
    {
      id: 5,
      image: frame172,
      title: "HEALTH",
      author: "faruq",
      text: "7 Tips of exercising during pregnancy, according to experts",
    },
    {
      id: 6,
      image: frame176,
      title: "HEALTH",
      author: "faruq",
      text: "5 Things to do every morning for lower blood pressure",
    },
  ];

  return (
    <div className="w-full lxl:w-[90%] p-3 z-0">
      <header className="bg-[#EBE9E9] w-100 text-start p-3 pl-5 ">
        Home/Dashboard
      </header>
      <div className="subscribe  sm:w-[498px] h-[198px] flex flex-col items-center bg-[#EBE9E9] p-10 my-8 rounded-2xl">
        <img src={world} alt="globe-img" className="  w-8" />
        <h2 className="text-[30px] font-semibold">
          Basic Subscriber <br />
          Subscribe now
        </h2>
      </div>
      <div className="">
        <header className="flex justify-between items-end bg-[#EBE9E9] h-10 px-3 pb-1 rounded-b mb-2">
          <div>
            <button className="bg-black text-white text- w-6 h-6 rounded-[50%] mr-1">
              i
            </button>
            Top Doctors
          </div>
          <div className="flex w-20 justify-between ">
            <img src={boldSettings} alt="" className="w-6 h-6" />
            <img src={arrowUp} alt="" className="w-6 h-6" />
            <img src={exit} alt="" className="w-6 h-6" />
          </div>
        </header>
        <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4 ">
          {doctorsDetails.map(
            ({ id, image, fullname, speciality, officialName }) => (
              <div
                key={id}
                className="border flex max-w-full flex-col flex-1 min-w-[180px] sm:max-w-[290px] justify-center items-center rounded-lg mt-8"
              >
                <img src={image} alt="doctor's-image" className="px-2 py-5" />
                <div className="bg-[#EBE9E9] flex flex-col  w-full h-full p-2">
                  <p className=" border h-4 mb-9 font-semibold">{fullname}</p>
                  <p className="my-3 font-semibold">{speciality}</p>
                  <p className="my-2 border-y-black font-semibold">
                    {officialName}
                  </p>
                  <button className="bg-[#4369B2] text-white rounded-lg max-w-[200px] px-4 py-[2px] mb-1 self-center font-semibold">
                    Connect
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <article className="bg-#F9F9F9 my-10">
        <ul className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => {
            const { id, image, author, text, title } = article;

            return (
              <li
                key={id}
                className="flex flex-col justify-start items-start max-w-full sm:max-w-[400px] mt-10 h-[320px]"
              >
                <img
                  src={image}
                  alt={image}
                  className=" w-[390px]  sm:w-full h-[200px] flex self-start"
                />
                <p className="text-[#7F7F7F] mb-5 mt-2">{title}</p>
                <p className="text-start mb-5  h-[50px] w-[300px]">{text}</p>
                <p>by {author}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default Homepage;
