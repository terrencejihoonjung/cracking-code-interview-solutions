import { describe, it, expect } from "vitest";
import OneAway from "./OneAway";

describe("testing isUnique", () => {
  //correct case
  it("should return true for correct check", () => {
    expect(OneAway("pale", "ple")).toEqual(true);
  });

  it("should return true for correct check", () => {
    expect(OneAway("pales", "pale")).toEqual(true);
  });

  it("should return true for correct check", () => {
    expect(OneAway("kioskalope", "koskalope")).toEqual(true);
  });

  // incorrect case
  it("should return true for incorrect check", () => {
    expect(OneAway("pale", "bake")).toEqual(false);
  });

  it("should return true for incorrect check", () => {
    expect(OneAway("bale", "bask")).toEqual(false);
  });
});
