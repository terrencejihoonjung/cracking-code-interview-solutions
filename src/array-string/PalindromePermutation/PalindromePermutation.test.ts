import { describe, it, expect } from "vitest";
import PalindromePermutation from "./PalindromePermutation";

describe("testing isUnique", () => {
  //correct case
  it("should return true for correct check", () => {
    expect(PalindromePermutation("Tact Coa")).toEqual(true);
  });

  it("should return true for correct check", () => {
    expect(PalindromePermutation("racec ar")).toEqual(true);
  });

  // incorrect case
  it("should return true for incorrect check", () => {
    expect(PalindromePermutation("Tact Cob")).toEqual(false);
  });

  // stress test: empty input
  it("should handle empty string", () => {
    expect(PalindromePermutation("")).toEqual(true);
  });
});
