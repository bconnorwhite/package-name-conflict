const { transform } = require("../build/index.js");

test("readme", () => {
  expect(transform("Abc-123")).toBe("abc123");
});

test("identical", () => {
  expect(transform("abc123")).toBe("abc123");
});

test("org", () => {
  expect(transform("@org/Abc-123")).toBe("@org/abc123");
});
