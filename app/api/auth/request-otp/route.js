// import { NextResponse } from "next/server";
// import { prisma } from "../../../../lib/auth/prisma";
// import { generateOtp, hashOtp, getOtpExpiry } from "../../../../lib/auth/otp";

// export async function POST(req) {
//   try {
//     const { email, firstName, lastName } = await req.json();

//     if (!email) {
//       return NextResponse.json(
//         { message: "ایمیل الزامی است" },
//         { status: 400 }
//       );
//     }

//     const user = await prisma.user.upsert({
//       where: { email },
//       update: { firstName, lastName },
//       create: { email, firstName, lastName },
//     });

//     const lastOtp = await prisma.otpCode.findFirst({
//       where: { userId: user.id },
//       orderBy: { createdAt: "desc" },
//     });

//     if (lastOtp && Date.now() - lastOtp.createdAt.getTime() < 60 * 1000) {
//       return NextResponse.json(
//         { message: "لطفاً یک دقیقه صبر کنید" },
//         { status: 429 }
//       );
//     }

//     const otp = generateOtp();
//     const hashedOtp = hashOtp(otp);

//     await prisma.otpCode.create({
//       data: {
//         userId: user.id,
//         code: hashedOtp,
//         expiresAt: getOtpExpiry(),
//       },
//     });

//     console.log("OTP CODE for", user.email, ":", otp);

//     return NextResponse.json({ success: true, message: "کد ارسال شد" });
//   } catch (err) {
//     console.error("REQUEST OTP ERROR:", err);
//     return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
//   }
// }
