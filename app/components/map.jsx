"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";

export default function ContactMap() {
  const [hover, sethover] = useState(false);
  return (
    <div className="w-[550px] hover:h-full transition-all duration-500 hover:w-full h-[350px] z-10 rounded-[24px] overflow-hidden relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1204.476763476189!2d44.4486!3d33.3078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1693668949175!5m2!1sar!2siq"
        width="100%"
        height="100%"
        className="invert"
        style={{ border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute hover:bg-[#07077a47] inset-0 flex items-center justify-center">
     

        <a
          href="https://maps.google.com/?q=33.3078,44.4486"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {
            sethover(true);
          }}
          onMouseLeave={() => {
            sethover(false);
          }}
          className="bg-purple-500 text-white px-6 cursor-pointer py-3 flex justify-center items-center  rounded-lg text-lg font-bold shadow-lg hover:bg-purple-600 transition"
        >
          <p className="text-white">زيارة الموقع</p>

          <BsArrowUpRight
            className={`ml-2 transition-all duration-300  text-white ${
              hover
                ? "opacity-100 text-2xl translate-x-0"
                : "opacity-0 text-[0px] -translate-x-3"
            }`}
          />
        </a>
      </div>
    </div>
  );
}
