var maxAreaOfIsland = function(grid) {
  const moves = [[0,1],[0,-1],[1,0],[-1,0]];
  const WIDTH = grid[0].length;
  const HEIGHT = grid.length;
  const visited = Array.from({length: HEIGHT}, () => Array(WIDTH).fill(false));
  let answer = [];
  
  const bfs = (a, b) => {
    const q = [];
    q.push([a, b]);
    visited[a][b] = true;
    let cnt = 1;
    
    while (q.length) {
      const [r, c] = q.shift();
      for (const move of moves) {
        const nr = r + move[0];
        const nc = c + move[1];
        if (nr < 0 || nr >= HEIGHT || nc < 0 || nc >= WIDTH || grid[nr][nc] === 0 || visited[nr][nc]) continue;
        q.push([nr, nc]);
        visited[nr][nc] = true;
        cnt++;
      }
    }
    
    return cnt;
  }
  
  for (let i=0; i<HEIGHT; i++) {
    for (let j=0; j<WIDTH; j++) {
      if (grid[i][j]===1 && !visited[i][j]) answer.push(bfs(i, j));
    }
  } 
  
  console.log(answer)
  return answer.length ? Math.max(...answer) : 0;
};