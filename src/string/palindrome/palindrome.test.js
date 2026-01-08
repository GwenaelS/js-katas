const isPalindrome = require("./palindrome");

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toBe("function");
});

test("isPalindrome as one parameter", () => {
  expect(isPalindrome.length).toBe(1);
});

// TODO add your tests here
test("", () => {
  expect(isPalindrome("rotor")).toBe(true);
  expect(isPalindrome("tacos")).toBe(false);
  expect(isPalindrome("Kayak")).toBe(true);
  expect(isPalindrome(null)).toBe(true);
})