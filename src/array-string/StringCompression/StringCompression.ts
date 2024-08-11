import { logPerformance } from "../../performance-logger";

function implementation(s: string): string {
  const compressedString = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count++;

    if (i + 1 === s.length || s[i] !== s[i + 1]) {
      compressedString.push(s[i]);
      compressedString.push(count);
      count = 0;
    }
  }

  const newString = compressedString.join("");

  return newString.length < s.length ? newString : s;
}

/*
- initially, I was thinking of using a hashmap to count frequencies but there are instances 
  where the same letter has multiple counts that need to be considered
- instead, I'll build a string while iterating through s. 
- for each unique character sequence, I'll count how many there are and add that character + count in a new string
  - I'll continue this until I iterate all the way through s
  - I'll also have a boolean flag that keeps track of whether I ever hit a count of > 1.
    - if i never do, I just return the string
*/

function StringCompression(s: string): string {
  return logPerformance("StringCompression", () => implementation(s));
}

export default StringCompression;
