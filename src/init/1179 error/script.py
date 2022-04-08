

pares = []
impares = []
x = 0
y = 0
tam = 0
for i in range(15):
    number = int(input())
    if number % 2 == 0:
        tam = len(pares)
        if tam == 5:
            x = 0
            pares = [] # ou pares.clear()
            pares.append(number)
            x += 1
        else:
            pares.append(number)
            x += 1
        print(f"par[{x}] = {pares[x]}")
    else:
        tam = len(impares)
        if tam == 5:
            y = 0
            impares = [] # ou impares.clear()
            impares.append(number)
            y += 1
        else:
            impares.append(number)
            y += 1
        print(f"impar[{y}] = {impares[x]}")
        
