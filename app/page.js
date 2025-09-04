import { FaRegCheckCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Container from "./components/Container";
import { SlLocationPin } from "react-icons/sl";
import { BsLinkedin } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import HeaderComponent from "./components/Header";
import { BsArrowUpRight } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";

import Quastion from "@/components/quastion";
import ContactMap from "./components/map";
import Feature from "./components/Feachurs";
import About from "./components/About";
import Hello from "./components/Hello";

export default function Home() {
  return (
    <div className=" h-full m-0 p-0   relative overflow-x-hidden md:min-h-[100vh] lg:min-h-[100vh] flex  w-full flex-col items-center  bg-[#000712] ">
      {/* section 1 */}

      <div className="absolute md:w-[1000px] w-[500px] h-[700px] -right-30 top-[400px] rounded-l-full bg-[#b78bf527] opacity-80  blur-3xl  will-change-transform"></div>
      <div className="absolute md:w-[1000px] w-[500px] h-[700px] -left-30 top-[1300px] rounded-r-full bg-[#b78bf527] opacity-80  blur-3xl  will-change-transform"></div>
      <div className="absolute md:w-[1000px] w-[500px] h-[700px] -right-30 top-[2000px] rounded-l-full bg-[#b78bf527] opacity-80  blur-3xl  will-change-transform"></div>
      {/* <div className="absolute md:w-[1000px] w-[500px] h-[700px] -left-30 top-[2900px] rounded-r-full bg-[#b78bf527] opacity-80  blur-3xl  will-change-transform"></div> */}
      <div className="absolute md:w-[1000px] w-[500px] h-[700px] -right-30 top-[3600px] rounded-l-full bg-[#b78bf527] opacity-80  blur-3xl  will-change-transform"></div>
      <div className="absolute md:w-[1000px] w-[500px] h-[700px] -right-30 bottom-[300px] rounded-l-full bg-[#b78bf527] opacity-80  blur-3xl  will-change-transform"></div>
      <div className="absolute md:w-[1000px] w-[500px] h-[700px] -left-30 bottom-[1300px] rounded-r-full bg-[#b78bf527] opacity-80  blur-3xl  will-change-transform"></div>

      <section
        id="home"
        className=" h-full m-0 p-0  min-h-[100vh] flex  w-full flex-col items-center relative "
      >
        <header className="w-full z-[4440444] h-full  flex justify-center items-center">
          <Container>
            <HeaderComponent />
          </Container>
        </header>
        <div className=" hidden md:block absolute">
          <img src="/img/bg.svg" alt="bg" loading="lazy" />
        </div>
        <div className="hero z-20 flex justify-center w-full h-full mt-[32px]">
          <Container>
            <div className="w-full h-full flex flex-col items-center ">
              <div
                style={{
                  boxShadow: "inset 0 4px 10px #161e4e",
                }}
                className="lg:w-[330px] md:w-[330px]  w-[250px] h-[50px] text-[16px] text-[#999999] flex justify-center items-center rounded-full bg-[#0A0315] "
              >
                <h1 dir="rtl" className="text-white text-sm lg:text-lg">
                  إصدار جديد متوفر.
                  <span className="text-[#9053e7]"> حمّل الآن! </span>
                </h1>
              </div>

              <div className="mt-[16px]">
                <h1 className="lg:text-[60px] text-[25px] text-white text-center">
                  أجعل عملك أسهل مع نظام <br /> المختبرات الأفضل
                </h1>
              </div>

              <div className="mt-[16px]">
                <h1
                  dir="rtl"
                  className="lg:text-[24px] text-[12px] text-[#9EA3BF] text-center"
                >
                  نساعدكم على إدارة مختبراتكم الطبية بكفاءة ودقة من خلال نظام
                  مجاني <br /> يضمن أفضل خدمة لصاحب المختبر.
                </h1>
              </div>

              <div className=" w-full z-40 flex items-center gap-2 justify-center">
                <div className="button-start">
                  <h1>ابدأ مجاناً</h1>
                  <BsArrowUpRight />
                </div>
              </div>
              <p className="text-[#c5c5c5] mt-[9px] text-with-outline z-40 font-serif text-[12px] lg:text-[16px]  text-outline">
                خطة مجانية مدى الحياة
              </p>
            </div>
          </Container>
        </div>
        {/* <div className=" hidden absolute w-[1090px] h-[660px] right-0 bottom-0 rounded-tl-full bg-[#b78bf51b] opacity-90 blur-3xl"></div> */}

        {/* <div className="flex justify-center z-[2] absolute right-0  items-center">
          <img src="/img/light.svg" alt="light" loading="lazy" />
        </div> */}
      </section>

      {/* about 2 */}
      <Hello />
      {/* about 3 */}

      <About />
      {/* features 4 */}

      <Feature />
      {/* subscriptions 5 */}
      <section
        id="subscriptions"
        className=" h-full mt-[50px]  z-[2220]  p-0 min-h-[100vh] flex  w-full flex-col items-center relative "
      >
        {/* <div className="absolute w-[1090px] h-[660px] right-0 -top-[192px] rounded-bl-full bg-[#b78bf51b] opacity-90 blur-3xl"></div> */}

        <div className="w-full h-full flex z-[3333] justify-center">
          <Container>
            <div className="w-full items-center flex-col flex h-full">
              <div className="max-w-[500px]">
                <h1
                  className="text-center text-[28px] md:text-[36px] text-white"
                  dir="rtl"
                >
                  خطط الاشتراك في نظام Dr. Lab
                </h1>
                <p className="text-center text-white/60 text-[18px]">
                  اختر الخطة التي تناسب احتياجاتك
                </p>
              </div>

              <div className="w-full flex-col  md:flex-row  flex md:h-[782px] mt-[70px] items-center gap-[18px]">
                <div
                  dir="rtl"
                  className="md:w-1/3 w-full h-[800px] md:h-[90%] flex p-10  border-[#3a3f48] border-1 bg-[#0d141e] rounded-[24px] flex-col justify-start"
                >
                  <div className="w-full ">
                    <h1 className="flex pb-10 text-[18px] text-white">
                      شراء لمرة واحدة
                    </h1>
                    <p className="flex  pb-10 text-white/60 text-[16px]">
                      اشتر التطبيق لمرة واحدة وتمتع بجميع المميزات مدى الحياة
                    </p>
                    <h1 className="flex  pb-10 text-[24px] text-white">
                      350,000 دينار عراقي
                    </h1>
                  </div>

                  <div className="w-full justify-center beforeinclude items-center relative flex h-[70px]">
                    <div className="flex   z-50 rounded-[10px] md:h-full bg-[#252b34] w-[100px]  md:w-[96px] justify-center items-center">
                      <p className="text-[15px] text-white  p-2">ماذا تتضمن</p>
                    </div>
                  </div>
                  <div className="w-full h-full   justify-between mt-5 flex flex-col items-center">
                    <Feacher
                      title={"عدد التحاليل اليومي"}
                      access={true}
                      ans={"غير محدود"}
                    />
                    <Feacher title={"التحديثات"} access={true} ans={"تلقائي"} />
                    <Feacher title={"الدعم الفني"} access={true} ans={"كامل"} />

                    <Feacher
                      title={"الإحصائيات والتقارير"}
                      access={true}
                      ans={"متوفرة"}
                    />

                    <Feacher
                      title={"إرسال النتائج عبر واتساب"}
                      access={true}
                      ans={"اختياري"}
                    />

                    <Feacher
                      title={"طباعة الباركود"}
                      access={true}
                      ans={"متوفرة"}
                    />

                    <Feacher
                      title={"النسخ الاحتياطي"}
                      access={true}
                      ans={"متوفر"}
                    />
                  </div>
                </div>
                {/* 9999999999 */}

                <div
                  dir="rtl"
                  className="md:w-1/3 w-full mt-20 md:mt-0 z-[232323] h-[800px] md:h-[100%] relative flex p-10  border-[#2980d6] border-1 bg-[#0d141e] rounded-[24px] flex-col justify-start"
                >
                  <div className=" absolute -top-25 -left-5 md:-left-10 ">
                    <img
                      src="/img/cardicons/robotpriceng.svg"
                      alt="robot"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full ">
                    <h1 className="flex pb-10 text-[18px] text-white">
                      الاشتراك الشهري ( الاكثر شيوعاً )
                    </h1>
                    <p className="flex  pb-10 text-white/60 text-[16px]">
                      سيتم تجديد الاشتراك بعد انتهاء 30 يوم من تاريخ الاشتراك
                    </p>
                    <h1 className="flex  pb-10 text-[24px] text-white">
                      15,000 دينار عراقي
                    </h1>
                  </div>

                  <div className="w-full justify-center beforeinclude items-center relative flex h-[70px]">
                    <div className="flex   z-50 rounded-[10px] md:h-full bg-[#252b34] w-[100px] md:w-[96px] justify-center items-center">
                      <p className="text-[15px] text-white p-2">ماذا تتضمن</p>
                    </div>
                  </div>

                  <div className="w-full h-full   justify-between mt-5 flex flex-col items-center">
                    <Feacher
                      title={"عدد التحاليل اليومي"}
                      access={true}
                      ans={"غير محدود"}
                    />
                    <Feacher title={"التحديثات"} access={true} ans={"تلقائي"} />
                    <Feacher title={"الدعم الفني"} access={true} ans={"كامل"} />

                    <Feacher
                      title={"الإحصائيات والتقارير"}
                      access={true}
                      ans={"متوفرة"}
                    />

                    <Feacher
                      title={"إرسال النتائج عبر واتساب"}
                      access={true}
                      ans={"اختياري"}
                    />

                    <Feacher
                      title={"طباعة الباركود"}
                      access={true}
                      ans={"متوفرة"}
                    />

                    <Feacher
                      title={"النسخ الاحتياطي"}
                      access={true}
                      ans={"متوفر"}
                    />
                  </div>
                  {/* <div className="w-full mt-10 rounded-[12px] h-[135px] bg-[#9053E7] flex justify-center items-center">
                    <p>اختر الباقة</p>
                  </div> */}
                </div>

                {/* 88888888888888 */}
                <div
                  dir="rtl"
                  className="md:w-1/3 w-full h-[800px] md:h-[90%] flex md:mt-0 mt-20 p-10  border-[#3a3f48] border-1 bg-[#0d141e] rounded-[24px] flex-col justify-start"
                >
                  <div className="w-full ">
                    <h1 className="flex pb-10 text-[18px] text-white">
                      النسخة المجانية
                    </h1>
                    <p className="flex  pb-10 text-white/60 text-[16px]">
                      يمكنك استخدام النسخة المجانية مدى الحياة{" "}
                    </p>
                    <h1 className="flex  pb-10 text-[24px] text-white">
                      0 دينار عراقي
                    </h1>
                  </div>

                  <div className="w-full justify-center beforeinclude items-center relative flex h-[70px]">
                    <div className="flex   z-50 rounded-[10px] md:h-full w-[100px] bg-[#252b34] md:w-[96px] justify-center items-center">
                      <p className="text-[15px] text-white p-2">ماذا تتضمن</p>
                    </div>
                  </div>

                  <div className="w-full h-full   justify-between mt-5 flex flex-col items-center">
                    <div className="w-full h-full   justify-between mt-5 flex flex-col items-center">
                      <Feacher
                        title={"عدد التحاليل اليومي"}
                        access={true}
                        ans={"20 فقط"}
                      />
                      <Feacher
                        title={"التحديثات"}
                        access={true}
                        ans={"تلقائي"}
                      />
                      <Feacher
                        title={"الدعم الفني"}
                        access={true}
                        ans={"محدود"}
                      />

                      <Feacher
                        title={"الإحصائيات والتقارير"}
                        access={false}
                        ans={"غير متوفر"}
                      />

                      <Feacher
                        title={"إرسال النتائج عبر واتساب"}
                        access={false}
                        ans={"غير متوفر"}
                      />

                      <Feacher
                        title={"طباعة الباركود"}
                        access={false}
                        ans={"غير متوفر"}
                      />

                      <Feacher
                        title={"النسخ الاحتياطي"}
                        access={false}
                        ans={"غير متوفر"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* section 6 */}
      <section className=" h-full mt-[51px] z-50  p-0 min-h-[100vh] flex  w-full flex-col items-center relative ">
        <div className=" absolute w-full h-full">
          <img src="/img/bg.svg" alt="bg" loading="lazy" />
        </div>

        <div className="w-full h-full flex relative justify-center z-50">
          <Container>
            <div className="flex md:flex-row flex-col-reverse items-center w-full justify-center ">
              <div className="md:w-[60%] w-full h-full flex justify-center">
                <Quastion />
              </div>
              <div className="md:w-[40%] w-full h-full flex-col  flex items-end ">
                <div className=" text-white">
                  <h1 className="text-[35px]  md:text-[60px]">
                    الأسئلة الشائعة
                  </h1>
                </div>

                <div className="text-white/60">
                  <p>سنحاول الأجابة على ابرز الأسئلة التي تخطر ببالك</p>
                </div>

                <div className="md:block hidden md:relative md:mt-10">
                  <img
                    src="/img/cardicons/robotquastion.svg"
                    alt="robot"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* <div className="flex justify-center z-[2] absolute right-0 max-h-[90vh]  items-center">
          <img src="/img/light.svg" alt="light" loading="lazy" />
        </div> */}
      </section>
      {/* section 7 */}
      <section
        id="contact"
        className=" h-full -mt-[100px]  pb-20 md:pb-0 z-50  p-0 flex  w-full flex-col items-center relative "
      >
        {/* <div className="absolute w-[1090px] -z-50 h-[660px] right-0 -top-[200px] rounded-bl-full bg-[#b78bf51b] opacity-90 blur-3xl"></div> */}

        <div className="flex justify-center w-full h-full">
          <Container>
            <div className="w-full md:flex-row flex-col flex justify-between gap-20 ">
              {/* map */}
              <div className="md:w-[70%] flex justify-center items-center rounded-[24px]  boxmap">
                <ContactMap />
              </div>

              {/* contact */}
              <div
                dir="RTL"
                className="flex  md:w-[45%] items-center flex-col "
              >
                {/* info */}
                <div className="flex flex-col  justify-center w-full">
                  <h1 className="text-[36px] text-white">تواصل معنا </h1>
                  <p className="text-white text-[16px] font-thin">
                    نحن هنا لمساعدتك! إذا كان لديك أي استفسارات أو تحتاج إلى دعم
                    فني لا تتردد في التواصل معنا عبر أي من الوسائل التالية
                  </p>
                </div>

                <div className="w-full flex gap-[18px] flex-col mt-[32px] items-center">
                  <div className="contact-card">
                    <TfiEmail className="text-white text-[36px] contact-card-icon " />
                    <p className="text-white text-[24px] underline">
                      {" "}
                      info@puretik.com
                    </p>
                  </div>

                  <div className="contact-card">
                    <LuPhone className="text-white text-[36px] contact-card-icon " />
                    <p className="text-white text-[24px] "> 07710553120</p>
                  </div>

                  <div className="contact-card">
                    <SlLocationPin className="text-white contact-card-icon  text-[36px]" />
                    <p className="text-white text-[24px] ">
                      بغداد ,شارع الصناعة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      {/* footer 8 */}
      <footer className="flex w-full z-50 h-full justify-center">
        <Container>
          {/* top */}
          <div className="w-full h-auto py-4 md:h-[87px] flex justify-center">
            <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              {/* Links - في الموبايل ستكون في الأعلى */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-20 order-2 md:order-1">
                <a
                  className="text-white/60 text-xs md:text-sm underline"
                  href="#"
                >
                  التحديثات
                </a>
                <a
                  className="text-white/60 text-xs md:text-sm underline"
                  href="#"
                >
                  السياسة الخصوصية
                </a>
                <a
                  className="text-white/60 text-xs md:text-sm underline"
                  href="#"
                >
                  سياسة الدعم الفني
                </a>
              </div>

              {/* Logo and Description */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 order-1 md:order-2">
                <div className="flex items-center max-w-[280px] md:border-r md:pr-5  md:max-w-[400px]">
                  <p
                    className="text-white/60 text-xs md:text-sm text-center md:text-right"
                    dir="rtl"
                  >
                    نظام ادارة المختبرات الاسهل على الاطلاق. نساعدكم على إدارة
                    مختبراتكم بكفاءة ودقة لضمان أفضل خدمة للمرضى
                  </p>
                </div>
                <div className="items-center  flex w-[120px] md:w-[174px]">
                  <img
                    src="/img/logobig.png"
                    alt="logo"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="border-t-1 pt-4 md:pt-10 border-t-white/60">
            <div className="w-full h-full flex flex-col md:flex-row px-2 md:px-10 justify-between items-center gap-4 md:gap-0">
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 md:gap-6 order-2 md:order-1">
                <a className="text-white underline" href="#">
                  <FaInstagram className="text-[16px] md:text-[20px]" />
                </a>
                <a className="text-white underline" href="#">
                  <RiFacebookCircleLine className="text-[16px] md:text-[20px]" />
                </a>
                <a className="text-white underline" href="#">
                  <FaXTwitter className="text-[16px] md:text-[20px]" />
                </a>
                <a className="text-white underline" href="#">
                  <BsLinkedin className="text-[16px] md:text-[20px]" />
                </a>
              </div>

              {/* Copyright */}
              <div className="flex items-center gap-10 order-1 md:order-2">
                <div className="flex items-center max-w-[300px] md:max-w-[400px]">
                  <p className="text-white/60 text-xs md:text-sm text-center">
                    © puretik 2024 جميع الحقوق محفوظة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

const Feacher = ({ title, access, ans }) => {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-3 items-center">
          <FaRegCheckCircle
            className={`${access ? "text-[#2BE295]" : "text-white/60"} `}
          />
          <h2 className="text-white/60">{title}</h2>
        </div>
        <div className="flex items-center">
          <p className="text-center text-white/60">{ans}</p>
        </div>
      </div>
    </>
  );
};
