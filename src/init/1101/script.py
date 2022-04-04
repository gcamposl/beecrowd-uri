n = input().split(" ")
a, b, = n
a = int(a)
b = int(b)
total = 0
while a > 0 and b > 0:
    if a <= b:
        for i in range(a, b+1):
            total += i
            print(i, end=" ")
    else:
        for j in range(b, a+1):
            total += j
            print(j, end=" ")
    print(f"Sum={total}")
    total = 0
    n = input().split(" ")
    a, b, = n
    a = int(a)
    b = int(b)
