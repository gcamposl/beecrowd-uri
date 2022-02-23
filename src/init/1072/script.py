number = int(input())
inside = outside = 0

for i in range(number):
    x = int(input())
    if(x >= 10 and x <= 20):
        inside += 1
    else:
        outside += 1
print('{} in'.format(inside))
print('{} out'.format(outside))