import { test, expect } from "@jest/globals";
import { conflicts } from "../source";

test("identical mixed", () => {
  expect(conflicts("abc-123.efg_456", "abc-123.efg_456")).toBe(true);
});

test("no match mixed", () => {
  expect(conflicts("abc-123.efg_456", "efg_456.abc-123")).toBe(false);
});

test("mixed", () => {
  expect(conflicts("abc123efg456", "abc-123.efg_456")).toBe(true);
});
