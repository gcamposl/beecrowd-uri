vetor = []

for i in range(10):
    value = int(input())
    if value <= 0:
        value = 1
    vetor.insert(i, value)

for k in range(10):
    print(f"X[{k}] = {vetor[k]}")