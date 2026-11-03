import { z } from "zod";

export const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const phoneRe = /^\+?[0-9\s\-()]{7,25}$/;

export function detectContactType(value: string): "email" | "phone" | null {
  const v = value.trim();
  if (emailRe.test(v)) return "email";
  if (phoneRe.test(v) && v.replace(/\D/g, "").length >= 7) return "phone";
  return null;
}

export function getLeadSchema(lang: "en" | "ar" = "en") {
  const isAr = lang === "ar";
  return z.object({
    name: z
      .string()
      .trim()
      .min(
        2,
        isAr
          ? "يرجى إدخال اسمك الكريم (حرفين على الأقل)"
          : "Please enter your full name (at least 2 characters)",
      )
      .max(80, isAr ? "الاسم طويل جداً" : "Name is too long"),
    email: z
      .string()
      .trim()
      .min(5, isAr ? "يرجى إدخال بريدك الإلكتروني" : "Please enter your email address")
      .max(255, isAr ? "البريد الإلكتروني طويل جداً" : "Email is too long")
      .refine(
        (v) => emailRe.test(v),
        isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address",
      ),
    phone: z
      .string()
      .trim()
      .min(7, isAr ? "يرجى إدخال رقم هاتف صحيح" : "Please enter a valid phone number")
      .max(30, isAr ? "رقم الهاتف طويل جداً" : "Phone number is too long")
      .refine(
        (v) => phoneRe.test(v) && v.replace(/\D/g, "").length >= 7,
        isAr ? "يرجى إدخال رقم هاتف صالح للتواصل" : "Please enter a valid phone number",
      ),
    message: z
      .string()
      .trim()
      .max(
        1000,
        isAr
          ? "الرسالة طويلة جداً (الحد الأقصى 1000 حرف)"
          : "Message is too long (maximum 1,000 characters)",
      )
      .optional()
      .default(""),
  });
}

export const leadSchema = getLeadSchema("en");
export type LeadFormData = z.infer<typeof leadSchema>;
