const { expect } = require('@jest/globals')
const reverseStr = require('./reversestring')

test('Reverse a sring', () => {
  expect(reverseStr('abc def')).toEqual('fed cba')
})


