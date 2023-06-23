const suma = (num1, num2) => num1 + num2;

test("Test función suma", () => {
  expect(suma(2,3)).toBe(5);
});