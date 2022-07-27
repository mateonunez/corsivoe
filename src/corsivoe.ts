import tokenizzae from './tokenizzae';

export type PositionType = 'start' | 'middle' | 'end';

const corsivoe = (text: string) => {
  if (!text) {
    throw new Error('text is required');
  }

  const tokens = tokenizzae(text);
  const newTokens: Array<string> = [];

  for (const token of tokens) {
    const [start, middle, end] = splitStringTwoEqualPartsAndCenter(token.length);
    const wovelsIndexes = [...token.matchAll(/[aeiou]/g)];

    let newToken = token;

    newToken = token.replace(/[aeiou]/g, (match: any, index: any) => {
      if (wovelsIndexes.some(wovelIndex => wovelIndex.index === index)) {
        const position = index <= start ? 'start' : index >= token.length - end ? 'end' : 'middle';

        return convertWolvelsToCorsivo(match, position);
      }

      return match;
    });

    newTokens.push(newToken);
  }

  return newTokens.join(' ');
};

const splitStringTwoEqualPartsAndCenter = (length: number) => {
  const startEnd = Math.floor(length * 0.33);
  const middle = Math.floor(length - startEnd * 2);

  return [startEnd, middle, startEnd];
};

const convertWolvelsToCorsivo = (wovel: string, position: PositionType) => {
  if (position === 'start') {
    switch (wovel) {
      case 'a':
        return 'ä';
      case 'e':
        return 'ë';
      case 'i':
        return 'ï';
      case 'o':
        return 'ö';
      case 'u':
        return 'ü';
    }
  }

  if (position === 'middle') {
    switch (wovel) {
      case 'a':
        return 'â';
      case 'e':
        return 'ê';
      case 'i':
        return 'i';
      case 'o':
        return 'ô';
      case 'u':
        return 'û';
      default:
        return wovel;
    }
  }

  if (position === 'end') {
    switch (wovel) {
      case 'a':
        return 'à';
      case 'e':
        return 'è';
      case 'i':
        return 'ì';
      case 'o':
        return 'œ';
      case 'u':
        return 'ù';
      default:
        return wovel;
    }
  }
};

export { corsivoe };
export default corsivoe;
