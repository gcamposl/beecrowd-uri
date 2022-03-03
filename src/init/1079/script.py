n = int(input())

cont = 0

while(cont < n):
        a,b,c = map(float, input().split())
        average = (a*2 + b*3 + c*5) / 10
        print("%.1f"%average)
        cont += 1