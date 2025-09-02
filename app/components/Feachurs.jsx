import Container from "./Container";

const Feature = () => {
  return (
    <>
      <section
        id="features"
        className=" h-full mt-[184px] z-50  p-0  flex  w-full flex-col items-center relative "
      >
        <div className="absolute w-[1090px] h-[660px] right-0 bottom-0 rounded-tl-full bg-[#b78bf51b] opacity-90 blur-3xl"></div>

        <Container>
          <div className="flex w-full z-[3333] flex-col items-center">
            <div className="flex items-center flex-col max-w-[700px]"></div>
            <h1 className="text-center w-full text-[60px] text-[#7E808F]">
              <span className="text-white">ميزات قوية لمساعدتك في إدارة </span>
              <br /> جميع العملاء المحتملين لديك
            </h1>
          </div>

          <div className="flex h-full mt-[60px] flex-col gap-[18px]  w-full items-center">
            <div className="w-full h-[256px] gap-[18px] flex items-center">
              <div className="bg-[#151829] card     w-[40%] h-full rounded-[12px] px-8 by-2 relative">
                <div
                  className={`p-2 rounded-[12px] absolute  icona top-6 right-8`}
                >
                  <img
                    src="/img/cardicons/icon1.svg"
                    alt="icon1"
                    loading="lazy"
                  />
                </div>

                <div className="w-full flex   flex-col items-end justify-end h-full py-10">
                  <h1 className="text-[28px] text-white">توليد الباركود</h1>
                  <p
                    dir="rtl"
                    className="pt-5 font-thin text-[18px] text-white/60"
                  >
                    يولد باركود للطباعة على العينات، مما يسهل إدارة العينات
                    والوصول السريع إلى معلومات المرضى.
                  </p>
                </div>
              </div>
              <div className="bg-[#151829] transition-all card  duration-300 w-[30%] h-full rounded-[12px] px-8 by-2 relative">
                <div
                  className={`absolute icona  p-3 rounded-[12px] top-6 right-8`}
                >
                  <img
                    src="/img/cardicons/icon2.svg"
                    alt="icon1"
                    loading="lazy"
                  />
                </div>

                <div className="w-full flex   flex-col items-end justify-end h-full py-10">
                  <h1 className="text-[28px] text-white">
                    طباعة النتائج والتقارير
                  </h1>
                  <p
                    dir="rtl"
                    className="pt-5 font-thin text-[18px] text-white/60"
                  >
                    طباعة النتائج والتقارير بصيغة PDF مباشرة من النظام لنسخ
                    ورقية عند الحاجة.
                  </p>
                </div>
              </div>
              <div className="bg-[#151829] w-[30%] h-full card  transition-all duration-300  rounded-[12px] px-8 by-2 relative">
                <div
                  className={` absolute icona  p-3 rounded-[12px] top-6 right-8`}
                >
                  <img
                    src="/img/cardicons/icon3.svg"
                    alt="icon1"
                    loading="lazy"
                  />
                </div>

                <div className="w-full flex   flex-col items-end justify-end h-full py-10">
                  <h1 className="text-[28px] text-white">سجل الزيارات</h1>
                  <p
                    dir="rtl"
                    className="pt-5 font-thin text-[18px] text-white/60"
                  >
                    تتبع سجل زيارات المرضى للمختبر، يسهل الوصول إلى التاريخ
                    الطبي لكل مريض.
                  </p>
                </div>
              </div>
            </div>

            {/* 1 */}
            <div className="w-full h-[500px] gap-[18px] flex items-center">
              <div className=" w-[30%] h-full flex flex-col gap-[18px] rounded-[12px]">
                <div className="bg-[#151829] card h-[60%] w-full flex  px-8 by-2   transition-all duration-300   rounded-[12px] relative">
                  <div
                    className={`absolute icona p-3 rounded-[12px] top-6 right-8`}
                  >
                    <img
                      src="/img/cardicons/icon4.svg"
                      alt="icon1"
                      loading="lazy"
                    />
                  </div>

                  <div className="w-full flex   flex-col items-end justify-end h-full py-10">
                    <h1 className="text-[28px] text-white">
                      تجربة مستخدم سلسة
                    </h1>
                    <p
                      dir="rtl"
                      className="pt-5 font-thin text-[18px] text-white/60"
                    >
                      واجهة مستخدم تضمن سهولة الاستخدام وكفاءة الأداء.
                    </p>
                  </div>
                </div>

                <div className="bg-[#151829]  card h-[40%] w-full flex  px-8 by-2    transition-all duration-300   rounded-[12px] relative">
                  <div
                    className={` 
                     absolute  p-[1px]  icona rounded-[12px] top-1 right-8`}
                  >
                    <img
                      src="/img/cardicons/icon5.svg"
                      alt="icon1"
                      loading="lazy"
                    />
                  </div>

                  <div className="w-full flex   flex-col items-end justify-end h-full py-4">
                    <h1 className="text-[28px] text-white">
                      الإرسال عبر الواتساب
                    </h1>
                    <p
                      dir="rtl"
                      className="pt-2 font-thin text-[18px] text-white/60"
                    >
                      إرسال النتائج مباشرة إلى المرضى عبر الواتساب بنقرة واحدة.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="bg-[#151829] card w-[40%]   transition-all duration-300  h-full rounded-[12px] px-8 by-2  relative">
                <div className={`absolute  icona rounded-[12px] top-4 right-8`}>
                  <img
                    src="/img/cardicons/icon6.svg"
                    alt="icon1"
                    loading="lazy"
                  />
                </div>

                <div className="w-full flex   flex-col items-end pt-[120px] h-full py-5">
                  <h1 className="text-[28px] text-white">تخصيص الفحوصات</h1>
                  <p
                    dir="rtl"
                    className="pt-2 font-thin text-[18px] text-white/60"
                  >
                    تخصيص الفحوصات بناءً على احتياجات المرضى، لتقديم خدمات
                    دقيقة.{" "}
                  </p>
                </div>

                <div className=" absolute bottom-[32px] left-4">
                  <img
                    className="robot-icon "
                    src="/img/cardicons/robotsad.svg"
                    alt="icon1"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* 3 */}
              <div className=" w-[30%] h-full flex flex-col gap-[18px] rounded-[12px]">
                <div className="bg-[#151829] card  transition-all duration-300  h-[60%] w-full flex  px-8 by-2   rounded-[12px] relative">
                  <div
                    className={`absolute icona  p-3 rounded-[12px] top-6 right-8`}
                  >
                    <img
                      src="/img/cardicons/icon7.svg"
                      alt="icon1"
                      loading="lazy"
                    />
                  </div>

                  <div className="w-full flex   flex-col items-end justify-end h-full py-10">
                    <h1 className="text-[28px] text-white">بيانات المرضى</h1>
                    <p
                      dir="rtl"
                      className="pt-5 font-thin text-white/60 text-[18px]"
                    >
                      تخزين وإدارة معلومات المرضى الطبية و الشخصية في النظام.
                    </p>
                  </div>
                </div>

                <div className="bg-[#151829]   card transition-all duration-300  h-[40%] w-full flex  px-8 by-2   rounded-[12px] relative">
                  <div
                    className={` absolute icona  p-2 rounded-[12px] top-2  right-8`}
                  >
                    <img
                      src="/img/cardicons/icon8.svg"
                      alt="icon1"
                      loading="lazy"
                    />
                  </div>

                  <div className="w-full flex   flex-col items-end justify-end h-full py-4">
                    <h1 className="text-[28px] text-white">التحديث تلقائيًا</h1>
                    <p
                      dir="rtl"
                      className="pt-2 font-thin text-white/60 text-[18px]"
                    >
                      عند صدور تحديث جديد يصل التحديث تلقائيًا دون الحاجة لإعادة
                      التنزيل.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Feature;
