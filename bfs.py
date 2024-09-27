from collections import deque

def bfs(graph, start):
    # Create a queue for BFS
    queue = deque([start])
    
    # Set to keep track of visited nodes
    visited = set([start])
    
    # While there are nodes to process
    while queue:
        # Pop a node from the front of the queue
        node = queue.popleft()
        print(node, end=" ")
        
        # Get all adjacent nodes
        for neighbor in graph[node]:
            if neighbor not in visited:
                # Mark the neighbor as visited and enqueue it
                visited.add(neighbor)
                queue.append(neighbor)

# Example graph as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Starting BFS from node 'A'
bfs(graph, 'A')
