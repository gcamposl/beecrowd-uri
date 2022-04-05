x = int(input())
y = int(input())
soma = 0

if x < y:
    a = x
    b = y
elif x > y:
    a = y
    b = x

for i in range(a, b+1):
    if i % 13 != 0:
        soma += i
print(soma)
