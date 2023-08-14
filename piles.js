// leetcode 1561

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a, b) => b - a);

  let bob = piles.length / 3;

  let result = 0;
  for (i = 1; i < piles.length - bob; i += 2) {
    result += piles[i];
  }
  return result;
}

// test cases
console.log(maxCoins([2, 4, 1, 2, 7, 8]));
// 9
console.log(maxCoins([2, 4, 5]));
// 4
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
// 18
