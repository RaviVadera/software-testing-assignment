import reduce from "../src/reduce";

describe("reduce", () => {
  test("should return single number on passing array of numbers", () => {
    const collection = [2, 5, 8, 9];
    const sum = (a, b) => a + b;
    expect(typeof reduce(collection, sum, 0)).toBe("number");
  });
  test("should call iteratee for each element of passed array", () => {
    const iteratee = jest.fn();
    const numbers = [5, 6, 7, 8, 9, 0];
    reduce(numbers, iteratee, 0);
    expect(iteratee).toHaveBeenCalledTimes(6);
  });
  test("should iterate passed array and call iteratee with correct arguments", () => {
    const iteratee = jest.fn((a, b) => a + b);
    const numbers = [5, 6, 7, 8, 9, 0];
    reduce(numbers, iteratee, 0);

    // the iteratee is invoked with 4 args (accumulator, value, index|key, collection)
    expect(iteratee).toHaveBeenNthCalledWith(1, 0, 5, 0, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(2, 5, 6, 1, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(3, 11, 7, 2, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(4, 18, 8, 3, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(5, 26, 9, 4, numbers);
    expect(iteratee).toHaveBeenNthCalledWith(6, 35, 0, 5, numbers);
  });
  test("should reduce array of numbers correctly", () => {
    const collection = [2, 5, 8, 9];
    const sum = (a, b) => a + b;
    expect(reduce(collection, sum, 0)).toBe(2 + 5 + 8 + 9);
  });
  test("should reduce object correctly", () => {
    const person = { firstName: "John", lastName: "Smith" };
    const toString = (result, value, key) => result += `${key}: ${value}; `;
    expect(reduce(person, toString, "")).toBe("firstName: John; lastName: Smith; ");
  });
  test("should use first element of array as initial value when init value not provided", () => {
    const collection = [2, 5, 8, 9];
    const sum = (a, b) => a + b;
    expect(reduce(collection, sum)).toBe(2 + 5 + 8 + 9);
  });
  test("should use initial value when provided", () => {
    const collection = [2, 5, 8, 9];
    const sum = (a, b) => a + b;
    expect(reduce(collection, sum, 10)).toBe(10 + 2 + 5 + 8 + 9);
  });
  test("should throw an error when collection empty and init value not provided", () => {
    const sum = (a, b) => a + b;
    expect(() => reduce([], sum)).toThrow();
  });
  test("should throw an error when iteratee function takes only one argument", () => {
    const sum = (x) => 10 + x;
    expect(() => reduce([2, 4, 6], sum, 0)).toThrow();
  });
  test("should throw an error when iteratee not a function", () => {
    const sum = 10;
    expect(() => reduce([2, 4, 6], sum, 0)).toThrow();
  });
});
