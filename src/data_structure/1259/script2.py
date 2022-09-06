quant = int(input())

pair = []
odd = []

for i in range(quant):
    number = int(input())
    if number % 2 == 0:
        pair.append(number)
    else:
        odd.append(number)

pair.sort()
odd.sort(reverse=True)

for p in pair:
    print(p)
for o in odd:
    print(o)
