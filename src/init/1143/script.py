# solução ruim
n = int(input())

if n > 1 and n < 1000:
    i = 0
    v = 1
    while i < n:
        for j in range(3):
            print(v, end=' ')
            v = v * (i + 1)
        i += 1
        v = i + 1
        print('\n')

# solução melhor

n = int(input())

for i in range(1, n + 1):
    print('%d %d %d' % (i, i**2, i**3))
