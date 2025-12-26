"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Equal } from "lucide-react";
import Icon from "../../shared/icon";

export default function Navbar() {
  const navItems = [
    { label: "صفحه اصلی", href: "#" },
    { label: "خرید ارز دیجیتال", href: "#" },
    { label: "درباره ما", href: "#" },
    { label: "تماس با ما", href: "#" },
  ];

  return (
    <nav
      dir="rtl"
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50"
    >
      <div
        className="
          relative
          backdrop-blur-2xl
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]
          border border-white/15
          rounded-3xl
          shadow-[0_20px_40px_rgba(0,0,0,0.6)]
          overflow-hidden
        "
      >
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)] blur-2xl pointer-events-none" />

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent,rgba(255,255,255,0.04))] pointer-events-none" />

        <div className="absolute inset-px rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_30%)] pointer-events-none" />

        <div className="relative px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <Icon>مارکتا</Icon>

            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="
                      relative px-5 py-2.5
                      text-white/80
                      font-medium text-sm
                      rounded-xl
                      transition-all duration-300
                      hover:text-[#08CB00]
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <Button className="bg-green-500 text-black hover:bg-green-300 rounded-xl px-6 font-medium shadow-lg transition-transform hover:scale-105">
                ثبت نام | ورود
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-green-500 md:hidden text-black hover:bg-green-300 rounded-xl px-6 font-medium shadow-lg transition-transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                dir="rtl"
                className="bg-zinc-950/90 backdrop-blur-xl text-white border-white/10"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1 py-6">
                    <SheetTitle className="text-white">منو</SheetTitle>

                    <ul className="flex flex-col gap-2 mt-4">
                      {navItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.href}
                            className="block px-4 py-3 text-white/80 rounded-xl hover:bg-white/5 transition"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 pb-6 border-t border-white/10 pt-6">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-white/20 text-white hover:bg-white/5"
                    >
                      ورود
                    </Button>
                    <Button className="w-full bg-white text-black hover:bg-white/90 rounded-xl font-medium">
                      ثبت نام
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
