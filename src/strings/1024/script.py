from math import ceil
n = int(input())

for i in range(n):
    # passo 1
    msg = str(input())
    msg2 = ""
    for x in msg:
        if x.isalpha() == True:
            msg2 += chr(ord(x) + 3)
        else:
            msg2 += x
    # passo 2
    msg3 = msg2[::-1] #inverte a string
    # passo 3 
    s = ceil(len(msg3)/2)
    msg4 = msg3[-s:]
    msg5 = ""
    for y in msg4:
        msg5 += chr(ord(y) - 1)
    emsg = msg3.replace(msg4, msg5)
    print(emsg)
    