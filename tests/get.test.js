import get from "../src/get";

describe("get", () => {
  test("should return value of object's property specified with string", () => {
    const someObject = { a: [1, 2, { 3: "hello" }] };
    expect(get(someObject, "a[2].3", null)).toBe("hello");
  });
  test("should return value of object's property specified with array", () => {
    const someObject = { a: [1, 2, { 3: "hello" }] };
    expect(get(someObject, ["a", "2", "3"], null)).toBe("hello");
  });
  test("should return default value when path resolves to undefined", () => {
    const someObject = { a: [1, 2, { 3: "hello" }] };
    const defaultValue = 9;
    expect(get(someObject, ["a", "2", "4"], defaultValue)).toBe(defaultValue);
  });
  test("should return default value when object is empty", () => {
    const someObject = {};
    const defaultValue = 9;
    expect(get(someObject, ["a", "2", "4"], defaultValue)).toBe(defaultValue);
  });
  test("should return array when path resolves to it", () => {
    const someObject = {"a": {"1": [3, 4, 5], "2": "two"}};
    const defaultValue = 9;
    expect(get(someObject, "a.1", defaultValue)).toBe([3, 4, 5]);
  });
});
