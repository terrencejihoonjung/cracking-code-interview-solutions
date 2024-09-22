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
function findBuildOrder(projects, dependencies) {
    var _a;
    // Arrange
    var graph = new Map(); // adjacency list
    var seen = new Set(); // global seen
    var localSeen = new Set();
    var buildOrder = [];
    // Build Adjacency list
    for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
        var project = projects_1[_i];
        graph.set(project, []);
    }
    for (var _b = 0, dependencies_1 = dependencies; _b < dependencies_1.length; _b++) {
        var dep = dependencies_1[_b];
        (_a = graph.get(dep[0])) === null || _a === void 0 ? void 0 : _a.push(dep[1]);
    }
    for (var _c = 0, projects_2 = projects; _c < projects_2.length; _c++) {
        var project = projects_2[_c];
        if (dfs(project, graph, seen, localSeen, buildOrder))
            return null;
    }
    return buildOrder;
}
function dfs(project, graph, seen, localSeen, buildOrder) {
    if (localSeen.has(project))
        return true;
    if (seen.has(project))
        return false;
    localSeen.add(project);
    for (var _i = 0, _a = graph.get(project); _i < _a.length; _i++) {
        var nextProject = _a[_i];
        if (dfs(nextProject, graph, seen, localSeen, buildOrder))
            return true;
    }
    seen.add(project);
    localSeen.delete(project);
    buildOrder.push(project);
    return false;
}
// Test
function test() {
    var projects = ["a", "b", "c", "d", "e", "f"];
    var dependencies = [
        ["d", "a"],
        ["b", "f"],
        ["d", "b"],
        ["a", "f"],
        ["c", "d"],
    ];
    var result = findBuildOrder(projects, dependencies);
    if (result === null) {
        console.log("Error: No valid build order exists.");
    }
    else {
        console.log("Build Order:", result);
        // Verify the order
        var isValid = verifyBuildOrder(result, dependencies);
        console.log("Is valid build order:", isValid);
    }
}
// Helper function to verify if the build order is valid
function verifyBuildOrder(order, dependencies) {
    var projectIndex = new Map(order.map(function (project, index) { return [project, index]; }));
    for (var _i = 0, dependencies_2 = dependencies; _i < dependencies_2.length; _i++) {
        var _a = dependencies_2[_i], dependent = _a[0], dependency = _a[1];
        if (projectIndex.get(dependent) < projectIndex.get(dependency)) {
            return false;
        }
    }
    return true;
}
// Run the test
test();
