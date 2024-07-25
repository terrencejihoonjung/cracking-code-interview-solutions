import { logPerformance } from "../../performance-logger";

function implementation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const freq: number[] = new Array<number>(128).fill(0);

  for (let c of s1) {
    freq[c.charCodeAt(0)]++;
  }

  for (let c of s2) {
    freq[c.charCodeAt(0)]--;
    if (freq[c.charCodeAt(0)] < 0) return false;
  }

  return true;
}

/*
Brute Force - tc: O(nlogn), sc: O(1)
- check if lengths are equal
- sort strings and check equality

Optimal - tc: O(n), sc: O(128) -> O(1)
- count frequencies of letters in s1, then compare with s2
- assumes characters are ASCII encoded 
*/

function checkPermutation(s1: string, s2: string): boolean {
  return logPerformance("checkPermutation", () => implementation(s1, s2));
}

export default checkPermutation;
