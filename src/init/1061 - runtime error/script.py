stri, datai, = input().split()
hi, mi, si, = input().split(" : ")
strf, dataf, = input().split()
hf, mf, sf, = input().split(" : ")

datai = int(datai)
hi = int(hi)
mi = int(mi)
si = int(si)

dataf = int(dataf)
hf = int(hf)
mf = int(mf)
sf = int(sf)

dias = dataf - datai

horas = hf - hi
if horas < 0:
    horas += 24
    dias = dias - 1

minutos = mf - mi
if minutos < 0:
    minutos += 60
    horas = horas - 1

segundos = sf - si
if segundos < 0:
    segundos += 60
    minutos = minutos - 1

if(dias <= 0):
	dias = 0

print(f"{dias} dia(s)")
print(f"{horas} hora(s)")
print(f"{minutos} minuto(s)")
print(f"{segundos} segundo(s)")
