corvo = str(input())
count = 0
eyes = 0
while count < 3:
    if corvo == 'caw caw':
        print(eyes)
        eyes = 0
        count += 1
    elif corvo == '*--':
        eyes += 4
    elif corvo == '--*':
        eyes += 1
    corvo = input()
       