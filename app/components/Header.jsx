"use client";

import { useState } from "react";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { BsArrowUpRight } from "react-icons/bs";

const HeaderComponent = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="bg-[#1E1E1E] duration-[500ms] transition-[width]  gap-[12px] w-[350px] lg:hover:w-full md:hover:w-full h-[73.5px] mt-[32px] text-[#CCCCCC] px-[20px] flex border-[3px] border-[#343434] items-center justify-between md:w-[681px] lg:w-[681.5px] rounded-[12px] mx-auto"
      >
        <div className="lg:w-fit w-[40px] h-full flex items-center justify-between lg:justify-start  md:justify-start gap-2 cursor-pointer relative">
          <img className=" inline-block" src="/img/logo.svg" alt="logo" />

          <img
            className={`inline-block mt-2 transition-all duration-700 ease-in-out ${
              isHover
                ? "opacity-100  w-[100px] translate-x-0"
                : "opacity-0 w-0 -translate-x-3"
            }`}
            src="/img/drlogo.png"
            alt="logo"
          />
        </div>

        <div className="md:flex   hidden w-full items-center justify-center gap-[8px]">
          {[
            { link: "#conact", title: "تواصل معنا" },
            { link: "#subscriptions", title: "الاشتراكات" },
            { link: "#features", title: "المميزات" },
            { link: "#about", title: "Dr.Lab عن" },
            { link: "#home", title: "الرئيسية" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="p-[10px] transition duration-300 ease-in-out hover:text-[#9053E7] cursor-pointer fh"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div
          className={`md:flex hidden cursor-pointer text-white justify-center items-center bg-[#9053E7] rounded-[12px] h-[53px] transition-all duration-700 ease-in-out ${
            isHover ? "w-[190px]" : "w-[83px]"
          }`}
        >
          <div className="w-full flex items-center gap-2 justify-center">
            <h1
              className={`transition-all  duration-700 ease-in-out ${
                isHover
                  ? "opacity-100 font-bold translate-x-0"
                  : "opacity-0 font-thin text-[0px] -translate-x-2"
              }`}
            >
              جرب الان
            </h1>

            <BsArrowUpRight className={`${isHover ? "mr-0" : "mr-3"}`} />
          </div>
        </div>

<div className="lg:hidden md:hidden">
  <TiThMenu className="text-[#9053E7] text-3xl" />
</div>
      </div>
    </>
  );
};

export default HeaderComponent;
