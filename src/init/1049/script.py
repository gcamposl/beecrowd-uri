tipo = str(input()) 
tipo2 = str(input()) 
tipo3 = str(input())

if 'vertebrado' == tipo:
    if 'ave' == tipo2:
        if 'carnivoro' == tipo3:
            print('aguia')
        else:
            print('pomba')
    else:
        if 'onivoro' == tipo3:
            print('homem')
        else:
            print('vaca')
else:
    if 'inseto' == tipo2:
        if 'hematofago' == tipo3:
            print('pulga')
        else:
            print('lagarta')
    else:
        if 'hematofago' == tipo3:
            print('sanguessuga')
        else:
            print('minhoca')
