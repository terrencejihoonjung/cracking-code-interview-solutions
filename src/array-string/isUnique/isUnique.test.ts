import { describe, it, expect } from "vitest";
import isUnique from "./isUnique";

describe("testing isUnique", () => {
  // correct case
  it("should return true for string without duplicate", () => {
    expect(isUnique("abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });

  // incorrect case
  it("should return false for string with duplicate", () => {
    expect(isUnique("abcdefghijklmnopqrsstuvwxyz")).toBe(false);
  });

  // stress test: long input
  it("should handle long strings", () => {
    const longString =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    expect(isUnique(longString)).toBe(true);
  });

  // stress test: empty input
  it("should handle empty string", () => {
    expect(isUnique("")).toBe(true);
  });
});
