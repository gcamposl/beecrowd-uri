N = [0,0,0,0,0,0,0,0,0,0]

x = int(input())

for i in range(len(N)):
    N[i] = x
    x = x * 2

for i in range(len(N)):
    print(f"N[{i}] = {N[i]}")