import { test, expect } from "@jest/globals";
import { conflictsAny } from "../source";

test("readme", () => {
  expect(conflictsAny("abc.123", ["test", "test2", "Abc-123"])).toBe("Abc-123");
});

test("identical", () => {
  expect(conflictsAny("abc123", ["test", "test2", "abc123"])).toBe("abc123");
});

test("no match", () => {
  expect(conflictsAny("abc123", ["test", "test2"])).toBe(false);
});
