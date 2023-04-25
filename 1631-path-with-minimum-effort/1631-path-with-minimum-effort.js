function minimumEffortPath(heights) {
  const m = heights.length;
  const n = heights[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // directions

  function bfs(maxEffort) {
    const queue = [[0, 0]]; // start from top-left corner
    const visited = new Set();
    visited.add(`${0},${0}`);

    while (queue.length > 0) {
      const [row, col] = queue.shift();

      if (row === m - 1 && col === n - 1) return true; // reached destination

      for (const [dx, dy] of dirs) { // check neighbors
        const newRow = row + dx;
        const newCol = col + dy;

        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) { // check boundaries
          const key = `${newRow},${newCol}`;
          if (!visited.has(key)) {
            const newEffort = Math.abs(heights[newRow][newCol] - heights[row][col]);
            if (newEffort <= maxEffort) {
              queue.push([newRow, newCol]);
              visited.add(key);
            }
          }
        }
      }
    }

    return false; // no path found
  }

  let left = 0;
  let right = 1000000; // maximum possible effort

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (bfs(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}