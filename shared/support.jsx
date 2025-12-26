import { Ambulance } from "lucide-react";
import React from "react";

function support() {
  return (
    <div
      className="fixed
        bottom-6 right-6
        z-100
        flex items-center gap-2
        rounded-full
        bg-green-500
        px-5 py-3
        text-white
        font-medium
        hover:bg-green-100
        hover:text-black
        active:scale-95
        transition shadow-2xl shadow-green-500 cursor-pointer"
    >
      پشتیبانی
      <Ambulance />
    </div>
  );
}

export default support;
