# Two Dishes  - TWODISHES

def read_int():
    return int(input())

def read_int_list():
   return list(map(int, input().split()))


def solve():
   n, a, b, c = read_int_list()
   d=a+c
   if n <= d and n <= b:
      print('YES')
   else:
      print('NO')


if __name__ == '__main__':
   for t in range(read_int()):
      solve()