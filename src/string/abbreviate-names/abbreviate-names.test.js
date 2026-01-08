const abbreviate = require("./abbreviate-names");

test("abbreviate function exists", () => {
  expect(typeof abbreviate).toBe("function");
});

test("abbreviate as one parameter", () => {
  expect(abbreviate.length).toBe(1);
});

// TODO add your tests here
test("test de l'énoncé", () => {
  expect(abbreviate("Alyson Hannigan")).toBe("A.H");
  expect(abbreviate("Cobie Smulders")).toBe("C.S");
  expect(abbreviate("Neil Patrick Harris")).toBe("N.P.H");
})