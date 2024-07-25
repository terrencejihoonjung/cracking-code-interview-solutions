import { describe, it, expect } from "vitest";
import isUnique from "./isUnique";

describe("testing isUnique", () => {
  it("should return true for hi", () => {
    expect(isUnique("hi")).toBe(true);
  });
});
