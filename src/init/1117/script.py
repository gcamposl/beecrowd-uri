nota = float(input())
count = 0
average = 0
while count < 2:
    if nota >= 0 and nota <= 10:
        count += 1
        average += nota
    else:
        print("nota invalida")
    nota = float(input())
average = float(average / 2)
print(f"media = {average:.2f}")