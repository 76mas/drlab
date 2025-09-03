"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { BsArrowUpRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const HeaderComponent = () => {
  const [isHover, setIsHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { link: "#contact", title: "تواصل معنا" },
    { link: "#subscriptions", title: "الاشتراكات" },
    { link: "#features", title: "المميزات" },
    { link: "#about", title: "Dr.Lab عن" },
    { link: "#home", title: "الرئيسية" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="bg-[#1E1E1E] duration-[500ms] transition-[width] gap-[12px] 
                   w-[380px]  md:w-[681px] lg:w-[681.5px] 
                   lg:hover:w-full md:hover:w-full 
                   h-[60px] sm:h-[73.5px] 
                   mt-[16px] sm:mt-[32px] 
                   text-[#CCCCCC] px-[15px] sm:px-[20px] 
                   flex border-[2px] sm:border-[3px] border-[#343434] 
                   items-center justify-between rounded-[12px] mx-auto"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer relative">
          <img
            className="w-[30px] sm:w-[40px] inline-block"
            src="/img/logo.svg"
            alt="logo"
          />

          <img
            className={`inline-block mt-2 transition-all duration-700 ease-in-out ${
              isHover
                ? "opacity-100 w-[80px] sm:w-[100px] translate-x-0"
                : "opacity-0 w-0 -translate-x-3"
            }`}
            src="/img/drlogo.png"
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="md:flex hidden w-full items-center justify-center gap-[8px]">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="p-[10px] text-sm lg:text-base transition duration-300 ease-in-out hover:text-[#9053E7] cursor-pointer"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div
          className={`md:flex hidden cursor-pointer text-white justify-center items-center 
                     bg-[#9053E7] rounded-[12px] h-[45px] sm:h-[53px] 
                     transition-all duration-700 ease-in-out ${
                       isHover
                         ? "w-[160px] lg:w-[190px]"
                         : "w-[70px] lg:w-[83px]"
                     }`}
        >
          <div className="w-full flex items-center gap-2 justify-center">
            <h1
              className={`transition-all duration-700 ease-in-out ${
                isHover
                  ? "opacity-100 font-bold translate-x-0"
                  : "opacity-0 font-thin text-[0px] -translate-x-2"
              }`}
            >
              جرب الان
            </h1>
            <BsArrowUpRight
              className={`text-sm lg:text-base ${
                isHover ? "mr-0" : "mr-2 lg:mr-3"
              }`}
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#9053E7] text-2xl sm:text-3xl focus:outline-none"
          >
            {isMenuOpen ? <IoClose /> : <TiThMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 top-0">
          <div className="bg-[#1E1E1E] w-full h-auto min-h-screen pt-20 px-6">
            <div className="flex justify-between mb-18 items-center w-full h-[40px] relative gap-4">
              <img className="w-[150px]" src="/img/logobig.png" alt="logo" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#9053E7] text-4xl focus:outline-none"
              >
                <IoClose />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#CCCCCC] text-lg py-3 border-b border-[#343434] 
                           hover:text-[#9053E7] transition duration-300 text-center"
                >
                  {item.title}
                </a>
              ))}

              {/* Mobile CTA Button */}
              <div className="mt-6">
                <button
                  className="w-full bg-[#9053E7] text-white py-4 rounded-[12px] 
                                 flex items-center justify-center gap-2 font-bold text-lg
                                 hover:bg-[#7c47d1] transition duration-300"
                >
                  <span>جرب الان</span>
                  <BsArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { TiThMenu } from "react-icons/ti";
// import { BsArrowUpRight } from "react-icons/bs";

// const HeaderComponent = () => {
//   const [isHover, setIsHover] = useState(false);

//   return (
//     <>
//       <div
//         onMouseEnter={() => setIsHover(true)}
//         onMouseLeave={() => setIsHover(false)}
//         className="bg-[#1E1E1E] duration-[500ms] transition-[width]  gap-[12px] w-[350px] lg:hover:w-full md:hover:w-full h-[73.5px] mt-[32px] text-[#CCCCCC] px-[20px] flex border-[3px] border-[#343434] items-center justify-between md:w-[681px] lg:w-[681.5px] rounded-[12px] mx-auto"
//       >
//         <div className="lg:w-fit w-[40px] h-full flex items-center justify-between lg:justify-start  md:justify-start gap-2 cursor-pointer relative">
//           <img className=" inline-block" src="/img/logo.svg" alt="logo" />

//           <img
//             className={`inline-block mt-2 transition-all duration-700 ease-in-out ${
//               isHover
//                 ? "opacity-100  w-[100px] translate-x-0"
//                 : "opacity-0 w-0 -translate-x-3"
//             }`}
//             src="/img/drlogo.png"
//             alt="logo"
//           />
//         </div>

//         <div className="md:flex   hidden w-full items-center justify-center gap-[8px]">
//           {[
//             { link: "#conact", title: "تواصل معنا" },
//             { link: "#subscriptions", title: "الاشتراكات" },
//             { link: "#features", title: "المميزات" },
//             { link: "#about", title: "Dr.Lab عن" },
//             { link: "#home", title: "الرئيسية" },
//           ].map((item, i) => (
//             <a
//               key={i}
//               href={item.link}
//               className="p-[10px] transition duration-300 ease-in-out hover:text-[#9053E7] cursor-pointer fh"
//             >
//               {item.title}
//             </a>
//           ))}
//         </div>

//         <div
//           className={`md:flex hidden cursor-pointer text-white justify-center items-center bg-[#9053E7] rounded-[12px] h-[53px] transition-all duration-700 ease-in-out ${
//             isHover ? "w-[190px]" : "w-[83px]"
//           }`}
//         >
//           <div className="w-full flex items-center gap-2 justify-center">
//             <h1
//               className={`transition-all  duration-700 ease-in-out ${
//                 isHover
//                   ? "opacity-100 font-bold translate-x-0"
//                   : "opacity-0 font-thin text-[0px] -translate-x-2"
//               }`}
//             >
//               جرب الان
//             </h1>

//             <BsArrowUpRight className={`${isHover ? "mr-0" : "mr-3"}`} />
//           </div>
//         </div>

// <div className="lg:hidden md:hidden">
//   <TiThMenu className="text-[#9053E7] text-3xl" />
// </div>
//       </div>
//     </>
//   );
// };

// export default HeaderComponent;
