import { describe, it, expect } from "vitest";
import checkPermutation from "./checkPermutation";

describe("testing checkPermutation", () => {
  //correct case
  it("should return true", () => {
    expect(checkPermutation("please", "lpaees")).toBe(true);
  });
  // incorrect case
  it("should return false", () => {
    expect(checkPermutation("please", "lpaeee")).toBe(false);
  });

  // stress test: long input
  it("should handle long strings", () => {
    expect(
      checkPermutation(
        "abcdefghijklmnopqrstuvwxyz",
        "abcefghijklmnopqdrstuvwxyz"
      )
    ).toBe(true);
  });

  // stress test: empty input
  it("handles empty s1 and s2", () => {
    expect(checkPermutation("", "")).toBe(true);
  });

  it("handles empty s1", () => {
    expect(checkPermutation("", "a")).toBe(false);
  });

  it("handles empty s2", () => {
    expect(checkPermutation("a", "")).toBe(false);
  });
});
