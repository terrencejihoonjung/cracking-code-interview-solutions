import { logPerformance } from "../../performance-logger";

function implementation(s: string, len: number): string {
  let i = s.length - 1;
  let j = len - 1;

  const characters = s.split("");

  while (j >= 0) {
    if (characters[j] === " ") {
      characters[i--] = "0";
      characters[i--] = "2";
      characters[i--] = "%";
    } else {
      characters[i--] = characters[j];
    }
    j--;
  }

  return characters.join("");
}

/*
brute force
- starting from the beginning, insert "%20" at each space and push characters back. However, pushing back characters can become more complicated.

optimization - 
- calculate extra spaces between s.length - true length. 
- one pointer j at str.length - 1 - extra and another i at str.length - 1
- while j !== i, iterate backwards and modify s 
*/

function URLify(s: string, len: number): string {
  return logPerformance("URLify", () => implementation(s, len));
}

export default URLify;
