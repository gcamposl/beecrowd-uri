n = int(input())
j = 0

for i in range(n):
    x = input().split()
    a, b, = x
    a = int(a)
    b = int(b)
    l = 0
    if a < b:
        for j in range(int(a)+1, int(b)):
            if j % 2 != 0:
                l += j
    if a > b:
        for j in range(int(b)+1, int(a)):
            if j % 2 != 0:
                l += j
    if a == b:
        s = 0
    print(l)
