// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NormalizerIt, TokenizerIt } = require('@nlpjs/lang-it');

export function normalize(text: string): string {
  const normalizer = new NormalizerIt();

  return normalizer.normalize(text);
}

export function tokenize(text: string): string[] {
  const tokenizer = new TokenizerIt();

  return tokenizer.tokenize(text);
}

export default function tokenizzae(text: string): string[] {
  return tokenize(normalize(text));
}
