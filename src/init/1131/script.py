cod = 1
inter = 0
gremio = 0
grenais = 0
empate = 0
while cod != 2:
    if cod == 1:
        a, b, = map(int, input().split(" "))
        if a > b:
            inter += 1
        elif b > a:
            gremio += 1
        else:
            empate += 1
        grenais += 1
    cod = int(input("Novo grenal (1-sim 2-nao)\n"))

print(f"{grenais} grenais")
print(f"Inter:{inter}")
print(f"Gremio:{gremio}")
print(f"Empates:{empate}")
if inter > gremio:
    print("Inter venceu mais")
elif inter < gremio:
    print("Gremio venceu mais")
else:
    print("Nao houve vencedor")