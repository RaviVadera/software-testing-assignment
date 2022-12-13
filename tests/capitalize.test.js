import capitalize from "../src/capitalize";

describe("capitalize", () => {
  test("should capitalize all lower case word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("should capitalize all upper case word", () => {
    expect(capitalize("HELLO")).toBe("Hello");
  });
  test("should capitalize mixed case word", () => {
    expect(capitalize("hElLo")).toBe("Hello");
  });
  test("should return empty string when empty string passed", () => {
    expect(capitalize("")).toBe("");
  });
  test("should not change string if first letter is number representation", () => {
    expect(capitalize("1 beer please")).toBe("1 beer please");
  });
  test("should not change string if first letter is special character", () => {
    expect(capitalize("!hello")).toBe("!hello");
  });
  test("should throw an error when argument is not string", () => {
    expect(() => capitalize(1)).toThrow();
  });
});
