"use client";

import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { companies, tt } from "@/data";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div>
      <h1 className="heading mt-16">
        <span className="text-purple">My Current</span> Tech Stack
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 md:gap-16 max-lg:mt-10">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
              <img
                src={company.img}
                alt={company.name}
                className="md:w-10 w-5"
              />
              <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20 font-bold"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer
                title="https://github.com/Somen652"
                href="https://www.linkedin.com/in/somen-das-b9a50b237"
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <a href="https://github.com/Somen652">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Checkout Project
                      </p>
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

        <h1 className="heading mt-16">
          <span className="text-purple">My Experties</span> in topics include
        </h1>

        <div className="flex flex-wrap items-center justify-center w-full">
          {tt.map((topic) => (
            <div
              key={topic.id}
              className="flex items-center justify-start gap-4 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <img
                src={topic.img}
                alt={topic.name}
                className="w-32 h-27 object-cover"
              />
              <div className="flex items-center justify-center flex-1">
                <img
                  src={topic.nameImg}
                  alt={topic.name}
                  width={150}
                  className="text-2xl font-bold"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;