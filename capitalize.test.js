import capitalizeString from './capitalize'

test('Capitalizes first letter in string', () => {
  expect(capitalizeString('hello world')).toEqual('Hello world');
});


