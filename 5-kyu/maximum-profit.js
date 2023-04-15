// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 
function maxProfit(prices) {
    let buy = prices[0];
    prices[0] = 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
            prices[i] = 0;
        } else {
            profit = Math.max(prices[i] - buy, profit);
        }
    }
    return profit;
}
