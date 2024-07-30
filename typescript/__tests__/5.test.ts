import { longestPalindrome } from "../5/longestPalindrome";

describe("Testing for 5. Longest Palindrome", () => {
  it("Longest palindrome is returned with a 5 length string", () => {
    const input = "babcd";

    const result = longestPalindrome(input);

    expect(result).toEqual("bab");
  });

  it("Longest palindrome is with an even length palindrome", () => {
    const input = "cbbd";

    const result = longestPalindrome(input);
    expect(result).toEqual("bb");
  });

  it("returns the full string if it is a full palindrome", () => {
    const input = "racecar";

    const result = longestPalindrome(input);

    expect(result).toEqual("racecar");
  });

  it("returns an empty string if given an empty string", () => {
    const input = "";

    const result = longestPalindrome(input);

    expect(result).toEqual("");
  });
});
