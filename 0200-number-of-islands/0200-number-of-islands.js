/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const WIDTH = grid[0].length;
  const HEIGHT = grid.length;
  const moves = [[0,1],[0,-1],[-1,0],[1,0]];
  const visited = Array.from({length: HEIGHT}, ()=>Array(WIDTH).fill(0));
  let answer = 0;
  
  const bfs = (a, b) => {
    const q = [[a,b]];
    visited[a][b] = 1;
    while (q.length) {
      const [r, c] = q.shift();
      for (const move of moves) {
        const nr = r + move[0];
        const nc = c + move[1];
        if (nr < 0 || nr >= HEIGHT || nc < 0 || nc >= WIDTH || visited[nr][nc] || grid[nr][nc] === '0') continue;
        q.push([nr, nc]);
        visited[nr][nc] = 1;
      }
    }
    return 1;
  }
  
  for (let i=0; i<HEIGHT; i++) {
    for (let j=0; j<WIDTH; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) answer += bfs(i, j);
    }
  }
  
  return answer;
};