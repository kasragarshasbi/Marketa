"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Icon from "../../shared/icon";

export default function GlassNavbar() {
  const navItems = [
    { label: "صفحه اصلی", href: "#" },
    { label: "خدمات", href: "#" },
    { label: "درباره ما", href: "#" },
    { label: "تماس با ما", href: "#" },
  ];

  return (
    <nav
      dir="rtl"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50"
    >
      <div className="relative backdrop-blur-xl bg-zinc-900/60 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* subtle glass gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-white/5 pointer-events-none" />

        {/* inner highlight */}
        <div className="absolute inset-px rounded-full bg-linear-to-b from-white/10 to-transparent pointer-events-none" />

        <div className="relative px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Icon className="">مارکتا</Icon>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="relative px-5 py-2.5 text-white/80 font-medium text-sm rounded-xl transition-all duration-300 hover:text-[#08CB00] block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/5 rounded-xl px-5 font-medium"
              >
                ورود
              </Button>
              <Button className="bg-white text-black hover:bg-white/90 rounded-xl px-6 font-medium shadow-lg transition-transform hover:scale-105">
                ثبت نام
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                dir="rtl"
                className="bg-zinc-950 text-white border-white/10"
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
