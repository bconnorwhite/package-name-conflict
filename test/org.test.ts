import { test, expect } from "@jest/globals";
import { conflicts } from "../source";

test("org identical dash", () => {
  expect(conflicts("@org/abc-123", "@org/abc-123")).toBe(true);
});

test("org no match dash", () => {
  expect(conflicts("@org/abc-123", "@org/efg-456")).toBe(false);
});

test("org single dash", () => {
  expect(conflicts("@org/abc123", "@org/abc-123")).toBe(true);
});

test("org multiple dashes", () => {
  expect(conflicts("@org/abc123efg", "@org/abc-123-efg")).toBe(true);
});

test("org mixed dash", () => {
  expect(conflicts("@org/abc-123efg", "@org/abc123-efg")).toBe(true);
});
