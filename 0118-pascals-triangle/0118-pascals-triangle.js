/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1],[1,1]];
  
  const answer = [[1],[1,1]];
  
  for (let i=2; i<numRows; i++) {
    let j = 0;
    const temp = [];
    for (let j=0; j<=i; j++) {
      if (j === 0 || j === i) temp.push(1);
      else temp.push(answer[i-1][j-1] + answer[i-1][j]);
    }
    answer.push(temp);
  }
  
  return answer;
};