import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "ما هو برنامج إدارة المختبرات الطبية؟",
    content:
      "برنامج إدارة المختبرات الطبية هو نظام شامل مصمم لإدارة كافة جوانب المختبرات الطبية، بدءًا من إدارة بيانات المرضى والفحوصات، إلى إنشاء التقارير.",
  },
  {
    id: "2",
    title: "كيف يمكنني البدءباستخدام البرنامج؟",
    content:
      "يمكنك البدء بإستخدام البرنامج من خلال تحميليه من هذا الموقع عبر روابط التحميل المتوفرة و التمتع بنسخة مجانية مدى الحياة.",
  },
  {
    id: "3",
    title: "كيف يتم تأمين بيانات المرضى في النظام؟",
    content:
      "يتم تأمين بيانات المرضى باستخدام تقنيات التشفير الحديثة وضوابط الوصول الصارمة.",
  },
  {
    id: "4",
    title: "ما هي متطلبات النظام لتشغيل البرنامج؟",
    content:
      "متطلبات النظام لتشغيل البرنامج تشمل معالج حديث, ذاكرة عشوائية كافية, ومساحة تخزين مناسبة.",
  },

  {
    id: "5",
    title: "هل يمكنني تخصيص البرنامج حسب احتياجات مختبري؟",
    content:
      "نعم، يمكنك تخصيص البرنامج وفقًا لاحتياجات مختبرك من خلال الخيارات المتاحة في الإعدادات.",
  },
];

export default function Quastion() {
  return (
    <div className="space-y-4 h-full  w-full">

      <Accordion
        type="single"
        collapsible
        className="z-[49944]"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-[20px]">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="focus-visible:border-ring text-rgiht w-full text-white focus-visible:ring-ring/50 flex flex-1 items-center gap-4 rounded-md py-2  text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:-order-1 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                <p className="w-full md:text-[20px] text-right">{item.title}</p>
                <PlusIcon
                  size={16}
                  className="pointer-events-none text-white shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent
              dir="rtl"
              className="bg-[#0a0e28] text-white py-7 px-5 flex h-full w-full   justify-center rounded-[12px] items-center   "
            >
              <p className="w-full md:text-[17px] h-full block">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
