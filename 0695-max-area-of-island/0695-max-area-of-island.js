var maxAreaOfIsland = function(grid) {
  const moves = [[0,1],[0,-1],[1,0],[-1,0]];
  const WIDTH = grid[0].length;
  const HEIGHT = grid.length;
  const visited = Array.from({length: HEIGHT}, () => Array(WIDTH).fill(false));
  let answer = 0;
  
  const bfs = (a, b) => {
    const q = [];
    q.push([a, b]);
    visited[a][b] = true;
    let cnt = 1;
    
    while (q.length) {
      const [r, c] = q.pop();
      // 큐 자료구조로 하는게 시간으로는 베스트인데 자바스크립트는 귀찮습니다. 그래서 대안으로 shift를 써도 통과됩니다. 
      // 근데 pop써도 통과되서 시간 빠른게 기분이 좋아서 pop을 썼습니다.
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
      if (grid[i][j]===1 && !visited[i][j]) answer = Math.max(answer, bfs(i, j))
    }
  } 

  return answer;
};