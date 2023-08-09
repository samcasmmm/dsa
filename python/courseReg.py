# Course Registration - COURSEREG

for _ in range(int(input())):
   n,m,k = list(map(int,input().split()))
   print("Yes") if ((n+k) <= m) else print('No')