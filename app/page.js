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
    <div className=" h-full m-0 p-0  md:min-h-[100vh] lg:min-h-[100vh] flex  w-full flex-col items-center  bg-[#000712] ">
      {/* section 1 */}
      <section
        id="home"
        className=" h-full m-0 p-0  min-h-[100vh] flex  w-full flex-col items-center relative "
      >
        <header className="w-full z-50 h-full  flex justify-center items-center">
          <Container>
            <HeaderComponent />
          </Container>
        </header>
        <div className=" absolute">
          <img src="/img/bg.svg" alt="bg" loading="lazy" />
        </div>
        <div className="hero flex justify-center w-full h-full mt-[32px]">
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

        <div className="flex justify-center z-[2] absolute right-0  items-center">
          <img src="/img/light.svg" alt="light" loading="lazy" />
        </div>
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
        className=" h-full mt-[192px] z-[2220]  p-0 min-h-[100vh] flex  w-full flex-col items-center relative "
      >
        <div className="w-full h-full flex justify-center">
          <Container>
            <div className="w-full items-center flex-col flex h-full">
              <div className="max-w-[500px]">
                <h1 className="text-center text-[36px] text-white" dir="rtl">
                  خطط الاشتراك في نظام Dr. Lab
                </h1>
                <p className="text-center text-white/60 text-[18px]">
                  اختر الخطة التي تناسب احتياجاتك
                </p>
              </div>

              <div className="w-full  flex h-[782px] mt-[70px] items-center gap-[18px]">
                <div
                  dir="rtl"
                  className="w-1/3 h-[90%] flex p-10  border-[#3a3f48] border-1 bg-[#0d141e] rounded-[24px] flex-col justify-start"
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
                    <div className="flex   z-50 rounded-[10px] h-full bg-[#252b34] w-[96px] justify-center items-center">
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
                </div>
                {/* 9999999999 */}

                <div
                  dir="rtl"
                  className="w-1/3 z-[232323] h-[100%] relative flex p-10  border-[#2980d6] border-1 bg-[#0d141e] rounded-[24px] flex-col justify-start"
                >
                  <div className=" absolute -top-25 -left-10 ">
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
                    <div className="flex   z-50 rounded-[10px] h-full bg-[#252b34] w-[96px] justify-center items-center">
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
                  className="w-1/3 h-[90%] flex p-10  border-[#3a3f48] border-1 bg-[#0d141e] rounded-[24px] flex-col justify-start"
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
                    <div className="flex   z-50 rounded-[10px] h-full bg-[#252b34] w-[96px] justify-center items-center">
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
      <section className=" h-full mt-[192px] z-50  p-0 min-h-[100vh] flex  w-full flex-col items-center relative ">
        <div className=" absolute w-full h-full">
          <img src="/img/bg.svg" alt="bg" loading="lazy" />
        </div>

        <div className="w-full h-full flex justify-center z-50">
          <Container>
            <div className="flex items-center w-full justify-center ">
              <div className="w-[60%] h-full flex justify-center">
                <Quastion />
              </div>
              <div className="w-[40%] h-full flex-col  flex items-end ">
                <div className=" text-white">
                  <h1 className="text-[60px]">الأسئلة الشائعة</h1>
                </div>

                <div className="text-white/60">
                  <p>سنحاول الأجابة على ابرز الأسئلة التي تخطر ببالك</p>
                </div>

                <div className="mt-10">
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

        <div className="flex justify-center z-[2] absolute right-0 max-h-[90vh]  items-center">
          <img src="/img/light.svg" alt="light" loading="lazy" />
        </div>
      </section>
      {/* section 7 */}
      <section
        id="conact"
        className=" h-full mt-[192px] z-50  p-0 flex  w-full flex-col items-center relative "
      >
        <div className="flex justify-center w-full h-full">
          <Container>
            <div className="w-full flex justify-between gap-20 ">
              {/* map */}
              <div className="w-[70%] transition-[.3s] flex justify-center items-center rounded-[24px]  border-[#6f00ff] relative border-r-0 border-b-0 border-2">
                <ContactMap />
                {}
              </div>

              {/* contact */}
              <div dir="RTL" className="flex  w-[45%] items-center flex-col ">
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
          <div className="w-full h-[87px] flex justify-center">
            <div className="w-full h-full flex justify-between items-center">
              <div className="flex items-center gap-20 ">
                <a className="text-white/60  underline" href="#">
                  التحديثات
                </a>
                <a className="text-white/60 underline" href="#">
                  السياسة الخصوصية
                </a>
                <a className="text-white/60 underline" href="#">
                  سياسة الدعم الفني
                </a>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex items-center max-w-[400px]">
                  {" "}
                  <p className="text-white/60" dir="rtl">
                    نظام ادارة المختبرات الاسهل على الاطللاق. نساعدكم على إدارة
                    مختبراتكم بكفاءة ودقة لضمان أفضل خدمة للمرضى
                  </p>
                </div>
                <div className="items-center flex w-[174px] ">
                  <img src="/img/logobig.png" alt="logo" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          {/* buttom */}

          <div className=" border-t-1 pt-10 border-t-white/60">
            <div className="w-full h-full flex px-10 justify-between items-center">
              <div className="flex items-center gap-6 ">
                <a className="text-white  underline" href="#">
                  <FaInstagram className="text-[20px]" />
                </a>
                <a className="text-white underline" href="#">
                  <RiFacebookCircleLine className="text-[20px]" />
                </a>
                <a className="text-white underline" href="#">
                  <FaXTwitter className="text-[20px]" />
                </a>

                <a className="text-white underline" href="#">
                  <BsLinkedin className="text-[20px]" />
                </a>
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex items-center max-w-[400px]">
                  {" "}
                  <p className="text-white/60 text-center">
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
