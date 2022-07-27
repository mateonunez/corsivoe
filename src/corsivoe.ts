import tokenizzae from './tokenizzae';

const corsivoe = (text: string) => {
  if (!text) {
    throw new Error('text is required');
  }

  const tokens = tokenizzae(text);

  const result = '';

  for (const token of tokens) {
    const chars: string[] = [];
    const [start, middle, end] = splitStringTwoEqualPartsAndCenter(token.length);
    const wovelsIndexes = [...token.matchAll(/[aeiou]/g)];

    // find start wovels
    const tokenInCorsivoe = wovelsIndexes.map((wovelIndex: any): any => {
      const { index } = wovelIndex;

      if (index <= start) {
        chars[index] = token[index].replace(/[a]/g, 'ä');
        chars[index] = token[index].replace(/[e]/g, 'ë');
        chars[index] = token[index].replace(/[i]/g, 'ï');
        chars[index] = token[index].replace(/[o]/g, 'ö');
        chars[index] = token[index].replace(/[u]/g, 'ü');
      } else if (index >= middle && index < end) {
        chars[index] = token[index].replace(/[a]/g, 'à');
        chars[index] = token[index].replace(/[e]/g, 'è');
        chars[index] = token[index].replace(/[i]/g, 'ì');
        chars[index] = token[index].replace(/[o]/g, 'ò');
        chars[index] = token[index].replace(/[u]/g, 'ù');
      } else {
        chars[index] = token[index];
      }

      return chars;
    });
  }

  return 'cörsivœ';
};

const splitStringTwoEqualPartsAndCenter = (length: number) => {
  const startEnd = Math.floor(length * 0.33);
  const middle = Math.floor(length - startEnd * 2);

  return [startEnd, middle, startEnd];
};

// 12
// 3 6 3

export { corsivoe };
export default corsivoe;
