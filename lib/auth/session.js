// فایل: lib/auth/session.js
import { cookies } from "next/headers";
import { prisma } from "../prisma"; // ⚠️ مسیر نسبی: از auth به lib و بعد prisma.js

export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 روز

  const session = await prisma.session.create({
    data: {
      userId,
      expiresAt,
    },
  });

  cookies().set("session", session.id, {
    httpOnly: true, // کوکی فقط از سمت سرور قابل دسترسی است
    secure: process.env.NODE_ENV === "production", // فقط در HTTPS (تولید)
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}
