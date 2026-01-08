const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("countChar as two parameters", () => {
  expect(countChar.length).toBe(2);
});

// TODO add your tests here
test("test de l'énoncé", () => {
  expect(countChar("", "a")).toBe(0);
  expect(countChar("a", "a")).toBe(1);
  expect(countChar("aaaaabbbaa", "a")).toBe(7);
  expect(countChar("bbacbaaa", "c")).toBe(1);
  expect(countChar("bbcc", "a")).toBe(0);
  expect(countChar(null, "a")).toBe(-1);
  expect(countChar("", null)).toBe(-1);
});