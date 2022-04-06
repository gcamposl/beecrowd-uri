n = int(input())

def fib(n):
    vet = [0, 1]
    if n > 1:
        for i in range(2,n+1):
            f = vet[i - 1] + vet[i - 2]
            vet.append(f)
    return vet[n]

for i in range(n):
    pos = int(input())
    f = fib(pos)
    print(f"Fib({pos}) = {f}")