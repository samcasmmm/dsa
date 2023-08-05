# Chef and Stock Prices - CSTOCK


def read_int_list():
   return list(map(int, input().split()))

for _ in range(int(input())):
   s,a,b,c = read_int_list()
   s*=(1+c/100)
   if s>=a and s<=b:
      print("Yes")
   else:
      print("No")    