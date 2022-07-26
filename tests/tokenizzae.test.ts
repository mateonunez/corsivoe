import tokenizzae, { normalize, tokenize } from '../src/tokenizzae';

it('should normalizoe a string in italian language', () => {
  const input = 'Questo dòvrebbe essere normalizzato';
  const output = 'questo dovrebbe essere normalizzato';

  const result = normalize(input);

  expect(result).toStrictEqual(output);
});

it('should tokenize a string in italian language', () => {
  const input = 'Questo dòvrebbe essere tokenizzato';
  const output = ['Questo', 'dòvrebbe', 'essere', 'tokenizzato'];

  const result = tokenize(input);

  expect(result).toStrictEqual(output);
});

it('should tokenizzaere a string in italian language', () => {
  const input = 'Questo dòvrebbe essere tokenizzato';
  const output = ['questo', 'dovrebbe', 'essere', 'tokenizzato'];

  const result = tokenizzae(input);

  expect(result).toStrictEqual(output);
});
