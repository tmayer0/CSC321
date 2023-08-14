// leetcode 322

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let states = [amount];
    let visited = new Set(states);
    let numCoins = 0;

    if (amount == 0) {
        return 0;
    }

    while (states.length > 0) {
        let size = states.length;
        numCoins++;
        
        for (let i = 0; i < size; i++) {
            let currentState = states.shift();

            for (let coin of coins) {
                let newState = currentState - coin;

                if (newState == 0) {
                    return numCoins;
                } else if (newState > 0 && !visited.has(newState)) {
                    visited.add(newState);
                    states.push(newState);
                }
            }
        }
    }
    return -1;
}

console.log(coinChange([1, 2, 5], 11));
// 3
console.log(coinChange([2], 3));
// -1
console.log(coinChange([1], 0));
// 0
