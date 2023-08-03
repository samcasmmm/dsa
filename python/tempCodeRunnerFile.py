
def read_int():
    return int(input())

def read_int_list():
   return list(map(int, input().split()))


def solve(t):
   while(t>0):
      n,s = read_int_list()
      a = 0
      b = s
      while(not(b<= n)):
         a += 1
         a -= 1
      print(abs(a - b))
      t -= 1


if __name__ == '__main__':
  for t in range(read_int()):
      solve(t)