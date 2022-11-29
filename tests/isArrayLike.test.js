import isArrayLike from "../src/isArrayLike";

describe("isArrayLike", () => {
  test("should return true on array", () => {
    const usualArray = [1, 2, 3];
    expect(isArrayLike(usualArray)).toBe(true);
  });
  test("should return true on string", () => {
    const usualString = "hello";
    expect(isArrayLike(usualString)).toBe(true);
  });
  test("should return true on array like object", () => {
    const arrayLikeObject = {
      0: "we",
      1: "are",
      2: "capscode",
      length: 3,
    };

    expect(isArrayLike(arrayLikeObject)).toBe(true);
  });
  test("should return false on function", () => {
    const usualFunction = () => "hello";
    expect(isArrayLike(usualFunction)).toBe(false);
  });
  test("should return false on boolean", () => {
    expect(isArrayLike(true)).toBe(false);
  });
  test("should return false on object without length property", () => {
    const notArrayLikeObject = {
      0: "we",
      1: "are",
      2: "capscode",
    };

    expect(isArrayLike(notArrayLikeObject)).toBe(false);
  });
  test("should return false on object with negative length property", () => {
    const notArrayLikeObject = {
      0: "we",
      1: "are",
      2: "capscode",
      length: -3,
    };

    expect(isArrayLike(notArrayLikeObject)).toBe(false);
  });
});
