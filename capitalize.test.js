 const capitalizeStr = require('./capitalize')

test('Capitalizes first letter in string', () => {
  expect(capitalizeStr('hello world')).toEqual('Hello world');
});


