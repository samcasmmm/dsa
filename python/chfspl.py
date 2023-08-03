# Chef and Spells - CHFSPL

def read_int():
    return int(input())

def read_int_list():
   return list(map(int, input().split()))

def solve():
   a,b,c = read_int_list()
   print((a+b+c) - min(a,b,c))
   
if __name__ == '__main__':
  for t in range(read_int()):
      solve()