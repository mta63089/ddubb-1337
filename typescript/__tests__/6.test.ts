import { ZigZag } from "../6/zigzag";

describe("Testing for Zig Zag function", () => {
  it("should return the same string when given numrows 1", () => {
    const str = "THISISATESTSTRING";
    const numRows = 1;
    const result = ZigZag(str, numRows);

    expect(result).toEqual(str);
  });

  it("should return an empty string if numRows is 0", () => {
    const str = "THISISATESTSTRING";
    const numRows = 0;
    const result = ZigZag(str, numRows);

    expect(result).toEqual("");
  });

  it("Should return the correct result when given numRows=3", () => {
    const str = "THISISATESTSTRING";
    const numRows = 3;
    const result = ZigZag(str, numRows);

    expect(result).toEqual("TIETGHSSTSSRNIATI");
  });

  it("Should return the correct result when given numRows=4", () => {
    const str = "THISISATESTSTRING";
    const numRows = 4;
    const result = ZigZag(str, numRows);

    expect(result).toEqual("TATHSTSRIIETIGSSN");
  });
});
