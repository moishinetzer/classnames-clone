import { describe, expect, it } from "vitest";
import { multiply } from "../src/index";

describe("multiply", () => {
  it("Multiplies two numbers together", () => {
    expect(multiply(2, 3)).toEqual(6);
    expect(multiply(3, 9)).toEqual(27);
  });
  it("Multiplies negative numbers", () => {
    expect(multiply(-2, 3)).toEqual(-6);
    expect(multiply(3, -9)).toEqual(-27);
  });
});
