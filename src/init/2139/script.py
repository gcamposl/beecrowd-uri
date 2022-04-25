


months = [31,29,31,30,31,30,31,31,30,31,30,31]
days = 0
while 1:
    try:
        n = input().split(' ')
        month = int(n[0])
        day = int(n[1])

        if day == 25 and month == 12:
            print('E natal!')
        elif day == 24 and month == 12:
            print("E vespera de natal!")
        elif day > 25 and month == 12:
            print('Ja passou!')
        else:
            for i in range(month - 1, len(months)):
                days += months[i]
            
            days -= day
            days -= 6
            print(f"Faltam {days} dias para o natal!")
    except:
        break