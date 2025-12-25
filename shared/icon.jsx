import React from "react";
import localFont from "next/font/local";
const gofte = localFont({
  src: [
    {
      path: "../public/fonts/GoftehWeb-Heavy.woff2",
      style: "normal",
    },
  ],
});
function icon() {
  return (
    <div className={gofte.className}>
      <h1 className="text-2xl bg-linear from-[#08CB00] to-white">مارکتا</h1>
    </div>
  );
}

export default icon;
