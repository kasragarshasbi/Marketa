import Navbar from "@/components/Sections/header";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Sections/footer";
import Support from "../shared/support";
import { Toaster } from "sonner";

const peyda = localFont({
  src: [
    {
      path: "../public/fonts/PeydaWeb-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-ExtraBlack.woff2",
      weight: "950",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaFaNumWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaFaNumWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "مارکتا | مدیریت هوشمند دارایی‌های دیجیتال",
  description: "پلتفرم حرفه‌ای مدیریت و تحلیل دارایی‌های دیجیتال شما",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className="dark">
      <body suppressHydrationWarning className={peyda.className}>
        <Navbar />
        {children}
        <Support />
        <Toaster position="top-center" richColors theme="dark" />
        <Footer />
      </body>
    </html>
  );
}
