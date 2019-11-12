const add = require("../src/index.js");

test("1+2+3+4+5+6等于21", () => {
  expect(add(1, 2, 3, 4, 5, 6)).toBe(21);
});
