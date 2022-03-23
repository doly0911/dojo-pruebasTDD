const cb = require("./codeBreaker");

test("full match all digits", () => {
  const result = cb.match("1234"); //Act
  expect(result).toBe("XXXX"); //Assert
});

test("digits not exist", () => {
  const result = cb.match("9578");
  expect(result).toBe("");
});

describe("Digits exit in same position", () => {

  test("only 1 digit in first position", () => {
    const result = cb.match("1765");
    expect(result).toBe("X");
  });
  test("1 digit in the same position but in any location", () => {
    const result = cb.match("9635");
    expect(result).toBe("X");
  });

  test("2 digit in the same position but in any location", () => {
    const result = cb.match("9238");
    expect(result).toBe("XX");
  });

  test("3 digit in the same position but in any location", () => {
    const result = cb.match("1237");
    expect(result).toBe("XXX");
  });
});

describe("Digit exist but other location", () => {

  test("1 digit exist but other location", () => {
    const result = cb.match("5761");
    expect(result).toBe("-");
  });

  test("2 digit exist but in a different position", () => {
    const result = cb.match("8743");
    expect(result).toBe("--");
  });

  test("3 digits exist but in a different position", () => {
    const result = cb.match("9143");
    expect(result).toBe("---");
  });

  test("Digits exist but in a different position", () => {
    const result = cb.match("2143");
    expect(result).toBe("----");
  });
});

test("1 digit in the same position and 1 digit in any location", () => {
    const result = cb.match("1647");
    expect(result).toBe("X-");
  });  

test("2 digit in the same position and 1 digit in any location", () => {
  const result = cb.match("1247");
  expect(result).toBe("XX-");
});

test("2 digit in the same position and 2 digit in any location", () => {
  const result = cb.match("1243");
  expect(result).toBe("XX--");
});