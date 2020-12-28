import caesarCipher from './caesarcipher';

test('using huge offset', () => {
  expect(
    caesarCipher('!The quick brown fox!! jumps over the lazy dog!', 100)
  ).toBe('!Pda mqeyg xnksj bkt!! fqilo kran pda hwvu zkc!');
});

