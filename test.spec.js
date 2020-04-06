const reverseString = require('./recursion.ch1');

describe("recursion", function () {
  it("recursion", function () {
    expect(reverseString(["o", "l", "l", "e", "h"])).toEqual(['h', 'e', 'l', 'l', 'o']);
  });

  it("recursion empty", function () {
    expect(reverseString([])).toEqual([]);
  });

  it("recursion arg not array", function () {
    expect(reverseString(0)).toBe('Wrong type!');
    expect(reverseString('')).toBe('Wrong type!');
    expect(reverseString({})).toBe('Wrong type!');
  });
});