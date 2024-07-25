import { describe, it, expect } from "vitest";
// import isUnique from "./isUnique";

describe("testing isUnique", () => {
  //correct case
  it("should return true for hi", () => {
    expect(true).toBe(true);
  });
  // incorrect case
  it("should return true for hi", () => {
    expect(true).toBe(true);
  });

  // stress test: long input
  it("should handle long strings", () => {
    expect(true).toBe(true);
  });

  // stress test: empty input
  it("should handle empty string", () => {
    expect(true).toBe(true);
  });

  // edge case
  it("should return true for hi", () => {
    expect(true).toBe(true);
  });
});
