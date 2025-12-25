"use client";

import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "../ui/background-beams";
import { Verified } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    // <section className="relative min-h-screen overflow-hidden  flex items-center justify-center px-4 md:px-8 pt-24">
    //   {/* Flickering Grid Background */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <Vortex
    //       backgroundColor="black"
    //       rangeY={800}
    //       particleCount={500}
    //       baseHue={120}
    //       className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
    //     ></Vortex>
    //   </div>

    //   {/* Hero Content */}
    //   <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
    //     <div className="space-y-4">
    //       <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
    //         به{" "}
    //         <span className="bg-linear-to-l from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
    //           مارکتا
    //         </span>{" "}
    //         خوش آمدید
    //       </h1>
    //       <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
    //         پلتفرم نوین خرید و فروش آنلاین با بهترین تجربه کاربری و امکانات
    //         پیشرفته برای کسب و کارهای ایرانی
    //       </p>
    //     </div>

    //     {/* CTA Buttons */}
    //     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    //       <Button
    //         size="lg"
    //         className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-8 py-6 text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
    //       >
    //         شروع کنید
    //       </Button>
    //       <Button
    //         size="lg"
    //         variant="outline"
    //         className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-xl px-8 py-6 text-lg font-medium transition-all duration-300"
    //       >
    //         بیشتر بدانید
    //       </Button>
    //     </div>

    //     {/* Stats or Features */}
    //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
    //       <div className="space-y-2">
    //         <h3 className="text-4xl font-bold text-gray-900">۱۰۰+</h3>
    //         <p className="text-gray-600">فروشنده فعال</p>
    //       </div>
    //       <div className="space-y-2">
    //         <h3 className="text-4xl font-bold text-gray-900">۵۰۰۰+</h3>
    //         <p className="text-gray-600">محصول متنوع</p>
    //       </div>
    //       <div className="space-y-2">
    //         <h3 className="text-4xl font-bold text-gray-900">۱۰۰۰۰+</h3>
    //         <p className="text-gray-600">مشتری راضی</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-center">
          <Badge variant="secondry" className="bg-[#08CB00]">
            تمامی ارز های دیجیتال <Verified />
          </Badge>
        </div>

        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#08CB00] to-[#252525]  text-center font-sans font-bold">
          مارکتا کریپتو کرنسی
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
