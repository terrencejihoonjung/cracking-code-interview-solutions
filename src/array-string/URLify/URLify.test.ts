import { describe, it, expect } from "vitest";
import URLify from "./URLify";

describe("testing isUnique", () => {
  //correct case
  it("should return true for correct check", () => {
    expect(URLify("Mr John Smith    ", 13)).toEqual("Mr%20John%20Smith");
  });
  // incorrect case
  it("should return true for incorrect check", () => {
    expect(URLify("Mr John Smith    ", 13)).not.toEqual("Mr%20John%20");
  });

  // stress test: empty input
  it("should handle empty string", () => {
    expect(URLify("", 0)).toEqual("");
  });

  // edge case
  it("should handle string with no spaces", () => {
    expect(URLify("NoSpacesHere", 12)).toEqual("NoSpacesHere");
  });

  it("should handle all spaces", () => {
    expect(URLify("      ", 2)).toEqual("%20%20");
  });
});
