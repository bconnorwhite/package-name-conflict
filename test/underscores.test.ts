import { test, expect } from "@jest/globals";
import { conflicts } from "../source";

test("identical underscore", () => {
  expect(conflicts("abc_123", "abc_123")).toBe(true);
});

test("no match underscore", () => {
  expect(conflicts("abc_123", "efg_456")).toBe(false);
});

test("single underscore", () => {
  expect(conflicts("abc123", "abc_123")).toBe(true);
});

test("multiple underscores", () => {
  expect(conflicts("abc123efg", "abc_123_efg")).toBe(true);
});

test("mixed underscore", () => {
  expect(conflicts("abc.123efg", "abc123.efg")).toBe(true);
});
