import filter from "../src/filter";

describe("filter", () => {
  test("should return an array", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const filtered = filter(users, ({ active }) => active);

    expect(Array.isArray(filtered)).toBe(true);
  });
  test("should return only active users", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];

    const filtered = filter(users, ({ active }) => active);

    expect(filtered.length).toBe(1);
    expect(filtered).toContainEqual({ user: "barney", active: true });
    expect(filtered).not.toContainEqual({ user: "fred", active: false });
  });
  // test("should return empty array when empty array passed", () => {
  //   const filtered = filter([], () => true);
  //   expect(filtered.length).toBe(0);
  // });
  // test("should throw an error when first argument is not an array", () => {
  //   expect(() => filter({}, () => true)).toThrow();
  // });
  test("should throw an error when second argument is not function", () => {
    expect(() => filter([1, 2, 3], 4)).toThrow();
  });
});
