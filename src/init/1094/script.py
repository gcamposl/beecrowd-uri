n = int(input())
c = 0
r = 0
s = 0

for i in range(1, n + 1):
    testes, animal = input().split()
    testes = int(testes)
    if animal == 'C':
        c += testes
    elif animal == 'R':
        r+=testes
    else:
        s+=testes
tot = r + s + c
perc_c = (c / tot) * 100
perc_r = (r / tot) * 100
perc_s = (s / tot) * 100

print(f"Total: {tot} cobaias")
print(f"Total de coelhos: {c}")
print(f"Total de ratos: {r}")
print(f"Total de sapos: {s}")
print(f"Percentual de coelhos: {perc_c:.2f} %")
print(f"Percentual de ratos: {perc_r:.2f} %")
print(f"Percentual de sapos: {perc_s:.2f} %")