"use client";

import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "../ui/background-beams";
import { Verified } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Vortex } from "../ui/vortex";

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
    <div className="w-[calc(100%-4rem)] mx-auto h-screen ">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
      >
        <div className="text-center">
          <Badge variant="secondry" className="bg-[#08CB00]">
            تمامی ارز های دیجیتال
            <Verified className="animate-pulse text-blue-500" />
          </Badge>
        </div>
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center md:m-8 m-4">
          مارکتا بازار خرید و فروش ارزهای دیجیتال
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl  text-center">
          اولین و بزرگ‌ترین بازار ایرانی ارزهای دیجیتال و بستری امن و ساده برای
          خرید و فروش مستقیم و سریع رمزارزها و سرمایه‌گذاری در بازار آن‌ها است.
          در صرافی معتبر نوبیتکس، بی‌واسطه معامله کنید.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button className="bg-green-500 text-black hover:bg-green-300 rounded-xl px-6 font-medium shadow-lg transition-transform hover:scale-105">
            دیدن بازار ها
          </Button>
          <Button variant="outline" className="px-4 rounded-xl py-2">
            ورود به داشبورد
          </Button>
        </div>
      </Vortex>
    </div>
  );
}
<div className="max-w-2xl mx-auto">
  <h1 className="relative z-10 text-2xl md:text-5xl m-7  bg-clip-text text-transparent bg-linear-to-b from-[#08CB00] to-[#252525]  text-center font-sans font-bold"></h1>
  <p></p>
  <p className="text-neutral-500 px-5 max-w-lg mx-auto my-2 text-sm text-center relative z-10"></p>
</div>;
