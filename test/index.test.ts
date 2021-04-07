import { test, expect } from "@jest/globals";
import { conflicts } from "../source";

test("readme", () => {
  expect(conflicts("abc.123", "Abc-123")).toBe(true);
});

test("identical", () => {
  expect(conflicts("abc123", "abc123")).toBe(true);
});

test("no match", () => {
  expect(conflicts("abc123", "efg456")).toBe(false);
});
