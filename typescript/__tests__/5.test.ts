import { longestPalindrome } from "../5/longestPalindrome";

const testData = [
  { input: "babcd", output: "bab" },
  { input: "cbbd", output: "bb" },
  { input: "abcc", output: "cc" },
];

test("Longest palindrome is returned with a 5 length string", () => {
  const input = "babcd";

  const result = longestPalindrome(input);

  expect(result).toEqual("bab");
});

test("Longest palindrome is with an even length palindrome", () => {
  const input = "cbbd";

  const result = longestPalindrome(input);

  expect(result).toEqual("bb");
});

test("returns the full string if it is a full palindrome", () => {
  const input = "racecar";

  const result = longestPalindrome(input);

  expect(result).toEqual("racecar");
});

test("returns an empty string if given an empty string", () => {
  const input = "";

  const result = longestPalindrome(input);

  expect(result).toEqual("");
});
