import countBy from "../src/countBy";

describe("countBy", () => {
  test("should return an object", () => {
    expect(typeof countBy([4, 5, 6], (e) => e > 4)).toBe(Object);
  });
  test("should return object with composed aggregates", () => {
    const flowers = [
      { name: "daffodil", petals: 4 },
      { name: "sunflower", petals: 10 },
      { name: "daisy", petals: 4 },
      { name: "rose", petals: 3 },
      { name: "orchid", petals: 4 },
    ];

    const flowersByFirstLetter = countBy(flowers, (flower) =>
      flower.name.charAt(0)
    );

    expect(flowersByFirstLetter).toEqual({ d: 2, s: 1, r: 1, o: 1 });
  });
  test("should invoke the iteratee function 5 times", () => {
    const flowers = [
      { name: "daffodil", petals: 4 },
      { name: "sunflower", petals: 10 },
      { name: "daisy", petals: 4 },
      { name: "rose", petals: 3 },
      { name: "orchid", petals: 4 },
    ];

    const iteratee = jest.fn();

    countBy(flowers, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(5);
  });
  test("should invoke the iteratee function on each consecutive item", () => {
    const flowers = [
      { name: "daffodil", petals: 4 },
      { name: "sunflower", petals: 10 },
      { name: "daisy", petals: 4 },
      { name: "rose", petals: 3 },
      { name: "orchid", petals: 4 },
    ];

    const iteratee = jest.fn();

    countBy(flowers, iteratee);

    // the iteratee is invoked with 1 arg (value)
    expect(iteratee).toHaveBeenNthCalledWith(1, {
      name: "daffodil",
      petals: 4,
    });
    expect(iteratee).toHaveBeenNthCalledWith(2, {
      name: "sunflower",
      petals: 10,
    });
    expect(iteratee).toHaveBeenNthCalledWith(3, { name: "daisy", petals: 4 });
    expect(iteratee).toHaveBeenNthCalledWith(4, { name: "rose", petals: 3 });
    expect(iteratee).toHaveBeenNthCalledWith(5, { name: "orchid", petals: 4 });
  });
});
