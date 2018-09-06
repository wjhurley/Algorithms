import * as MORSE_CODE from './constants/MorseCode';

export class CodeWars {
  // https://www.codewars.com/kata/554e4a2f232cdd87d9000038
  public static dnaComplements = (dna: string): string => {
    const replacer = (m: string, p1: string, p2: string, p3: string, p4: string): string => {
      return m === p1
	      ? 'T'
	      : m === p2
		      ? 'A'
		      : m === p3
			      ? 'G'
			      : m === p4
				      ? 'C'
				      : '';
    };
    return dna.replace(/([A])|([T])|([C])|([G])/gi, replacer);
  }
  // https://www.codewars.com/kata/54b724efac3d5402db00065e
  public static decodeMorse = (morseCode: string): string => {
    const wordArray: string[] = morseCode.trim().split('   ');
    const convertedWords: string[] = [];

    wordArray.forEach((el: string) => {
      let newWord: string = el.split(' ').reduce((acc: string, elem: string) => {
        return acc + MORSE_CODE[elem];
      }, '');
      convertedWords.push(newWord);
    });

    return convertedWords.join(' ');
  }
  // https://www.codewars.com/kata/5663f5305102699bad000056
  public static maxDiffLength = (a1: string[], a2: string[]): number => {
    if (a1.length === 0 || a2.length === 0) {
      return -1;
    }

    [a1, a2].forEach((el: string[]) => {
      el.sort((a: string, b: string) => { return a.length - b.length; });
    });

    const maxWithA1Shortest = a2[a2.length - 1].length - a1[0].length;
    const maxWithA2Shortest = a1[a1.length - 1].length - a2[0].length;

    return Math.max(maxWithA1Shortest, maxWithA2Shortest);
  }
  /* https://www.codewars.com/kata/moves-in-squared-strings-i/
  *  vertMirror and horMirror are private and only called from
  *  mirrorStrings(), which are passed in as the first parameter.
  */
  private static vertMirror = (strng: string): string => {
    return strng.split('\n').map((el: string) => {
      return el.split('').reverse().join('');
    }).join('\n');
  }

  private static horMirror = (strng: string): string => {
    return strng.split('\n').reverse().join('\n');
  }

  public static mirrorStrings = (fct: (string) => string, s: string) => {
    return fct(s);
  }
}

export default CodeWars;
