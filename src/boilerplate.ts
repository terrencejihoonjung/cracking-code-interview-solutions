import { logPerformance } from "./performance-logger";

function implementation(s: string): boolean {
  return true;
}

/*

*/

function name(s: string): boolean {
  return logPerformance("name", () => implementation(s));
}

export default name;
