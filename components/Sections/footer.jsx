export default function Footer() {
  const footerLinks = {
    محصول: ["امکانات", "قیمت‌گذاری", "امنیت", "API"],
    شرکت: ["درباره ما", "بلاگ", "فرصت‌های شغلی", "تماس با ما"],
    منابع: ["مستندات", "راهنما", "پشتیبانی", "وضعیت سرویس"],
    قانونی: ["حریم خصوصی", "شرایط استفاده", "کوکی‌ها"],
  };

  return (
    <footer className="border-t border-border/50 bg-background px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-4 inline-block text-xl font-bold">
              کریپتو
            </a>
            <p className="mb-6 max-w-xs text-sm text-muted-foreground">
              پلتفرم حرفه‌ای مدیریت و تحلیل دارایی‌های دیجیتال
            </p>
            <div className="flex gap-4">
              {["توییتر", "تلگرام", "دیسکورد"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} کریپتو. تمام حقوق محفوظ است.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                حریم خصوصی
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                شرایط استفاده
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
