import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const leadNotificationInputSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7),
  message: z.string().trim().max(1000).optional().default(""),
  language: z.enum(["en", "ar", "fr", "es"]).default("en"),
});

export type LeadNotificationInput = {
  name: string;
  email: string;
  phone: string;
  message?: string | undefined;
  language?: "en" | "ar" | "fr" | "es" | undefined;
};

export interface NotificationResult {
  success: boolean;
  message: string;
  delivered: boolean;
  provider?: "resend" | "formsubmit" | "webhook" | "mock_logged";
  recipient: string;
}

const DEFAULT_RECIPIENT = "bavly.hamdyai@gmail.com";

export function getResendApiKey(): string | undefined {
  if (process.env["RESEND_API_KEY"]) {
    return process.env["RESEND_API_KEY"];
  }
  if (process.env["VITE_RESEND_API_KEY"]) {
    return process.env["VITE_RESEND_API_KEY"];
  }
  return undefined;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

import { FOUNDATION_LOGO_BASE64 } from "./logo-base64.ts";

export function getEmailLogoAttachment(): {
  filename: string;
  content: string;
  content_id: string;
} {
  return {
    filename: "logo.png",
    content: FOUNDATION_LOGO_BASE64,
    content_id: "foundation-logo",
  };
}

/**
 * Builds an ultra-clean, 100% English Executive HTML email template.
 * Designed for maximum prestige, readability, and immediate one-click actions.
 */
export function generateLeadNotificationEmailHtml(input: LeadNotificationInput): string {
  const now = new Date();
  const cairoTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Cairo",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(now);
  const utcTime = now.toUTCString();

  // Sanitize phone for WhatsApp direct link (digits only)
  const cleanPhone = input.phone.replace(/\D/g, "");
  const whatsappUrl =
    cleanPhone.length >= 8
      ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
          `Hello ${input.name}, this is Bavly Hamdy from Second Chance Transplant Foundation. Thank you for connecting with us!`,
        )}`
      : `tel:${input.phone}`;

  const hasMessage = Boolean(input.message && input.message.trim().length > 0);
  const sanitizedMessage = hasMessage ? escapeHtml(input.message!.trim()) : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Inquiry: ${escapeHtml(input.name)}</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1C1917;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF7F2;padding:36px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background-color:#FFFFFF;border:1px solid #E7E5E4;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(13,27,42,0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color:#0D1B2A;padding:36px 32px 30px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <!-- Foundation Official Logo Badge -->
                    <div style="margin-bottom:18px;text-align:center;">
                      <img src="cid:foundation-logo" alt="Second Chance Transplant Foundation Logo" width="82" height="82" style="display:inline-block;border:0;outline:none;text-decoration:none;border-radius:18px;background-color:#FFFFFF;padding:6px;box-shadow:0 8px 20px rgba(0,0,0,0.3);width:82px;height:82px;" />
                    </div>
                    <span style="display:inline-block;padding:5px 14px;background-color:rgba(217,119,6,0.2);border:1px solid rgba(217,119,6,0.45);border-radius:9999px;color:#FBBF24;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:12px;">
                      🕊️ NEW COMMUNITY INQUIRY
                    </span>
                    <h1 style="margin:10px 0 6px;color:#FFFFFF;font-size:22px;font-weight:700;letter-spacing:-0.3px;">
                      Second Chance Transplant Foundation
                    </h1>
                    <p style="margin:0;color:#94A3B8;font-size:12px;letter-spacing:0.4px;text-transform:uppercase;">
                      Executive Dispatch • Patient & Donor Advocacy Platform
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Notification Notice -->
          <tr>
            <td style="padding:28px 32px 14px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0FDF4;border-left:4px solid #16A34A;border-radius:6px;padding:14px 18px;">
                <tr>
                  <td style="color:#166534;font-size:13px;line-height:1.5;">
                    <strong>Inquiry Recorded:</strong> A new community member has submitted their contact details through the "Stay Connected" portal.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding:14px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #E7E5E4;border-radius:12px;overflow:hidden;">
                <!-- Full Name -->
                <tr style="background-color:#FAFAF9;border-bottom:1px solid #E7E5E4;">
                  <td style="padding:14px 18px;width:34%;color:#78716C;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
                    Full Name
                  </td>
                  <td style="padding:14px 18px;color:#0D1B2A;font-size:15px;font-weight:700;">
                    ${escapeHtml(input.name)}
                  </td>
                </tr>
                <!-- Email -->
                <tr style="border-bottom:1px solid #E7E5E4;">
                  <td style="padding:14px 18px;color:#78716C;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
                    Email Address
                  </td>
                  <td style="padding:14px 18px;font-size:14px;">
                    <a href="mailto:${escapeHtml(input.email)}" style="color:#0D1B2A;font-weight:600;text-decoration:underline;">
                      ${escapeHtml(input.email)}
                    </a>
                  </td>
                </tr>
                <!-- Phone -->
                <tr style="background-color:#FAFAF9;border-bottom:1px solid #E7E5E4;">
                  <td style="padding:14px 18px;color:#78716C;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
                    Phone Number
                  </td>
                  <td style="padding:14px 18px;font-size:14px;">
                    <a href="tel:${escapeHtml(input.phone)}" style="color:#0D1B2A;font-weight:600;text-decoration:none;">
                      ${escapeHtml(input.phone)}
                    </a>
                  </td>
                </tr>
                <!-- Language -->
                <tr style="border-bottom:1px solid #E7E5E4;">
                  <td style="padding:14px 18px;color:#78716C;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
                    Website Language
                  </td>
                  <td style="padding:14px 18px;color:#1C1917;font-size:13px;font-weight:600;">
                    ${
                      input.language === "ar"
                        ? "Arabic (RTL View)"
                        : input.language === "fr"
                          ? "French (Français - LTR View)"
                          : input.language === "es"
                            ? "Spanish (Español - LTR View)"
                            : "English (LTR View)"
                    }
                  </td>
                </tr>
                <!-- Timestamps -->
                <tr style="background-color:#FAFAF9;">
                  <td style="padding:14px 18px;color:#78716C;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
                    Submission Time
                  </td>
                  <td style="padding:14px 18px;color:#57534E;font-size:12px;line-height:1.5;">
                    <strong>Cairo Time:</strong> ${cairoTime}<br>
                    <strong>UTC Time:</strong> ${utcTime}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Optional Message Section -->
          ${
            hasMessage
              ? `<tr>
            <td style="padding:6px 32px 14px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-left:4px solid #0D1B2A;border-radius:10px;padding:16px 20px;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;color:#64748B;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
                      📝 Personal Message / Note from Inquirer:
                    </p>
                    <p style="margin:0;color:#0F172A;font-size:14px;line-height:1.6;font-style:italic;">
                      "${sanitizedMessage}"
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`
              : ""
          }

          <!-- Direct Action Buttons -->
          <tr>
            <td style="padding:14px 32px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- Reply via Email -->
                  <td align="left" style="padding-right:8px;width:50%;">
                    <a href="mailto:${escapeHtml(input.email)}?subject=${encodeURIComponent("Thank you for connecting with Second Chance Transplant Foundation")}" style="display:block;padding:13px 18px;background-color:#0D1B2A;color:#FFFFFF;text-align:center;text-decoration:none;font-size:13px;font-weight:700;border-radius:10px;box-shadow:0 2px 6px rgba(13,27,42,0.12);">
                      ✉️ Reply via Email
                    </a>
                  </td>
                  <!-- Direct WhatsApp -->
                  <td align="right" style="padding-left:8px;width:50%;">
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="display:block;padding:13px 18px;background-color:#15803D;color:#FFFFFF;text-align:center;text-decoration:none;font-size:13px;font-weight:700;border-radius:10px;box-shadow:0 2px 6px rgba(21,128,61,0.12);">
                      💬 Open on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F5F5F4;padding:24px 32px;border-top:1px solid #E7E5E4;text-align:center;">
              <p style="margin:0 0 6px;color:#57534E;font-size:12px;font-weight:700;">
                Second Chance Transplant Foundation
              </p>
              <p style="margin:0 0 10px;color:#78716C;font-size:11px;line-height:1.4;">
                Delivered exclusively to <strong>Bavly Hamdy</strong> (Platform Lead Full-Stack Engineer & Architect).
              </p>
              <p style="margin:0;color:#A8A29E;font-size:10px;">
                © 2026 Second Chance Transplant Foundation. Dedicated to the gift of renewed life.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Dispatches lead email notification directly to bavly.hamdyai@gmail.com
 * using Resend API (primary) or FormSubmit fallback.
 */
export async function dispatchLeadNotification(
  input: LeadNotificationInput,
): Promise<NotificationResult> {
  const recipient =
    process.env["NOTIFICATION_EMAIL"] ||
    process.env["VITE_NOTIFICATION_EMAIL"] ||
    DEFAULT_RECIPIENT;
  const resendApiKey = getResendApiKey();
  const fromEmail =
    process.env["RESEND_FROM_EMAIL"] ||
    process.env["VITE_RESEND_FROM_EMAIL"] ||
    "🌱 Second Chance Transplant Foundation <onboarding@resend.dev>";
  const webhookUrl = process.env["NOTIFICATION_WEBHOOK_URL"];

  const html = generateLeadNotificationEmailHtml(input);
  const logoAttachment = getEmailLogoAttachment();
  const attachments = [logoAttachment];

  // 1. Primary: Resend API (Instant, full 100% English HTML template)
  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipient],
          reply_to: input.email,
          subject: `🕊️ [New Inquiry] ${input.name} — Second Chance Transplant Foundation`,
          html,
          attachments,
        }),
      });

      if (response.ok) {
        console.log(`[Lead Notification] Dispatched successfully to ${recipient} via Resend.`);
        return {
          success: true,
          message: "Email delivered successfully via Resend",
          delivered: true,
          provider: "resend",
          recipient,
        };
      } else {
        const errorText = await response.text();
        console.error(`[Lead Notification] Resend API error:`, errorText);
      }
    } catch (err) {
      console.error(`[Lead Notification] Failed to call Resend API:`, err);
    }
  }

  // 2. Fallback: FormSubmit.co
  try {
    const fsResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `🕊️ [New Inquiry] ${input.name} — Second Chance Transplant Foundation`,
        _template: "table",
        "Full Name": input.name,
        "Email Address": input.email,
        "Phone Number": input.phone,
        "Message / Note": input.message || "None provided",
        "Website Language":
          input.language === "ar"
            ? "Arabic"
            : input.language === "fr"
              ? "French"
              : input.language === "es"
                ? "Spanish"
                : "English",
        "Submission Time (Cairo)": new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" }),
      }),
    });

    if (fsResponse.ok) {
      console.log(`[Lead Notification] Dispatched to ${recipient} via FormSubmit.`);
      return {
        success: true,
        message: "Email dispatched successfully via FormSubmit",
        delivered: true,
        provider: "formsubmit",
        recipient,
      };
    }
  } catch (fsErr) {
    console.warn(`[Lead Notification] FormSubmit fallback encountered error:`, fsErr);
  }

  // 3. Fallback: Webhook URL (if configured)
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "new_lead",
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
          language: input.language,
          recipient,
          timestamp: new Date().toISOString(),
        }),
      });
      return {
        success: true,
        message: "Webhook dispatched successfully",
        delivered: true,
        provider: "webhook",
        recipient,
      };
    } catch (err) {
      console.error(`[Lead Notification] Webhook error:`, err);
    }
  }

  // 4. Fallback / Local log
  console.log(`[Lead Notification] Lead recorded for ${recipient}:`, {
    name: input.name,
    email: input.email,
    phone: input.phone,
    message: input.message,
    language: input.language,
  });

  return {
    success: true,
    message: "Lead recorded and notification logged.",
    delivered: false,
    provider: "mock_logged",
    recipient,
  };
}

/**
 * TanStack Start Server Function:
 * Callable directly from client forms with full RPC serialization.
 */
export const notifyLeadServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => leadNotificationInputSchema.parse(data))
  .handler(async ({ data }) => {
    return await dispatchLeadNotification(data);
  });
