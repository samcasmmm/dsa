# Maximum Length Even Subarray - MXEVNSUB
def max_sub(n):
    if sum(range(1, n+1)) % 2 == 0:
        return n
    else:
        return n-1

t = int(input())
for _ in range(t):
    n = int(input())
    print(max_sub(n))