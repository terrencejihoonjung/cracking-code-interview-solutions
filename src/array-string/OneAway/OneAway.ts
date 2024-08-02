import { logPerformance } from "../../performance-logger";

function implementation(s1: string, s2: string): boolean {
  if (Math.abs(s1.length - s2.length) > 1) return false;
  if (s1 === s2) return true;

  const str1 = s1.length < s2.length ? s1 : s2;
  const str2 = s1.length < s2.length ? s2 : s1;

  console.log(str1, str2);

  let index1 = 0;
  let index2 = 0;

  let flag: boolean = false;
  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (flag) return false;
      flag = true;

      if (s1.length === s2.length) index1++;
    } else {
      index1++;
    }

    index2++;
  }

  return true;
}

/*
- if the diff in length between s1 and s2 are more than 1, return false
- if the diff is 1 -> insert or removal
- if the diff is 0 -> replace

- note: the commonality among all three edits is that we need to find 1 or less letter 
-       that is not in the other string. If more than 1, we return false. 

- we can count the freq of letters in s1. Then, subtract from those freq's in s2. 
- after that, iterate through the map and check for only one or less key with value of 1.
- for the case of a replace operation, we can allow non-zero key-values in the map
*/

function OneAway(s1: string, s2: string): boolean {
  return logPerformance("OneAway", () => implementation(s1, s2));
}

export default OneAway;
