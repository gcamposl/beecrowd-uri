vet = [int(input()) for i in range(20)]

##vet.reverse()
x = 0
y = len(vet) - 1
aux = int(x)

while x < y:
    aux = vet[x]
    vet[x] = vet[y]
    vet[y] = aux
    x += 1
    y -= 1


for i in range(len(vet)):
    print(f"N[{i}] = {vet[i]}")
