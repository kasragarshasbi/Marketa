import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function banner() {
  return (
    <section className="w-full px-6 lg:px-14 mt-20">
      <div
        className="
      relative mx-auto max-w-7xl
      flex flex-col lg:flex-row items-center justify-between gap-12
      rounded-3xl
      px-8 py-12 lg:px-16 lg:py-0
      bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
      backdrop-blur-2xl
      border border-white/10
      shadow-[0_30px_80px_rgba(0,0,0,0.6)]
    "
      >
        <div className="text-center lg:text-right space-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">
            خرید آسان
          </h2>

          <p className="text-white/70 text-base">راحت بخر، راحت بفروش</p>

          <Button className="bg-green-500 text-black hover:bg-green-300 rounded-xl px-6 font-medium shadow-lg transition-transform hover:scale-105">
            خرید بیت‌کوین
            <span className="icon-chevron-left_outlined text-lg" />
          </Button>
        </div>
        {/* sorry i use nobitex.ir image ❤️*/}
        <img
          src="/images/market.webp"
          alt="crypto market"
          className="w-64 h-64"
          width="64"
          height="64"
        />
      </div>
    </section>
  );
}

export default banner;
