const convertTime = require("./duration");

test("convertTime function exists", () => {
  expect(typeof convertTime).toBe("function");
});

test("convertTime as one parameter", () => {
  expect(convertTime.length).toBe(1);
});

// TODO add your tests here
test("test de l'énoncé", () => {
  expect(convertTime("02:30")).toBe(150);
  expect(convertTime("01:45")).toBe(105);
  expect(convertTime("01h45m")).toBe(null);
})