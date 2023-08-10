# Wordle - WORDLE

for _ in range(int(input())):
    s = str(input())
    t = str(input())
    m = []
    for i in range(len(s)):
        if s[i] == t[i]:
            m.append('G') 
        else:
            m.append('B')
    print(''.join(m)) 