import { test, expect } from "@jest/globals";
import { conflicts } from "../source";

test("identical uppercase", () => {
  expect(conflicts("abc-123", "ABC-123")).toBe(true);
});

test("no match uppercase", () => {
  expect(conflicts("abc-123", "EFG-456")).toBe(false);
});

test("add uppercase", () => {
  expect(conflicts("abc123", "ABC-123")).toBe(true);
});

test("remove uppercase", () => {
  expect(conflicts("abc-123", "ABC123")).toBe(true);
});
