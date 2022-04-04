n = int(input())

for i in range(n):
    x, y, = map(int, input().split())
    result = 0
    if y == 0:
        print("divisao impossivel")
    else:
        result = float(x/y)
        print(f"{result:.1f}")