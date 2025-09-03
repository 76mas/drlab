import Container from "./Container";
const About = () => {
  return (
    <>
      <section
        id="about"
        className=" h-full -mt-[500px] md:-mt-10 z-50 m-0 p-0 min-h-[100vh] flex  w-full flex-col items-center relative "
      >
        {/* <div className="absolute w-[1090px] h-[660px] left-0 top-0 rounded-tr-full bg-[#b78bf51b] opacity-90 blur-3xl"></div> */}

        <div className="w-full z-50 h-full flex justify-center">
          <Container>
            <div className="w-full h-full flex justify-center">
              <div className="w-full flex items-center flex-col max-w-[700px]">
                <h1 className="text-[30px] md:text-[39px] text-white font-bold">
                  ؟ Dr.Lab ما هو نظام
                </h1>

                <p
                  dir="rtl"
                  className="text-center  mt-[20px] text-[16px] text-[#babac1]"
                >
                  برنامجنا لإدارة المختبرات الطبية هو حل شامل ومتكامل صُمم
                  خصيصاً لتلبية احتياجات المختبرات الطبية والمراكز الصحية. يهدف
                  البرنامج إلى تسهيل عمليات إدارة المختبر وتحسين كفاءة الأداء من
                  خلال أدوات متعددة ووظائف متقدمة.
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div className="w-full z-50 h-full flex  justify-center">
          <Container>
            <div className="flex flex-col w-full items-center gap-[24px]">
      
              <div className="flex flex-col md:flex-row gap-[24px] items-center justify-center">
 
                <div className="relative card-about flex flex-col md:w-1/3 h-[208px] p-5 items-end rounded-[12px] bg-[#181534] card-hover-border">
                  <div className="absolute card-about-icon top-4 right-4 w-[44px] h-[43px] p-1 rounded-[12px] border border-[#4c4764] bg-[#ffffff31] flex items-center justify-center">
                    <img src="/img/inhance.svg" alt="icon" loading="lazy" />
                  </div>

                  <div className="flex mt-4 flex-col justify-between items-end h-full pt-8">
                    <h1 className="text-[24px]  text-white">
                      تحسين جودة الخدمة
                    </h1>
                    <p dir="rtl" className="text-[16px] text-white/60">
                      توفير معلومات دقيقة وسريعة للمرضى والأطباء، مما يساهم في
                      تحسين جودة الرعاية الصحية المقدمة.
                    </p>
                  </div>
                </div>

                <div className="relative card-about flex flex-col md:w-1/3 h-[208px] p-5 items-end rounded-[12px] bg-[#181534] transition-all duration-300 card-hover-border">
                  <div className="absolute card-about-icon top-4 right-4 w-[44px] h-[43px] p-1 rounded-[12px] border border-[#4c4764] bg-[#ffffff31] flex items-center justify-center">
                    <img src="/img/discount.svg" alt="icon" loading="lazy" />
                  </div>

                  <div className="flex mt-4 flex-col justify-between items-end h-full pt-8">
                    <h1 className="text-[24px] text-white">توفير التكاليف</h1>
                    <p
                      dir="rtl"
                      className="text-[16px] text-start text-white/60"
                    >
                      تقليل الحاجة إلى الأعمال الورقية والتقليل من الأخطاء
                      البشرية، مما يؤدي إلى تقليل التكاليف التشغيلية.
                    </p>
                  </div>
                </div>

  
                <div className="relative card-about flex flex-col md:w-1/3 h-[208px] p-5 items-end rounded-[12px] bg-[#181534] transition-all duration-300 card-hover-border">
                  <div className="absolute card-about-icon top-4 right-4 w-[44px] h-[43px] p-1 rounded-[12px] border border-[#4c4764] bg-[#ffffff31] flex items-center justify-center">
                    <img src="/img/increse.svg" alt="icon" loading="lazy" />
                  </div>

                  <div className="flex mt-4 flex-col justify-between items-end h-full pt-8">
                    <h1 className="text-[24px] text-white">زيادة الكفاءة</h1>
                    <p
                      dir="rtl"
                      className="text-[16px] text-start text-white/60"
                    >
                      تقليل الوقت المستغرق في إدارة العمليات اليومية من خلال
                      أتمتة العديد من المهام الروتينية.
                    </p>
                  </div>
                </div>
              </div>

     
              <div className="feature-card md:flex-row justify-between p-10 flex-col flex w-full h-[411px] items-center md:p-20 rounded-[12px] transition duration-300 card-hover-border">
                <div className="w-full flex items-center gap-8 md:gap-0 justify-center">
                  <div className="md:w-[491px] w-[200px]">
                    <img
                      src="/img/tabledoctor.png"
                      alt="table"
                      loading="lazy"
                    />
                  </div>

                  <div className="doctor-image w-auto transition-transform duration-300">
                    <img
                      className="w-[80px] md:w-auto"
                      src="/img/doctor.png"
                      alt="doctor"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div dir="rtl" className="md:w-[405px]">
                  <h1 className="text-[20px] text-white">المميزات و الخصائص</h1>
                  <p className="text-[#ECECEC] text-[12px] md:text-[16px] font-thin">
                    يساهم برنامج إدارة المختبرات الطبية في زيادة الكفاءة من خلال
                    أتمتة المهام الروتينية، مما يقلل من الوقت المستغرق في
                    العمليات اليومية ويحسن الأداء العام. كما يعزز جودة الخدمة
                    المقدمة من خلال توفير معلومات دقيقة وسريعة، مما يزيد من رضا
                    المرضى. يتمتع النظام بأعلى مستويات الأمان، ويقلل من التكاليف
                    التشغيلية بفضل تقليل الحاجة إلى الأعمال الورقية والأخطاء
                    البشرية.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default About;
