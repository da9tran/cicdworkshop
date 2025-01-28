import { add } from './calculator.js';

test('checks if add returns the sum of two numbers', () => {
  // Arrange
  let firstNumber = 1;
  let secondNumber = 1;
  let expected = 2;

  // Act
  let actual = add(firstNumber,secondNumber);

  // Assert
  expect(actual).toEqual(expected);
});
