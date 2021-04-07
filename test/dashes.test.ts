import { test, expect } from "@jest/globals";
import { conflicts } from "../source";

test("identical dash", () => {
  expect(conflicts("abc-123", "abc-123")).toBe(true);
});

test("no match dash", () => {
  expect(conflicts("abc-123", "efg-456")).toBe(false);
});

test("single dash", () => {
  expect(conflicts("abc123", "abc-123")).toBe(true);
});

test("multiple dashes", () => {
  expect(conflicts("abc123efg", "abc-123-efg")).toBe(true);
});

test("mixed dash", () => {
  expect(conflicts("abc-123efg", "abc123-efg")).toBe(true);
});
