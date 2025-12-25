"use client";

import { Wallet, Shield, TrendingUp, Link2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Wallet,
      title: "مدیریت پرتفوی",
      description:
        "تمام دارایی‌های دیجیتال خود را در یک جا مدیریت کنید. ردیابی خودکار و گزارش‌گیری لحظه‌ای.",
    },
    {
      icon: Shield,
      title: "امنیت بالا",
      description:
        "با استفاده از آخرین استانداردهای امنیتی و رمزنگاری، دارایی‌های شما کاملاً محافظت می‌شوند.",
    },
    {
      icon: TrendingUp,
      title: "تحلیل لحظه‌ای",
      description:
        "داشبورد تحلیلی پیشرفته با نمودارهای تعاملی و هشدارهای قیمتی هوشمند.",
    },
    {
      icon: Link2,
      title: "اتصال به کیف پول‌ها",
      description:
        "پشتیبانی از تمام کیف پول‌های محبوب و اتصال آسان با چند کلیک.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            امکانات پیشرفته برای مدیریت بهتر
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            ابزارهای حرفه‌ای که نیاز دارید، با طراحی ساده‌ای که دوست دارید
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/50 bg-muted/30 p-8 transition-all hover:border-primary/50 hover:bg-muted/50"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <a
            href="#features-detail"
            className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            مشاهده تمام امکانات
            <span className="mr-2">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
