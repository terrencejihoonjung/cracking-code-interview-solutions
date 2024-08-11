import { describe, it, expect } from "vitest";
import StringCompression from "./StringCompression";

describe("testing StringCompression", () => {
  //correct case
  it("should return true for correct check", () => {
    expect(StringCompression("aabcccccaaa")).toEqual("a2b1c5a3");
  });

  it("should return true for unique string", () => {
    expect(StringCompression("abcdefg")).toEqual("abcdefg");
  });

  // incorrect case
  it("should return true for incorrect check", () => {
    expect(StringCompression("aabcccccaaa")).not.toEqual("a2b1c6a3");
  });

  it("should return empty string", () => {
    expect(StringCompression("")).toEqual("");
  });
});
