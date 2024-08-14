function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;
  return isSubstring(goal, s + s);
}

function isSubstring(s1: string, s2: string): boolean {
  let idx = 0;

  for (let i = 0; i < s2.length; i++) {
    if (s1[idx] !== s2[i]) idx = 0;

    if (s1[idx] === s2[i]) {
      idx++;
      if (idx === s1.length) return true;
    }
  }

  return false;
}
