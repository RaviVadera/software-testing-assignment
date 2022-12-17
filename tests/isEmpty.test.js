import isEmpty from "../src/isEmpty";

describe("isEmpty", () => {
  test("should return true on null", () => {
    expect(isEmpty(null)).toBe(true);
  });
  test("should return true on boolean", () => {
    expect(isEmpty(false)).toBe(true);
  });
  test("should return true on number", () => {
    expect(isEmpty(5)).toBe(true);
  });
  test("should return true on empty array", () => {
    expect(isEmpty([])).toBe(true);
  });
  test("should return true on empty string", () => {
    expect(isEmpty("")).toBe(true);
  });
  test("should return true on empty object", () => {
    expect(isEmpty({})).toBe(true);
  });
  test("should return true on empty map", () => {
    const emptyMap = new Map();
    expect(isEmpty(emptyMap)).toBe(true);
  });
  test("should return false on non empty array", () => {
    const nonEmptyArray = [1, 4, 5];
    expect(isEmpty(nonEmptyArray)).toBe(false);
  });
  test("should return false on string", () => {
    const nonEmptyString = "not empty";
    expect(isEmpty(nonEmptyString)).toBe(false);
  });
  test("should return false on non empty object", () => {
    const nonEmptyObject = { name: "something" };
    expect(isEmpty(nonEmptyObject)).toBe(false);
  });
  test("should return false on object", () => {
    expect(
      isEmpty({
        test: "should pass",
      })
    ).toBe(false);
  });
  test("should return true on empty prototype object", () => {
    const personPrototype = {};
    function Person() {}
    Object.assign(Person.prototype, personPrototype);
    expect(isEmpty(Person.prototype)).toBe(true);
  });
  test("should return true on typed array", () => {
    expect(isEmpty(new Uint8Array())).toBe(true);
  });
  test("should return true on arguments", () => {
    expect(
      isEmpty(
        (function () {
          return arguments;
        })()
      )
    ).toBe(true);
  });
});
