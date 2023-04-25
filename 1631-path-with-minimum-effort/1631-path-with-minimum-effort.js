function minimumEffortPath(heights) {
  const HEIGHTS = heights.length;
  const WIDTH = heights[0].length;
  const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  function bfs(maxEffort) {
    const q = [[0, 0]];
    const visited = new Set();
    visited.add(`${0},${0}`);

    while (q.length > 0) {
      const [row, col] = q.pop();

      if (row === HEIGHTS - 1 && col === WIDTH - 1) return true;

      for (const [dx, dy] of moves) { // check neighbors
        const nr = row + dx;
        const nc = col + dy;

        if (nr >= 0 && nr < HEIGHTS && nc >= 0 && nc < WIDTH) { // check boundaries
          const key = `${nr},${nc}`;
          if (!visited.has(key)) {
            const newEffort = Math.abs(heights[nr][nc] - heights[row][col]);
            if (newEffort <= maxEffort) {
              q.push([nr, nc]);
              visited.add(key);
            }
          }
        }
      }
    }

    return false;
  }

  let left = 0;
  let right = 1000000;

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