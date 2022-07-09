const sum = require("./index")


describe("Testing sum function", () => {
  test("add 2 positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("add 2 Negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  test("add 1 positive and 1 Negative numbers", () => {
    expect(sum(3, -2)).toBe(1);
  });
  test("add 1 positive and 1 Negative numbers", () => {
    expect(sum(0, -5)).toBe(-5);
  });
  test("add 1 positive and 1 Negative numbers", () => {
    expect(sum(-0, 5)).toBe(5);
  });
});
