function topologicalSort(graph) {
    const inDegree = {}; // To store the in-degree of each node
    const queue = [];    // To store nodes with 0 in-degree
    const sortedOrder = []; // To store the result of topological sort

    // Initialize in-degree of all nodes to 0
    for (let node in graph) {
        inDegree[node] = 0;
    }

    // Calculate in-degree of each node
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Find all nodes with 0 in-degree and add them to the queue
    for (let node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }

    // Process the queue
    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue a node with 0 in-degree
        sortedOrder.push(node);     // Add it to the sorted order

        // Decrease the in-degree of all its neighbors
        for (let neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor); // If in-degree becomes 0, enqueue the neighbor
            }
        }
    }

    // If the sorted order doesn't contain all nodes, there's a cycle (no valid topological sort)
    if (sortedOrder.length !== Object.keys(graph).length) {
        return "Cycle detected, topological sort not possible!";
    }

    return sortedOrder;
}

// Example graph as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['E'],
    'E': []
};

// Perform topological sort
const result = topologicalSort(graph);
console.log(result);
