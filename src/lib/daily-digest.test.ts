import { describe, it, expect } from "vitest";
import { generateDailyDigestHtml, type LeadDigestItem } from "./daily-digest";

describe("daily-digest", () => {
  it("renders 100% English executive summary with leads list and messages", () => {
    const mockLeads: LeadDigestItem[] = [
      {
        id: "1",
        name: "Dr. Ahmed Mansour",
        email: "ahmed@example.com",
        phone: "+20 100 123 4567",
        contact: "ahmed@example.com • +20 100 123 4567 • Note: Wishing to support liver patients.",
        contact_type: "email",
        created_at: new Date().toISOString(),
        message: "Wishing to support liver patients.",
      },
    ];

    const html = generateDailyDigestHtml(mockLeads);

    expect(html).toContain("24-HOUR EXECUTIVE DIGEST");
    expect(html).toContain("Second Chance Transplant Foundation");
    expect(html).toContain("cid:foundation-logo");
    expect(html).toContain("Dr. Ahmed Mansour");
    expect(html).toContain("ahmed@example.com");
    expect(html).toContain("+20 100 123 4567");
    expect(html).toContain("Wishing to support liver patients.");
    expect(html).toContain("Bavly Hamdy");
    // Ensure no Arabic text in executive English dispatch
    expect(html).not.toContain("مؤسسة");
    expect(html).not.toContain("تسجيل");
  });

  it("handles empty state gracefully when no inquiries were received in 24 hours", () => {
    const html = generateDailyDigestHtml([]);

    expect(html).toContain("24-HOUR EXECUTIVE DIGEST");
    expect(html).toContain("No new inquiries were recorded in the past 24 hours");
  });
});

