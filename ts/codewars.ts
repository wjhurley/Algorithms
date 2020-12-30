import * as MORSE_CODE from './constants/MorseCode';

export class CodeWars {
    // https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/typescript
    public static calc(expression: string): number {
        const allOperators: string[][] = [
            ['*', '/'],
            ['+', '-'],
        ];
        const characters = CodeWars.parseExpression(expression);
        const parentheses: string[] = [];

        for (const operators of allOperators) {
            let leftParenthesisSet = false;
            let operand: string[];
            let operator: string;

            for (const [i, character] of characters.entries()) {
                let result = 0;

                if (/[0-9.]/.test(character)) {
                    operand.push(character);
                    continue;
                }

                if (operators.indexOf(character) < 0) {
                    operator = character;
                    continue;
                }

                switch (character) {
                    case '*':
                        result = Number(characters[i - 1]) * Number(characters[i + 1]);
                        characters.splice(i - 1, 3, result.toString());
                        break;
                    case '/':
                        result = Number(characters[i - 1]) / Number(characters[i + 1]);
                        characters.splice(i - 1, 3, result.toString());
                        break;
                    case '+':
                        result = Number(characters[i - 1]) + Number(characters[i + 1]);
                        characters.splice(i - 1, 3, result.toString());
                        break;
                    case '-':
                        result = Number(characters[i - 1]) - Number(characters[i + 1]);
                        characters.splice(i - 1, 3, result.toString());
                        break;
                }

                if (characters.length > 1) {
                    return CodeWars.calc(characters.join(' '));
                }
            }
        }

        if (characters.length > 1) {
            return CodeWars.calc(characters.join(' '));
        }

        return Number(characters[0]);
    }
    // https://www.codewars.com/kata/54b724efac3d5402db00065e
    public static decodeMorse = (morseCode: string): string => {
        const wordArray: string[] = morseCode.trim().split('   ');
        const convertedWords: string[] = [];

        wordArray.forEach((el: string) => {
            let newWord: string = el
                .split(' ')
                .reduce((acc: string, elem: string) => {
                    return acc + MORSE_CODE[elem];
                }, '');
            convertedWords.push(newWord);
        });

        return convertedWords.join(' ');
    }
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

    public static isInteresting(n: number, awesomePhrases: number[]): number {
        if (n < 98) {
            return 0;
        }

        if (98 <= n && n < 100) {
            return 1;
        }

        for (let i = n; i <= n + 2; i++) {
            const stringifiedNum = i.toString();
            const repeatingNumberRegex = new RegExp(`^${stringifiedNum[0]}+$`);
            const reversed = stringifiedNum.split('').reverse().join('');
            const sequentialIncrementing = '1234567890';
            const sequentialDecrementing = '9876543210';
            let isInterestingNum = false;

            if (/^[1-9]0+$/.test(stringifiedNum) // Test for numbers ending in 0's
                || repeatingNumberRegex.test(stringifiedNum) // Test for repeating digits
                || sequentialIncrementing.indexOf(stringifiedNum) > -1 // Test for incrementing sequential numbers
                || sequentialDecrementing.indexOf(stringifiedNum) > -1 // Test for decrementing sequential numbers
                || stringifiedNum === reversed // Test for palindrome
                || awesomePhrases.includes(i) // Test for match in array
            ) {
                isInterestingNum = true;
            }

            if (isInterestingNum) {
                if (i === n) {
                    return 2;
                }

                return 1;
            }
        }

        return 0;
    }
    // https://www.codewars.com/kata/5663f5305102699bad000056
    public static maxDiffLength = (a1: string[], a2: string[]): number => {
        if (a1.length === 0 || a2.length === 0) {
            return -1;
        }

        [a1, a2].forEach((el: string[]) => {
            el.sort((a: string, b: string) => a.length - b.length);
        });

        const maxWithA1Shortest = a2[a2.length - 1].length - a1[0].length;
        const maxWithA2Shortest = a1[a1.length - 1].length - a2[0].length;

        return Math.max(maxWithA1Shortest, maxWithA2Shortest);
    }
    // https://www.codewars.com/kata/moves-in-squared-strings-i/
    public static mirrorStrings = (fct: (string) => string, s: string) => {
        return fct(s);
    }
    // Helper function for calc()
    private static parseExpression(expression: string): string[] {
        const characters = expression
            .replace(/\s+/g, '')
            .split('');
        const expressionPieces: string[] = [];
        let operand: string[] = [];
        const operandRegex = /[0-9.]/;
        const operatorRegex = /[\^+\-*/()]/;

        for (const [ix, character] of characters.entries()) {
            const isLastCharacter = ix === characters.length - 1;
            let prevCharacter = characters[ix - 1];
            let nextCharacter = characters[ix + 1];

            if (operandRegex.test(character)) {
                operand.push(character);
            }
            // If the character is a minus sign and is either the first character in the
            // string or preceded by another operator, then it is a negative sign instead
            if (character === '-' && (ix === 0 || /[\^+\-*/]/.test(prevCharacter))) {
                operand.push(character);
                continue;
            }

            if (operand.length && (isLastCharacter || operatorRegex.test(nextCharacter))) {
                expressionPieces.push(operand.join(''));
                operand = [];
                continue;
            }

            if (operatorRegex.test(character)) {
                expressionPieces.push(character);
            }
        }

        return expressionPieces;
    }
    // https://www.codewars.com/kata/550498447451fbbd7600041c
    public static squareDigits(num: number) {
        const numberArray: string[] = num.toString().split('');
        let numberString: string = '';
        
        numberArray.forEach((el: string): void => {
            let squared: number = Number(el) * Number(el);
            numberString += squared.toString();
        });
      
        return Number(numberString);
    }
    // https://www.codewars.com/kata/52b7ed099cdc285c300001cd
    public static sumOfIntervals(intervals: [number, number][]): number {
        const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);
        const simplifiedArrays = sortedIntervals.reduce((startStops: number[][], [start, stop]) => {
            let newStart: number = start;
            let newStop: number = stop;

            for (const [otherStart, otherStop] of sortedIntervals) {
                // Filter out matching start/stop
                if (start === otherStart && stop === otherStop) {
                    continue;
                }

                if (CodeWars.isOverlappingRanges([newStart, newStop], [otherStart, otherStop])) {
                    newStart = Math.min(newStart, otherStart);
                    newStop = Math.max(newStop, otherStop);
                }
            }

            const isNewRangeInArray = startStops.some(([a, b]) => a === newStart && b === newStop);

            if (startStops.length === 0 || !isNewRangeInArray) {
                startStops.push([newStart, newStop]);
            }

            const newStartStops = startStops.reduce((newRanges: number[][], [oldStart, oldStop]) => {
                const isValueEqualToNewRange = newStart === oldStart && newStop === oldStop;
                const isValueAlreadyInArray = newRanges.some(([a, b]) => a === oldStart && b === oldStop);

                if (isValueAlreadyInArray) {
                    return newRanges;
                }

                if (CodeWars.isOverlappingRanges([newStart, newStop], [oldStart, oldStop])) {
                    newStart = Math.min(newStart, oldStart);
                    newStop = Math.max(newStop, oldStop);

                    if (!newRanges.some(([a, b]) => a === newStart && b === newStop)) {
                        newRanges.push([newStart, newStop]);
                        return newRanges;
                    }
                }

                if (!newRanges.some(([a, b]) => a === newStart && b === newStop)) {
                    newRanges.push([oldStart, oldStop]);
                    return newRanges;
                }

                return newRanges;
            }, []);

            return newStartStops;
        }, []);

        return simplifiedArrays.reduce((total, [start, stop]) => {
            return total += stop - start;
        }, 0);
    }
    // Helper function for sumOfIntervals()
    private static isOverlappingRanges([startA, stopA]: number[], [startB, stopB]: number[]): boolean {
        const isStartAInRange = startB < startA && startA < stopB;
        const isStopAInRange = startB < stopA && stopA < stopB;
        const isStartBInRange = startA < startB && startB < stopA;
        const isStopBInRange = startA < stopB && stopB < stopA;

        return isStartAInRange || isStopAInRange || isStartBInRange || isStopBInRange;
    }
    // https://www.codewars.com/kata/56eb0be52caf798c630013c0
    public static unluckyDays(year: number): number {
        let blackFridays = 0;
    
        for (let i = 1; i <= 12; i++) {
            const thirteenthDay = new Date(`${year}-${i}-13 00:00:00`).getDay();
    
            if (thirteenthDay === 5) {
                blackFridays++;
            }
        }
    
        return blackFridays;
    }
    /**
    * horMirror and vertMirror are private and only called from
    * mirrorStrings(), which are passed in as the first parameter.
    */
    private static horMirror = (strng: string): string => {
        return strng
            .split('\n')
            .reverse()
            .join('\n');
    }

    private static vertMirror = (strng: string): string => {
        return strng
            .split('\n')
            .map((el: string) => {
                return el
                    .split('')
                    .reverse()
                    .join('');
            })
            .join('\n');
    }
}

export default CodeWars;
