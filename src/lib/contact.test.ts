import { describe, expect, it } from "vitest";
import { detectContactType, getLeadSchema, leadSchema } from "./contact";

describe("contact validation and detection", () => {
  it("detects email", () => expect(detectContactType("a@b.com")).toBe("email"));
  it("detects phone", () => expect(detectContactType("+20 100 123 4567")).toBe("phone"));
  it("rejects junk", () => expect(detectContactType("hello")).toBeNull());

  it("requires valid name, email, and phone", () => {
    // Missing fields or invalid
    expect(
      leadSchema.safeParse({ name: "A", email: "a@b.com", phone: "+1234567890" }).success,
    ).toBe(false);
    expect(
      leadSchema.safeParse({ name: "John Doe", email: "invalid-email", phone: "+1234567890" })
        .success,
    ).toBe(false);
    expect(
      leadSchema.safeParse({ name: "John Doe", email: "john@example.com", phone: "123" }).success,
    ).toBe(false);

    // Valid all 3 fields
    const valid = leadSchema.safeParse({
      name: "Sarah Jenkins",
      email: "sarah@example.com",
      phone: "+1 (555) 000-1234",
    });
    expect(valid.success).toBe(true);
  });

  it("accepts optional message and defaults to empty string", () => {
    const withMsg = leadSchema.safeParse({
      name: "Sarah Jenkins",
      email: "sarah@example.com",
      phone: "+1 (555) 000-1234",
      message: "I am a living kidney donor wishing to connect.",
    });
    expect(withMsg.success).toBe(true);
    if (withMsg.success) {
      expect(withMsg.data.message).toBe("I am a living kidney donor wishing to connect.");
    }

    const withoutMsg = leadSchema.safeParse({
      name: "Sarah Jenkins",
      email: "sarah@example.com",
      phone: "+1 (555) 000-1234",
    });
    expect(withoutMsg.success).toBe(true);
    if (withoutMsg.success) {
      expect(withoutMsg.data.message).toBe("");
    }
  });

  it("supports Arabic validation messages", () => {
    const arSchema = getLeadSchema("ar");
    const result = arSchema.safeParse({
      name: "",
      email: "not-an-email",
      phone: "12",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errs = result.error.flatten().fieldErrors;
      expect(errs.name?.[0]).toContain("حرفين");
      expect(errs.email?.[0]).toContain("صحيح");
      expect(errs.phone?.[0]).toContain("صحيح");
    }
  });
});
