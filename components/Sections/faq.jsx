"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="w-full px-6 lg:px-24 py-24">
      <div
        className="
          mx-auto max-w-4xl
          rounded-3xl
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          px-6 py-10 lg:px-10
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">
            سوالات متداول
          </h2>
          <p className="mt-2 text-white/60 text-sm">
            پاسخ به پرتکرارترین سوالات کاربران
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem
            value="item-1"
            className="border border-white/10 rounded-xl px-4"
          >
            <AccordionTrigger className="text-white text-right">
              آیا برای شروع نیاز به احراز هویت است؟
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-sm leading-relaxed">
              بله، برای حفظ امنیت کاربران و جلوگیری از سوءاستفاده، احراز هویت در
              مراحل اولیه الزامی است.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border border-white/10 rounded-xl px-4"
          >
            <AccordionTrigger className="text-white text-right">
              خرید و فروش ارز دیجیتال چقدر زمان می‌برد؟
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-sm leading-relaxed">
              معاملات به‌صورت آنی انجام می‌شوند و موجودی شما بلافاصله پس از
              تکمیل سفارش به‌روز می‌شود.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border border-white/10 rounded-xl px-4"
          >
            <AccordionTrigger className="text-white text-right">
              آیا دارایی‌های من امن هستند؟
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-sm leading-relaxed">
              دارایی کاربران در کیف پول‌های سرد و امن نگهداری می‌شود و از
              استانداردهای امنیتی روز دنیا استفاده می‌کنیم.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border border-white/10 rounded-xl px-4"
          >
            <AccordionTrigger className="text-white text-right">
              حداقل میزان خرید چقدر است؟
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-sm leading-relaxed">
              حداقل میزان خرید به نوع ارز دیجیتال بستگی دارد و معمولاً با مبالغ
              کم نیز امکان شروع وجود دارد.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border border-white/10 rounded-xl px-4"
          >
            <AccordionTrigger className="text-white text-right">
              آیا پشتیبانی ۲۴ ساعته دارید؟
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-sm leading-relaxed">
              بله، تیم پشتیبانی ما به‌صورت ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی
              به سوالات شماست.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
