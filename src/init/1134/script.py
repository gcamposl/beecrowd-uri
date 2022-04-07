number = int(input())
alcool = 0
gasolina = 0
diesel = 0

while number != 4:
    if number >=1 and number <= 3:
        if number == 1:
            alcool += 1
        elif number == 2:
            gasolina += 1
        else:
            diesel += 1
    number = int(input())
print("MUITO OBRIGADO")
print(f"Alcool: {alcool}")
print(f"Gasolina: {gasolina}")
print(f"Diesel: {diesel}")
