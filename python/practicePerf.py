# Practice makes us perfect -  practisePef

def solve():
    count = 0
    p = list(map(int,input().split()))
    for i in range(len(p)):
        if p[i] >= 10:
            count += 1
    print(count)
    
solve()