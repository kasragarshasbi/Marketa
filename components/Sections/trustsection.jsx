export default function TrustSection() {
  const stats = [
    { value: "۵۰،۰۰۰+", label: "کاربر فعال" },
    { value: "$۱۰۰M+", label: "حجم مدیریت شده" },
    { value: "۱۵۰+", label: "کشور" },
    { value: "۴.۹/۵", label: "رضایت کاربران" },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 border-y border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">
            مورد اعتماد هزاران کاربر در سراسر دنیا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            پلتفرمی که حرفه‌ای‌ها برای مدیریت دارایی‌های دیجیتال خود انتخاب
            می‌کنند
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Logos Placeholder */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-8 w-24 rounded bg-muted/50"
              aria-label="Company logo placeholder"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
