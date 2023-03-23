var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      n--;
      flowerbed[i] = 1;
    }
  }
  return n <= 0; // n이 0보다 작거나 같으면 true, 아니면 false
};
