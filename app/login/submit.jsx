"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const submitRequest = async (endpoint, data) => {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "خطای ناشناخته‌ای رخ داد");
  }

  return res.json();
};

export default function AuthForm() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastName: "",
    code: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ---------------------------
  // STEP 1 — Request OTP
  // ---------------------------
  const handleRequestOtp = async (e) => {
    e.preventDefault();

    const { email, name, lastName } = formData;

    if (!email || !name || !lastName) {
      toast.error("لطفاً نام، نام خانوادگی و ایمیل را کامل وارد کنید");
      return;
    }

    setIsLoading(true);

    try {
      await submitRequest("/api/auth/request-otp", {
        email,
        name,
        lastName,
      });

      toast.success("کد تأیید به ایمیل شما ارسال شد");
      setStep(2);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ---------------------------
  // STEP 2 — Verify OTP
  // ---------------------------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (formData.code.length !== 6) {
      toast.error("کد تأیید باید ۶ رقمی باشد");
      return;
    }

    setIsLoading(true);

    try {
      await submitRequest("/api/auth/verify-otp", {
        email: formData.email,
        code: formData.code,
      });

      toast.success("ورود با موفقیت انجام شد");
      window.location.replace("/dashboard");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md border border-slate-700/50 bg-slate-900/60 backdrop-blur">
        {step === 1 ? (
          <form onSubmit={handleRequestOtp}>
            <CardHeader className="text-center space-y-3">
              <CardTitle className="text-2xl">ورود یا ثبت‌نام</CardTitle>
              <CardDescription>
                اطلاعات خود را وارد کنید تا کد تأیید ارسال شود
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input id="email" type="email" onChange={handleChange} />
              </div>

              <div className="flex gap-4">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="name">نام</Label>
                  <Input id="name" onChange={handleChange} />
                </div>
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="lastName">نام خانوادگی</Label>
                  <Input id="lastName" onChange={handleChange} />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "در حال ارسال..." : "ارسال کد تأیید"}
              </Button>
            </CardFooter>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
            <CardHeader className="text-center space-y-3">
              <CardTitle className="text-2xl">کد تأیید</CardTitle>
              <CardDescription>
                کد ۶ رقمی ارسال‌شده به {formData.email}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Label htmlFor="code">کد تأیید</Label>
              <Input
                id="code"
                className="mt-2 text-center tracking-widest"
                maxLength={6}
                inputMode="numeric"
                onChange={handleChange}
              />

              <Button
                type="button"
                variant="link"
                className="mt-3 p-0 text-sm"
                onClick={() => setStep(1)}
              >
                اصلاح ایمیل یا ارسال مجدد
              </Button>
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "در حال بررسی..." : "تأیید و ورود"}
              </Button>
            </CardFooter>
          </form>
        )}
      </Card>
    </div>
  );
}
