n = int(input())

for i in range(n):
    number = int(input())
    if number == 0:
        print("NULL")
    elif number % 2 == 0:
        print("EVEN", end = " ")
    else:
        print("ODD", end = " ")
    if number > 0:
        print("POSITIVE")
    elif number < 0:
        print("NEGATIVE")
        