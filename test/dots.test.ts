import { test, expect } from "@jest/globals";
import { conflicts } from "../source";

test("identical dot", () => {
  expect(conflicts("abc.123", "abc.123")).toBe(true);
});

test("no match dot", () => {
  expect(conflicts("abc.123", "efg.456")).toBe(false);
});

test("single dot", () => {
  expect(conflicts("abc123", "abc.123")).toBe(true);
});

test("multiple dots", () => {
  expect(conflicts("abc123efg", "abc.123.efg")).toBe(true);
});

test("mixed dot", () => {
  expect(conflicts("abc.123efg", "abc123.efg")).toBe(true);
});
