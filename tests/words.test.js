import words from "../src/words";

describe("words", () => {
  test("should return an array", () => {
    const sentence = "This is just a sentence";
    const result = words(sentence);

    expect(Array.isArray(result)).toBe(true);
  });
  test("should return an array for unicode", () => {
    const sentence = "A 🐕 is a 🚶's best friend.";
    const result = words(sentence);
    console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
  test("should return an array with words from the passed string", () => {
    const sentence = "This is just a sentence";
    const result = words(sentence);

    expect(result).toContain("This");
    expect(result).toContain("is");
    expect(result).toContain("just");
    expect(result).toContain("a");
    expect(result).toContain("sentence");

    expect(result.length).toBe(5);
  });
  test("should return empty array when empty string passed", () => {
    const sentence = "";
    const result = words(sentence);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
  test("should return array with words and special chars", () => {
    const sentence = "This is so !! funny :)";
    const regex = /[a-zA-Z!:@#\$%\^\&*\)\(+=._-]+/g;
    const result = words(sentence, regex);

    expect(result).toContain("This");
    expect(result).toContain("is");
    expect(result).toContain("so");
    expect(result).toContain("!!");
    expect(result).toContain("funny");
    expect(result).toContain(":)");

    expect(result.length).toBe(6);
  });
  test("should return empty array when no matches are found", () => {
    const sentence = "hello world";
    const regex = /test/g;
    const result = words(sentence, regex);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});
