import { logPerformance } from "../../performance-logger";

function implementation(s: string): boolean {
  const toggleBit = (bitVector: number, index: number): number => {
    if (index < 0) return bitVector;
    let mask = 1 << index;
    bitVector ^= mask;
    return bitVector;
  };

  const createBitVector = (s: string): number => {
    const baseCode = "a".charCodeAt(0);
    let bitVector = 0;

    for (let c of s) {
      const index = c.charCodeAt(0) - baseCode;
      bitVector = toggleBit(bitVector, index);
    }

    return bitVector;
  };

  let bitVector = createBitVector(s.toLowerCase());
  return ((bitVector - 1) & bitVector) === 0;
}

/*
using hash map - tc: O(n), sc: O(n)
we can reword the question so that it is then just about knowing if "s" is a palindrome. 
- given that s could not be in the correct "palindromic" order, we'll need to count frequencies using hash table
- format string and count frequencies of each letter (ignore anything else)
  - if a letter's freq reaches 2, reset it to 0
- iterate through the map again and check for more than on occurrence of a letter being unique -> false

optimization - tc: O(n), sc: O(n)
- count odd numbered occurences of letters while counting the characters
- at the end we'll have our answer

further optimization - tc: O(n), sc: O(1)
- we actually don't need to count frequencies and really only care about whether the count is even or odd (like a light switch)
- so, we can use a bit vector that acts as multiple flags for each letter in the alphabet (26). 
- for each character, we just toggle the mapped bit and in the end we just check if we have exactly 1 or less 1's within our bit vector. 
*/

function PalindromePermutation(s: string): boolean {
  return logPerformance("PalindromePermutation", () => implementation(s));
}

export default PalindromePermutation;
