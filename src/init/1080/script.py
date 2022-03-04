n = int(input())
maior = 0
for i in range(1,100):
    n = int(input())
    if(n > maior):
        maior = n
        pos = i + 1
print(maior)
print(pos)