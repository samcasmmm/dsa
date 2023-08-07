function climbStairs(n) {
  if (n <= 1) {
    return 1;
  }

  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

const totalWays = climbStairs(4);
console.log(totalWays);
