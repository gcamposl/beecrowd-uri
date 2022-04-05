cod = 1
while cod != 2:
    if cod == 1:
        count = 0
        average = 0
        while count < 2:
            nota = float(input())
            if nota >= 0 and nota <= 10:
                average += nota
                count += 1
            else:
                print("nota invalida")
        average = float(average / 2)
        print(f"media = {average:.2f}")
    cod = int(input("novo calculo (1-sim 2-nao)\n"))
