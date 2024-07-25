import { logPerformance } from "../../performance-logger";

function implementation(s: string): boolean {
  if (s.length > 128) return false;

  let freq: boolean[] = new Array(128);
  const code = "a".charCodeAt(0);
  for (let c of s) {
    const charCode = c.charCodeAt(0);
    if (freq[code - charCode]) return false;
    else freq[code - charCode] = true;
  }

  return true;
}

function isUnique(s: string): boolean {
  return logPerformance("isUnique", () => implementation(s));
}

/*
* cannot use additional data structures

brute force - tc: O(n^2), sc: O(1)
- for each character, compare it with all the other characters
- if there is a match, return false
- at the end, return true

optimal - tc: O(nlogn), sc: O(1)
- we could improve to O(nlogn) if we sort the string and then iterate from the start 
- if we encounter a duplicate (previous index's value) 

further optimal - tc: O(n), sc: O(128) -> O(1)
- we can use a dynamic array to count the frequencies of a character by its ASCII encoding
- this assumes string only contains ASCII encoded characters. 
- if string length is > 128, we know there's a duplicate
- if we find a duplicate, return false
*/

export default isUnique;
