/**
You are given a list of projects and a list of dependencies 
(which is a list of pairs of projects, where the second project is dependent on the first project). 
All of a project's dependencies must be built before the project is. 
Find a build order that will allow the projects to be built. 
If there is no valid build order, return an error.

EXAMPLE:
Input: 
- projects: a, b, c, d, e, f
- dependencies: (a, d), (f, b), (b, d), (f, a), (d, c) 

Output: f, e, a, b, d, c

Brainstorm:
How do we know we found a build order? 
- find a path while ensuring no cycle exists

Plan?
- build an adjacency list using the dependencies 
- perform dfs on each unseen project
- for each dfs ensure there is no cycle -> dfs returns boolean (isCycle)
- global buildOrder, global seen (for buildOrder), local seen (for cycle check)
*/

function findBuildOrder(
  projects: string[],
  dependencies: [string, string][]
): string[] | null {
  // Arrange
  const graph = new Map<string, string[]>(); // adjacency list
  const seen = new Set<string>(); // global seen
  const localSeen = new Set<string>();
  const buildOrder: string[] = [];

  // Build Adjacency list
  for (let project of projects) graph.set(project, []);
  for (let dep of dependencies) graph.get(dep[0])?.push(dep[1]);

  for (let project of projects) {
    if (dfs(project, graph, seen, localSeen, buildOrder)) return null;
  }

  return buildOrder;
}

function dfs(
  project: string,
  graph: Map<string, string[]>,
  seen: Set<string>,
  localSeen: Set<string>,
  buildOrder: string[]
): boolean {
  if (localSeen.has(project)) return true;
  if (seen.has(project)) return false;

  localSeen.add(project);

  for (let nextProject of graph.get(project)!) {
    if (dfs(nextProject, graph, seen, localSeen, buildOrder)) return true;
  }

  seen.add(project);
  localSeen.delete(project);
  buildOrder.push(project);

  return false;
}

// Test
function test() {
  const projects: string[] = ["a", "b", "c", "d", "e", "f"];
  const dependencies: [string, string][] = [
    ["d", "a"],
    ["b", "f"],
    ["d", "b"],
    ["a", "f"],
    ["c", "d"],
  ];

  const result = findBuildOrder(projects, dependencies);

  if (result === null) {
    console.log("Error: No valid build order exists.");
  } else {
    console.log("Build Order:", result);

    // Verify the order
    const isValid = verifyBuildOrder(result, dependencies);
    console.log("Is valid build order:", isValid);
  }
}

// Helper function to verify if the build order is valid
function verifyBuildOrder(
  order: string[],
  dependencies: [string, string][]
): boolean {
  const projectIndex = new Map(order.map((project, index) => [project, index]));

  for (const [dependent, dependency] of dependencies) {
    if (projectIndex.get(dependent)! < projectIndex.get(dependency)!) {
      return false;
    }
  }

  return true;
}

// Run the test
test();
