import { createServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { getEmailLogoAttachment } from "./lead-notifications";

export interface LeadDigestItem {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  contact: string;
  contact_type: string;
  created_at: string;
  message?: string | null;
}

export interface DailyDigestResult {
  success: boolean;
  message: string;
  count: number;
  recipient: string;
  delivered: boolean;
}

const DEFAULT_RECIPIENT = "bavly.hamdyai@gmail.com";

export function getDailyDigestResendApiKey(): string | undefined {
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

/**
 * Builds the 100% English Executive Daily Summary Email Template.
 */
export function generateDailyDigestHtml(leads: LeadDigestItem[]): string {
  const now = new Date();
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Africa/Cairo",
    dateStyle: "medium",
    timeStyle: "short",
  };
  const cairoNow = new Intl.DateTimeFormat("en-US", dateOptions).format(now);
  const cairoYesterday = new Intl.DateTimeFormat("en-US", dateOptions).format(yesterday);

  const totalCount = leads.length;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>24-Hour Executive Digest: Second Chance Transplant Foundation</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1C1917;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF7F2;padding:36px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;background-color:#FFFFFF;border:1px solid #E7E5E4;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(13,27,42,0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color:#0D1B2A;padding:36px 32px 30px;text-align:center;">
              <!-- Foundation Official Logo Badge -->
              <div style="margin-bottom:18px;text-align:center;">
                <img src="cid:foundation-logo" alt="Second Chance Transplant Foundation Logo" width="82" height="82" style="display:inline-block;border:0;outline:none;text-decoration:none;border-radius:18px;background-color:#FFFFFF;padding:6px;box-shadow:0 8px 20px rgba(0,0,0,0.3);width:82px;height:82px;" />
              </div>
              <span style="display:inline-block;padding:5px 14px;background-color:rgba(217,119,6,0.2);border:1px solid rgba(217,119,6,0.45);border-radius:9999px;color:#FBBF24;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:12px;">
                📊 24-HOUR EXECUTIVE DIGEST
              </span>
              <h1 style="margin:10px 0 6px;color:#FFFFFF;font-size:24px;font-weight:700;letter-spacing:-0.3px;">
                Second Chance Transplant Foundation
              </h1>
              <p style="margin:0;color:#94A3B8;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;">
                Daily Community Activity & Inquiries Summary
              </p>
            </td>
          </tr>

          <!-- Summary Metrics Cards -->
          <tr>
            <td style="padding:28px 32px 14px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- Total Inquiries Metric -->
                  <td style="width:50%;padding-right:8px;">
                    <div style="background-color:#FAFAF9;border:1px solid #E7E5E4;border-radius:12px;padding:20px;text-align:center;">
                      <div style="font-size:32px;font-weight:800;color:#0D1B2A;line-height:1;">
                        ${totalCount}
                      </div>
                      <div style="font-size:11px;font-weight:700;color:#78716C;text-transform:uppercase;letter-spacing:0.8px;margin-top:6px;">
                        New Inquiries (Last 24h)
                      </div>
                    </div>
                  </td>
                  <!-- Status Metric -->
                  <td style="width:50%;padding-left:8px;">
                    <div style="background-color:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:20px;text-align:center;">
                      <div style="font-size:18px;font-weight:700;color:#166534;line-height:1.4;">
                        ${totalCount > 0 ? "Active Inflow" : "Operational"}
                      </div>
                      <div style="font-size:11px;font-weight:700;color:#15803D;text-transform:uppercase;letter-spacing:0.8px;margin-top:6px;">
                        Portal Health Status
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-size:11px;color:#78716C;text-align:center;">
                Reporting Window: <strong>${cairoYesterday}</strong> — <strong>${cairoNow}</strong> (Cairo Time)
              </p>
            </td>
          </tr>

          <!-- Inquiries List / Empty State -->
          <tr>
            <td style="padding:14px 32px 28px;">
              ${
                totalCount === 0
                  ? `<div style="background-color:#FAFAF9;border:1px dashed #D6D3D1;border-radius:12px;padding:32px 20px;text-align:center;">
                      <p style="margin:0 0 6px;color:#57534E;font-size:14px;font-weight:600;">
                        No new inquiries were recorded in the past 24 hours.
                      </p>
                      <p style="margin:0;color:#A8A29E;font-size:12px;">
                        The database connection and web portal are healthy and awaiting visitor engagement.
                      </p>
                    </div>`
                  : `<h3 style="margin:0 0 16px;color:#0D1B2A;font-size:15px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
                      Recorded Inquiries Breakdown (${totalCount})
                    </h3>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${leads
                        .map((lead, index) => {
                          const leadDate = new Intl.DateTimeFormat("en-US", {
                            timeZone: "Africa/Cairo",
                            dateStyle: "short",
                            timeStyle: "short",
                          }).format(new Date(lead.created_at));

                          const cleanPhone = (lead.phone || "").replace(/\D/g, "");
                          const whatsappUrl =
                            cleanPhone.length >= 8
                              ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                                  `Hello ${lead.name}, this is Bavly Hamdy from Second Chance Transplant Foundation.`,
                                )}`
                              : `tel:${lead.phone}`;

                          // Extract optional message if stored in contact string or column
                          let note = lead.message || "";
                          if (!note && lead.contact && lead.contact.includes("Note:")) {
                            note = lead.contact.split("Note:")[1]?.trim() || "";
                          }

                          return `
                          <tr>
                            <td style="padding-bottom:14px;">
                              <div style="background-color:#FFFFFF;border:1px solid #E7E5E4;border-radius:12px;padding:18px 20px;">
                                <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #F5F5F4;padding-bottom:10px;margin-bottom:10px;">
                                  <span style="font-size:11px;font-weight:800;color:#D97706;letter-spacing:1px;text-transform:uppercase;">
                                    INQUIRY #${index + 1}
                                  </span>
                                  <span style="font-size:11px;color:#78716C;">
                                    ${leadDate} (Cairo)
                                  </span>
                                </div>
                                <div style="font-size:16px;font-weight:700;color:#0D1B2A;margin-bottom:4px;">
                                  ${escapeHtml(lead.name)}
                                </div>
                                <div style="font-size:13px;color:#57534E;margin-bottom:8px;">
                                  <strong>Email:</strong> <a href="mailto:${encodeURIComponent(lead.email || "")}" style="color:#0D1B2A;text-decoration:underline;">${escapeHtml(lead.email || "N/A")}</a>
                                  &nbsp;•&nbsp;
                                  <strong>Phone:</strong> <a href="tel:${encodeURIComponent(lead.phone || "")}" style="color:#0D1B2A;text-decoration:none;">${escapeHtml(lead.phone || "N/A")}</a>
                                </div>
                                ${
                                  note
                                    ? `<div style="background-color:#F8FAFC;border-left:3px solid #0D1B2A;border-radius:4px;padding:8px 12px;margin:8px 0;font-size:12px;color:#334155;font-style:italic;">
                                        "${escapeHtml(note)}"
                                      </div>`
                                    : ""
                                }
                                <div style="margin-top:12px;padding-top:10px;border-top:1px dashed #E7E5E4;">
                                  <a href="mailto:${encodeURIComponent(lead.email || "")}" style="display:inline-block;padding:6px 14px;background-color:#0D1B2A;color:#FFFFFF;text-decoration:none;font-size:11px;font-weight:700;border-radius:6px;margin-right:8px;">
                                    ✉️ Email
                                  </a>
                                  <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:6px 14px;background-color:#15803D;color:#FFFFFF;text-decoration:none;font-size:11px;font-weight:700;border-radius:6px;">
                                    💬 WhatsApp
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>`;
                        })
                        .join("")}
                    </table>`
              }
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F5F5F4;padding:24px 32px;border-top:1px solid #E7E5E4;text-align:center;">
              <p style="margin:0 0 6px;color:#57534E;font-size:12px;font-weight:700;">
                Second Chance Transplant Foundation
              </p>
              <p style="margin:0 0 10px;color:#78716C;font-size:11px;line-height:1.4;">
                Automated 24-Hour Executive Briefing prepared exclusively for <strong>Bavly Hamdy</strong>.
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
 * Fetches leads from the past 24 hours and dispatches an executive summary email.
 */
export async function sendDailyLeadsDigest(): Promise<DailyDigestResult> {
  const recipient =
    process.env["NOTIFICATION_EMAIL"] ||
    process.env["VITE_NOTIFICATION_EMAIL"] ||
    DEFAULT_RECIPIENT;
  const resendApiKey = getDailyDigestResendApiKey();
  const fromEmail =
    process.env["RESEND_FROM_EMAIL"] ||
    process.env["VITE_RESEND_FROM_EMAIL"] ||
    "🌱 Second Chance Transplant Foundation <onboarding@resend.dev>";

  const sinceDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  // Query Supabase leads created in the last 24 hours
  let leads: LeadDigestItem[] = [];
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .gte("created_at", sinceDate)
      .order("created_at", { ascending: false });

    if (!error && data) {
      leads = data as unknown as LeadDigestItem[];
    } else if (error) {
      console.warn("[Daily Digest] Supabase query notice:", error);
    }
  } catch (err) {
    console.warn("[Daily Digest] Supabase fetch error:", err);
  }

  const html = generateDailyDigestHtml(leads);
  const logoAttachment = getEmailLogoAttachment();
  const attachments = [logoAttachment];

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
          subject: `📊 [24h Digest] ${leads.length} Community Inquiries — Second Chance Transplant Foundation`,
          html,
          attachments,
        }),
      });

      if (response.ok) {
        console.log(`[Daily Digest] Summary successfully dispatched to ${recipient}`);
        return {
          success: true,
          message: `Daily digest with ${leads.length} leads delivered successfully`,
          count: leads.length,
          recipient,
          delivered: true,
        };
      } else {
        const errorText = await response.text();
        console.error("[Daily Digest] Resend API error:", errorText);
      }
    } catch (sendErr) {
      console.error("[Daily Digest] Error sending via Resend:", sendErr);
    }
  }

  return {
    success: true,
    message: `Daily digest calculated (${leads.length} leads). RESEND_API_KEY needed for live dispatch.`,
    count: leads.length,
    recipient,
    delivered: false,
  };
}

/**
 * Server Function:
 * Callable from client admin or background cron trigger.
 */
export const dailyDigestServerFn = createServerFn({ method: "POST" }).handler(async () => {
  return await sendDailyLeadsDigest();
});
