import myFunction from './arrayanalysis';

const array = [1, 8, 3, 4, 2, 6];

test('Returns object of average of array', () => {
  expect(myFunction(array).average).toBe(4);
});

test('Returns object of min of array', () => {
  expect(myFunction(array).min).toEqual(1);
});

test('Returns object of max of array', () => {
  expect(myFunction(array).max).toEqual(8);
});

test('Returns object of length of array', () => {
  expect(myFunction(array).length).toEqual(6);
});
