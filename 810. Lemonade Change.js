var lemonadeChange = function (bills) {
  // 레모네이드의 가격은 $5, 고객들은 무조건 레모네이드 한 개만 구매함. 그들은 돈을 5,10,20$로 밖에 안줌
  // 근데 우리는 거스름 돈을 받았던 돈으로 밖에 못 줌. 모두에게 거슬러 줄 수 있으면 true, 아니면 false
  const collect = {};
  for (let bill of bills) {
    if (bill === 5) {
      if (!collect[bill]) collect[bill] = 1;
      else collect[bill]++;
    } else if (bill === 10) {
      if (collect["5"] > 0) {
        collect["5"]--;
        if (!collect[bill]) collect[bill] = 1;
        else collect[bill]++;
      } else return false;
    } else if (bill === 20) {
      if (collect["5"] >= 1 && collect["10"] >= 1) {
        collect["5"] -= 1;
        collect["10"] -= 1;
        if (!collect[bill]) collect[bill] = 1;
        else collect[bill]++;
      } else if (collect["5"] >= 3) {
        collect["5"] -= 3;
        if (!collect[bill]) collect[bill] = 1;
        else collect[bill]++;
      } else return false;
    }
  }
  return true;
};
