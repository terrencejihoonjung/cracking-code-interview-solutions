/*
Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
- given an adjacency list
- given src and dest nodes


DFS or BFS? 
- use DFS to look through entire graph
- could use bidirectional search but complicated lol

- perform DFS on src node and keep going down branches until we find dest node. 
- if we exhaust all nodes, we return false
*/

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true;

  // Create adjacency list using edges
  const map = new Map<number, number[]>();
  for (let edge of edges) {
    if (!map.has(edge[0])) map.set(edge[0], []);
    if (!map.has(edge[1])) map.set(edge[1], []);

    map.get(edge[0])!.push(edge[1]);
    map.get(edge[1])!.push(edge[0]);
  }

  // perform DFS on nodes 0 to n-1 and keep track of visited nodes
  // if we encounter dest node, return true.
  // if we exhaust DFS, return false
  const seen = new Set<number>();
  return dfs(source, seen, map, destination);
}

function dfs(
  node: number,
  seen: Set<number>,
  map: Map<number, number[]>,
  dest: number
): boolean {
  if (node === null || !map.get(node)) return false;

  let hasPath = false;
  if (node === dest) hasPath = true;
  seen.add(node);

  for (let neighbor of map.get(node)!) {
    if (!seen.has(neighbor)) {
      hasPath = hasPath || dfs(neighbor, seen, map, dest);
    }
  }

  return hasPath;
}
