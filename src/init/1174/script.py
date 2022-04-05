A = [None] * 100

for i in range(len(A)):
    x = float(input())
    A[i] = x

for i in range(len(A)):
    if A[i] <= 10:
        print(f"A[{i}] = {A[i]}")