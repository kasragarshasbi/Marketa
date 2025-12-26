"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function CryptoTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets" +
        "?vs_currency=usd" +
        "&order=market_cap_desc" +
        "&per_page=15" +
        "&page=1" +
        "&sparkline=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section dir="rtl" className="max-w-6xl mx-auto mt-20 px-4">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          وضعیت بازار ارز ها
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          اخرین تغییرات و بروزرسانی لحظه به لحظه بازار
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-2xl overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-4 text-sm text-white/60 border-b border-white/10">
          <div className="col-span-4">نام ارز</div>
          <div className="col-span-3 text-center">قیمت</div>
          <div className="col-span-3 text-center">چارت ۷ روزه</div>
          <div className="col-span-2 text-left">۲۴h</div>
        </div>

        {loading && (
          <div className="py-10 text-center text-white/50">
            در حال بارگذاری...
          </div>
        )}

        {coins.map((coin) => {
          const isUp = coin.price_change_percentage_24h >= 0;

          return (
            <div
              key={coin.id}
              className="grid grid-cols-12 px-6 py-4 items-center
              border-b border-white/5 hover:bg-white/5 transition"
            >
              <div className="col-span-4 flex items-center gap-3">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={28}
                  height={28}
                />
                <div>
                  <p className="text-white font-medium text-sm">{coin.name}</p>
                  <p className="text-white/40 text-xs uppercase">
                    {coin.symbol}
                  </p>
                </div>
              </div>

              <div className="col-span-3 text-center text-white text-sm font-medium">
                ${coin.current_price.toLocaleString()}
              </div>

              <div className="col-span-3 flex justify-center">
                <div className="w-24 h-10">
                  {coin.sparkline_in_7d?.price?.length ? (
                    <Sparklines data={coin.sparkline_in_7d.price}>
                      <SparklinesLine
                        color={isUp ? "#08CB00" : "#ef4444"}
                        style={{ fill: "none", strokeWidth: 2 }}
                      />
                    </Sparklines>
                  ) : (
                    <div className="w-full h-full rounded bg-white/5" />
                  )}
                </div>
              </div>

              <div
                className={`col-span-2 text-left text-sm font-medium ${
                  isUp ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
