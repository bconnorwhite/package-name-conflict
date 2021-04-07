import { test, expect } from "@jest/globals";
import { transform } from "../source";

test("readme", () => {
  expect(transform("Abc-123")).toBe("abc123");
});

test("identical", () => {
  expect(transform("abc123")).toBe("abc123");
});

test("org", () => {
  expect(transform("@org/Abc-123")).toBe("@org/abc123");
});
