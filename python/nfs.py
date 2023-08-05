# Turn It - NFS

t = int(input())
while(t > 0):
    u, v, a, s = list(map(int, input().split()))
    res = (u**2 - 2*a*s)
    v = v**2
    if(res > v):
        print("No")
    else:
        print("Yes")
    t -= 1