import map from "../src/map";

describe("map", () => {
  test("should return an array", () => {
    const addTwo = (x) => x + 2;
    const numbers = [3, 6, 9];
    expect(Array.isArray(map(numbers, addTwo))).toBe(true);
  });
  test("should call the iteratee for each element of passed array", () => {
    const iteratee = jest.fn((a) => a + 2);
    const numbers = [3, 6, 9];
    map(numbers, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });
  test("should iterate passed array and call iteratee with correct arguments", () => {
    const iteratee = jest.fn((a) => a + 2);
    const numbers = [5, 6, 7, 8, 9, 0];
    map(numbers, iteratee);

    // the iteratee is invoked with 3 args (value, index, array)
    expect(iteratee).toHaveBeenNthCalledWith(1, 5, 0, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(2, 6, 1, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(3, 7, 2, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(4, 8, 3, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(5, 9, 4, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(6, 0, 5, numbers);
  });
  test("should return an array with correct values", () => {
    const addTwo = (x) => x + 2;
    const numbers = [3, 6, 9];
    expect(map(numbers, addTwo)).toStrictEqual([5, 8, 11]);
  });
  test("should return an empty array when empty array passed", () => {
    const addTwo = (x) => x + 2;
    const numbers = [];
    const result = map(numbers, addTwo);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
  test("should return an empty array when null passed", () => {
    const addTwo = (x) => x + 2;
    const numbers = null;
    const result = map(numbers, addTwo);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
  test("should throw an error when iteratee not a function", () => {
    const numbers = [3, 6, 9];
    expect(() => map(numbers, undefined)).toThrow();
  });
});
