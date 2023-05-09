/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  
  const answer = [];
  
  for (let i=0; i<numRows; i++) {
    const temp = [];
    for (let j=0; j<=i; j++) {
      if (j === 0 || j === i) temp.push(1);
      else temp.push(answer[i-1][j-1] + answer[i-1][j]);
    }
    answer.push(temp);
  }
  
  return answer;
};