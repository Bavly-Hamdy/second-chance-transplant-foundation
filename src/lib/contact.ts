import { z } from "zod";
import type { Language } from "./i18n";

export const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const phoneRe = /^\+?[0-9\s\-()]{7,25}$/;

export function detectContactType(value: string): "email" | "phone" | null {
  const v = value.trim();
  if (emailRe.test(v)) return "email";
  if (phoneRe.test(v) && v.replace(/\D/g, "").length >= 7) return "phone";
  return null;
}

export function getLeadSchema(lang: Language = "en") {
  const isAr = lang === "ar";
  const isFr = lang === "fr";
  const isEs = lang === "es";

  const msgNameMin = isAr
    ? "يرجى إدخال اسمك الكريم (حرفين على الأقل)"
    : isFr
      ? "Veuillez saisir votre nom complet (au moins 2 caractères)"
      : isEs
        ? "Por favor, introduce tu nombre completo (al menos 2 caracteres)"
        : "Please enter your full name (at least 2 characters)";

  const msgNameMax = isAr
    ? "الاسم طويل جداً"
    : isFr
      ? "Le nom est trop long"
      : isEs
        ? "El nombre es demasiado largo"
        : "Name is too long";

  const msgEmailMin = isAr
    ? "يرجى إدخال بريدك الإلكتروني"
    : isFr
      ? "Veuillez saisir votre adresse e-mail"
      : isEs
        ? "Por favor, introduce tu correo electrónico"
        : "Please enter your email address";

  const msgEmailMax = isAr
    ? "البريد الإلكتروني طويل جداً"
    : isFr
      ? "L'adresse e-mail est trop longue"
      : isEs
        ? "El correo electrónico es demasiado largo"
        : "Email is too long";

  const msgEmailInvalid = isAr
    ? "يرجى إدخال بريد إلكتروني صحيح"
    : isFr
      ? "Veuillez saisir une adresse e-mail valide"
      : isEs
        ? "Por favor, introduce un correo electrónico válido"
        : "Please enter a valid email address";

  const msgPhoneMin = isAr
    ? "يرجى إدخال رقم هاتف صحيح"
    : isFr
      ? "Veuillez saisir un numéro de téléphone valide"
      : isEs
        ? "Por favor, introduce un número de teléfono válido"
        : "Please enter a valid phone number";

  const msgPhoneMax = isAr
    ? "رقم الهاتف طويل جداً"
    : isFr
      ? "Le numéro de téléphone est trop long"
      : isEs
        ? "El número de teléfono es demasiado largo"
        : "Phone number is too long";

  const msgPhoneInvalid = isAr
    ? "يرجى إدخال رقم هاتف صالح للتواصل"
    : isFr
      ? "Veuillez saisir un numéro de téléphone valide"
      : isEs
        ? "Por favor, introduce un número de teléfono válido"
        : "Please enter a valid phone number";

  const msgMessageMax = isAr
    ? "الرسالة طويلة جداً (الحد الأقصى 1000 حرف)"
    : isFr
      ? "Le message est trop long (1 000 caractères au maximum)"
      : isEs
        ? "El mensaje es demasiado largo (máximo 1.000 caracteres)"
        : "Message is too long (maximum 1,000 characters)";

  return z.object({
    name: z.string().trim().min(2, msgNameMin).max(80, msgNameMax),
    email: z.string().trim().min(5, msgEmailMin).max(255, msgEmailMax).refine((v) => emailRe.test(v), msgEmailInvalid),
    phone: z.string().trim().min(7, msgPhoneMin).max(30, msgPhoneMax).refine((v) => phoneRe.test(v) && v.replace(/\D/g, "").length >= 7, msgPhoneInvalid),
    message: z.string().trim().max(1000, msgMessageMax).optional().default(""),
  });
}

export const leadSchema = getLeadSchema("en");
export type LeadFormData = z.infer<typeof leadSchema>;
