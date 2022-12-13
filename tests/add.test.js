import add from "../src/add";

describe("add", () => {
  test("should return a number", () => {
    const a = 5;
    const b = 9;

    expect(typeof add(a, b)).toBe("number");
  });
  test("should return a correct result of addition", () => {
    const a = 5;
    const b = 9;

    expect(add(a, b)).toBe(14);
  });
  test("should return a correct result of addition of negative numbers", () => {
    const a = -5;
    const b = -9;

    expect(add(a, b)).toBe(-14);
  });
  test("should be commutative", () => {
    const a = 5;
    const b = 9;

    expect(add(a, b)).toBe(14);
    expect(add(b, a)).toBe(14);
  });
  test("should be associative", () => {
    const a = 5;
    const b = 9;
    const c = 10;

    const intermediate1 = add(a, b);
    const intermediate2 = add(b, c);

    expect(add(intermediate1, c)).toBe(24);
    expect(add(intermediate2, a)).toBe(24);
  });
  test("should have identity property with 0", () => {
    const a = 5;
    const b = 0;

    expect(add(a, b)).toBe(a);
  });
  test("should throw an error when argument not a number", () => {
    const a = 5;
    const b = "9";

    expect(() => add(a, b)).toThrow();
  });
});
