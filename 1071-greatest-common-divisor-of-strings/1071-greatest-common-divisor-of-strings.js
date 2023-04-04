var gcdOfStrings = function(str1, str2) {
    // 두 문자열 str1과 str2가 주어지면 x가 str1과 str2를 모두 나누도록 가장 큰 문자열 x를 반환합니다.
  let [minS, maxS] = ['', ''];
  const result = [];
  const answer = [];
  
  if (str1.length >= str2.length) {
    maxS = str1;
    minS = str2;
  } else {
    maxS = str2;
    minS = str1;
  }
  
  for (let i=1; i<=minS.length; i++) {
    let check = true;
    const tempMinS = minS.slice(0, i);
    for (let j=0; j<maxS.length; j+=i) {
      const tempMaxS = maxS.slice(j, i+j);
      if (tempMinS !== tempMaxS) {
        check = false;
        break;
      }
    }
    if (check) result.push(tempMinS);
  }

  result.sort().forEach(v => {
    let tempMinS = minS;
    let tempMaxS = maxS;
    tempMinS = tempMinS.replaceAll(v, "");
    tempMaxS = tempMaxS.replaceAll(v, "");
    // while (tempMinS.includes(v)) {
    //   tempMinS = tempMinS.replace(v, "");
    // }
    // while (tempMaxS.includes(v)) {
    //   tempMaxS = tempMaxS.replace(v, "");
    // }
    if (tempMaxS === '' && tempMinS === '') answer.push(v);
  });

  return answer.length ? answer.pop() : "";
};