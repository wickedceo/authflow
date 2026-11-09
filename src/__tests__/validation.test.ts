import { describe, expect, it } from "vitest";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validation";

describe("AuthFlow validation", () => {
  it("accepts valid email addresses", () => {
    expect(validateEmail("test@example.com").isValid).toBe(true);
  });

  it("rejects invalid email addresses", () => {
    expect(validateEmail("invalid-email").isValid).toBe(false);
  });

  it("rejects empty emails", () => {
    expect(validateEmail("").isValid).toBe(false);
  });

  it("accepts valid passwords", () => {
    expect(validatePassword("Password123").isValid).toBe(true);
  });

  it("rejects short passwords", () => {
    expect(validatePassword("short").isValid).toBe(false);
  });

  it("accepts valid names", () => {
    expect(validateName("Alex").isValid).toBe(true);
  });

  it("rejects empty names", () => {
    expect(validateName("").isValid).toBe(false);
  });
});