"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqList = [
    {
      question: "آیا برای شروع نیاز به احراز هویت است؟",
      answer:
        "بله، برای حفظ امنیت کاربران و جلوگیری از فعالیت‌های غیرمجاز، تکمیل فرآیند احراز هویت پیش از شروع معاملات الزامی است.",
    },
    {
      question: "حداقل مبلغ مورد نیاز برای شروع چقدر است؟",
      answer:
        "حداقل میزان خرید به نوع ارز دیجیتال بستگی دارد، اما معمولاً با مبالغ کم نیز می‌توانید فعالیت خود را آغاز کنید.",
    },
    {
      question: "دارایی‌های من چگونه نگهداری می‌شوند؟",
      answer:
        "دارایی کاربران در کیف پول‌های امن و عمدتاً به‌صورت سرد (Cold Wallet) ذخیره شده و از استانداردهای امنیتی روز دنیا استفاده می‌شود.",
    },
    {
      question: "خرید و فروش ارز دیجیتال چقدر زمان می‌برد؟",
      answer:
        "معاملات به‌صورت آنی انجام می‌شوند و موجودی کیف پول شما بلافاصله پس از ثبت موفق سفارش به‌روزرسانی می‌شود.",
    },
    {
      question: "آیا پشتیبانی ۲۴ ساعته ارائه می‌شود؟",
      answer:
        "بله، تیم پشتیبانی به‌صورت ۲۴ ساعته و در تمام روزهای هفته آماده پاسخگویی به سوالات و مشکلات کاربران است.",
    },
  ];

  return (
    <section className="relative z-10 bg-background w-full px-6 lg:px-24 py-24">
      <div
        className="
          mx-auto        
          px-6 py-10 lg:px-8
        "
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">
            سوالات <span className="text-blue-500">متداول</span>
          </h2>
          <p className="mt-2 text-white/60 text-sm">
            پاسخ به پرتکرارترین سوالات کاربران
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqList.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-xl px-4"
            >
              <AccordionTrigger className="text-white text-right">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
