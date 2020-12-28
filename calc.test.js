import calc from './calc';

test('adds two numbers', () => {
  expect(calc.add(1, 2)).toEqual(3);
});

test('subtracts two numbers', () => {
  expect(calc.sub(5, 2)).toEqual(3);
});

test('multiply two numbers', () => {
  expect(calc.multiply(1, 2)).toEqual(2);
});

test('divide two numbers', () => {
  expect(calc.divide(10, 5)).toEqual(2);
});
