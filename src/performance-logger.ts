import { performance } from "perf_hooks";

export function logPerformance<T>(name: string, fn: () => T): T {
  const startTime = performance.now();

  const result = fn();

  const endTime = performance.now();

  console.log(`--- ${name} ---`);
  console.log(`Execution time: ${endTime - startTime} ms`);
  console.log("-----------------------------------");

  return result;
}
