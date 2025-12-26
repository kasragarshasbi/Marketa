import { NumberTicker } from "../ui/number-ticker";

export default function TrustSection() {
  const stats = [
    { value: 50000, suffix: "+", label: "کاربر فعال" },
    { value: 100, prefix: "$", suffix: "M+", label: "حجم مدیریت شده" },
    { value: 150, suffix: "+", label: "کشور" },
    { value: 4.9, suffix: "/5", label: "رضایت کاربران" },
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold flex justify-center gap-1">
                {stat.prefix && <span>{stat.prefix}</span>}

                <NumberTicker
                  duration={3.5}
                  direction="up"
                  value={stat.value}
                />

                {stat.suffix && <span>{stat.suffix}</span>}
              </div>

              <div className="text-sm  text-green-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
