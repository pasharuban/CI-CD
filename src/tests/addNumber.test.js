const { addNumber } = require("../utils/addNumber");

test("addNumber function test", () => {
  const result = addNumber(1, 2);
  expect(result).toBe(3);
});
