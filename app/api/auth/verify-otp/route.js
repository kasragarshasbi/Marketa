// import { NextResponse } from "next/server";
// import { prisma } from "../../../../lib/prisma";
// import { hashOtp } from "../../../../lib/auth/otp";
// import { createSession } from "../../../../lib/auth/session";

// export async function POST(req) {
//   try {
//     const { email, code } = await req.json();

//     if (!email || !code) {
//       return NextResponse.json(
//         { message: "اطلاعات ناقص است" },
//         { status: 400 }
//       );
//     }

//     // 1. Find User
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (!user) {
//       // برای امنیت بیشتر، به کاربر نگویید کاربر وجود ندارد
//       return NextResponse.json({ message: "کد نادرست است" }, { status: 401 });
//     }

//     // 2. Find Latest OTP
//     const otp = await prisma.otpCode.findFirst({
//       where: { userId: user.id },
//       orderBy: { createdAt: "desc" },
//     });

//     if (!otp) {
//       return NextResponse.json({ message: "کد نادرست است" }, { status: 401 });
//     }

//     // 3. Check Expiry
//     if (otp.expiresAt < new Date()) {
//       // پاک کردن کد منقضی شده
//       await prisma.otpCode.deleteMany({ where: { userId: user.id } });
//       return NextResponse.json(
//         { message: "کد منقضی شده است" },
//         { status: 400 }
//       );
//     }

//     // 4. Check Code Match
//     if (hashOtp(code) !== otp.code) {
//       return NextResponse.json({ message: "کد نادرست است" }, { status: 401 });
//     }

//     // 5. Success: Delete Codes and Create Session
//     await prisma.otpCode.deleteMany({ where: { userId: user.id } });
//     await createSession(user.id);

//     return NextResponse.json({ success: true, message: "ورود موفق" });
//   } catch (err) {
//     console.error("VERIFY OTP ERROR:", err);
//     return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
//   }
// }
